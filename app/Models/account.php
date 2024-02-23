<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class account extends Model
{
    use HasFactory;

    protected $fillable = [
        'user_id',
        'account_type',
        'pack',
        'plafond',
        'max_withdrawal',
        'montant',
    ];
}
