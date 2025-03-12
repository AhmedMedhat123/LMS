<?php

namespace Tests\Feature;

use App\Models\Category;
use App\Models\Course;
use App\Models\Course_goal;
use App\Models\SubCategory;
use App\Models\User;
use Illuminate\Http\UploadedFile;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Foundation\Testing\WithFaker;
use Illuminate\Support\Facades\Storage;
use Tests\TestCase;

class CourseControllerTest extends TestCase
{
    use RefreshDatabase;

    private User $instructor;

    protected function setUp(): void
    {
        parent::setUp();
        $this->instructor = $this->createUser(role: 'instructor');
    }

    private function createUser(string $role = 'user'): User
    {
        return User::factory()->create([
            'role' => $role
        ]);
    }

    public function test_all_courses_page_renders_correctly()
    {
        Course::factory()->count(3)->create(['instructor_id' => $this->instructor->id]);

        $response = $this->actingAs($this->instructor)->get(route('instructor.course.all'));

        $response->assertStatus(200);

        $response->assertInertia(function ($page) {
            $page->component('Instructor/Courses/AllCourses')
                ->has('courses', 3);
        });

    }

    public function test_add_course_page_renders_correctly()
    {
        $response = $this->actingAs($this->instructor)->get(route('instructor.course.add'));

        $response->assertStatus(200);

        $response->assertInertia(function ($page) {
            $page->component('Instructor/Courses/AddCourse');
        });
    }

    public function test_edit_course_page_renders_correctly()
    {
        $course = Course::factory()->create(['instructor_id' => $this->instructor->id]);

        $response = $this->actingAs($this->instructor)->get(route('instructor.course.edit', $course->id));

        $response->assertStatus(200);

        $response->assertInertia(function ($page) use ($course) {
            $page->component('Instructor/Courses/EditCourse')
                ->where('course.id', $course->id);
        });
    }

    public function test_stores_a_new_course()
    {
            // Storage::fake('public'); // Fake storage for file uploads


        // // Mock file uploads
        // $image = UploadedFile::fake()->image('course.jpg');
        // $video = UploadedFile::fake()->create('video.mp4', 1024);

        $data = [
            'category_id' => Category::factory()->create()->id,
            'subcategory_id' => SubCategory::factory()->create()->id,
            'course_title' => 'Test Course Title',
            'course_name' => 'Test Course Name',
            'description' => 'This is a test course description.',
            'label' => 'begginer',
            'duration' => '5 hours',
            'resources' => 'PDF, Videos',
            'certificate' => 'yes',
            'selling_price' => 100,
            'discount_price' => 80,
            'prerequisites' => 'Basic PHP knowledge',
            'bestseller' => false,
            'featured' => true,
            'highestrated' => false,
            // 'course_image' => $image,
            // 'video' => $video,
            'goals' => ['Learn Laravel', 'Build an LMS'],
        ];

        $response = $this->actingAs($this->instructor)->post(route('instructor.course.add.store'), $data);

        $response->assertStatus(302);

        $response->assertRedirect(route('instructor.course.all'));

        // Assert course is stored in database
        $this->assertDatabaseHas('courses', [
            'course_name' => 'Test Course Name',
            'instructor_id' => $this->instructor->id,
        ]);

        // Assert course goals are stored
        $course = Course::where('course_name', 'Test Course Name')->first();
        $this->assertCount(2, Course_goal::where('course_id', $course->id)->get());

        // // Assert file uploads
        // Storage::disk('public')->assertExists('upload/course/image/' . $image->hashName());
        // Storage::disk('public')->assertExists('upload/course/video/' . $video->hashName());

    }

    public function test_update_a_course()
    {
        $course = Course::factory()->create([
            'instructor_id' => $this->instructor->id,

        ]);

        $data = [
            'course_id' => $course->id,
            'category_id' => Category::factory()->create()->id,
            'subcategory_id' => SubCategory::factory()->create()->id,
            'course_title' => 'Test Course Title',
            'course_name' => 'Updated Course Name',
            'description' => 'This is a test course description.',
            'label' => 'begginer',
            'duration' => '5 hours',
            'resources' => 'PDF, Videos',
            'certificate' => 'yes',
            'selling_price' => 100,
            'discount_price' => 80,
            'prerequisites' => 'Basic PHP knowledge',
            'bestseller' => false,
            'featured' => true,
            'highestrated' => false,
            // 'course_image' => $image,
            // 'video' => $video,
            'goals' => ['Learn Laravel', 'Build an LMS'],
        ];

        $response = $this->actingAs($this->instructor)->post(route('instructor.course.update'), $data);

        $response->assertStatus(302);

        $response->assertRedirect(route('instructor.course.all'));

        // Assert course is updated in database
        $this->assertDatabaseHas('courses', [
            'id' => $course->id,
            'course_name' => 'Updated Course Name',
            'instructor_id' => $this->instructor->id,
        ]);

        // Assert course goals are updated
        $this->assertCount(2, Course_goal::where('course_id', $course->id)->get());
    }

    public function test_deletes_a_course()
    {
        $course = Course::factory()->create([
            'instructor_id' => $this->instructor->id,
        ]);

        // Storage::fake('public');
        // Storage::put('upload/course/image/sample.jpg', 'test');
        // Storage::put('upload/course/video/sample.mp4', 'test');

        $response = $this->actingAs($this->instructor)->get(route('instructor.course.delete', $course->id));

        $response->assertStatus(302);

        $response->assertRedirect(route('instructor.course.all'));

        $this->assertDatabaseMissing('courses', [
            'id' => $course->id,
        ]);

        // Storage::disk('public')->assertMissing('upload/course/image/sample.jpg');
        // Storage::disk('public')->assertMissing('upload/course/video/sample.mp4');
    }

}
