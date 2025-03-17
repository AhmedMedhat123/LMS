<?php

namespace Tests\Feature;

use App\Models\Category;
use App\Models\Course;
use App\Models\Course_goal;
use App\Models\CourseLecture;
use App\Models\CourseSection;
use App\Models\SubCategory;
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

        $response = $this->get(route('course.details', [
            'id' => $course->id,
            'slug' => $course->course_name_slug
        ]));

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

    public function test_category_courses_page_renders_correctly()
    {
        $category = Category::factory()->create();
        $user = User::factory()->create();

        Course::factory()->count(3)->create([
            'category_id' => $category->id,
            'status' => '1',
            'instructor_id' => $user->id,
        ]);

        $response = $this->get(route('category.all', [
            'id' => $category->id,
            'slug' => $category->category_slug,
        ]));

        $response->assertStatus(200);

        $response->assertInertia(fn (AssertableInertia $page) =>
            $page->component('Frontend/Category/AllCategory')
                ->has('courses.data', 3)
                ->has('category', fn (AssertableInertia $categoryData) =>
                    $categoryData->where('id', $category->id)
                                 ->etc()
                )
        );
    }

    public function test_subcategory_courses_page_renders_correctly()
    {
        $category = Category::factory()->create();
        $subcategory = SubCategory::factory()->create([
            'category_id' => $category->id,
        ]);

        $user = User::factory()->create();

        Course::factory()->count(2)->create([
            'category_id' => $category->id,
            'subcategory_id' => $subcategory->id,
            'status' => '1',
            'instructor_id' => $user->id,
        ]);

        $response = $this->get(route('subcategory.all', [
            'id' => $subcategory->id,
            'slug' => $subcategory->subcategory_slug,
        ]));

        $response->assertStatus(200);

        $response->assertInertia(fn (AssertableInertia $page) =>
            $page->component('Frontend/Category/AllSubcategory')
                ->has('courses.data', 2)
                ->has('subcategory', fn (AssertableInertia $subcategoryData) =>
                    $subcategoryData->where('id', $subcategory->id)
                                    ->etc()
                )
        );
    }
}
