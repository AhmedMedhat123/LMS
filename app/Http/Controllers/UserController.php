<?php

namespace App\Http\Controllers;

use App\Http\Requests\AdminChangePasswordRequest;
use App\Http\Requests\AdminProfileUpdateRequest;
use App\Http\Requests\UserUpdateProfileRequest;
use App\Models\Category;
use App\Models\Course;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Inertia\Inertia;

class UserController extends Controller
{
    public function Index()
    {
        $categories = Category::latest()->limit(6)->get();
        $courses = Course::with('instructor','category','reviews')
                    ->where('status',1)
                    ->orderBy('id','ASC')
                    ->limit(6)
                    ->get();

        $courses->transform(function ($course) {
            $course->averageReviews = $course->reviews()
                ->where('status', 1)
                ->avg('rating') ?? 0; 
            return $course;
        });


        return Inertia::render('Frontend/Home',[
            'categories'=> $categories,
            'courses' => $courses,
        ]);
    }

    public function UserProfile()
    {
        $id = Auth::user()->id;
        $user = User::find($id);
        return inertia('Frontend/Dashboard/Profile', ['user' => $user]);
    }

    public function UserProfileEdit()
    {
        $id = Auth::user()->id;
        $user = User::find($id);
        return inertia('Frontend/Dashboard/ProfileEdit', ['user' => $user]);
    }

    public function UserProfileEditStore(UserUpdateProfileRequest $request)
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
            @unlink(public_path('upload/users_images/' . $data->photo));
            $filename = date('YmdHi') . $file->getClientOriginalName();
            $file->move(public_path('upload/users_images'), $filename);
            $data['photo'] = $filename;
        }

        $data->save();

        return redirect()->back()->with([
            'message' => 'User Profile Updated Successfully',
            'alertType' => 'success'
        ]);
    }

    public function UserLogout(Request $request){
        Auth::guard('web')->logout();

        $request->session()->invalidate();

        $request->session()->regenerateToken();

        return redirect()->route('login');
    }

    public function UserChangePassword()
    {
        return inertia('Frontend/Dashboard/changePassword');
    }

    public function UserChangePasswordStore(AdminChangePasswordRequest $request)
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
}
