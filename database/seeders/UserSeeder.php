<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Str;

class UserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        //inserer des user
        DB::table('users')->insert([
            'rib' => Str::random(10),
            'nom' => 'Doe',
            'prenom' => 'John',
            'cin' => '123456789',
            'telephone' => '775432067',
            'email' => 'john@doe.com',
            'password' => 'passer',
        ]);
    }
}
