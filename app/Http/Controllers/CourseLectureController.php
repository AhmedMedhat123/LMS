<?php

namespace App\Http\Controllers;

use App\Http\Requests\AddLectureRequest;
use App\Models\Course;
use App\Models\CourseLecture;
use App\Models\CourseSection;
use Illuminate\Http\Request;

class CourseLectureController extends Controller
{
    public function AllCourseLecture($id)
    {
        $course = Course::findOrFail($id);

        $sections = CourseSection::with('lectures')->where('course_id',$id)->latest()->get();

        return Inertia('Instructor/Section/AllCourseLecture',[
            'course' => $course,
            'sections' => $sections
        ]);
    }

    public function AddCourseLectures($course_id, $section_id)
    {

        $course = Course::findOrFail($course_id);
        $section = CourseSection::findOrFail($section_id);

        return Inertia('Instructor/Section/AddCourseLecture',[
            'course' => $course,
            'section' => $section
        ]);
    }

    public function StoreCourseLectures(AddLectureRequest $request)
    {
        $lecture = new CourseLecture();
        $lecture->course_id = $request->course_id;
        $lecture->section_id = $request->section_id;
        $lecture->lecture_title = $request->lecture_title;
        // $lecture->url = $request->url;
        $lecture->content = $request->content;

        if($request->hasFile('video') && $request->file('video')->isValid()){
            $file = $request->file('video');
            $filename = date('YmdHi') . '_' . $file->getClientOriginalName();
            $file->move(public_path('upload/course/LectureVideo'), $filename);
            $lecture->video = $filename;
        }

        $lecture->save();

        return redirect()->route('instructor.course.lecture.all',$request->course_id)->with([
            'message' => 'Lecture Saved Successfully',
            'alertType' => 'success'
        ]);
    }

    public function EditCourseLecture($course_id, $section_id,$lecture_id)
    {
        $course = Course::findOrFail($course_id);
        $section = CourseSection::findOrFail($section_id);
        $lecture = CourseLecture::findOrFail($lecture_id);

        return Inertia('Instructor/Section/EditCourseLecture',[
            'course' => $course,
            'section' => $section,
            'lecture' => $lecture,
        ]);
    }

    public function UpdateCourseLecture(AddLectureRequest $request)
    {
        // dd($request->all());

        $lecture = CourseLecture::find($request->id);

        $lecture->update([
            'lecture_title' => $request->lecture_title,
            'url' => $request->url,
            'content' => $request->content,

        ]);

        if($request->hasFile('video') && $request->file('video')->isValid()){
            if ($lecture->video && file_exists(public_path('upload/course/LectureVideo/' . $lecture->video))) {
                unlink(public_path('upload/course/LectureVideo/' . $lecture->video));
            }

            $file = $request->file('video');
            $filename = date('YmdHi') . '_' . $file->getClientOriginalName();
            $file->move(public_path('upload/course/LectureVideo'), $filename);

            $lecture->update(['video' => $filename]);
        }

        return redirect()->route('instructor.course.lecture.all',$request->course_id)->with([
            'message' => 'Lecture Updated Successfully',
            'alertType' => 'success'
        ]);
    }

    public function DeleteCourseLecture($id)
    {
        $lecture = CourseLecture::find($id);

        if ($lecture->video && file_exists(public_path('upload/course/LectureVideo/' . $lecture->video))) {
            unlink(public_path('upload/course/LectureVideo/' . $lecture->video));
        }

        CourseLecture::find($id)->delete();

        return redirect()->back()->with([
            'message' => 'Lecture Deleted Successfully',
            'alertType' => 'success'
        ]);
    }
}
