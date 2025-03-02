<?php

use App\Http\Controllers\AdminController;
use App\Http\Controllers\InstructorController;
use App\Http\Controllers\ProfileController;
use App\Http\Controllers\UserController;
use App\Models\User;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

// Route::get('/', function () {
//     return Inertia::render('Welcome', [
//         'canLogin' => Route::has('login'),
//         'canRegister' => Route::has('register'),
//         'laravelVersion' => Application::VERSION,
//         'phpVersion' => PHP_VERSION,
//     ]);
// });

Route::get('/dashboard', function () {
        $id = Auth::user()->id;
        $user = User::find($id);
    return Inertia::render('Frontend/Dashboard/index',['user'=>$user]);
})->middleware(['auth', 'verified'])->name('dashboard');

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

//Admin Route
Route::middleware(['auth', 'role:admin'])->group(function () {
    Route::get('admin/dashboard', [AdminController::class, 'AdminDashboard'])->name('admin.dashboard');
    Route::post('admin/logout', [AdminController::class, 'AdminLogout'])->name('admin.logout');
    Route::get('admin/profile', [AdminController::class, 'AdminProfile'])->name('admin.profile');
    Route::post('admin/profile/store', [AdminController::class, 'AdminProfileStore'])->name('admin.profile.store');
    Route::get('admin/change-password', [AdminController::class, 'AdminChangePassword'])->name('admin.change-password');
    Route::post('admin/change-password/store', [AdminController::class, 'AdminChangePasswordStore'])->name('admin.change-password.store');
});

Route::get('admin/login', [AdminController::class, 'AdminLogin'])->name('admin.login');

//Instructor Route
Route::middleware(['auth', 'role:instructor'])->group(function () {
    Route::get('instructor/dashboard', [InstructorController::class, 'InstructorDashboard'])->name('instructor.dashboard');
    Route::post('instructor/logout', [InstructorController::class, 'InstructorLogout'])->name('instructor.logout');
    Route::get('instructor/profile', [InstructorController::class, 'InstructorProfile'])->name('instructor.profile');
    Route::post('instructor/profile/store', [InstructorController::class, 'InstructorProfileStore'])->name('instructor.profile.store');
    Route::get('instructor/change-password', [InstructorController::class, 'InstructorChangePassword'])->name('instructor.change-password');
    Route::post('instructor/change-password/store', [InstructorController::class, 'InstructorChangePasswordStore'])->name('instructor.change-password.store');
});

Route::get('instructor/login', [InstructorController::class, 'InstructorLogin'])->name('instructor.login');

//Frontend Route
Route::get('/', [UserController::class, 'Index'])->name('index');

Route::middleware('auth')->prefix('dashboard')->group(function () {
    Route::get('profile',[UserController::class , 'UserProfile'])->name('user.profile');
    Route::get('profile/edit',[UserController::class , 'UserProfileEdit'])->name('user.profile.edit');
    Route::post('profile/edit/store',[UserController::class , 'UserProfileEditStore'])->name('user.profile.edit.store');
    Route::post('logout',[UserController::class, 'UserLogout'])->name('user.logout');
});

require __DIR__ . '/auth.php';
