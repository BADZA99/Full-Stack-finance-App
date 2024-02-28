<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up()
    {
        DB::table('accounts')
        ->whereNotIn('pack', ['gold', 'premium', 'standard'])
        ->update(['pack' => 'Nopack']);

        Schema::table('accounts', function (Blueprint $table) {
            $table->enum('pack', ['gold', 'premium', 'standard', 'Nopack'])->change();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down()
    {
        Schema::table('accounts', function (Blueprint $table) {
            $table->enum('pack', ['gold', 'premium', 'standard'])->change();
        });
    }
};
