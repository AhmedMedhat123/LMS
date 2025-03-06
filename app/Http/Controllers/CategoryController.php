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

    public function EditCategory($id)
    {
        $category = Category::findorFail($id);
        return inertia('Admin/Backend/Category/EditCategory',['category'=>$category]);
    }

    public function UpdateCategory(CategoryRequest $request)
    {
        $validatedData = $request->validated();

        $category = Category::findOrFail($request->id);

        $data = [
            'category_name' => $validatedData['name'],
            'category_slug' => strtolower(str_replace(' ', '-', $validatedData['name'])),
        ];

        // Check if a new image is uploaded
        if ($request->hasFile('photo') && $request->file('photo')->isValid()) {
            // Delete the old image if it exists
            if ($category->category_image && file_exists(public_path('upload/category/' . $category->category_image))) {
                unlink(public_path('upload/category/' . $category->category_image));
            }

            // Upload the new image
            $file = $request->file('photo');
            $filename = date('YmdHi') . '_' . $file->getClientOriginalName();
            $file->move(public_path('upload/category'), $filename);
            $data['category_image'] = $filename;
        }

        $category->update($data);

        return redirect()->route('admin.category.all')->with([
            'message' => 'Category Updated Successfully',
            'alertType' => 'success'
        ]);
    }
    public function DeleteCategory($id)
    {
        $category = Category::findOrFail($id);

        // Delete the category image if it exists
        if ($category->category_image && file_exists(public_path('upload/category/' . $category->category_image))) {
            unlink(public_path('upload/category/' . $category->category_image));
        }

        // Delete the category from the database
        $category->delete();

        return redirect()->route('admin.category.all')->with([
            'message' => 'Category Deleted Successfully',
            'alertType' => 'success'
        ]);
    }
}
