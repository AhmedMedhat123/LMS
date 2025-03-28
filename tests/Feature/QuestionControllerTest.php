<?php

namespace Tests\Feature;

use App\Models\Course;
use App\Models\Question;
use App\Models\User;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Foundation\Testing\WithFaker;
use Tests\TestCase;

class QuestionControllerTest extends TestCase
{
    use RefreshDatabase;

    private User $user;
    private User $instructor;
    private Course $course;
    private Question $question;

    protected function setUp(): void
    {
        parent::setUp();
        $this->user = $this->createUser(role: 'user');
        $this->instructor = $this->createUser(role: 'instructor');
        $this->course = Course::factory()->create();
        $this->question = Question::factory()->create([
            'course_id' => $this->course->id,
            'user_id' => $this->user->id,
            'instructor_id' => $this->instructor->id,
        ]);
    }

    private function createUser(string $role = 'user'): User
    {
        return User::factory()->create([
            'role' => $role
        ]);
    }

    public function test_user_can_add_a_question()
    {
        $response = $this->actingAs($this->user)->post(route('user.question.add'), [
            'course_id' => $this->course->id,
            'instructor_id' => $this->instructor->id,
            'questionSubject' => 'Test Subject',
            'questionContent' => 'Test Content',
        ]);

        $response->assertRedirect()->assertSessionHas('message', 'Question Send Successfully');

        $this->assertDatabaseHas('questions', [
            'course_id' => $this->course->id,
            'user_id' => $this->user->id,
            'instructor_id' => $this->instructor->id,
            'subject' => 'Test Subject',
            'question' => 'Test Content',
        ]);
    }

    public function test_user_can_reply_to_a_question()
    {
        $response = $this->actingAs($this->user)->post(route('user.question.reply'), [
            'parent_id' => $this->question->id,
            'course_id' => $this->question->course_id,
            'instructor_id' => $this->question->instructor_id,
            'questionSubject' => 'Reply Subject',
            'questionContent' => 'Reply Content',
        ]);

        $response->assertRedirect()->assertSessionHas('message', 'Reply Added Successfully');

        $this->assertDatabaseHas('questions', [
            'parent_id' => $this->question->id,
            'course_id' => $this->question->course_id,
            'instructor_id' => $this->question->instructor_id,
            'user_id' => $this->user->id,
            'subject' => 'Reply Subject',
            'question' => 'Reply Content',
        ]);
    }
}
