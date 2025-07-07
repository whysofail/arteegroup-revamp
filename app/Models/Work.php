<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Spatie\MediaLibrary\HasMedia;
use Spatie\MediaLibrary\InteractsWithMedia;
use App\Models\Division;

class Work extends Model implements HasMedia
{
    use InteractsWithMedia;
    protected $guarded = [];
    protected $casts = [
        'blocks' => 'array',
    ];

    public function division()
    {
        return $this->belongsTo(Division::class);
    }

    public function getRouteKeyName(): string
    {
        return 'slug';
    }

}
