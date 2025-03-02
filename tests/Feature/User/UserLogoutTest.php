<?php

namespace Tests\Feature\User;

use App\Models\User;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Foundation\Testing\WithFaker;
use Tests\TestCase;

class UserLogoutTest extends TestCase
{
    use RefreshDatabase;

    private User $user;

    protected function setUp(): void
    {
        parent::setUp();
        $this->user = $this->createUser(role: 'user');
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
    public function test_user_logout(): void
    {
        $response = $this->actingAs($this->user)->post(route('user.logout'));

        $this->assertGuest();

        $response->assertRedirect(route('login'));
    }
}
