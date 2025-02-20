<?php

namespace Tests\Feature\Admin;

use App\Models\User;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Foundation\Testing\WithFaker;
use Tests\TestCase;

class AdminLogoutTest extends TestCase
{
    use RefreshDatabase;

    private User $admin;

    protected function setUp(): void
    {
        parent::setUp();
        $this->admin = $this->createUser(role: 'admin');
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
    public function test_admin_logout(): void
    {
        $response = $this->actingAs($this->admin)->post(route('admin.logout'));

        $this->assertGuest();

        $response->assertRedirect(route('admin.login'));
    }
}
