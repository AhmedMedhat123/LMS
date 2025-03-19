<?php

namespace App\Http\Controllers;

use App\Models\Wishlist;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;

class WishlistController extends Controller
{

    public function wishlistToggle($id)
    {
        $user = Auth::user();

        if (!$user) {
            return redirect()->back()->with([
                'message' => 'Login First',
                'alertType' => 'error'
            ]);
        }

        $wishlist = Wishlist::where('user_id', $user->id)->where('course_id', $id)->first();


        if ($wishlist) {
            $wishlist->delete();
            return redirect()->back()->with([
                'message' => 'Course Removed from wishlist',
                'alertType' => 'success',
            ]);
        }
        else {
            Wishlist::create([
                'user_id' => $user->id,
                'course_id' => $id,
            ]);

            return redirect()->back()->with([
                'message' => 'Course Added to wishlist',
                'alertType' => 'success',
            ]);
        }
    }

    public function AllWishlist()
    {
        $wishlist = Wishlist::with('course.instructor')->where('user_id',Auth::id())->latest()->paginate(9);
        return Inertia('Frontend/Dashboard/Wishlist',['wishlist' => $wishlist]);
    }
}
