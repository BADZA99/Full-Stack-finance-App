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
    public function up(): void
    {
        Schema::create('transactions', function (Blueprint $table) 
        {
            $table->id();
            $table->unsignedBigInteger('sender_account_id');
            $table->unsignedBigInteger('receiver_account_id');
            $table->decimal('montant', 10, 2);
            $table->enum('type_transaction', ['depot', 'retrait']);
            $table->timestamp('date_transaction')->default(DB::raw('CURRENT_TIMESTAMP'));
            $table->foreign('sender_account_id')->references('id')->on('accounts');
            $table->foreign('receiver_account_id')->references('id')->on('accounts');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('transactions');
    }
};
