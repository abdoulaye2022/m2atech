<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Status extends Model
{
    protected $table = 'status';
    protected $primaryKey = 'id';
    public $timestamps = true;
    protected $fillable = [
        'name', 
        'description'
    ];

    protected $hiddens = [
        'created_at', 
        'updated_at', 
        'deleted_at'
    ];
}