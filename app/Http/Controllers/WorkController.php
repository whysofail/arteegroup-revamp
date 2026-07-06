<?php

namespace App\Http\Controllers;

use App\Models\Work;
use Inertia\Inertia;

class WorkController extends Controller
{
    public function homepage()
    {
        $work = Work::query()
            ->select([
                'campaign_image',
                'name',
                'campaign',
                'campaign_name',
                'campaign_description',
                'slug',
            ])
            ->latest('updated_at')
            ->limit(10)
            ->get();

        return Inertia::render('homepage', [
            'work' => $work,
        ]);
    }

    public function show($slug)
    {
        $work = Work::where('slug', $slug)
            ->firstOrFail();

        return Inertia::render('work', [
            'division' => $work->divisions->pluck('name')->join(', ') ?? '',
            'name' => $work->name ?? '',
            'campaign' => $work->campaign ?? '',
            'campaignName' => $work->campaign_name ?? '',
            'campaignDescription' => $work->campaign_description ?? '',
            'campaignImage' => $work->campaign_image ?? '',
            'title' => $work->title ?? '',
            'slug' => $work->slug ?? '',
            'seo' => [
                'title' => $work->seo_title ?? '',
                'description' => $work->seo_description ?? '',
                'image' => $work->seo_image ?? '',
            ],
            'blocks' => $work->blocks ?? [],
        ]);
    }
}
