<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class credit_card extends Model
{
    use HasFactory;

    protected $fillable = [
        'account_id',
        'numero_carte',
        'date_expiration',
        'type_carte',
        'cvv',
    ];
}
