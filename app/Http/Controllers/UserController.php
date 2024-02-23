<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;

class UserController extends Controller
{
    //fonction qui recupere tous les users
    public function allUsers(){
        return User::all();
    }
    

    // fonction qui recupere un user par son id
    public function userById($id){
        return User::find($id);
    }

    
}
