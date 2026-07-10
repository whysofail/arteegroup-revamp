<?php

namespace App\Filament\Fabricator\PageBlocks;

use Filament\Forms\Components\Builder\Block;
use Filament\Forms\Components\Repeater;
use Filament\Forms\Components\Select;
use Filament\Forms\Components\TextInput;
use Filament\Forms\Components\Textarea;
use Filament\Forms\Components\FileUpload;
use Z3d0X\FilamentFabricator\PageBlocks\PageBlock;
use AmidEsfahani\FilamentTinyEditor\TinyEditor;

class CampaignShowcase extends PageBlock
{
    public static function getBlockSchema(): Block
    {
        return Block::make('campaign-showcase')
            ->label('Campaign Showcase')
            ->schema([

                TinyEditor::make('description')
                    ->profile('default')
                    ->fileAttachmentsDisk('public')
                    ->fileAttachmentsVisibility('public')
                    ->fileAttachmentsDirectory('uploads'),

                Repeater::make('items')
                    ->label('Media')
                    ->defaultItems(1)
                    ->minItems(1)
                    ->maxItems(12)
                    ->cloneable()
                    ->reorderable()
                    ->schema([

                        Select::make('media_type')
                            ->default('image')
                            ->options([
                                'image' => 'Image',
                                'video' => 'Video',
                            ])
                            ->live()
                            ->required(),

                        FileUpload::make('media')

                            ->label('Media')

                            ->disk('public')

                            ->directory('campaign-showcase')

                            ->visibility('public')

                            ->multiple()

                            ->acceptedFileTypes([
                                'image/*',
                                'video/mp4',
                                'video/webm',
                                'video/quicktime',
                            ])

                            ->required(),

                        TextInput::make('number')
                            ->label('Number')
                            ->placeholder('01'),

                        Textarea::make('caption')
                            ->rows(3),

                    ])

            ]);
    }

    public static function mutateData(array $data): array
    {
        return $data;
    }
}
