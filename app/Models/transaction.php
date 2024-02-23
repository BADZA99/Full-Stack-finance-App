<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class transaction extends Model
{
    use HasFactory;

    protected $fillable = [
        'account_id',
        'type_transaction',
        'montant',
        'date_transaction',
        'sender_account_id',
        'receiver_account_id',
    ];
}
