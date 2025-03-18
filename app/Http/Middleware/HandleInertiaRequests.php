<?php

namespace App\Http\Middleware;

use App\Models\Category;
use App\Models\Course;
use App\Models\Wishlist;
use Illuminate\Http\Request;
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
            ],
            'admin' => $user && $user->role === 'admin' ? $user : null,
            'instructor' => $user && $user->role === 'instructor' ? $user : null,
            'flash' => [
                'message' => $request->session()->get('message'),
                'alertType' => $request->session()->get('alertType', 'success'),
            ],
            'allCategories' => Category::with('subcategories')->orderBy('category_name', 'ASC')->get(),

            'userWishlists' => $user ? Wishlist::where('user_id', $user->id)->pluck('course_id')->toArray() : [],


        ];
    }

}
