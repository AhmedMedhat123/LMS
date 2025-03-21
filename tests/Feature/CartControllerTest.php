<?php

namespace Tests\Feature;

use App\Models\Cart;
use App\Models\Course;
use App\Models\User;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Tests\TestCase;
use Inertia\Testing\AssertableInertia as Assert;

class CartControllerTest extends TestCase
{
    use RefreshDatabase;

    private User $user;
    private User $instructor;
    private Course $course;

    protected function setUp(): void
    {
        parent::setUp();
        $this->user = $this->createUser(role: 'user');
        $this->instructor = $this->createUser(role: 'instructor');
        $this->course = Course::factory()->create();
    }


    private function createUser(string $role = 'user'): User
    {
        return User::factory()->create([
            'role' => $role
        ]);
    }

    public function test_cart_page_rendered_correctly()
{
    $response = $this->actingAs($this->user)->get(route('user.cart.all'));

    $response->assertOk()
        ->assertInertia(fn (Assert $page) => $page
            ->component('Frontend/Cart')
        );
}


    public function test_authenticated_user_can_add_to_cart()
    {
        $response = $this->actingAs($this->user)
            ->post(route('user.cart.add', ['id' => $this->course->id, 'instructor_id' => $this->instructor->id]));

        $this->assertDatabaseHas('carts', [
            'user_id' => $this->user->id,
            'course_id' => $this->course->id,
            'instructor_id' => $this->instructor->id,
            'price' => $this->course->discount_price ?? $this->course->selling_price,
        ]);

        $response->assertRedirect()
            ->assertSessionHas([
                'message' => 'Course added to your cart',
                'alertType' => 'success'
            ]);
    }

    public function test_guest_user_cannot_add_to_cart()
    {
        $response = $this->post(route('user.cart.add', [
            'id' => $this->course->id,
            'instructor_id' => $this->instructor->id
        ]));

        $this->assertDatabaseMissing('carts', ['course_id' => $this->course->id]);
    }

    public function test_user_cannot_add_duplicate_course_to_cart()
    {
        Cart::create([
            'user_id' => $this->user->id,
            'course_id' => $this->course->id,
            'instructor_id' => $this->instructor->id,
            'price' => $this->course->discount_price ?? $this->course->selling_price,
        ]);

        $response = $this->actingAs($this->user)
            ->post(route('user.cart.add', ['id' => $this->course->id, 'instructor_id' => $this->instructor->id]));

        $response->assertRedirect()
            ->assertSessionHas([
                'message' => 'Course is already in your cart',
                'alertType' => 'error'
            ]);

        $this->assertDatabaseCount('carts', 1);
    }

    public function test_authenticated_user_can_remove_from_cart()
    {
        $cartItem = Cart::factory()->create([
            'user_id' => $this->user->id,
            'course_id' => $this->course->id,
            'instructor_id' => $this->instructor->id,
        ]);

        $response = $this->actingAs($this->user)
            ->post(route('user.cart.delete', ['id' => $cartItem->id]));

        $this->assertDatabaseMissing('carts', ['id' => $cartItem->id]);

        $response->assertRedirect()
            ->assertSessionHas([
                'message' => 'Course removed from shopping cart',
                'alertType' => 'success',
            ]);
    }
}
