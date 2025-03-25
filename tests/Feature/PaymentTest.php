<?php

namespace Tests\Feature;

use App\Models\Course;
use App\Models\Order;
use App\Models\Payment;
use App\Models\User;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Tests\TestCase;
use Inertia\Testing\AssertableInertia as Assert;
use Carbon\Carbon;

class PaymentTest extends TestCase
{
    use RefreshDatabase;

    private User $instructor;
    private User $user;
    private Course $course;
    private $paymentData;


    protected function setUp(): void
    {
        parent::setUp();

        $this->instructor = $this->createUser(role: 'instructor');
        $this->user = $this->createUser(role: 'user');
        $this->course = Course::Factory()->create([
            'instructor_id' => $this->instructor->id,
        ]);

        $this->paymentData = [
            'id' => 1,
            'name' => $this->user->name,
            'email' => 'user@gmail.com',
            'phone' => '123445566778',
            'address' => 'egypt',
            'coupon_name' => 'DISCOUNT10',
            'total_amount' => 100,
            'payment_type' => 'direct_payment',
            'invoice_no' =>'EOS77466692',
            'courses' => [
                [
                    'course_id' => $this->course->id,
                    'course_title' => $this->course->course_title,
                    'price' => 100,
                    'instructor_id' => $this->instructor->id,
                ],
            ],
        ];
    }

    private function createUser(string $role = 'user'): User
    {
        return User::factory()->create([
            'role' => $role
        ]);
    }

    public function test_user_can_make_a_successful_payment()
    {
        $this->actingAs($this->user)->post(route('user.payment'), $this->paymentData)
        ->assertStatus(302)
        ->assertRedirect(route('index'));

        $this->assertDatabaseHas('payments', [
            'name' => $this->user->name
        ]);

        $this->assertDatabaseHas('orders', [
            'user_id' => $this->user->id,
            'course_id' => $this->course->id,
        ]);
    }

    /**
     * Test that a user cannot enroll in the same course twice.
     */
    public function test_user_cannot_enroll_in_same_course_twice()
    {
        $payment = Payment::create([
                'id' => 1,
                'name' => $this->user->name,
                'email' => 'user@gmail.com',
                'phone' => '123445566778',
                'address' => 'egypt',
                'coupon_name' => 'DISCOUNT10',
                'total_amount' => 100,
                'payment_type' => 'direct_payment',
                'invoice_no' =>'EOS77466692',
                'order_date' => now()->format('d F Y'),
                'order_month' => now()->format('F'),
                'order_year' => now()->format('Y'),
                'status' => 'pending',
        ]);

        Order::create([
            'payment_id' => $payment->id,
            'user_id' => $this->user->id,
            'course_id' => $this->course->id,
            'instructor_id' => $this->instructor->id,
            'course_title' => $this->course->course_title,
            'price' => 100,
        ]);

        $response = $this->actingAs($this->user)->post(route('user.payment'), $this->paymentData)
            ->assertStatus(302)
            ->assertRedirect();

        $response->assertSessionHas('message', 'You have already enrolled in this course');
    }

    /**
     * Test validation errors when sending incorrect payment data.
     */
    public function test_validation_errors_occur_for_invalid_data()
    {
        $this->actingAs($this->user);

        $invalidData = [
            'name' => '',
            'email' => 'invalid-email',
            'total_amount' => '',
            'payment_type' => 'invalid_type',
            'courses' => [],
        ];

        $response = $this->post(route('user.payment'), $invalidData);

        $response->assertSessionHasErrors([
            'name',
            'email',
            'total_amount',
            'payment_type',
            'courses',
        ]);
    }
}
