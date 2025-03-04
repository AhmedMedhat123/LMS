<?php

namespace Tests\Feature\Admin;

use App\Models\User;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Http\UploadedFile;
use Illuminate\Support\Facades\Storage;
use Tests\TestCase;

class AdminProfileTest extends TestCase
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

    public function test_admin_profile_page_render(){
        $this->actingAs($this->admin)->get(route('admin.profile'))->assertStatus(200);
    }

    public function test_admin_can_update_profile()
    {
        // Storage::fake('public');

        $response = $this->actingAs($this->admin)->post(route('admin.profile.store'), [
            'name' => 'New Name',
            'username' => 'newusername',
            'email' => 'newemail@example.com',
            'phone' => '0987654321',
            'address' => 'New Address',
            // 'photo' => $file = UploadedFile::fake()->image('profile.jpg'),
        ]);

        $response->assertRedirect();

        $response->assertSessionHas('message', 'Admin Profile Updated Successfully');

        $this->admin->refresh();

        $this->assertEquals('New Name', $this->admin->name);
        $this->assertEquals('newusername', $this->admin->username);
        $this->assertEquals('newemail@example.com', $this->admin->email);
        $this->assertEquals('0987654321', $this->admin->phone);
        $this->assertEquals('New Address', $this->admin->address);

        // Storage::disk('public')->assertExists('upload/admin_images/' . $this->admin->photo);
    }

    public function test_validation_errors_on_invalid_input()
    {

        $response = $this->actingAs($this->admin)->post(route('admin.profile.store'), [
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
