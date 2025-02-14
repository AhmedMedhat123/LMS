<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class InstructorController extends Controller
{
    public function InstructorDashboard()
    {
        return inertia('Instructor/InstructorDashboard');
    }
}
