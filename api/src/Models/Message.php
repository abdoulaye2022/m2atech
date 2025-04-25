<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class Message extends Model
{
    protected $table = 'messages';

    // Clé primaire (optionnel si vous utilisez 'id' comme clé primaire)
    protected $primaryKey = 'id';

    // Activer/désactiver les timestamps (created_at et updated_at)
    public $timestamps = true;

    // Champs remplissables (mass assignable)
    protected $fillable = [
        'conversation_id', 
        'sender', 
        'message_text', 
        'created_at'
    ];

    protected $hidden = [
        'created_at'
    ];
}