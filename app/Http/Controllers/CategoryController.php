<?php

namespace App\Http\Controllers;

use App\Http\Requests\CategoryRequest;
use App\Models\Category;
use Illuminate\Http\Request;


class CategoryController extends Controller
{
    public function AllCategory(){
        $category = Category::latest()->get();
        return inertia('Admin/Backend/Category/AllCategory',['category'=>$category]);
    }

    public function AddCategory(){
        return inertia('Admin/Backend/Category/AddCategory');
    }

    public function StoreCategory(CategoryRequest $request)
    {
        $validatedData = $request->validated();

        $data = [
            'category_name' => $validatedData['name'],
            'category_slug' => strtolower(str_replace(' ', '-', $validatedData['name'])),
        ];

        if ($request->hasFile('photo') && $request->file('photo')->isValid()) {
            $file = $request->file('photo');
            $filename = date('YmdHi') . '_' . $file->getClientOriginalName();
            $file->move(public_path('upload/category'), $filename);
            $data['category_image'] = $filename; // Save the file path in the database
        }

        Category::create($data);

        return redirect()->route('admin.category.all')->with([
            'message' => 'Category Added Successfully',
            'alertType' => 'success'
        ]);
    }
}
