<?php

namespace Tests\Feature;

use App\Models\Category;
use App\Models\User;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Foundation\Testing\WithFaker;
use Illuminate\Http\UploadedFile;
use Illuminate\Support\Facades\Storage;
use Tests\TestCase;

class CategoryControllerTest extends TestCase
{
    use RefreshDatabase;

    private User $admin;

    protected function setUp(): void
    {
        parent::setUp();
        $this->admin = $this->createUser(role: 'admin');
    }

    private function createUser(string $role = 'user'): User
    {
        return User::factory()->create([
            'role' => $role
        ]);
    }

    public function test_render_all_categories_page(){
        Category::factory()->count(3)->create();

        $response = $this->actingAs($this->admin)->get(route('admin.category.all'));

        $response->assertInertia(function ($page) {
            $page->component('Admin/Backend/Category/AllCategory')
                ->has('category', 3);
        });
    }

    public function test_render_add_category_page()
    {
        $response = $this->actingAs($this->admin)->get(route('admin.category.add'));

        $response->assertInertia(function ($page) {
            $page->component('Admin/Backend/Category/AddCategory');
        });
    }

    public function test_render_edit_category_page()
    {
        $category = Category::factory()->create();

        $response = $this->actingAs($this->admin)->get(route('admin.category.edit', $category->id));

        $response->assertInertia(function ($page) use ($category) {
            $page->component('Admin/Backend/Category/EditCategory')
                ->where('category.id', $category->id);
        });
    }

    public function test_stores_a_new_category()
    {
        // Storage::fake('public');

        // $file = UploadedFile::fake()->image('category.jpg');

        $response = $this->actingAs($this->admin)->post(route('admin.category.add.store'), [
            'name' => 'New Category',
            // 'photo' => $file,
        ]);

        $response->assertRedirect(route('admin.category.all'));
        $this->assertDatabaseHas('categories', [
            'category_name' => 'New Category',
            'category_slug' => 'new-category',
            // 'category_image' => date('YmdHi') . '_' . $file->getClientOriginalName(),
        ]);

    }

    public function test_updates_a_category()
    {
        // Storage::fake('public');

        $category = Category::factory()->create([
            'category_name' => 'Old Category',
        ]);

        // $newFile = UploadedFile::fake()->image('new-category.jpg');

        $response = $this->actingAs($this->admin)->post(route('admin.category.update'), [
            'id' => $category->id,
            'name' => 'Updated Category',
            // 'photo' => $newFile,
        ]);

        $response->assertRedirect(route('admin.category.all'));
        $this->assertDatabaseHas('categories', [
            'id' => $category->id,
            'category_name' => 'Updated Category',
            'category_slug' => 'updated-category',
        ]);
    }

    public function test_deletes_a_category()
    {
        $category = Category::factory()->create([
            'category_image' => 'upload/category/sample.jpg',
        ]);

        Storage::fake('public');
        Storage::put('upload/category/sample.jpg', 'test');

        $response = $this->actingAs($this->admin)->get(route('admin.category.delete', $category->id));

        $response->assertRedirect(route('admin.category.all'));
        $this->assertDatabaseMissing('categories', [
            'id' => $category->id,
        ]);

        Storage::disk('public')->assertMissing('upload/category/sample.jpg');
    }
}
