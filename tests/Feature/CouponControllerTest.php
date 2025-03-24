<?php

namespace Tests\Feature;

use App\Models\Coupon;
use App\Models\User;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Foundation\Testing\WithFaker;
use Inertia\Testing\AssertableInertia;
use Tests\TestCase;

class CouponControllerTest extends TestCase
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

    public function test_admin_can_view_all_coupons()
    {
        Coupon::factory()->count(3)->create();

        $response = $this->actingAs($this->admin)->get(route('admin.coupon.all'));

        $response->assertInertia(fn(AssertableInertia $page) =>
            $page->component('Admin/Backend/Coupon/AllCoupon')
                ->has('coupons', 3)
        );
    }

    public function test_admin_can_view_add_coupon_page()
    {

        $response = $this->actingAs($this->admin)->get(route('admin.coupon.add'));

        $response->assertInertia(fn(AssertableInertia $page) =>
            $page->component('Admin/Backend/Coupon/AddCoupon')
        );
    }

    public function test_admin_can_view_edit_coupon_page()
    {
        $coupon = Coupon::factory()->create();

        $response = $this->actingAs($this->admin)->get(route('admin.coupon.edit', $coupon->id));

        $response->assertInertia(fn(AssertableInertia $page) =>
            $page->component('Admin/Backend/Coupon/EditCoupon')
                ->where('coupon.id', $coupon->id)
        );
    }

    public function test_admin_can_store_a_coupon()
    {
        $response = $this->actingAs($this->admin)->post(route('admin.coupon.add.store'), [
            'name' => 'DISCOUNT',
            'discount' => 10,
            'validity' => now()->addDays(10)->toDateString(),
        ]);

        $this->assertDatabaseHas('coupons', ['name' => 'DISCOUNT']);
        $response->assertRedirect(route('admin.coupon.all'));
    }

    public function test_admin_can_update_a_coupon()
    {
        $coupon = Coupon::factory()->create();

        $response = $this->actingAs($this->admin)->post(route('admin.coupon.update'), [
            'id' => $coupon->id,
            'name' => 'UPDATED',
            'discount' => 15,
            'validity' => now()->addDays(5)->toDateString(),
        ]);

        $this->assertDatabaseHas('coupons', ['name' => 'UPDATED']);
        $response->assertRedirect(route('admin.coupon.all'));
    }

    public function test_admin_can_delete_a_coupon()
    {
        $coupon = Coupon::factory()->create();

        $response = $this->actingAs($this->admin)->get(route('admin.coupon.delete', $coupon->id));

        $this->assertDatabaseMissing('coupons', ['id' => $coupon->id]);
        $response->assertRedirect(route('admin.coupon.all'));
    }

    public function user_can_apply_valid_coupon()
    {
        $user = User::factory()->create();
        $this->actingAs($user);

        $coupon = Coupon::factory()->create([
            'coupon_name' => 'coupon',
            'coupon_discount' => 10,
        ]);

        $response = $this->post(route('user.coupon.apply', ['coupon_name' => $coupon->coupon_name]));

        $response->assertStatus(302);

        $response->assertRedirect()
        ->assertSessionHas([
            'message' => 'Coupon applied successfully',
            'alertType' => 'success',
            'coupon' => [
                'coupon_name' => 'coupon',
                'coupon_discount' => 10,
            ],

        ]);

    }

    public function test_user_cannot_apply_invalid_or_expired_coupon()
    {
        $user = User::factory()->create();
        $this->actingAs($user);

        $coupon = Coupon::factory()->create([
            'name' => 'EXPIRED10',
            'discount' => 10,
            'validity' => now()->subDays(1),
        ]);

        $response = $this->post(route('user.coupon.apply', ['coupon_name' => $coupon->name]));
        $response->assertSessionMissing('coupon');
        $response->assertRedirect();
    }

    public function test_user_can_remove_coupon()
{
    $user = User::factory()->create();
    $this->actingAs($user);

    session()->put('coupon', [
        'coupon_name' => 'DISCOUNT10',
        'coupon_discount' => 10,
        'discount_amount' => 100,
        'total_amount' => 900
    ]);

    $response = $this->post(route('user.coupon.remove'));

    $response->assertRedirect();
    $this->assertFalse(session()->has('coupon'));
}

}
