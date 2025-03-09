<?php

namespace Tests\Feature\Instructor;

use App\Models\User;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Foundation\Testing\WithFaker;
use Tests\TestCase;

class InstructorControllerTest extends TestCase
{
    use RefreshDatabase;

    private User $instructor;
    private User $admin;

    protected function setUp(): void
    {
        parent::setUp();
        $this->instructor = $this->createUser(role: 'instructor');
        $this->admin = $this->createUser(role: 'admin');
    }

    private function createUser(string $role = 'user'): User
    {
        return User::factory()->create([
            'role' => $role
        ]);
    }

    public function test_displays_all_instructors_page()
    {
        User::factory()->create(['role' => 'instructor']);

        $response = $this->actingAs($this->admin)->get(route('admin.instructor.all'));

        $response->assertStatus(200)
        ->assertInertia(function ($page) {
            $page->component('Admin/Backend/Instructor/AllInstructor');
        });
    }

    public function test_updates_instructor_status()
    {
        $instructor = User::factory()->create([
            'role' => 'instructor',
            'status' => '0',
        ]);

        $response = $this->actingAs($this->admin)->post(route('admin.instructor.update.status', $instructor->id), [
            'status' => '1',
        ]);

        $response->assertRedirect()
                 ->assertSessionHas([
                     'message' => 'Instructor Status Updated Successfully',
                     'alertType' => 'success',
                 ]);

        $this->assertDatabaseHas('users', [
            'id' => $instructor->id,
            'status' => '1',
        ]);
    }
}
