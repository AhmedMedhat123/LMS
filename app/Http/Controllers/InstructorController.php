<?php

namespace App\Http\Controllers;

use App\Http\Requests\InstructorChangePasswordRequest;
use App\Http\Requests\InstructorProfileUpdate;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;

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

    public function InstructorChangePassword()
    {
        $id = Auth::user()->id;
        $instructor = User::find($id);
        return inertia('Instructor/InstructorChangePassword', ['instructor' => $instructor]);
    }

    public function InstructorChangePasswordStore(InstructorChangePasswordRequest $request)
    {
        if (!Hash::check($request->old_password, Auth::user()->password)) {
            return redirect()->back()->with([
                'message' => 'Old Password is Incorrect',
                'alertType' => 'error'
            ]);
        }

        User::whereId(Auth::user()->id)->update(['password' => Hash::make($request->new_password)]);

        return redirect()->back()->with([
            'message' => 'Password Changed Successfully',
            'alertType' => 'success'
        ]);
    }

    public function InstructorRegister()
    {
        return inertia('Frontend/InstructorRegister');
    }
}
