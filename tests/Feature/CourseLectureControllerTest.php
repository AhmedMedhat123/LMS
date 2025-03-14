<?php

namespace Tests\Feature;

use App\Models\Course;
use App\Models\CourseLecture;
use App\Models\CourseSection;
use App\Models\User;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Foundation\Testing\WithFaker;
use Tests\TestCase;

class CourseLectureControllerTest extends TestCase
{
    use RefreshDatabase;

    private User $instructor;
    private Course $course;
    private CourseSection $section;
    private CourseLecture $lecture;

    protected function setUp(): void
    {
        parent::setUp();
        $this->instructor = $this->createUser(role: 'instructor');
        $this->course = Course::factory()->create();
        $this->section = CourseSection::factory()->create(['course_id' => $this->course->id]);
        $this->lecture = CourseLecture::factory()->create(['course_id' => $this->course->id, 'section_id' => $this->section->id]);
    }

    private function createUser(string $role = 'user'): User
    {
        return User::factory()->create([
            'role' => $role
        ]);
    }

    public function test_displays_all_course_lectures()
    {


        $response = $this->actingAs($this->instructor)->get(route('instructor.course.lecture.all', $this->course->id));

        $response->assertStatus(200)
                 ->assertInertia(fn ($assert) => $assert
                     ->component('Instructor/Section/AllCourseLecture')
                     ->has('course')
                     ->has('sections')
                 );
    }

    public function test_displays_add_course_lecture_page()
    {

        $response = $this->actingAs($this->instructor)->get(route('instructor.course.lecture.add', [$this->course->id, $this->section->id]));

        $response->assertStatus(200)
                 ->assertInertia(fn ($assert) => $assert
                     ->component('Instructor/Section/AddCourseLecture')
                     ->has('course')
                     ->has('section')
                 );
    }

    public function test_displays_edit_course_lecture_page()
    {


        $response = $this->actingAs($this->instructor)->get(route('instructor.course.lecture.edit', [$this->course->id, $this->section->id, $this->lecture->id]));

        $response->assertStatus(200)
                 ->assertInertia(fn ($assert) => $assert
                     ->component('Instructor/Section/EditCourseLecture')
                     ->has('course')
                     ->has('section')
                     ->has('lecture')
                 );
    }

    public function test_can_store_a_new_course_lecture()
    {


        $data = [
            'course_id' => $this->course->id,
            'section_id' => $this->section->id,
            'lecture_title' => 'Test Lecture',
            'url' => 'https://example.com',
            'content' => 'Lecture content.',
        ];

        $response = $this->actingAs($this->instructor)->post(route('instructor.course.lecture.add.store'), $data);

        $this->assertDatabaseHas('course_lectures', ['lecture_title' => 'Test Lecture']);

        $response->assertRedirect(route('instructor.course.lecture.all', $this->course->id))
                 ->assertSessionHas(['message' => 'Lecture Saved Successfully']);
    }

    public function test_can_update_a_course_lecture()
    {

        $updateData = [
            'id' => $this->lecture->id,
            'lecture_title' => 'Updated Lecture Title',
            'url' => 'https://updated-example.com',
            'content' => 'Updated content.',
            'course_id' => $this->course->id,
        ];

        $response = $this->actingAs($this->instructor)->post(route('instructor.course.lecture.update'), $updateData);

        $this->assertDatabaseHas('course_lectures', ['lecture_title' => 'Updated Lecture Title']);

        $response->assertRedirect(route('instructor.course.lecture.all', $this->course->id))
                 ->assertSessionHas(['message' => 'Lecture Updated Successfully']);
    }

    public function test_can_delete_a_course_lecture()
    {

        $response = $this->actingAs($this->instructor)->get(route('instructor.course.lecture.delete', $this->lecture->id));

        $this->assertDatabaseMissing('course_lectures', ['id' => $this->lecture->id]);

        $response->assertRedirect()
                 ->assertSessionHas(['message' => 'Lecture Deleted Successfully']);
    }
}
