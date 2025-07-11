<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Spatie\MediaLibrary\HasMedia;
use Spatie\MediaLibrary\InteractsWithMedia;
use App\Models\Work;

class Division extends Model implements HasMedia
{
    use InteractsWithMedia;
    protected $guarded = [];
    protected $casts = [
        'blocks' => 'array', // 👈 THIS is required
    ];


    public function works()
    {
        return $this->hasMany(Work::class);
    }

    public function getRouteKeyName(): string
    {
        return 'slug';
    }

}
