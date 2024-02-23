<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::table('credit_cards', function (Blueprint $table) {
            $table->string('type_carte', 20)->change();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        //inverse 
        Schema::table('credit_cards', function (Blueprint $table) {
            $table->enum('type_carte', ['premium', 'standard', 'gold'])->change();
        });
    }
};
