<?php

namespace App\Http\Controllers;

use App\Models\Category;
use App\Models\Course;
use App\Models\Review;
use Illuminate\Http\Request;
use GuzzleHttp\Client;
use Illuminate\Support\Facades\DB;
use Inertia\Inertia;
use Illuminate\Support\Str;

class ChatbotController extends Controller
{
    public function ViewChatbot()
    {
        return inertia('Frontend/Chatbot');
    }

    public function AskChatbot(Request $request)
    {
        $client = new Client();
        $userMessage = strtolower($request->input('message'));
        $aiResponse = '';

        try {
            // Check if the user query is related to the LMS
            $queryResult = $this->processDatabaseQuery($userMessage);
            if ($queryResult) {
                $aiResponse = $queryResult;
            } else {
                // If it's not database-related, send it to the AI model
                $response = $client->post(env('DEEPSEEK_API_URL'), [
                    'headers' => [
                        'Authorization' => 'Bearer ' . env('DEEPSEEK_API_KEY'),
                        'Content-Type'  => 'application/json',
                    ],
                    'json' => [
                        'model' => 'deepseek/deepseek-chat-v3-0324:free',
                        'messages' => [
                            ['role' => 'system', 'content' => 'You are a helpful assistant. Answer questions based on the given data.'],
                            ['role' => 'user', 'content' => $userMessage],
                        ],
                        'temperature' => 0.7,
                    ],
                ]);

                // Decode the AI response
                $responseData = json_decode($response->getBody(), true);
                $aiResponse = $responseData['choices'][0]['message']['content'] ?? 'No response received.';
            }

        } catch (\Exception $e) {
            $aiResponse = "Sorry, I couldn't process your request.";
            // $aiResponse = $e->getMessage();
        }

        return response()->json(['aiResponse' => $aiResponse]);
    }

    private function processDatabaseQuery($userMessage)
    {
        $userMessage = strtolower($userMessage);

        // Course count detection
        if (preg_match('/\b(how many|number of|total)\s+(courses|available courses)\b/', $userMessage)) {
            $courseCount = DB::table('courses')->count();
            return "There are currently {$courseCount} courses available.";
        }

        // Highest-rated courses detection
        if (preg_match('/\b(highest-rated|highest rated|top-rated|top rated|best)\s+(courses|course)\b/', $userMessage)) {
            $courses = Course::select('courses.id', 'courses.course_name')
                ->join('reviews', 'courses.id', '=', 'reviews.course_id')
                ->selectRaw('AVG(reviews.rating) as avg_rating')
                ->groupBy('courses.id', 'courses.course_name')
                ->orderByDesc('avg_rating')
                ->limit(5)
                ->get();
            return $this->formatTopCourses($courses, "highest-rated");
        }

        // Categories detection
        if (preg_match('/\b(course\s+categories|available\s+categories|categories)\b/', $userMessage)) {

            $categories = Category::with('subcategories')->get();

            return $this->formatCategoryList($categories);
        }

        // Cheapest or most expensive courses detection
        if (preg_match('/\b(cheapest|lowest price)\s+(courses|course)\b/', $userMessage)) {
            $courses = Course::orderBy(DB::raw('IF(discount_price IS NULL, selling_price, discount_price)'), 'asc')
            ->limit(3)
            ->get(['course_name', 'selling_price', 'discount_price']);

            return $this->formatCourseList($courses, "cheapest");
        }

        if (preg_match('/\b(expensive|highest price|most costly)\s+(courses|course)\b/', $userMessage)) {
            $courses = Course::orderBy(DB::raw('IF(discount_price IS NULL, selling_price, discount_price)'), 'desc')
            ->limit(3)
            ->get(['course_name', 'selling_price', 'discount_price']);

            return $this->formatCourseList($courses, "most expensive");
        }

        return null; // If no relevant keyword was found
    }

    private function formatTopCourses($courses, $type)
    {
        if ($courses->isEmpty()) {
            return "❌ No courses found for {$type}.";
        }

        $response = "### 🏆 Top {$type} Courses:\n\n";

        foreach ($courses as $index => $course) {
            $response .= "**" . ($index + 1) . ". {$course->course_name}**\n";
            $response .= "   ⭐ Rating: " . number_format($course->avg_rating, 1) . "\n\n";
        }

        return $response;
    }

    private function formatCategoryList($categories)
    {
        if ($categories->isEmpty()) {
            return "❌ No course categories found.";
        }

        $response = "📚 **Available Categories:**\n\n";
        foreach ($categories as $index => $category) {
            $response .= "**" . ($index + 1) . ". {$category->category_name}**\n";

            foreach ($category->subcategories as $sub) {
                $response .= "&nbsp&nbsp • {$sub->subcategory_name}\n";
            }
        }

        return $response;
    }

    private function formatCourseList($courses, $type)
    {
        if ($courses->isEmpty()) {
            return "No courses found for {$type}.";
        }

        $response = "### The {$type} courses are:\n\n";
        foreach ($courses as $index => $course) {
            $response .= "**" . ($index + 1) . ". {$course->course_name}**\n\n";
        }

        return $response;
    }

    private function formatReviewList($reviews)
    {
        if ($reviews->isEmpty()) {
            return "❌ No reviews available for this course.";
        }

        $response = "### 📝 Course Reviews:\n\n";

        foreach ($reviews as $index => $review) {
            $response .= "**Review #" . ($index + 1) . "**\n";
            $response .= "⭐ Rating: " . number_format($review->rating, 1) . "\n";
            $response .= "📝 Review: " . $review->review_text . "\n\n";
        }

        return $response;
    }
}
