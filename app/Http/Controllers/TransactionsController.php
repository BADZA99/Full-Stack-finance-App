<?php

namespace App\Http\Controllers;

use App\Models\account;
use App\Models\transaction;
use App\Models\User;
use App\Notifications\TransactionSuccessSenderNotification;
use App\Notifications\TransactionSuccessReceiverNotification;
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

    // transaction par sender_account_id  ou  receiver_account_id
    public function transactionByAccountId($id){
        return transaction::where('sender_account_id', $id)->orWhere('receiver_account_id', $id)->get();
    }

    // fonction qui retourne les 2 users implique dans une transaction en recuperant le sender_account_id  et  receiver_account_id dans la table transaction ensuite trouver les 2 comptes et trouver les 2 users a qui appartient ces 2 comptes
    public function usersByTransactionId($id){
        $transaction = transaction::find($id);
        $sender_account = $transaction->sender_account_id;
        $receiver_account = $transaction->receiver_account_id;
        // trouver les 2 comptes
        $sender_account = account::find($sender_account);
        $receiver_account = account::find($receiver_account);
        // trouver les 2 users en utilisant leur user_id dans users
        $sender_user = User::find($sender_account->user_id);
        $receiver_user = User::find($receiver_account->user_id);


        return [
            'sender_user' =>
            $sender_user,
            'receiver_user' =>  $receiver_user
        ];
    }

    // fonction qui envoie un email au destinaire d'une transaction
    public function SendTransactionSuccessReceiverEmail($id){
        $transaction = transaction::find($id);
        $sender_account = account::find($transaction->sender_account_id);
        $receiver_account = account::find($transaction->receiver_account_id);
        $sender_user = User::find($sender_account->user_id);
        $receiver_user = User::find($receiver_account->user_id);
        $data = [
            'type' => $transaction->type_transaction,
            'montant' => $transaction->montant,
            'date' => $transaction->date_transaction,
            'sender_Name' => $sender_user->prenom ,
            'receiver_Name' => $receiver_user->prenom,
        ];
        $receiver_user->notify(new TransactionSuccessReceiverNotification($data));
        return response()->json(['message' => 'email sent'], 200);
    }

    // fonction qui envoie un email au destinaire d'une transaction
    public function SendTransactionSuccessSenderEmail($id){
        $transaction = transaction::find($id);
        $sender_account = account::find($transaction->sender_account_id);
        $receiver_account = account::find($transaction->receiver_account_id);
        $sender_user = User::find($sender_account->user_id);
        $receiver_user = User::find($receiver_account->user_id);
        $data = [
            'type' => $transaction->type_transaction,
            'montant' => $transaction->montant,
            'date' => $transaction->date_transaction,
            'sender_Name' => $sender_user->prenom ,
            'receiver_Name' => $receiver_user->prenom,
        ];
        $sender_user->notify(new TransactionSuccessSenderNotification($data));
        return response()->json(['message' => 'email sent'], 200);
    }

    

}
