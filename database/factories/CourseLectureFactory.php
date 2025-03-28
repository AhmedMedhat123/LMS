<?php

namespace Database\Factories;

use App\Models\Course;
use App\Models\CourseSection;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\CourseLecture>
 */
class CourseLectureFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            'course_id' => Course::factory(),
            'section_id' => CourseSection::factory(),
            'lecture_title' => $this->faker->sentence,
            'video' => $this->faker->url,
            'url' => $this->faker->url,
            'content' => $this->faker->paragraph,
        ];
    }
}
