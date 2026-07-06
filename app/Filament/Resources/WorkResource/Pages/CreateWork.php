<?php

namespace App\Filament\Resources\WorkResource\Pages;

use App\Filament\Resources\WorkResource;
use Filament\Actions;
use Filament\Resources\Pages\CreateRecord;
use App\Models\Work;

class CreateWork extends CreateRecord
{
    protected static string $resource = WorkResource::class;
    protected function mutateFormDataBeforeCreate(array $data): array
    {
        if (!empty($data['is_highlighted'])) {
            Work::query()
                ->where('is_highlighted', true)
                ->update([
                    'is_highlighted' => false,
                ]);
        }

        return $data;
    }
}
