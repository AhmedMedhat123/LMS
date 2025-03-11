<?php

use App\Http\Controllers\AdminController;
use App\Http\Controllers\CategoryController;
use App\Http\Controllers\CourseController;
use App\Http\Controllers\InstructorController;
use App\Http\Controllers\ProfileController;
use App\Http\Controllers\SubCategoryController;
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

///////////////////////////////////////////////////////////////////
////////////////////////////  Admin Route  ////////////////////////
///////////////////////////////////////////////////////////////////

Route::middleware(['auth', 'role:admin'])->prefix('admin')->name('admin.')->group(function () {

    Route::controller(AdminController::class)->group(function(){
        Route::get('/dashboard',  'AdminDashboard')->name('dashboard');
        Route::post('/logout',  'AdminLogout')->name('logout');
        Route::get('/profile',  'AdminProfile')->name('profile');
        Route::post('/profile/store',  'AdminProfileStore')->name('profile.store');
        Route::get('/change-password',  'AdminChangePassword')->name('change-password');
        Route::post('/change-password/store',  'AdminChangePasswordStore')->name('change-password.store');
    });

    /////////////////////////// Category Route  /////////////////
    Route::controller(CategoryController::class)->prefix('category')->name('category.')->group(function(){
        Route::get('/all','AllCategory')->name('all');
        Route::get('/add','AddCategory')->name('add');
        Route::post('/add/store','StoreCategory')->name('add.store');
        Route::get('/edit/{id}','EditCategory')->name('edit');
        Route::post('/update','UpdateCategory')->name('update');
        Route::get('/delete/{id}','DeleteCategory')->name('delete');
    });

    /////////////////////////// SubCategory Route  /////////////////
    Route::controller(SubCategoryController::class)->prefix('subcategory')->name('subcategory.')->group(function(){
        Route::get('/all','AllSubCategory')->name('all');
        Route::get('/add','AddSubCategory')->name('add');
        Route::post('/add/store','StoreSubCategory')->name('add.store');
        Route::get('/edit/{id}','EditSubCategory')->name('edit');
        Route::post('/Update','UpdateSubCategory')->name('update');
        Route::get('/delete/{id}','DeleteSubCategory')->name('delete');
    });

    /////////////////////////// Instructor Category Route  /////////////////
    Route::controller(InstructorController::class)->prefix('instructor')->name('instructor.')->group(function(){
        Route::get('/all','AllInstructor')->name('all');
        Route::post('/update/status/{id}','UpdateInstructorStatus')->name('update.status');
    });

});

Route::get('admin/login', [AdminController::class, 'AdminLogin'])->name('admin.login');

///////////////////////////////////////////////////////////////////
//////////////////////////  Instructor Route  /////////////////////
///////////////////////////////////////////////////////////////////

Route::middleware(['auth', 'role:instructor'])->prefix('instructor')->name('instructor.')->group(function () {

    Route::controller(InstructorController::class)->group(function(){
        Route::get('/dashboard',  'InstructorDashboard')->name('dashboard');
        Route::post('/logout',  'InstructorLogout')->name('logout');
        Route::get('/profile',  'InstructorProfile')->name('profile');
        Route::post('/profile/store',  'InstructorProfileStore')->name('profile.store');
        Route::get('/change-password',  'InstructorChangePassword')->name('change-password');
        Route::post('/change-password/store',  'InstructorChangePasswordStore')->name('change-password.store');
    });

    /////////////////////////// Course Route  /////////////////
    Route::controller(CourseController::class)->prefix('course')->name('course.')->group(function(){
        Route::get('/all','AllCourses')->name('all');
        Route::get('/add','AddCourse')->name('add');
        Route::post('/add/store','StoreCourse')->name('add.store');
        Route::get('/edit/{id}','EditCourse')->name('edit');
        Route::post('/update','UpdateCourse')->name('update');
        // Route::get('/delete/{id}','DeleteCourse')->name('delete');
    });

});

Route::get('/instructor/login', [InstructorController::class, 'InstructorLogin'])->name('instructor.login');
Route::get('/instructor/register', [InstructorController::class, 'InstructorRegister'])->name('instructor.register');
Route::post('/instructor/register/store', [InstructorController::class, 'InstructorRegisterStore'])->name('instructor.register.store');
Route::get('/subcategories/{categoryId}', [SubCategoryController::class, 'getSubcategories'])->name('subcategories.get');

///////////////////////////////////////////////////////////////////
//////////////////////////  Frontend Route  /////////////////////
///////////////////////////////////////////////////////////////////

Route::get('/', [UserController::class, 'Index'])->name('index');

Route::middleware('auth')->prefix('dashboard')->name('user.')->group(function () {

    Route::controller(UserController::class)->group(function(){
        Route::get('/profile', 'UserProfile')->name('profile');
        Route::get('/profile/edit', 'UserProfileEdit')->name('profile.edit');
        Route::post('/profile/edit/store', 'UserProfileEditStore')->name('profile.edit.store');
        Route::post('/logout', 'UserLogout')->name('logout');
        Route::get('/change-password', 'UserChangePassword')->name('change-password');
        Route::post('/change-password/store', 'UserChangePasswordStore')->name('change-password.store');
    });

});

require __DIR__ . '/auth.php';
