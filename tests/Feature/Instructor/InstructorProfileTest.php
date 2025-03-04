<?php

namespace Tests\Feature\Instructor;

use App\Models\User;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Http\UploadedFile;
use Illuminate\Support\Facades\Storage;
use Tests\TestCase;

class InstructorProfileTest extends TestCase
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

    public function test_instructor_update_profile_render(){
        $this->actingAs($this->instructor)->get(route('instructor.profile'))->assertStatus(200);
    }

    public function test_instructor_can_update_profile()
    {
        // Storage::fake('public');

        $response = $this->actingAs($this->instructor)->post(route('instructor.profile.store'), [
            'name' => 'New Name',
            'username' => 'newusername',
            'email' => 'newemail@example.com',
            'phone' => '0987654321',
            'address' => 'New Address',
            // 'photo' => $file = UploadedFile::fake()->image('profile.jpg'),
        ]);

        $response->assertRedirect();

        $response->assertSessionHas('message', 'Instructor Profile Updated Successfully');

        $this->instructor->refresh();

        $this->assertEquals('New Name', $this->instructor->name);
        $this->assertEquals('newusername', $this->instructor->username);
        $this->assertEquals('newemail@example.com', $this->instructor->email);
        $this->assertEquals('0987654321', $this->instructor->phone);
        $this->assertEquals('New Address', $this->instructor->address);

        // Storage::disk('public')->assertExists('upload/instructor_images/' . $this->instructor->photo);
    }

    public function test_validation_errors_on_invalid_input()
    {

        $response = $this->actingAs($this->instructor)->post(route('instructor.profile.store'), [
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
