<?php

namespace App\Http\Controllers;

use App\Http\Requests\RegisterRequest;
use App\Models\User;
use App\Models\role;
use Illuminate\Http\Request;
use Illuminate\Http\Response;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Cookie;
use Illuminate\Support\Facades\Hash;

class AuthController extends Controller
{
    //hello function
    public function hello(){
        return "Hello World";
    }

    // simple add user function
    public function register(RegisterRequest $request){

        $role = role::where('name','client')->first();
        $user = User::create([
            'nom' => $request->nom,
            'prenom' => $request->prenom,
            'rib' => rand(1000000000,9999999999),
            'cin' => rand(1000000000,9999999999),
            'telephone' => $request->telephone,
            'email' => $request->email,
            'etat' => 1,
            'role_id' => $role->id,
            'password' => Hash::make($request->password),

        ]);
        return $user;
        // return response($user,Response::HTTP_CREATED);
    }

    // simple login function
    public function login(Request $request){
       Auth::attempt($request->only('email','password'));
       if (Auth::check()){
        // cree un token
        $user = Auth::user();
        $token = $user->createToken('token')->plainTextToken;

    $cookie=cookie('jwt',$token,60*24); // 1 day
         return \response([
            'jwt'=>$token
         ])->withCookie($cookie);
         }
        else{
            return response(['message'=>'Invalid credentials'],Response::HTTP_UNAUTHORIZED);
        }

    }

    // logged user
    public function user(Request $request){
        return $request->user();
    }

    // logout function
    public function logout(){
        $cookie= Cookie::forget('jwt');
        return \response([
            'message'=>'success'
        ])->withCookie($cookie);
    }





}
