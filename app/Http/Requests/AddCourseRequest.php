<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class AddCourseRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\ValidationRule|array<mixed>|string>
     */
    public function rules(): array
    {
        return [
            'course_name' => 'required|string|max:255',
            'course_title' => 'required|string|max:255',
            'category_id' => 'required|exists:categories,id',
            'subcategory_id' => 'required|exists:sub_categories,id',
            // 'course_image' => 'nullable|image|mimes:jpeg,png,jpg,gif,svg|max:2048',
            // 'video' => 'nullable|mimes:mp4,mov,avi,wmv|max:10240',
            'label' => 'required|in:begginer,middle,advance',
            'certificate' => 'required|in:yes,no',
            'selling_price' => 'required|numeric|min:0',
            'discount_price' => 'nullable|numeric|min:0',
            'duration' => 'required|string|max:50',
            'resources' => 'nullable|string|max:1000',
            'prerequisites' => 'nullable|string|max:1000',
            'description' => 'required|string',
            'bestseller' => 'nullable|boolean',
            'featured' => 'nullable|boolean',
            'highestrated' => 'nullable|boolean',
        ];
    }
}
