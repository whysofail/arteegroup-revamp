<?php

namespace App\Filament\Fabricator\PageBlocks;

use Filament\Forms\Components\TextInput;
use Filament\Forms\Components\Textarea;
use Filament\Forms\Components\FileUpload;
use Filament\Forms\Components\Builder\Block;
use Z3d0X\FilamentFabricator\PageBlocks\PageBlock;

class Hero extends PageBlock
{
    public static function getBlockSchema(): Block
    {
        return Block::make('hero')
            ->schema([
                TextInput::make('title')->label('Title')->required(),
                Textarea::make('subtitle')->label('Subtitle'),
                FileUpload::make('background_image')->image()->directory('hero'),
            ]);
    }

    public static function mutateData(array $data): array
    {
        return $data;
    }
}
