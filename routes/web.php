<?php

use App\Http\Controllers\AdminController;
use App\Http\Controllers\CartController;
use App\Http\Controllers\CategoryController;
use App\Http\Controllers\CouponController;
use App\Http\Controllers\CourseController;
use App\Http\Controllers\CourseLectureController;
use App\Http\Controllers\FrontendController;
use App\Http\Controllers\InstructorController;
use App\Http\Controllers\PaymentController;
use App\Http\Controllers\ProfileController;
use App\Http\Controllers\QuestionController;
use App\Http\Controllers\ReviewController;
use App\Http\Controllers\SubCategoryController;
use App\Http\Controllers\UserController;
use App\Http\Controllers\WishlistController;
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
})->middleware(['auth', 'role:user', 'verified'])->name('dashboard');

Route::middleware('auth','role:user')->group(function () {
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

    //////////////////////////// Courses Route  ///////////////////
    Route::controller(CourseController::class)->prefix('course')->name('course.')->group(function(){
        Route::get('/all','AdminAllCourses')->name('all');
        Route::post('/update/status/{id}','UpdateCourseStatus')->name('update.status');
        Route::get('/details/{id}','AdminCourseDetails')->name('details');
    });

    //////////////////////////// Coupon Route  ///////////////////
    Route::controller(CouponController::class)->prefix('coupon')->name('coupon.')->group(function(){
        Route::get('/all','AdminAllCoupon')->name('all');
        Route::get('/add','AdminAddCoupon')->name('add');
        Route::post('/add/store','StoreCoupon')->name('add.store');
        Route::get('/edit/{id}','AdminEditCoupon')->name('edit');
        Route::post('/update','AdminUpdateCoupon')->name('update');
        Route::get('/delete/{id}','AdminDeleteCoupon')->name('delete');
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
        Route::get('/delete/{id}','DeleteCourse')->name('delete');
        Route::post('/add/section/store','StoreCourseSection')->name('section.add.store');
        Route::get('/delete/section/{id}','DeleteCourseSection')->name('section.delete');

    });


    /////////////////////////// Course Lecture Route  /////////////////
    Route::controller(CourseLectureController::class)->prefix('course/lecture')->name('course.lecture.')->group(function(){
        Route::get('/all/{id}','AllCourseLecture')->name('all');
        Route::get('/add/{course_id}/{section_id}','AddCourseLectures')->name('add');
        Route::post('/add/store','StoreCourseLectures')->name('add.store');
        Route::get('/edit/{course_id}/{section_id}/{lecture_id}','EditCourseLecture')->name('edit');
        Route::post('/update','UpdateCourseLecture')->name('update');
        Route::get('/delete/{id}','DeleteCourseLecture')->name('delete');
    });

});

Route::get('/instructor/login', [InstructorController::class, 'InstructorLogin'])->name('instructor.login');
Route::get('/instructor/register', [InstructorController::class, 'InstructorRegister'])->name('instructor.register');
Route::post('/instructor/register/store', [InstructorController::class, 'InstructorRegisterStore'])->name('instructor.register.store');
Route::get('/subcategories/{categoryId}', [SubCategoryController::class, 'getSubcategories'])->name('subcategories.get');

///////////////////////////////////////////////////////////////////
//////////////////////////  Frontend Route  ///////////////////////
///////////////////////////////////////////////////////////////////

Route::controller(FrontendController::class)->group(function(){
    Route::get('/course/details/{id}/{slug}','CourseDetails')->name('course.details');
    Route::get('/category/all/{id}/{slug}','CategoryCourse')->name('category.all');
    Route::get('/subcategory/all/{id}/{slug}','SubcategoryCourse')->name('subcategory.all');
    Route::get('/instructor/details/{id}/','InstructorDetails')->name('instructor.details');
});



///////////////////////////////////////////////////////////////////
//////////////////////////  User Dashboard Route  /////////////////
///////////////////////////////////////////////////////////////////

Route::middleware('auth', 'role:user')->prefix('dashboard')->name('user.')->group(function () {

    Route::controller(UserController::class)->group(function(){
        Route::get('/profile', 'UserProfile')->name('profile');
        Route::get('/profile/edit', 'UserProfileEdit')->name('profile.edit');
        Route::post('/profile/edit/store', 'UserProfileEditStore')->name('profile.edit.store');
        Route::post('/logout', 'UserLogout')->name('logout');
        Route::get('/change-password', 'UserChangePassword')->name('change-password');
        Route::post('/change-password/store', 'UserChangePasswordStore')->name('change-password.store');
    });

    Route::controller(WishlistController::class)->prefix('wishlist')->name('wishlist.')->group(function(){
        Route::get('/all','AllWishlist')->name('all');
    });

    Route::get('/my/courses',[CourseController::class, 'MyCourses'])->name('my.courses');

});

///////////////////////////////////////////////////////////////////
//////////////////////////  User Route  ///////////////////////////
///////////////////////////////////////////////////////////////////
Route::middleware(['auth'])->name('user.')->group(function () {

    Route::controller(CartController::class)->prefix('cart')->name('cart.')->group(function(){
        Route::post('/add/{id}/{instructor_id}','AddToCart')->name('add');
        Route::post('/delelte/{id}','DeleteFromCart')->name('delete');
        Route::get('/all','AllCart')->name('all');
    });

    Route::post('/coupon/{coupon_name}', [CouponController::class, 'ApplyCoupon'])->name('coupon.apply');
    Route::post('/remove-coupon', [CouponController::class, 'removeCoupon'])->name('coupon.remove');

    Route::get('/checkout',[FrontendController::class,'CheckoutPage'])->name('checkout');
    Route::post('/payment',[PaymentController::class, 'payment'])->name('payment');

    Route::get('/course/view/{id}/{slug}',[CourseController::class, 'CourseView'])->name('course.view');

    Route::post('/question',[QuestionController::class, 'UserAddQuestion'])->name('question.add');

    Route::post('/question/reply',[QuestionController::class, 'UserReplyQuestion'])->name('question.reply');
});

Route::get('/check-session', function () {
    return response()->json([
        'session' => session()->all()
    ]);
});

Route::get('/debug-session', function () {
    return response()->json([
        'session_id' => session()->getId(),
        'session' => session()->all(),
    ]);
});

Route::post('/wishlist/{id}',[WishlistController::class, 'wishlistToggle'])->name('wishlist.toggle');

Route::post('/Review',[ReviewController::class, 'StoreReview'])->name('review.store');

Route::get('/', [UserController::class, 'Index'])->name('index');

require __DIR__ . '/auth.php';
