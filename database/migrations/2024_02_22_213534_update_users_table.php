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
        //supprimer la colonne montant
        Schema::table('users', function (Blueprint $table) {
            $table->dropColumn('solde');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        //inverse
        Schema::table('users', function (Blueprint $table) {
            $table->decimal('solde', 10, 2)->after('email');
        });

    }
};
