<?php

namespace App\Http\Controllers;

use App\Http\Requests\SubCategoryRequest;
use App\Models\Category;
use App\Models\SubCategory;
use Illuminate\Http\Request;

class SubCategoryController extends Controller
{
    public function AllSubCategory(){
        $subcategory = SubCategory::with('category')->latest()->get();
        return inertia('Admin/Backend/SubCategory/AllSubCategory',['subcategory'=>$subcategory]);
    }

    public function AddSubCategory()
    {
        $category = Category::latest()->get();
        return inertia('Admin/Backend/SubCategory/AddSubCategory',['category'=>$category]);
    }

    public function StoreSubCategory(SubCategoryRequest $request)
    {
        SubCategory::insert([
            'category_id'=>$request->category_id,
            'subcategory_name'=>$request->subcategory_name,
            'subcategory_slug' => strtolower(str_replace(' ', '-', $request->subcategory_name)),
        ]);

        return redirect()->route('admin.subcategory.all')->with([
            'message' => 'Sub-Category Updated Successfully',
            'alertType' => 'success'
        ]);
    }

    public function EditSubCategory($id)
    {
        $category = Category::latest()->get();
        $subcategory = SubCategory::find($id);
        return inertia('Admin/Backend/SubCategory/EditSubCategory',['category'=>$category,'subcategory'=>$subcategory]);
    }

    public function UpdateSubCategory(SubCategoryRequest $request)
    {
        SubCategory::find($request->subcategory_id)->update([
            'category_id'=>$request->category_id,
            'subcategory_name'=>$request->subcategory_name,
            'subcategory_slug' => strtolower(str_replace(' ', '-', $request->subcategory_name)),
        ]);

        return redirect()->route('admin.subcategory.all')->with([
            'message' => 'Sub-Category Updated Successfully',
            'alertType' => 'success'
        ]);
    }

    public function DeleteSubCategory($id)
    {
        SubCategory::find($id)->delete();

        return redirect()->route('admin.subcategory.all')->with([
            'message' => 'Sub-Category Deleted Successfully',
            'alertType' => 'success'
        ]);
    }
}
