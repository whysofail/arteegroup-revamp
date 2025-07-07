<?php

namespace App\Filament\Fabricator\PageBlocks;

use Filament\Forms\Components\Builder\Block;
use Filament\Forms\Components\RichEditor;
use Filament\Forms\Components\TextInput;
use Z3d0X\FilamentFabricator\PageBlocks\PageBlock;
use AmidEsfahani\FilamentTinyEditor\TinyEditor;

class SectionParagaph extends PageBlock
{
    public static function getBlockSchema(): Block
    {
        return Block::make('section-paragaph')
            ->schema([
                TextInput::make('title')
                    ->label('Section Title')
                    ->required()
                    ->maxLength(255)
                    ->columnSpanFull(),
                TinyEditor::make('content')
                    ->fileAttachmentsDisk('public')
                    ->fileAttachmentsVisibility('public')
                    ->fileAttachmentsDirectory('uploads')
                    ->profile('default')
                    ->columnSpan('full')
                    ->required()
            ]);
    }

    public static function mutateData(array $data): array
    {
        return $data;
    }
}