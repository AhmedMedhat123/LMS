<?php

namespace App\Http\Controllers;

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
}
