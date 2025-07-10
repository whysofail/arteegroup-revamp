<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Work;
use App\Models\Division;
use Inertia\Inertia;

class WorkController extends Controller
{
    public function homepage()
    {
        $work = Work::get(['campaign_image', 'name', 'campaign', 'campaign_name', 'campaign_description'])
            ->orderByDesc('updated_at')
            ->take(4)
            ->get();

        return Inertia::render('homepage', [
            'work' => $work,
        ]);
    }
}