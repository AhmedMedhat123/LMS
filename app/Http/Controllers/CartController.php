<?php

namespace App\Http\Controllers;

use App\Models\Cart;
use App\Models\Course;
use App\Models\Order;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;

class CartController extends Controller
{
    public function AddToCart($id,$instructorId)
    {
        $course = Course::findOrFail($id);

        $existingOrder = Order::where('user_id', Auth::user()->id)
            ->where('course_id', $id)
            ->first();

        if ($existingOrder) {
            return redirect()->back()->with([
                'message' => 'You have already enrolled in this course',
                'alertType' => 'error',
            ]);
        }


        if (Auth::check()) {
            // Check if course already in cart
            $existingCart = Cart::where('user_id', Auth::id())
                                ->where('course_id', $id)
                                ->first();

            if ($existingCart) {
                return redirect()->back()->with([
                    'message' => 'Course is already in your cart',
                    'alertType' => 'error'
                ]);
            }

            Cart::create([
                'user_id' => Auth::id(),
                'course_id' => $id,
                'instructor_id' => $instructorId,
                'price' => $course->discount_price ?? $course->selling_price,
            ]);

            return redirect()->back()->with([
                'message' => 'Course added to your cart',
                'alertType' => 'success'
            ]);
        }
        else {
            return redirect()->route('login')->with([
                'message' => 'Please login to add items to cart',
                'alertType' => 'error'
            ]);
        }
    }

    public function DeleteFromCart($id){
        $cartItem = Cart::findOrFail($id);
        $cartItem->delete();
        return redirect()->back()->with([
            'message' => 'Course removed from shopping cart',
            'alertType' => 'success',
        ]);
    }

    public function AllCart()
    {
        return Inertia('Frontend/Cart');
    }
}
