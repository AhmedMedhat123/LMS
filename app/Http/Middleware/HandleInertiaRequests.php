<?php

namespace App\Http\Middleware;

use App\Models\Cart;
use App\Models\Category;
use App\Models\Course;
use App\Models\Order;
use App\Models\Question;
use App\Models\Wishlist;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Session;
use Inertia\Middleware;

class HandleInertiaRequests extends Middleware
{
    /**
     * The root template that is loaded on the first page visit.
     *
     * @var string
     */
    protected $rootView = 'app';

    /**
     * Determine the current asset version.
     */
    public function version(Request $request): ?string
    {
        return parent::version($request);
    }

    /**
     * Define the props that are shared by default.
     *
     * @return array<string, mixed>
     */
    public function share(Request $request): array
    {
        $user = $request->user();
        $userId = $user ? $user->id : null;

        $latestOrders = Order::where('user_id', $userId)
            ->select('course_id', \DB::raw('MAX(id) as max_id'))
            ->groupBy('course_id');

        $mycourse = Order::with('course')->joinSub($latestOrders, 'latest_order', function ($join) {
            $join->on('orders.id', '=', 'latest_order.max_id');
        })->orderBy('latest_order.max_id', 'DESC')->get();

        return [
            ...parent::share($request),
            'auth' => [
                'user' => $user,
                'session' => session()->all(),
            ],
            'admin' => $user && $user->role === 'admin' ? $user : null,
            'instructor' => $user && $user->role === 'instructor' ? $user : null,
            'flash' => [
                'message' => $request->session()->get('message'),
                'alertType' => $request->session()->get('alertType', 'success'),
            ],
            'allCategories' => Category::with('subcategories')->orderBy('category_name', 'ASC')->get(),

            'userWishlists' => $user ? Wishlist::where('user_id', $user->id)->pluck('course_id')->toArray() : [],

            'cartItems' => Cart::with('user','instructor','course')->where('user_id', Auth::id())->get(),
            'cartTotalPrice' => Cart::where('user_id', Auth::id())->sum('price'),
            'cartTotalDiscount' => Cart::join('courses', 'carts.course_id', '=', 'courses.id')
                                    ->where('user_id', Auth::id())
                                    ->sum(DB::raw('CASE
                                        WHEN courses.discount_price IS NOT NULL
                                        THEN courses.selling_price
                                        END'
                                    )),
            'coupon' => session()->get('coupon', null),

            'mycourse' => $mycourse,

            'wishlists' => Wishlist::with('course.instructor')->where('user_id',$userId)->get(),

            'questions' => Question::with('user', 'parent' , 'replies.user')->get(),
        ];
    }

}
