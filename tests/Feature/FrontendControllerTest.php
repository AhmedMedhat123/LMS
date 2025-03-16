<?php

namespace Tests\Feature;

use App\Models\Course;
use App\Models\Course_goal;
use App\Models\CourseLecture;
use App\Models\CourseSection;
use App\Models\User;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Foundation\Testing\WithFaker;
use Inertia\Testing\AssertableInertia;
use Tests\TestCase;

class FrontendControllerTest extends TestCase
{
    use RefreshDatabase;

    public function test_all_courses_details_page_renders_correctly()
    {

        $user = User::factory()->create();

        $course = Course::factory()->create([
            'instructor_id' => $user->id,
        ]);

        Course_goal::factory()->count(2)->create(['course_id' => $course->id]);

        CourseLecture::factory()->count(3)->create(['course_id' => $course->id]);

        CourseSection::factory()->count(2)->create(['course_id' => $course->id]);

        $response = $this->get(route('course.details', ['id' => $course->id, 'slug' => $course->course_name_slug]));

        $response->assertStatus(200);

        $response->assertInertia(fn (AssertableInertia $page) =>
        $page->component('Frontend/CourseDetails')
            ->has('course', fn (AssertableInertia $courseData) =>
                $courseData->where('id', $course->id)
                           ->where('instructor_id', $user->id)
                           ->etc()
            )
            ->has('goals', 2)
            ->has('lectures', 3)
            ->has('sections', 2)
        );

        $response->assertStatus(200);
    }
}
