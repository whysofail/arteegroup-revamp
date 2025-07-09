<?php

namespace App\Http\Controllers;

use App\Models\Division;

class DivisionController extends Controller
{
    public function show($slug)
    {
        $divisions = Division::where('slug', $slug)->first();
        if (!$divisions) {
            dd('Division not found:', $slug);
        }

        return inertia('division', [
            'title' => $divisions->title ?? '',
            'slug' => $divisions->slug ?? '',
            'name' => $divisions->name ?? '',
            'color' => $divisions->color ?? '',
            'seo' => [
                'title' => $divisions->seo_title ?? 'Arteegroup - Division',
                'description' => $divisions->seo_description ?? 'Explore our divisions and their unique offerings.',
                'image' => $divisions->seo_image ?? '',
            ],
            'blocks' => $divisions->blocks ?? [],
        ]);
    }
}
