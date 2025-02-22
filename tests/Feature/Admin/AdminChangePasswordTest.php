<?php

namespace Tests\Feature\Admin;

use App\Models\User;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Support\Facades\Hash;
use Inertia\Testing\AssertableInertia as Assert;
use Tests\TestCase;

class AdminChangePasswordTest extends TestCase
{
    use RefreshDatabase;

    private User $admin;

    protected function setUp(): void
    {
        parent::setUp();
        // Create a test admin user
        $this->admin = User::factory()->create([
            'password' => Hash::make('OldPassword123'),
            'role' => 'admin'
        ]);
    }

    public function test_loads_the_admin_change_password_page()
    {
        $this->actingAs($this->admin)
            ->get(route('admin.change-password'))
            ->assertStatus(200)
            ->assertInertia(
                fn(Assert $page) =>
                $page->component('Admin/AdminChangePassword')
                    ->has(
                        'admin',
                        fn(Assert $prop) =>
                        $prop->where('id', $this->admin->id)
                            ->where('name', $this->admin->name)
                            ->etc()
                    )
            );
    }

    public function test_updates_password_successfully()
    {
        $this->actingAs($this->admin)
            ->post(route('admin.change-password.store'), [
                'old_password' => 'OldPassword123',
                'new_password' => 'NewPassword123',
                'new_password_confirmation' => 'NewPassword123',
            ])
            ->assertRedirect()
            ->assertSessionHas('message', 'Password Changed Successfully');

        $this->assertTrue(Hash::check('NewPassword123', $this->admin->fresh()->password));
    }

    public function test_fails_if_old_password_is_incorrect()
    {
        $this->actingAs($this->admin)
            ->post(route('admin.change-password.store'), [
                'old_password' => 'WrongPassword123',
                'new_password' => 'NewPassword123',
                'new_password_confirmation' => 'NewPassword123',
            ])
            ->assertRedirect()
            ->assertSessionHas('message', 'Old Password is Incorrect');

        // Password should remain unchanged
        $this->assertTrue(Hash::check('OldPassword123', $this->admin->fresh()->password));
    }

    public function test_fails_if_validation_rules_are_broken()
    {
        $this->actingAs($this->admin)
            ->post(route('admin.change-password.store'), [
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
