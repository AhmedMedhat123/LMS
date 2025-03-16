<?php

namespace App\Http\Controllers;

use App\Models\Course;
use App\Models\Course_goal;
use App\Models\CourseLecture;
use App\Models\CourseSection;
use Illuminate\Http\Request;
use Inertia\Inertia;

class FrontendController extends Controller
{
    public function CourseDetails($id)
    {
        $course = Course::with('instructor','category','subcategory')->findOrFail($id);
        $goals = Course_goal::where('course_id',$id)->orderBy('id','DESC')->get();
        $lectures = CourseLecture::where('course_id',$id)->get();
        $sections = CourseSection::with('lectures')->where('course_id',$id)->orderBy('id','ASC')->get();

        return Inertia('Frontend/CourseDetails',[
            'course'=>$course,
            'goals'=>$goals,
            'lectures'=>$lectures,
            'sections'=>$sections,
        ]);
    }
}
