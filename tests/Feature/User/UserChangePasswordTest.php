<?php

namespace Tests\Feature\User;

use App\Models\User;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Foundation\Testing\WithFaker;
use Illuminate\Support\Facades\Hash;
use Tests\TestCase;
use Inertia\Testing\AssertableInertia as Assert;


class UserChangePasswordTest extends TestCase
{
    use RefreshDatabase;

    private User $user;

    protected function setUp(): void
    {
        parent::setUp();
        $this->user = User::factory()->create([
            'password' => Hash::make('OldPassword123'),
            'role' => 'user'
        ]);
    }
    public function test_loads_the_user_change_password_page()
    {
        $this->actingAs($this->user)
            ->get(route('user.change-password'))
            ->assertStatus(200)
            ->assertInertia(
                fn(Assert $page) =>
                $page->component('Frontend/Dashboard/changePassword')

            );
    }
    public function test_updates_password_successfully()
    {
        $this->actingAs($this->user)
            ->post(route('user.change-password.store'), [
                'old_password' => 'OldPassword123',
                'new_password' => 'NewPassword123',
                'new_password_confirmation' => 'NewPassword123',
            ])
            ->assertRedirect()
            ->assertSessionHas('message', 'Password Changed Successfully');

        $this->assertTrue(Hash::check('NewPassword123', $this->user->fresh()->password));
    }

    public function test_fails_if_old_password_is_incorrect()
    {
        $this->actingAs($this->user)
            ->post(route('user.change-password.store'), [
                'old_password' => 'WrongPassword123',
                'new_password' => 'NewPassword123',
                'new_password_confirmation' => 'NewPassword123',
            ])
            ->assertRedirect()
            ->assertSessionHas('message', 'Old Password is Incorrect');

        // Password should remain unchanged
        $this->assertTrue(Hash::check('OldPassword123', $this->user->fresh()->password));
    }

    public function test_fails_if_validation_rules_are_broken()
    {
        $this->actingAs($this->user)
            ->post(route('user.change-password.store'), [
                'old_password' => '',
                'new_password' => 'short',
                'new_password_confirmation' => 'different',
            ])
            ->assertSessionHasErrors([
                'old_password' => 'The old password field is required.',
                'new_password' => 'The new password field confirmation does not match.',
            ]);
    }
}
