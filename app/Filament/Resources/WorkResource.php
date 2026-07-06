<?php

namespace App\Filament\Resources;

use App\Filament\Fabricator\PageBlocks\CollageImage;
use App\Filament\Fabricator\PageBlocks\SectionParagaph;
use App\Filament\Resources\WorkResource\Pages;
use App\Models\Work;
use Faker\Provider\Image;
use Filament\Forms;
use Filament\Forms\Form;
use Filament\Resources\Resource;
use Filament\Tables;
use Filament\Tables\Table;
use Z3d0X\FilamentFabricator\Facades\FilamentFabricator;
use Z3d0X\FilamentFabricator\Forms\Components\PageBuilder;
use Filament\Forms\Components\Select;
use Filament\Forms\Components\TextInput;
use Filament\Forms\Components\Builder;
use App\Filament\Resources\WorkResource\RelationManagers\WorksRelationManager;
use Filament\Forms\Components\Group;
use App\Helpers\FormSchemaHelper;
use Filament\Forms\Components\Checkbox;
use Filament\Forms\Components\FileUpload;
use Filament\Forms\Components\Section;
use Filament\Forms\Components\Grid;
use Filament\Forms\Components\Placeholder;
use Illuminate\Support\HtmlString;

class WorkResource extends Resource
{
    protected static ?string $model = Work::class;

    protected static ?string $navigationIcon = 'heroicon-o-rectangle-stack';
    public static function shouldRegisterNavigation(): bool
    {
        return true; // hide from sidebar
    }

    public static function form(Form $form): Form
    {
        return $form
            ->schema([
                Grid::make(3)
                    ->columnSpanFull()
                    ->schema([
                        Group::make()
                            ->columnSpanFull()
                            ->schema([
                                Section::make('Work Details')
                                    ->schema([
                                        TextInput::make('name')
                                            ->label('Brand Name')
                                            ->required()
                                            ->maxLength(255),
                                        Select::make('divisions')
                                            ->label('Divisions')
                                            ->relationship('divisions', 'name')
                                            ->multiple()
                                            ->preload()
                                            ->searchable()
                                            ->required(),
                                        TextInput::make('campaign_name')
                                            ->label('Work Name')
                                            ->required()
                                            ->maxLength(255),
                                        TextInput::make('campaign_description')
                                            ->label('Work Description')
                                            ->required(),
                                        Select::make('categories')
                                            ->label('Categories')
                                            ->relationship('categories', 'name')
                                            ->multiple()
                                            ->preload()
                                            ->searchable()
                                            ->required(),
                                        Placeholder::make('current_highlight')
                                            ->label('Current Highlighted Work')
                                            ->visible(function (?Work $record) {
                                                return Work::query()
                                                    ->where('is_highlighted', true)
                                                    ->when($record, fn($q) => $q->whereKeyNot($record->id))
                                                    ->exists();
                                            })
                                            ->content(function (?Work $record) {
                                                $campaign = Work::query()
                                                    ->where('is_highlighted', true)
                                                    ->when($record, fn($q) => $q->whereKeyNot($record->id))
                                                    ->first();

                                                if (!$campaign) {
                                                    return 'No highlighted work.';
                                                }

                                                $url = route('filament.admin.resources.works.edit', $campaign);

                                                return new HtmlString("
                                                    <div class='space-y-1'>
                                                        <div><strong>{$campaign->title}</strong></div>
                                                        <div>{$campaign->campaign_name}</div>
                                                        <a
                                                            href='{$url}'
                                                            target='_blank'
                                                            class='text-primary-600 underline'
                                                        >
                                                            Open work
                                                        </a>
                                                    </div>
                                                ");
                                            }),

                                        Checkbox::make('is_highlighted')
                                            ->label('Highlight this work')
                                            ->helperText('Enabling this will replace the currently highlighted work.')
                                            ->default(false),
                                        FileUpload::make('campaign_image')
                                            ->label('Work Image')
                                            ->acceptedFileTypes(['image/*'])
                                            ->required()
                                            ->directory('/video')
                                            ->visibility('public')
                                            ->openable()
                                            ->helperText('Upload an image for the campaign.'),
                                        Section::make('Page Blocks')
                                            ->schema([
                                                Builder::make('blocks')
                                                    ->blocks([
                                                        SectionParagaph::getBlockSchema(),
                                                        CollageImage::getBlockSchema(),
                                                        // Add more blocks...
                                                    ]),
                                            ])
                                    ]),
                            ]),

                        Group::make()
                            ->columnSpanFull()
                            ->schema([
                                Section::make('SEO & Page Settings')
                                    ->schema([
                                        ...FormSchemaHelper::getSlugAndSeoSchema(),
                                    ])->collapsible(),
                            ]),
                    ]),
            ]);
    }




    public static function table(Table $table): Table
    {
        return $table
            ->columns([
                Tables\Columns\TextColumn::make('division.name')
                    ->label('Division Name')
                    ->searchable()
                    ->sortable(),
                Tables\Columns\TextColumn::make('created_at')
                    ->label('Created At')
                    ->dateTime()
                    ->sortable(),
                Tables\Columns\TextColumn::make('updated_at')
                    ->label('Updated At')
                    ->dateTime()
                    ->sortable(),
            ])->filters([
                    //
                ])->headerActions([

                ])->filters([
                    //
                ])->actions([
                    Tables\Actions\EditAction::make(),
                ])->bulkActions([
                    Tables\Actions\BulkActionGroup::make([
                        Tables\Actions\DeleteBulkAction::make(),
                    ]),
                ]);
    }

    public static function getRelations(): array
    {
        return [];
    }

    public static function getPages(): array
    {
        return [
            'index' => Pages\ListWorks::route('/'),
            'create' => Pages\CreateWork::route('/create'),
            'edit' => Pages\EditWork::route('/{record}/edit'),
        ];
    }
}
