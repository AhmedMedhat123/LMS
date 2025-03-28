<?php

namespace App\Http\Controllers;

use App\Models\Review;
use Illuminate\Http\Request;

class ReviewController extends Controller
{
    public function StoreReview(Request $request)
    {
        $request->validate([
            'rating' => 'required',
            'comment' => 'required|string|max:255',
        ]);

        Review::create([
            'course_id' => $request->courseId,
            'user_id' => $request->userId,
            'instructor_id' => $request->instructorId,
            'comment' => $request->comment,
            'rating' => $request->rating,
            'status' => 1,
        ]);

        return redirect()->back()->with([
            'message' => 'Review Submitted Successfully',
            'alertType' => 'success'
        ]);
    }
}
