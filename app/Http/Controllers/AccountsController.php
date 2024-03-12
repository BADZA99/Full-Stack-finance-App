<?php

namespace App\Http\Controllers;

use App\Models\account;
use App\Models\User;
use App\Models\credit_card;
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
    public function createAccount(Request $request)
    {
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
    public function allAccounts()
    {
        return account::all();
    }

    //compte par id
    public function accountById($id)
    {
        return account::find($id);
    }

    // compte par id du user
    public function accountByUserId($id)
    {
        return account::where('user_id', $id)->first();
    }

    // cree une foncrion qui envoie un email a un user
    public function SendEmail($id)
    {
        try {
            $user = User::find($id);
            $account = account::where('user_id', $id)->first();
            if ($user) {
                $user->notify(new SignupSuccessNotification($account, $user->nom, $user->rib));
                return response()->json(['message' => 'email sent'], 200);
            }
        } catch (\Exception $e) {
            // Gérer l'exception ici
            return response()->json(['message' => $e->getMessage()], 500);
        }
    }

    // fonction qui augmente le sold du user
    public function AugmenterSolde(Request $request)
    {
        try {
            $account = account::where('user_id', $request->user_id)->first();

            if ($request->montant < $account->plafond && $request->montant > 0 && $request->montant < ($request->montant + $account->plafond)) {
                # code...
                $account->montant =
                    $account->montant + $request->montant;
                $account->save();
            } else {
                return response()->json(['message' => 'solde insuffisant'], 500);
            }


            return response()->json(['message' => 'solde updated'], 200);
        } catch (\Exception $e) {
            return response()->json(['message' => $e->getMessage()], 500);
        }
    }

    //fonction qui diminue le sold du user
    public function DiminuerSolde(Request $request)
    {
        try {
            $account = account::where('user_id', $request->user_id)->first();

            if ($request->montant <= $account->montant && $request->montant > 0) {
                $account->montant =
                    $account->montant - $request->montant;
                $account->save();
            } else {
                return response()->json(['message' => 'solde insuffisant'], 500);
            }

            return response()->json(['message' => 'solde diminue'], 200);
        } catch (\Exception $e) {
            return response()->json(['message' => $e->getMessage()], 500);
        }
    }



    //  fonction qui recupere un numero de carte et verifie si cette numero e carte  existe dans la base de donnes ou pas
    public function VerifierCarte(Request $request)
    {
        try {
            $CarteCredit = credit_card::where('numero_carte', $request->numCarte)->first();
            if ($CarteCredit->numero_carte == $request->numCarte) {
                // verifier si la carte lie a ce compte a un solde superieur a montant
                $account = account::where('id', $CarteCredit->account_id)->first();
                if ($account->plafond > ($request->montant + $account->montant)) {
                    return response()->json(['message' => 'carte valide'], 200);
                } else {
                    return response()->json(['message' => 'le plafond du compte destinataire est atteint'], 500);
                }
            } else {
                return response()->json(['message' => 'carte invalide'], 500);
            }
        } catch (\Exception $e) {
            return response()->json(['message' => $e->getMessage()], 500);
        }
    }

    // recuperer un user par sa carte de credit
    public function getAccountByCreditCard(Request $request)
    {
        try {
            $CarteCredit = credit_card::where('numero_carte', $request->numCarte)->first();
            if ($CarteCredit->numero_carte == $request->numCarte) {
                $account = account::where('id', $CarteCredit->account_id)->first();
                // $user = User::where('id', $account->user_id)->first();
                return $account;
            } else {
                return response()->json(['message' => 'carte invalide'], 500);
            }
        } catch (\Exception $e) {
            return response()->json(['message' => $e->getMessage()], 500);
        }
    }
}
