<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Notifications\Notifiable;

class account extends Model
{
    use HasFactory,Notifiable;

    protected $fillable = [
        'user_id',
        'account_type',
        'pack',
        'plafond',
        'max_withdrawal',
        'montant',
    ];
}
