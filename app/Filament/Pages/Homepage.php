<?php

namespace App\Filament\Pages;

use Filament\Pages\Page;
use Filament\Forms\Components\TextInput;
use Filament\Forms\Components\Textarea;
use Filament\Forms\Components\FileUpload;
use Filament\Forms\Components\Section;
use Filament\Forms\Components\Builder;
use Illuminate\Support\Facades\Storage;
use App\Filament\Fabricator\PageBlocks\Hero;
use Filament\Forms\Components\Grid;



class Homepage extends Page
{
    protected static ?string $navigationIcon = 'heroicon-o-home';
    protected static string $view = 'filament.pages.homepage';

    public array $data = [];

    public function mount(): void
    {
        if (Storage::exists('homepage.json')) {
            $this->form->fill(json_decode(Storage::get('homepage.json'), true));
        } else {
            $this->form->fill([
                'seo_title' => 'Welcome to Our Site',
                'seo_description' => 'Company profile site description...',
                'hero_title' => 'We Build Awesome Things',
            ]);
        }
    }

    protected function getFormSchema(): array
    {
        return [
            Grid::make()
                ->columns([
                    'default' => 3, // total columns
                ])
                ->schema([
                    Grid::make()->schema([
                        Section::make('Page Blocks')
                            ->schema([
                                Builder::make('blocks')
                                    ->blocks([
                                        Hero::getBlockSchema(),
                                        // Add more blocks...
                                    ]),
                            ]),
                    ])->columnSpan(2),

                    // ✅ Sidebar (1/3 width)
                    Grid::make()->schema([
                        Section::make('SEO Settings')
                            ->schema([
                                TextInput::make('seo_title')
                                    ->label('SEO Title'),

                                Textarea::make('seo_description')
                                    ->label('Meta Description'),

                                FileUpload::make('seo_image')
                                    ->directory('seo')
                                    ->image()
                                    ->label('OpenGraph Image'),
                            ]),
                    ])->columnSpan(1),
                ]),
        ];
    }


    public function submit(): void
    {
        Storage::put('homepage.json', json_encode($this->form->getState(), JSON_PRETTY_PRINT));
        $this->notify('success', 'Homepage content saved!');
    }
}
