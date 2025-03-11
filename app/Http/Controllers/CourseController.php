<?php

namespace App\Http\Controllers;

use App\Http\Requests\AddCourseRequest;
use App\Models\Category;
use App\Models\Course;
use App\Models\Course_goal;
use App\Models\SubCategory;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use PHPUnit\Framework\Constraint\Count;

class CourseController extends Controller
{
    public function AllCourses(){
        $id = Auth::user()->id;
        $courses = Course::with('category')->where('instructor_id',$id)->latest()->get();
        return inertia('Instructor/Courses/AllCourses',['courses'=>$courses]);
    }

    public function AddCourse(){
        $categories = Category::latest()->get();
        return inertia('Instructor/Courses/AddCourse',[ 'categories'=>$categories]);
    }
    public function StoreCourse(AddCourseRequest $request)
    {
        $validatedData = $request->validated();

        $data = [
            'instructor_id' => Auth::user()->id,
            'category_id' => $validatedData['category_id'],
            'subcategory_id' => $validatedData['subcategory_id'],
            'course_title' => $validatedData['course_title'],
            'course_name' => $validatedData['course_name'],
            'course_name_slug' => strtolower(str_replace(' ', '-', $validatedData['course_name'])),
            'description' => $validatedData['description'],
            'label'=> $validatedData['label'],
            'duration' => $validatedData['duration'],
            'resources' => $validatedData['resources'],
            'certificate' => $validatedData['certificate'],
            'selling_price' => $validatedData['selling_price'],
            'discount_price' => $validatedData['discount_price'],
            'prerequisites' => $validatedData['prerequisites'],
            'bestseller' => $validatedData['bestseller'],
            'featured' => $validatedData['featured'],
            'highestrated' => $validatedData['highestrated'],
        ];

        if ($request->hasFile('course_image') && $request->file('course_image')->isValid()) {
            $file = $request->file('course_image');
            $filename = date('YmdHi') . '_' . $file->getClientOriginalName();
            $file->move(public_path('upload/course/image'), $filename);
            $data['course_image'] = $filename; // Save the file path in the database
        }

        if($request->hasFile('video') && $request->file('video')->isValid()){
            $file = $request->file('video');
            $filename = date('YmdHi') . '_' . $file->getClientOriginalName();
            $file->move(public_path('upload/course/video'), $filename);
            $data['video'] = $filename;
        }

        $course = Course::create($data);

        $goals = Count($request->goals);

        if($goals != NULL){
            for ($i=0; $i < $goals; $i++) {
                $goal = new Course_goal();
                $goal->course_id = $course->id;
                $goal->goal_name = $request->goals[$i];
                $goal->save();
            }
        }

        return redirect()->route('instructor.course.all')->with([
            'message' => 'Course Added Successfully',
            'alertType' => 'success'
        ]);
    }

    public function EditCourse($id){
        $course = Course::find($id);
        $categories = Category::latest()->get();
        $subcategories = SubCategory::latest()->get();
        $courseGoals = Course_goal::where('course_id',$id)->get();

        return inertia('Instructor/Courses/EditCourse',[
            'course' => $course,
            'categories' => $categories,
            'subcategoriess' => $subcategories,
            'courseGoals' => $courseGoals,
        ]);
    }

    public function UpdateCourse(AddCourseRequest $request)
    {

        $validatedData = $request->validated();

        $course = Course::findOrFail($request->course_id);

        $data = [
            'category_id' => $validatedData['category_id'],
            'subcategory_id' => $validatedData['subcategory_id'],
            'course_title' => $validatedData['course_title'],
            'course_name' => $validatedData['course_name'],
            'course_name_slug' => strtolower(str_replace(' ', '-', $validatedData['course_name'])),
            'description' => $validatedData['description'],
            'label'=> $validatedData['label'],
            'duration' => $validatedData['duration'],
            'resources' => $validatedData['resources'],
            'certificate' => $validatedData['certificate'],
            'selling_price' => $validatedData['selling_price'],
            'discount_price' => $validatedData['discount_price'],
            'prerequisites' => $validatedData['prerequisites'],
            'bestseller' => $validatedData['bestseller'],
            'featured' => $validatedData['featured'],
            'highestrated' => $validatedData['highestrated'],
        ];

        if ($request->hasFile('course_image') && $request->file('course_image')->isValid()) {
            if ($course->course_image && file_exists(public_path('upload/course/image/' . $course->course_image))) {
                unlink(public_path('upload/course/image/' . $course->course_image));
            }

            $file = $request->file('course_image');
            $filename = date('YmdHi') . '_' . $file->getClientOriginalName();
            $file->move(public_path('upload/course/image'), $filename);
            $data['course_image'] = $filename;
        }

        if($request->hasFile('video') && $request->file('video')->isValid()){
            if ($course->video && file_exists(public_path('upload/course/video/' . $course->video))) {
                unlink(public_path('upload/course/video/' . $course->video));
            }

            $file = $request->file('video');
            $filename = date('YmdHi') . '_' . $file->getClientOriginalName();
            $file->move(public_path('upload/course/video'), $filename);
            $data['video'] = $filename;
        }

        $course->update($data);

        Course_goal::where('course_id', $course->id)->delete();

        $goals = Count($request->goals);

        if($goals != NULL){
            for ($i=0; $i < $goals; $i++) {
                $goal = new Course_goal();
                $goal->course_id = $course->id;
                $goal->goal_name = $request->goals[$i];
                $goal->save();
            }
        }

        return redirect()->route('instructor.course.all')->with([
            'message' => 'Course Updated Successfully',
            'alertType' => 'success'
        ]);
    }

    public function DeleteCourse($id)
    {

        $course = Course::findOrFail($id);

        if ($course->course_image && file_exists(public_path('upload/course/image/' . $course->course_image))) {
            unlink(public_path('upload/course/image/' . $course->course_image));
        }

        if ($course->video && file_exists(public_path('upload/course/video/' . $course->video))) {
            unlink(public_path('upload/course/video/' . $course->video));
        }

        Course_goal::where('course_id', $course->id)->delete();

        $course->delete();

        return redirect()->route('instructor.course.all')->with([
            'message' => 'Course Deleted Successfully',
            'alertType' => 'success'
        ]);
    }

}
