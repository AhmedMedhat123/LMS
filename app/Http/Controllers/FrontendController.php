<?php

namespace App\Http\Controllers;

use App\Models\Cart;
use App\Models\Category;
use App\Models\Course;
use App\Models\Course_goal;
use App\Models\CourseLecture;
use App\Models\CourseSection;
use App\Models\SubCategory;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
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

    public function CategoryCourse($id){
        $courses = Course::where('category_id', $id)
            ->where('status','1')
            ->with('instructor', 'category', 'subcategory')
            ->paginate(9);

        $category = Category::findOrFail($id);

        return Inertia('Frontend/Category/AllCategory',[
            'courses' => $courses,
            'category' => $category,
        ]);
    }

    public function SubcategoryCourse($id){

        $courses = Course::where('subcategory_id', $id)
            ->where('status','1')
            ->with('instructor', 'category', 'subcategory')
            ->paginate(9);

        $subcategory = SubCategory::with('category')->findOrFail($id);

        return Inertia('Frontend/Category/AllSubcategory',[
            'courses' => $courses,
            'subcategory' => $subcategory,
        ]);
    }

    public function InstructorDetails($id){

        $courses = Course::where('instructor_id', $id)
            ->where('status','1')
            ->with('instructor', 'category')
            ->paginate(9);

        $instructor = User::findOrFail($id);


        return Inertia('Frontend/InstructorDetails',[
            'courses' => $courses,
            'instructor' => $instructor,
        ]);
    }

    public function CheckoutPage()
    {
        if(Cart::where('user_id', Auth::id())->count() === 0){
            return redirect()->back()->with([
                'message' => 'You must have at least one course to proceed to checkout.',
                'alertType' => 'error',
            ]);
        }

        return Inertia('Frontend/Checkout');
    }
}
