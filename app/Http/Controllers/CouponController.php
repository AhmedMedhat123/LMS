<?php

namespace App\Http\Controllers;

use App\Http\Requests\CouponRequest;
use App\Models\Coupon;
use Illuminate\Http\Request;
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
}
