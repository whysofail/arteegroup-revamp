<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Homepage;
use Inertia\Inertia;

class HomepageController extends Controller
{
    public function index()
    {
        $homepage = Homepage::firstOrFail();

        return Inertia::render('homepage', [
            'seo' => [
                'title' => $homepage->seo_title,
                'description' => $homepage->seo_description,
                'image' => $homepage->seo_image,
            ],
            'blocks' => $homepage->blocks ?? [],
        ]);
    }
}
