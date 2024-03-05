<?php

namespace App\Http\Controllers;

use App\Models\credit_card;
use Illuminate\Http\Request;

class CreditCardController extends Controller
{
    //fonction qui cree une creditcard
    public function createCreditCard(Request $request){
        $creditCard = credit_card::create([
            'account_id' => $request->account_id,
            // GENERER UNE SERIE DE 16 CARACTERE CHIFFRE ET LETTRE
            'numero_carte' => strtoupper(bin2hex(openssl_random_pseudo_bytes(8))),
            // date_expiration date du jour plus 5 ans
            'date_expiration' => date('Y-m-d', strtotime('+5 years')),
            'type_carte' => $request->type_carte,
            'cvv' => rand(100,999),
        ]);
        return $creditCard;
    }

    // toutes les creditcards
    public function allCreditCards(){
        return credit_card::all();
    }

    // recuperer le carte d'un user
    public function getCreditCardByAccountId($id){
        return credit_card::where('account_id', $id)->get();
    }

    
}
