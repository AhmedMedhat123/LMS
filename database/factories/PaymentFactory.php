<?php

namespace Database\Factories;

use App\Models\Course;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Payment>
 */
class PaymentFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            'name' => $this->faker->name(),
            'email' => $this->faker->safeEmail(),
            'phone' => $this->faker->phoneNumber(),
            'address' => $this->faker->address(),
            'coupon_name' => $this->faker->optional()->word(),
            'total_amount' => $this->faker->randomFloat(2, 10, 500),
            'payment_type' => $this->faker->randomElement(['direct_payment', 'stripe_payment']),
            'status' => 'pending',
            'invoice_no' => 'EOS' . mt_rand(10000000, 99999999),
            'order_date' => now()->format('d F Y'),
            'order_month' => now()->format('F'),
            'order_year' => now()->format('Y'),
            'courses' => Course::factory()->count(2)->make()->toArray(),

        ];
    }
}
