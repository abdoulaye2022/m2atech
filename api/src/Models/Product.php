<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class Product extends Model
{
    protected $table = 'products';

    // Clé primaire (optionnel si vous utilisez 'id' comme clé primaire)
    protected $primaryKey = 'id';

    // Activer/désactiver les timestamps (created_at et updated_at)
    public $timestamps = true;

    // Champs remplissables (mass assignable)
    protected $fillable = [
        'name', 
        'description', 
        'price', 
        'image_url', 
        'category', 
        'is_available'
    ];

    protected $casts = [
        'price' => 'double',
    ];

}