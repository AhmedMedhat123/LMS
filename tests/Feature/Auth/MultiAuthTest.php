<?php

namespace Tests\Feature\Auth;

use App\Models\User;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Foundation\Testing\WithFaker;
use Tests\TestCase;

class MultiAuthTest extends TestCase
{
    use RefreshDatabase;

    private User $user;
    private User $admin;
    private User $instructor;

    protected function setUp(): void
    {
        parent::setUp();

        $this->user = $this->createUser();
        $this->admin = $this->createUser(role: 'admin');
        $this->instructor = $this->createUser(role: 'instructor');
    }

    private function createUser(string $role = 'user'): User
    {
        return User::factory()->create([
            'role' => $role
        ]);
    }

    public function test_allows_admin_to_access_admin_dashboard()
    {
        $response = $this->actingAs($this->admin)->get(route('admin.dashboard'));

        $response->assertStatus(200);

        $response->assertInertia(
            fn($page) => $page
                ->component('Admin/AdminDashboard')
                ->has('auth.user')
                ->where('auth.user.name', $this->admin->name)
                ->where('auth.user.role', 'admin')
        );
    }

    public function test_allows_instructor_to_access_instructor_dashboard()
    {
        $response = $this->actingAs($this->instructor)->get(route('instructor.dashboard'));

        $response->assertStatus(200);

        $response->assertInertia(
            fn($page) => $page
                ->component('Instructor/InstructorDashboard')
                ->has('auth.user')
                ->where('auth.user.name', $this->instructor->name)
                ->where('auth.user.role', 'instructor')
        );
    }

    public function test_allows_user_to_access_user_dashboard()
    {
        $response = $this->actingAs($this->user)->get(route('dashboard'));

        $response->assertStatus(200);

        $response->assertInertia(
            fn($page) => $page
                ->component('Frontend/Dashboard/index')
                ->has('auth.user')
                ->where('auth.user.name', $this->user->name)
                ->where('auth.user.role', 'user')
        );
    }

    public function test_unauthorized_user_redirected_to_dashboard()
    {
        $response = $this->actingAs($this->user)->get(route('admin.dashboard'));
        $response->assertStatus(302)
            ->assertRedirect(route('dashboard'));

        $response = $this->actingAs($this->user)->get(route('instructor.dashboard'));
        $response->assertStatus(302)
            ->assertRedirect(route('dashboard'));

        $response = $this->actingAs($this->admin)->get(route('instructor.dashboard'));
        $response->assertStatus(302)
            ->assertRedirect(route('admin.dashboard'));

        $response = $this->actingAs($this->instructor)->get(route('admin.dashboard'));
        $response->assertStatus(302)
            ->assertRedirect(route('instructor.dashboard'));
    }
}
