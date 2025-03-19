<?php

namespace Tests\Feature;

use App\Models\Course;
use App\Models\User;
use App\Models\Wishlist;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Foundation\Testing\WithFaker;
use Tests\TestCase;

class WishlistControllerTest extends TestCase
{
    use RefreshDatabase;

    public function test_guest_cannot_toggle_wishlist()
    {
        $course = Course::factory()->create();

        $response = $this->post(route('wishlist.toggle', $course->id));

        $response->assertRedirect();
        $this->assertDatabaseMissing('wishlists', ['course_id' => $course->id]);
    }

    public function test_authenticated_user_can_add_to_wishlist()
    {
        $user = User::factory()->create();
        $course = Course::factory()->create();

        $this->actingAs($user);

        $response = $this->post(route('wishlist.toggle', $course->id));

        $response->assertRedirect();

        $this->assertDatabaseHas('wishlists', [
            'user_id' => $user->id,
            'course_id' => $course->id,
        ]);
    }

    public function test_authenticated_user_can_remove_from_wishlist()
    {
        $user = User::factory()->create();
        $course = Course::factory()->create();
        Wishlist::create([ 'user_id' => $user->id, 'course_id' => $course->id ]);

        $this->actingAs($user);

        $response = $this->post(route('wishlist.toggle', $course->id));

        $response->assertRedirect();

        $this->assertDatabaseMissing('wishlists', [
            'user_id' => $user->id,
            'course_id' => $course->id,
        ]);
    }
    public function test_wishlist_page_rendered_correctly()
    {
        $user = User::factory()->create();
        $course = Course::factory()->create();
        Wishlist::create([
            'user_id' => $user->id,
            'course_id' => $course->id,
        ]);


        $response = $this->actingAs($user)->get(route('user.wishlist.all'));

        $response->assertStatus(200);
        $response->assertInertia(fn ($page) =>
            $page->component('Frontend/Dashboard/Wishlist')
                ->has('wishlist.data', 1) 
                ->where('wishlist.data.0.course_id', $course->id)
        );
    }

}
