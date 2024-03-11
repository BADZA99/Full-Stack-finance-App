<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;

class UserController extends Controller
{
    //fonction qui recupere tous les users a part le premier
    public function allUsers(){
        return User::where('id', '!=', 1)->get();
    }
    

    // fonction qui recupere un user par son id
    public function userById($id){
        return User::find($id);
    }

    // fonction qui recupere un user par son email
    public function userByEmail($email){
    if(User::where('email', $email)->first()){
        return User::where('email', $email)->first();
    }else{
        return response()->json(['message' => 'user not found'], 404);
    }
    }

    // fonction qui passe l'etat du user a 0
    public function desactivateUser($id){
        $user = User::find($id);
        $user->etat = 0;
        $user->save();
        return response()->json(['message' => 'user desactivated'], 200);
    }

    // fonction qui passe l'etat du user a 1
    public function reactivateUser($id){
        $user = User::find($id);
        $user->etat = 1;
        $user->save();
        return response()->json(['message' => 'user reactivated'], 200);
    }

    
}
