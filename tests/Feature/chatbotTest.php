<?php

namespace Tests\Feature;

use App\Models\Category;
use App\Models\Course;
use App\Models\Review;
use App\Models\SubCategory;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Foundation\Testing\WithFaker;
use Illuminate\Support\Facades\Http;
use Tests\TestCase;

class chatbotTest extends TestCase
{
    use RefreshDatabase;

    public function test_renders_chatbot_page_correctly()
    {
        $response = $this->get(route('chatbot'));

        $response->assertStatus(200);
        $response->assertInertia(fn ($page) => $page->component('Frontend/Chatbot'));
    }

    public function test_returns_course_count()
    {
        Course::factory()->count(10)->create();

        $response = $this->postJson(route('chatbot.ask'), [
            'message' => 'How many courses are available?'
        ]);

        $response->assertStatus(200);
        $response->assertJson(["aiResponse" => "There are currently 10 courses available."]);
    }

    public function test_returns_highest_rated_courses()
    {
        $course = Course::factory()->create(['course_name' => 'Test Course']);
        Review::factory()->create(['course_id' => $course->id, 'rating' => 5]);

        $response = $this->postJson(route('chatbot.ask'), [
            'message' => 'What are the highest-rated courses?'
        ]);

        $response->assertStatus(200);

        $response->assertSeeText("Test Course");
        $response->assertSeeText("Rating: 5.0");
    }

    public function test_returns_categories()
    {
        $category = Category::factory()->create(['category_name' => 'development']);

        SubCategory::factory()->create([
            'category_id' => $category->id,
            'subcategory_name' => 'mobile development',
        ]);

        $response = $this->postJson(route('chatbot.ask'), [
            'message' => 'What are the available categories'
        ]);

        $response->assertStatus(200);

        $response->assertSeeText("development");
        $response->assertSeeText("mobile development");
    }

    // public function test_returns_most_expensive_courses()
    // {
    //     Course::factory()->create([
    //         'course_name' => 'course1',
    //         'selling_price' => 400
    //     ]);
    //     Course::factory()->create([
    //         'course_name' => 'course2',
    //         'selling_price' => 300
    //     ]);
    //     Course::factory()->create([
    //         'course_name' => 'course3',
    //         'selling_price' => 200
    //     ]);
    //     Course::factory()->create([
    //         'course_name' => 'course4',
    //         'selling_price' => 100
    //     ]);

    //     $response = $this->postJson(route('chatbot.ask'), [
    //         'message' => 'What are the most expensive courses?'
    //     ]);


    //     $response->assertStatus(200);

    //     $response->assertSee('The most expensive courses are:');
    //     $response->assertSee('course1');
    //     $response->assertSee('course2');
    //     $response->assertSee('course3');
    //     $response->assertDontSee('course4');
    // }

    public function test_calls_external_ai_api()
    {
        Http::fake([
            env('DEEPSEEK_API_URL') => Http::response([
                'choices' => [['message' => ['content' => 'This is an AI response.']]]
            ], 200)
        ]);

        $response = $this->postJson(route('chatbot.ask'), [
            'message' => 'Tell me a fun fact about AI'
        ]);

        $response->assertStatus(200);
    }
}
