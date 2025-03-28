<?php

namespace Tests\Feature;

use App\Http\Controllers\InstructorController;
use App\Models\Course;
use App\Models\User;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Foundation\Testing\WithFaker;
use Tests\TestCase;

class ReviewControllerTest extends TestCase
{
    use RefreshDatabase;

    public function test_user_can_store_a_review()
    {

        $user = User::factory()->create();
        $instructor = User::factory()->create();
        $course = Course::factory()->create();


        $this->actingAs($user);

        $reviewData = [
            'courseId' => $course->id,
            'userId' => $user->id,
            'instructorId' => $instructor->id,
            'comment' => 'Great course!',
            'rating' => 5,
        ];

        $response = $this->post(route('review.store'), $reviewData);

        $this->assertDatabaseHas('reviews', [
            'course_id' => $course->id,
            'user_id' => $user->id,
            'instructor_id' => $instructor->id,
            'comment' => 'Great course!',
            'rating' => 5,
            'status' => 1,
        ]);

        $response->assertRedirect()
            ->assertSessionHas([
                'message' => 'Review Submitted Successfully',
                'alertType' => 'success'
            ]);
    }

    public function test_store_review_requires_valid_data()
    {
        $user = User::factory()->create();
        $this->actingAs($user);

        $response = $this->post(route('review.store'), []);

        $response->assertSessionHasErrors(['rating', 'comment']);
    }
}
