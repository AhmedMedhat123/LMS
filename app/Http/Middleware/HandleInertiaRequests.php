<?php

namespace App\Http\Middleware;

use App\Models\Cart;
use App\Models\Category;
use App\Models\Course;
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
            'coupon' => Session('coupon', null),

        ];
    }

}
