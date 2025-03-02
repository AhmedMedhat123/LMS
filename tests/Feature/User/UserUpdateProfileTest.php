<?php

namespace Tests\Feature\User;

use App\Models\User;
use Illuminate\Http\UploadedFile;

use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Foundation\Testing\WithFaker;
use Tests\TestCase;

class UserUpdateProfileTest extends TestCase
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

    public function test_user_can_update_profile()
    {
        // Storage::fake('public');

        $response = $this->actingAs($this->user)->post(route('user.profile.edit.store'), [
            'name' => 'New Name',
            'username' => 'newusername',
            'email' => 'newemail@example.com',
            'phone' => '0987654321',
            'address' => 'New Address',
            // 'photo' => $file = UploadedFile::fake()->image('profile.jpg'),
        ]);

        $response->assertRedirect();

        $response->assertSessionHas('message', 'User Profile Updated Successfully');

        $this->user->refresh();

        $this->assertEquals('New Name', $this->user->name);
        $this->assertEquals('newusername', $this->user->username);
        $this->assertEquals('newemail@example.com', $this->user->email);
        $this->assertEquals('0987654321', $this->user->phone);
        $this->assertEquals('New Address', $this->user->address);

        // Storage::disk('public')->assertExists('upload/users_images/' . $this->user->photo);
    }

    public function test_validation_errors_on_invalid_input()
    {

        $response = $this->actingAs($this->user)->post(route('user.profile.edit.store'), [
            'name' => '',
            'username' => '',
            'email' => 'invalid-email',
            'phone' => 'invalid-phone',
            'address' => '',
            'photo' => UploadedFile::fake()->create('file.txt', 100),
        ]);

        $response->assertRedirect();
        $response->assertSessionHasErrors(['name', 'username', 'email', 'phone', 'photo']);
    }
}
