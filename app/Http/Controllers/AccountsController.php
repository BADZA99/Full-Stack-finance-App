<?php

namespace App\Http\Controllers;

use App\Models\account;
use Illuminate\Http\Request;

class AccountsController extends Controller
{
    //creer un compte
    public function createAccount(Request $request){
        $account = account::create([
            'user_id' => $request->user_id,
            'account_type' => $request->account_type,
            'pack' => $request->pack,
            'plafond' => $request->plafond,
            'montant' => $request->montant,
            'max_withdrawal' => $request->max_withdrawal,
        ]);
        return $account;
    }
}
