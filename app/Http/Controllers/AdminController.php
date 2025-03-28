<?php

namespace App\Http\Controllers;

use App\Http\Requests\AdminChangePasswordRequest;
use App\Http\Requests\AdminProfileUpdateRequest;
use App\Models\User;
use Illuminate\Support\Facades\Auth;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;

class AdminController extends Controller
{
    public function AdminDashboard()
    {
        $id = Auth::user()->id;
        $admin = User::find($id);
        return inertia('Admin/AdminDashboard', ['admin' => $admin]);
    }

    public function AdminLogout(Request $request)
    {
        Auth::guard('web')->logout();

        $request->session()->invalidate();

        $request->session()->regenerateToken();

        return redirect()->route('login');
    }

    public function AdminLogin()
    {
        return inertia('Admin/AdminLogin');
    }

    public function AdminProfile()
    {
        $id = Auth::user()->id;
        $admin = User::find($id);
        return inertia('Admin/AdminProfile', ['admin' => $admin]);
    }

    public function AdminChangePassword()
    {
        $id = Auth::user()->id;
        $admin = User::find($id);
        return inertia('Admin/AdminChangePassword', ['admin' => $admin]);
    }

    public function AdminChangePasswordStore(AdminChangePasswordRequest $request)
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

    public function AdminProfileStore(AdminProfileUpdateRequest $request)
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
            @unlink(public_path('upload/admin_images/' . $data->photo));
            $filename = date('YmdHi') . $file->getClientOriginalName();
            $file->move(public_path('upload/admin_images'), $filename);
            $data['photo'] = $filename;
        }

        $data->save();

        return redirect()->back()->with([
            'message' => 'Admin Profile Updated Successfully',
            'alertType' => 'success'
        ]);
    }
}
