<?php

namespace Tests\Feature\Instructor;

use App\Models\User;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Foundation\Testing\WithFaker;
use Tests\TestCase;

class InstructorLogoutTest extends TestCase
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

    /**
     * A basic feature test example.
     */
    public function test_instructor_logout(): void
    {
        $response = $this->actingAs($this->instructor)->post(route('instructor.logout'));

        $this->assertGuest();

        $response->assertRedirect(route('login'));
    }
}
