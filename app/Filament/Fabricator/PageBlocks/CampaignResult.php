<?php

namespace App\Filament\Fabricator\PageBlocks;

use Filament\Forms\Components\Builder\Block;
use Filament\Forms\Components\Repeater;
use Z3d0X\FilamentFabricator\PageBlocks\PageBlock;

class CampaignResult extends PageBlock
{
    public static function getBlockSchema(): Block
    {
        return Block::make('campaign_result')
            ->schema([
                \Filament\Forms\Components\TextInput::make('title')
                    ->label('Campaign Result Title')
                    ->maxLength(255),
                \AmidEsfahani\FilamentTinyEditor\TinyEditor::make('description')
                    ->label('Campaign Result Description')
                    ->fileAttachmentsDisk('public')
                    ->fileAttachmentsVisibility('public')
                    ->fileAttachmentsDirectory('uploads')
                    ->profile('default'),
                Repeater::make('results')
                    ->label('Results')
                    ->minItems(1)
                    ->maxItems(5)
                    ->columnSpanFull()
                    ->schema([
                        \Filament\Forms\Components\TextInput::make('title')
                            ->label('Result Title')
                            ->maxLength(255),
                        \Filament\Forms\Components\TextInput::make('value')
                            ->label('Result Value')
                            ->maxLength(255),
                    ])
            ]);
    }

    public static function mutateData(array $data): array
    {
        return $data;
    }
}