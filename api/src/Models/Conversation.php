<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use App\Models\Ad;

class Conversation extends Model
{
    protected $table = 'conversations';

    // Clé primaire (optionnel si vous utilisez 'id' comme clé primaire)
    protected $primaryKey = 'id';

    // Activer/désactiver les timestamps (created_at et updated_at)
    public $timestamps = true;

    // Champs remplissables (mass assignable)
    protected $fillable = [
         'ad_id', 
         'user_name', 
         'last_message',
    ];

    protected $hidden = [
        'created_at', 
        'updated_at'
    ];

    public function ad(): BelongsTo
    {
        return $this->belongsTo(Ad::class, 'ad_id');
    }
}