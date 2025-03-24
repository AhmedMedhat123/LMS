<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class PaymentRequest extends FormRequest
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
            'name' => ['required', 'string', 'max:255'],
            'email' => ['required', 'email', 'max:255'],
            'phone' => ['nullable', 'string', 'max:20'],
            'address' => ['nullable', 'string', 'max:255'],
            'coupon_name' => ['nullable', 'string', 'max:50'],
            'total_amount' => ['required'],
            'payment_type' => ['required', 'string', 'in:direct_payment,stripe_payment'],
            'courses' => ['required', 'array', 'min:1'],
            'courses.*.course_id' => ['required', 'integer', 'exists:courses,id'],
            'courses.*.course_title' => ['required', 'string', 'max:255'],
            'courses.*.price' => ['required', 'numeric', 'min:0'],
            'courses.*.instructor_id' => ['required', 'integer', 'exists:users,id'],
        ];
    }
}
