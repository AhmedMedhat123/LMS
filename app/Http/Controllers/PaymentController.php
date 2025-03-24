<?php

namespace App\Http\Controllers;

use App\Http\Requests\PaymentRequest;
use App\Models\Cart;
use App\Models\Order;
use App\Models\Payment;
use Carbon\Carbon;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class PaymentController extends Controller
{
    public function payment(PaymentRequest $request)
    {
        foreach ($request->courses as $course) {
            $existingOrder = Order::where('user_id', Auth::user()->id)
                ->where('course_id', $course['course_id'])
                ->first();

            if ($existingOrder) {
                return redirect()->back()->with([
                    'message' => 'You have already enrolled in this course',
                    'alertType' => 'error',
                ]);
            }
        }

        $paymentData = [
            'name' => $request->name,
            'email' => $request->email,
            'phone' => $request->phone,
            'address' => $request->address,
            'coupon_name' => $request->coupon_name,
            'total_amount' => $request->total_amount,
            'payment_type' => $request->payment_type,
            'status' => 'pending',
            'invoice_no' => 'EOS' . mt_rand(10000000, 99999999),
            'order_date' => Carbon::now()->format('d F Y'),
            'order_month' => Carbon::now()->format('F'),
            'order_year' => Carbon::now()->format('Y'),
        ];

        $payment = Payment::create($paymentData);

        foreach ($request->courses as $course) {

            Order::create([
                'payment_id' => $payment->id,
                'user_id' => Auth::user()->id,
                'course_id' => $course['course_id'],
                'instructor_id' => $course['instructor_id'],
                'course_title' => $course['course_title'],
                'price' => $course['price'],
            ]);
        }

        Cart::where('user_id', Auth::id())->delete();

        return redirect()->route('index')->with([
            'message' => 'Payment Submitted Successfully',
            'alertType' => 'success',
        ]);
    }
}
