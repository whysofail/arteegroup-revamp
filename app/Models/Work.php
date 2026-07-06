<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Spatie\MediaLibrary\HasMedia;
use Spatie\MediaLibrary\InteractsWithMedia;
use App\Models\Division;
use Illuminate\Validation\ValidationException;

class Work extends Model implements HasMedia
{
    use InteractsWithMedia;
    protected $guarded = [];
    protected $casts = [
        'blocks' => 'array',
        'is_highlighted' => 'boolean',
    ];

    public function divisions()
    {
        return $this->belongsToMany(Division::class);
    }

    public function getRouteKeyName(): string
    {
        return 'slug';
    }
}
