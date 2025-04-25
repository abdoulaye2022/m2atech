<?php
// src/Models/Employee.php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class User extends Model
{
    protected $table = 'users';
    protected $primaryKey = 'id';
    public $timestamps = true;

    protected $fillable = [
        'first_name', 
        'last_name', 
        'country', 
        'city', 
        'province',
        'phone', 
        'email', 
        'password',
        'role', 
        'status', 
        'isVerified'
    ];

    protected $hidden = [
        'password',
        'created_at', 
        'updated_at'
    ];

    protected $casts = [
        'isVerified' => 'integer'
    ];

    public static function findByEmail(string $email): ?User
    {
        return static::where('email', $email)->first();
    }

    public static function findByResetToken(string $email): ?User
    {
        return static::where('reset_token', $email)->first();
    }
}