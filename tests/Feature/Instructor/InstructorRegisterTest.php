<?php

namespace Tests\Feature\Instructor;

use App\Models\User;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Foundation\Testing\WithFaker;
use Tests\TestCase;

class InstructorRegisterTest extends TestCase
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

    public function test_displays_instructor_register_page()
    {
        $response = $this->actingAs($this->instructor)->get(route('instructor.register'));

        $response->assertStatus(200)->assertInertia(function ($page) {
            $page->component('Frontend/InstructorRegister');
        });
    }

    public function test_registers_a_new_instructor()
    {
        $data = [
            'name' => 'test',
            'username' => 'test',
            'email' => 'test@example.com',
            'phone' => '0123456789',
            'address' => '123 Main St',
            'password' => 'password123',
            'password_confirmation' => 'password123',
        ];

        $response = $this->actingAs($this->instructor)->post(route('instructor.register.store'), $data);

        $response->assertRedirect()
                 ->assertSessionHas([
                     'message' => 'Instructor Registed Successfully',
                     'alertType' => 'success',
                 ]);

        $this->assertDatabaseHas('users', [
            'name' => 'test',
            'username' => 'test',
            'email' => 'test@example.com',
            'phone' => '0123456789',
            'address' => '123 Main St',
            'role' => 'instructor',
            'status' => '0',
        ]);
    }
}
