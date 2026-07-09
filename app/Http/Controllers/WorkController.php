<?php

namespace App\Http\Controllers;

use App\Models\Work;
use Inertia\Inertia;
use Illuminate\Http\Request;
use App\Models\Category;

class WorkController extends Controller
{
    public function homepage(Request $request)
    {
        $work = Work::query()
            ->select([
                'id',
                'campaign_image',
                'name',
                'campaign',
                'campaign_name',
                'campaign_description',
                'slug',
            ])
            ->with([
                'subCategories:id,category_id,name,slug,description',
                'subCategories.category:id,name',
            ])
            ->when($request->filled('category'), function ($query) use ($request) {
                $query->whereHas('subCategories.category', function ($q) use ($request) {
                    $q->where('slug', $request->category);
                });
            })
            ->when($request->filled('subcategory'), function ($query) use ($request) {
                $query->whereHas('subCategories', function ($q) use ($request) {
                    $q->where('slug', $request->subcategory);
                });
            })
            ->latest('updated_at')
            ->paginate(100)
            ->withQueryString();

        $categories = Category::query()
            ->orderBy('name')
            ->get([
                'id',
                'name',
                'slug',
            ]);

        return Inertia::render('work', [
            'work' => $work,
            'categories' => $categories,
            'filters' => $request->only([
                'category',
                'subcategory',
            ]),
        ]);
    }
    public function show($slug)
    {
        $work = Work::where('slug', $slug)
            ->firstOrFail();

        return Inertia::render('work.bak', [
            'division' => $work->divisions->pluck('name')->join(', ') ?? '',
            'subCategories' => $work->subCategories->pluck('name')->join(', ') ?? '',
            'category' => $work->subCategories->pluck('category.name')->join(', ') ?? '',
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
