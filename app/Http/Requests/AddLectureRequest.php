<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Validation\Rule;

class AddLectureRequest extends FormRequest
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
           'lecture_title' => ['required', 'string', 'max:255'],
            'url' => ['nullable'],
            'content' => [
                'required_without:video',
                'string',
                Rule::requiredIf(function () {
                    return empty($this->file('video'));
                }),
                function ($attribute, $value, $fail) {
                    if (!empty($value) && $this->hasFile('video')) {
                        $fail('You can only submit content or video, not both.');
                    }
                },
                'nullable'
            ],
            'video' => [
                'required_without:content',
                'max:10240',
                Rule::requiredIf(function () {
                    return empty($this->input('content'));
                }),
                function ($attribute, $value, $fail) {
                    if (!empty($value) && !empty($this->input('content'))) {
                        $fail('You can only submit video or content, not both.');
                    }
                },
                'nullable'
            ],
        ];
    }
}
