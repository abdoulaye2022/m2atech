<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\SoftDeletes;
use App\Models\User;
use App\Models\Status;

class Ad extends Model
{
    use SoftDeletes;

    protected $table = 'ads';
    protected $primaryKey = 'id';
    public $timestamps = true;
    protected $fillable = [
        'number',
        'title',
        'description',
        'space_available',
        'price_kilo',
        'departure_country',
        'arrival_country',
        'departure_city',
        'arrival_city',
        'departure_date',
        'arrival_date',
        'collection_date',
        'user_id',
        'status_id',
        'category_id',
        'photo',
        'slug',
        'approval_date',
        'rejection_date',
        'rejection_reason',
        'closed_date',
    ];

    protected $hidden = [
        'created_by',
        'updated_by',
        'deleted_at',
    ];

    protected $casts = [
        'price_kilo' => 'double',
        'space_available' => 'double',
        'departure_date' => 'datetime',
        'arrival_date' => 'datetime',
        'collection_date' => 'datetime',
        'approval_date' => 'datetime',
        'rejection_date' => 'datetime',
        'closed_date' => 'datetime',
        'created_at' => 'datetime',
        'updated_at' => 'datetime',
        'deleted_at' => 'datetime',
    ];

    public function user(): BelongsTo
    {
        return $this->belongsTo(User::class, 'user_id');
    }

    public function status(): BelongsTo
    {
        return $this->belongsTo(Status::class, 'status_id');
    }

    public function category(): BelongsTo
    {
        return $this->belongsTo(Category::class, 'category_id');
    }

    public function createdBy(): BelongsTo
    {
        return $this->belongsTo(User::class, 'created_by');
    }

    public function updatedBy(): BelongsTo
    {
        return $this->belongsTo(User::class, 'updated_by');
    }
}