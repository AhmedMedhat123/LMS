<?php

namespace Tests\Feature;

use App\Models\Category;
use App\Models\SubCategory;
use App\Models\User;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Foundation\Testing\WithFaker;
use Tests\TestCase;

class SubCategoryControllerTest extends TestCase
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

    public function test_displays_all_subcategories_page()
    {
        $response = $this->actingAs($this->admin)->get(route('admin.subcategory.all'));

        $response->assertStatus(200)
            ->assertInertia(fn ($page) => $page
                ->component('Admin/Backend/SubCategory/AllSubCategory'));
    }

    public function test_displays_add_subcategory_page()
    {
        $response = $this->actingAs($this->admin)->get(route('admin.subcategory.add'));

        $response->assertStatus(200)
            ->assertInertia(fn ($page) => $page
                ->component('Admin/Backend/SubCategory/AddSubCategory'));
    }

    public function test_displays_edit_subcategory_page()
    {
        $category = Category::factory()->create();
        $subcategory = SubCategory::factory()->create([
            'category_id' => $category->id,
        ]);

        $response = $this->actingAs($this->admin)->get(route('admin.subcategory.edit', $subcategory->id));

        $response->assertStatus(200)
            ->assertInertia(fn ($page) => $page
                ->component('Admin/Backend/SubCategory/EditSubCategory'));
    }

    public function test_can_store_a_new_subcategory()
    {
        $category = Category::factory()->create();

        $response = $this->actingAs($this->admin)->post(route('admin.subcategory.add.store'), [
            'category_id' => $category->id,
            'subcategory_name' => 'New SubCategory'
        ]);

        $this->assertDatabaseHas('sub_categories', [
            'category_id' => $category->id,
            'subcategory_name' => 'New SubCategory',
            'subcategory_slug' => 'new-subcategory'
        ]);

        $response->assertRedirect(route('admin.subcategory.all'))
            ->assertSessionHas('message', 'Sub-Category Updated Successfully');
    }

    public function test_can_update_a_subcategory()
    {
        $category = Category::factory()->create();
        $subcategory = SubCategory::factory()->create([
            'category_id' => $category->id,
            'subcategory_name' => 'Old Name',
        ]);

        $response = $this->actingAs($this->admin)->post(route('admin.subcategory.update'), [
            'subcategory_id' => $subcategory->id,
            'category_id' => $category->id,
            'subcategory_name' => 'Updated SubCategory'
        ]);

        $this->assertDatabaseHas('sub_categories', [
            'category_id' => $category->id,
            'subcategory_name' => 'Updated SubCategory',
            'subcategory_slug' => 'updated-subcategory'
        ]);

        $response->assertRedirect(route('admin.subcategory.all'))
            ->assertSessionHas('message', 'Sub-Category Updated Successfully');
    }

    public function test_can_delete_a_subcategory()
    {
        $subcategory = SubCategory::factory()->create([
            'category_id' => Category::factory()->create(),
        ]);

        $response = $this->actingAs($this->admin)->get(route('admin.subcategory.delete', $subcategory->id));

        $this->assertDatabaseMissing('sub_categories', [
            'id' => $subcategory->id
        ]);

        $response->assertRedirect(route('admin.subcategory.all'))
            ->assertSessionHas('message', 'Sub-Category Deleted Successfully');
    }
}
