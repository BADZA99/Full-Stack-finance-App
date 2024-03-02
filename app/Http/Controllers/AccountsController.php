<?php

namespace App\Http\Controllers;

use App\Models\account;
use App\Models\User;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Resend\Laravel\Facades\Resend;
use App\Http\Controllers\Controller;
use App\Mail\mailNotify;
use App\Mail\OrderShipped;
use App\Models\Order;
use App\Notifications\SignupSuccessNotification;
use Illuminate\Support\Facades\Mail;
use PhpParser\Node\Stmt\TryCatch;

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

    // tous les comptes
    public function allAccounts(){
        return account::all();
    }

    //compte par id
    public function accountById($id){
        return account::find($id);
    }

    // cree une foncrion qui envoie un email a un user
public function SendEmail($id)
    {
        try {
            $user = User::find($id);
            $account = account::where('user_id', $id)->first();
            if ($user) {
                $user->notify(new SignupSuccessNotification($account, $user->nom,$user->rib));
                return response()->json(['message' => 'email sent'], 200);
            } 
        } catch (\Exception $e) {
            // Gérer l'exception ici
            return response()->json(['message' => $e->getMessage()], 500);
        }
        
        
    }
}
