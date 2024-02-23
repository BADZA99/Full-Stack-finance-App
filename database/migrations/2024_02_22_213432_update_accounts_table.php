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
        //ajouter la colonne montant
        Schema::table('accounts', function (Blueprint $table) {
            $table->decimal('montant', 10, 2)->after('plafond');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        //inverse
        Schema::table('accounts', function (Blueprint $table) {
            $table->dropColumn('montant');
        });
    }
};
