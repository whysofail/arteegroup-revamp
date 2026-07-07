<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class SubCategory extends Model
{
    protected $table = 'sub_categories';
    protected $guarded = [];

    protected $fillable = [
        'category_id',
        'name',
        'slug',
        'description',
    ];

    public function category()
    {
        return $this->belongsTo(Category::class);
    }

    public function works()
    {
        return $this->belongsToMany(
            Work::class,
            'category_work',
            'sub_category_id',
            'work_id'
        );
    }
}
