<?php

namespace App\Filament\Resources;


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
use App\Filament\Resources\WorkResource\RelationManagers\WorksRelationManager;
use Filament\Forms\Components\Group;
use App\Helpers\FormSchemaHelper;
use Filament\Forms\Components\Checkbox;
use Filament\Forms\Components\FileUpload;
use Filament\Forms\Components\Section;
use Filament\Forms\Components\Grid;

class WorkResource extends Resource
{
    protected static ?string $model = Work::class;
    public static ?string $navigationGroup = 'Organization';

    protected static ?string $navigationIcon = 'heroicon-o-rectangle-stack';
    public static function shouldRegisterNavigation(): bool
    {
        return false; // hide from sidebar
    }

    public static function form(Form $form): Form
    {
        return $form
            ->schema([
                Grid::make(3)
                    ->columns(2)
                    ->schema([
                        Group::make()
                            ->columnSpan(1)
                            ->schema([
                                TextInput::make('name')
                                    ->label('Brand Name')
                                    ->required()
                                    ->maxLength(255),
                                TextInput::make('campaign')
                                    ->label('Campaign Category')
                                    ->required()
                                    ->maxLength(255),
                                TextInput::make('campaign_name')
                                    ->label('Campaign Name')
                                    ->required()
                                    ->maxLength(255),
                                TextInput::make('campaign_description')
                                    ->label('Campaign Description')
                                    ->required(),
                                Checkbox::make('is_highlighted')
                                    ->label('Highlight this campaign')
                                    ->helperText('Only one campaign can be highlighted at a time.')
                                    ->disabled(function (?Work $record) {
                                        // cheeck if there is already one highlighted campaign but not including the current record
                                        $highlighted = Work::where('is_highlighted', true);

                                        // if edit, don't count yourself
                                        if ($record) {
                                            $highlighted->where('id', '!=', $record->id);
                                        }

                                        return $highlighted->exists();
                                    })
                                    ->dehydrated(true),
                                FileUpload::make('campaign_image')
                                    ->label('Campaign Image')
                                    ->acceptedFileTypes(['image/*'])
                                    ->required()
                                    ->directory('/video')
                                    ->visibility('public')
                                    ->openable()
                                    ->helperText('Upload an image for the campaign.'),
                                PageBuilder::make('blocks')
                                    ->label('Content Blocks')
                                    ->blocks(FilamentFabricator::getPageBlocks()),
                            ]),

                        Group::make()
                            ->columnSpan(1)
                            ->schema([
                                Section::make('SEO & Page Settings')
                                    ->schema([
                                        ...FormSchemaHelper::getSlugAndSeoSchema(),
                                    ]),
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
                    Tables\Actions\CreateAction::make(),
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
