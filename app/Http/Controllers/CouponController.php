<?php

namespace App\Http\Controllers;

use App\Http\Requests\CouponRequest;
use App\Models\Cart;
use App\Models\Coupon;
use Carbon\Carbon;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Session;
use Inertia\Inertia;
use Illuminate\Support\Str;


class CouponController extends Controller
{
    public function AdminAllCoupon()
    {
        $coupons = Coupon::latest()->get();
        return Inertia('Admin/Backend/Coupon/AllCoupon',['coupons' => $coupons]);
    }

    public function AdminAddCoupon()
    {
        return Inertia('Admin/Backend/Coupon/AddCoupon');
    }

    public function StoreCoupon(CouponRequest $request)
    {
        Coupon::create([
            'name' => $request->name,
            'coupon_slug' => Str::slug($request->name),
            'discount' => $request->discount,
            'validity' => $request->validity,
            'status' => 1,
        ]);

        return redirect()->route('admin.coupon.all')->with([
            'message' => 'Coupon added successfully',
            'alertType' => 'success'
        ]);
    }

    public function AdminEditCoupon($id)
    {
        $coupon = Coupon::FindOrFail($id);

        return Inertia('Admin/Backend/Coupon/EditCoupon',['coupon'=>$coupon]);
    }

    public function AdminUpdateCoupon(CouponRequest $request)
    {
        Coupon::find($request->id)->update([
            'name' => $request->name,
            'coupon_slug' => Str::slug($request->name),
            'discount' => $request->discount,
            'validity' => $request->validity,
            'status' => 1,
        ]);

        return redirect()->route('admin.coupon.all')->with([
            'message' => 'Coupon updated successfully',
            'alertType' => 'success'
        ]);
    }

    public function AdminDeleteCoupon($id)
    {
        Coupon::find($id)->delete();

        return redirect()->route('admin.coupon.all')->with([
            'message' => 'Coupon deleted successfully',
            'alertType' => 'success'
        ]);
    }

    public function ApplyCoupon(Request $request)
    {
        $request->validate([
            'coupon_name' => 'required|string',
        ]);

        $coupon = Coupon::where('name', $request->coupon_name)
                        ->where('validity', '>=', Carbon::today())
                        ->where('status', 1)
                        ->first();

        if ($coupon) {
            $cartTotal = Cart::where('user_id', Auth::id())->sum('price');
            $discountAmount = round($cartTotal * ($coupon->discount / 100));
            $finalTotal = round($cartTotal - $discountAmount);

            // Store coupon details in session
            Session::put('coupon', [
                'coupon_name' => $coupon->name,
                'coupon_discount' => $coupon->discount,
                'discount_amount' => $discountAmount,
                'total_amount' => $finalTotal
            ]);

            return redirect()->back()->with([
                'message' => 'Coupon Applied Successfully',
                'alertType' => 'success',
                'coupon' => Session::get('coupon')
            ]);
        } else {
            return redirect()->back()->with([
                'message' => 'Invalid or Expired Coupon',
                'alertType' => 'error'
            ]);
        }
    }
}
