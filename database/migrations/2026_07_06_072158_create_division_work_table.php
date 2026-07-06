<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration {
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('division_work', function (Blueprint $table) {
            $table->id();
            $table->foreignId('division_id')
                ->constrained()
                ->cascadeOnDelete();

            $table->foreignId('work_id')
                ->constrained()
                ->cascadeOnDelete();

            $table->unique(['division_id', 'work_id']);
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('division_work');
    }
};
