<?php

namespace App\Http\Controllers;

use App\Models\transaction;
use Illuminate\Http\Request;

class TransactionsController extends Controller
{
    //creer une transaction
    public function createTransaction(Request $request){
        $transaction = transaction::create([
            'sender_account_id' => $request->sender_account_id,
            'receiver_account_id' => $request->receiver_account_id,
            'type_transaction' => $request->type_transaction,
            'montant' => $request->montant,
            'date_transaction' => date('Y-m-d'),
        ]);
        return $transaction;
    }

    // toutes les transactions
    public function allTransactions(){
        return transaction::all();
    }

    //transaction par id
    public function transactionById($id){
        return transaction::find($id);
    }
}
