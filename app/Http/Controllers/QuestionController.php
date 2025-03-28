<?php

namespace App\Http\Controllers;

use App\Models\Question;
use Carbon\Carbon;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class QuestionController extends Controller
{
    public function UserAddQuestion(Request $request)
    {

        Question::insert([
            'course_id' => $request->course_id,
            'user_id' => Auth::user()->id,
            'instructor_id' => $request->instructor_id,
            'subject' => $request->questionSubject,
            'question' => $request->questionContent,
            'created_at' => Carbon::now()
        ]);

        return redirect()->back()->with([
            'message' => 'Question Send Successfully',
            'alertType' => 'success'
        ]);
    }

    public function UserReplyQuestion(Request $request)
    {
        Question::insert([
            'parent_id' => $request->parent_id,
            'course_id' => $request->course_id,
            'user_id' => Auth::user()->id,
            'instructor_id' => $request->instructor_id,
            'subject' => $request->questionSubject,
            'question' => $request->questionContent,
            'created_at' => Carbon::now()
        ]);

        return redirect()->back()->with([
            'message' => 'Reply Added Successfully',
            'alertType' => 'success'
        ]);
    }
}
