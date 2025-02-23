<?php

namespace App\Http\Controllers;

use App\Http\Requests\InstructorProfileUpdate;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class InstructorController extends Controller
{
    public function InstructorDashboard()
    {
        $id = Auth::user()->id;
        $instructor = User::find($id);
        return inertia('Instructor/InstructorDashboard', ['instructor' => $instructor]);
    }

    public function InstructorLogin()
    {
        return inertia('Instructor/InstructorLogin');
    }

    public function InstructorLogout(Request $request)
    {
        Auth::guard('web')->logout();

        $request->session()->invalidate();

        $request->session()->regenerateToken();

        return redirect()->route('instructor.login');
    }

    public function InstructorProfile()
    {
        $id = Auth::user()->id;
        $instructor = User::find($id);
        return inertia('Instructor/InstructorProfile', ['instructor' => $instructor]);
    }

    public function InstructorProfileStore(InstructorProfileUpdate $request)
    {

        $id = Auth::user()->id;
        $data = User::find($id);
        $data->name = $request->name;
        $data->username = $request->username;
        $data->email = $request->email;
        $data->phone = $request->phone;
        $data->address = $request->address;

        if ($request->file('photo')) {
            $file = $request->file('photo');
            @unlink(public_path('upload/instructor_images/' . $data->photo));
            $filename = date('YmdHi') . $file->getClientOriginalName();
            $file->move(public_path('upload/instructor_images'), $filename);
            $data['photo'] = $filename;
        }

        $data->save();

        return redirect()->back()->with([
            'message' => 'Instructor Profile Updated Successfully',
            'alertType' => 'success'
        ]);
    }
}
