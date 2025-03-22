<?php

namespace Database\Factories;

use Carbon\Carbon;
use Illuminate\Database\Eloquent\Factories\Factory;
use Illuminate\Support\Str;


/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Coupon>
 */
class CouponFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        $name = $this->faker->word();
        return [
            'name' => $name,
            'coupon_slug' => Str::slug($name),
            'discount' => $this->faker->numberBetween(1, 100) . '%',
            'validity' => $this->faker->dateTimeBetween(Carbon::today(), '+1 year')->format('Y-m-d'),
            'status' => 1,
        ];
    }
}
