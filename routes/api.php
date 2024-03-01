<?php

use App\Http\Controllers\AccountsController;
use App\Http\Controllers\AuthController;
use App\Http\Controllers\CreditCardController;
use App\Http\Controllers\TransactionsController;
use App\Http\Controllers\UserController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/

// auth routes
Route::get('hello',[AuthController::class,'hello']);
Route::post('/register',[AuthController::class,'register']);
Route::post('/login',[AuthController::class,'login']);

// La partie Route::middleware('auth:sanctum') applique le middleware auth:sanctum aux routes définies dans le groupe. Les middlewares fournissent un mécanisme pratique pour filtrer les requêtes HTTP entrant dans votre application. Dans ce cas, le middleware auth:sanctum est utilisé pour s'assurer que l'utilisateur est authentifié avant de pouvoir accéder aux routes à l'intérieur du groupe.
Route::middleware('auth:sanctum')->group(function (){
    Route::get('user',[AuthController::class,'user']);
    Route::post('/logout',[AuthController::class,'logout']);
});

// user routes
Route::get('/allUsers', [UserController::class, 'allUsers']);
Route::get('/user/{id}', [UserController::class, 'userById']);


// accounts routes
Route::post('/newAccount', [AccountsController::class, 'createAccount']);
Route::get('/allAccounts', [AccountsController::class, 'allAccounts']);
Route::get('/account/{id}', [AccountsController::class, 'accountById']);
Route::get('/sendEmail/{id}', [AccountsController::class, 'SendEmail']);


// createCreditCard
Route::post('/createCreditCard', [CreditCardController::class, 'createCreditCard']);
Route::get('/allCreditCards', [CreditCardController::class, 'allCreditCards']);


// transactions routes
Route::post('/newTransaction', [TransactionsController::class, 'createTransaction']);
Route::get('/allTransactions', [TransactionsController::class, 'allTransactions']);
Route::get('/transaction/{id}', [TransactionsController::class, 'transactionById']);