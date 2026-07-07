<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;
use Illuminate\Support\Facades\DB;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::table('category_work', function (Blueprint $table) {
            $table->dropForeign(['category_id']);
        });

        Schema::table('category_work', function (Blueprint $table) {
            $table->renameColumn('category_id', 'sub_category_id');
        });

        Schema::table('category_work', function (Blueprint $table) {
            $table->foreign('sub_category_id')
                ->references('id')
                ->on('sub_categories')
                ->cascadeOnDelete();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::table('category_work', function (Blueprint $table) {
            $table->dropForeign(['sub_category_id']);
        });

        Schema::table('category_work', function (Blueprint $table) {
            $table->renameColumn('sub_category_id', 'category_id');
        });

        Schema::table('category_work', function (Blueprint $table) {
            $table->foreign('category_id')
                ->references('id')
                ->on('category')
                ->cascadeOnDelete();
        });
    }
};
