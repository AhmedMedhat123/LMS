<?php

namespace Database\Factories;

use App\Models\Category;
use App\Models\SubCategory;
use App\Models\User;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Course>
 */
class CourseFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            'instructor_id' => User::factory(),
            'category_id' => Category::factory()->create()->id,
            'subcategory_id' => SubCategory::factory()->create()->id,
            'course_title' => $this->faker->sentence,
            'course_name' => $this->faker->sentence,
            'course_name_slug' => $this->faker->slug,
            'description' => $this->faker->paragraph,
            'label' => $this->faker->randomElement(['begginer', 'middle', 'advance']),
            'duration' => $this->faker->word,
            'resources' => $this->faker->sentence,
            'certificate' => $this->faker->randomElement(['yes', 'no']),
            'selling_price' => $this->faker->randomNumber(),
            'discount_price' => $this->faker->randomNumber(),
            'prerequisites' => $this->faker->sentence,
            'bestseller' => $this->faker->boolean,
            'featured' => $this->faker->boolean,
            'highestrated' => $this->faker->boolean,
        ];
    }
}
