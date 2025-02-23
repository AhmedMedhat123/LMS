<?php

namespace Tests\Feature\Instructor;

use App\Models\User;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Support\Facades\Hash;
use Inertia\Testing\AssertableInertia as Assert;
use Tests\TestCase;

class InstructorChangePasswordTest extends TestCase
{
    use RefreshDatabase;

    private User $instructor;

    protected function setUp(): void
    {
        parent::setUp();
        $this->instructor = User::factory()->create([
            'password' => Hash::make('OldPassword123'),
            'role' => 'instructor'
        ]);
    }

    public function test_loads_the_instructor_change_password_page()
    {
        $this->actingAs($this->instructor)
            ->get(route('instructor.change-password'))
            ->assertStatus(200)
            ->assertInertia(
                fn(Assert $page) =>
                $page->component('Instructor/InstructorChangePassword')
                    ->has(
                        'instructor',
                        fn(Assert $prop) =>
                        $prop->where('id', $this->instructor->id)
                            ->where('name', $this->instructor->name)
                            ->etc()
                    )
            );
    }

    public function test_updates_password_successfully()
    {
        $this->actingAs($this->instructor)
            ->post(route('instructor.change-password.store'), [
                'old_password' => 'OldPassword123',
                'new_password' => 'NewPassword123',
                'new_password_confirmation' => 'NewPassword123',
            ])
            ->assertRedirect()
            ->assertSessionHas('message', 'Password Changed Successfully');

        $this->assertTrue(Hash::check('NewPassword123', $this->instructor->fresh()->password));
    }

    public function test_fails_if_old_password_is_incorrect()
    {
        $this->actingAs($this->instructor)
            ->post(route('instructor.change-password.store'), [
                'old_password' => 'WrongPassword123',
                'new_password' => 'NewPassword123',
                'new_password_confirmation' => 'NewPassword123',
            ])
            ->assertRedirect()
            ->assertSessionHas('message', 'Old Password is Incorrect');

        // Password should remain unchanged
        $this->assertTrue(Hash::check('OldPassword123', $this->instructor->fresh()->password));
    }

    public function test_fails_if_validation_rules_are_broken()
    {
        $this->actingAs($this->instructor)
            ->post(route('instructor.change-password.store'), [
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
