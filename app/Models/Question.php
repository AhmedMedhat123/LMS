<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Question extends Model
{
    use HasFactory;
    protected $guarded = [];

    public function user()
    {
        return $this->belongsTo(User::class);
    }

    // A question can have many replies
    public function replies()
    {
        return $this->hasMany(Question::class, 'parent_id');
    }

    // A reply belongs to a parent question
    public function parent()
    {
        return $this->belongsTo(Question::class, 'parent_id');
    }
}
