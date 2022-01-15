<?php

namespace App\Models;

use Spatie\Tags\HasTags;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class Bookmark extends Model
{
    use HasFactory, HasTags;

    /**
     * @var array
     */
    protected $fillable = ['title', 'description', 'url'];

}
