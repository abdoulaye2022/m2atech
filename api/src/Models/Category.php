<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Category extends Model
{
    protected $table = 'categories';
    protected $primaryKey = 'id';
    public $timestamps = true;
    protected $fillable = [
        'name', 'description'
    ];

    protected $hiddens = [
        'created_at', 'updated_at'
    ];
}