<?php

namespace App\Filament\Resources\WorkResource\Pages;

use App\Filament\Resources\WorkResource;
use Filament\Actions;
use Filament\Resources\Pages\EditRecord;
use App\Models\Work;

class EditWork extends EditRecord
{
    protected static string $resource = WorkResource::class;
    protected function mutateFormDataBeforeSave(array $data): array
    {
        if (!empty($data['is_highlighted'])) {
            Work::query()
                ->where('is_highlighted', true)
                ->whereKeyNot($this->record->id)
                ->update([
                    'is_highlighted' => false,
                ]);
        }

        return $data;
    }
    protected function getHeaderActions(): array
    {
        return [
            Actions\DeleteAction::make(),
        ];
    }
}
