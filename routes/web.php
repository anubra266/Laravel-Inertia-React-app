<?php

use Inertia\Inertia;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/
Route::get('/', function () {
    return Inertia::render('Home', [
        'users' => ''
        ]);
    })->name('home');

    Route::get('/about', function () {
        return Inertia::render('About');
    })->name('about');


    Route::get('/contact', function () {
        return Inertia::render('Contact');
    })->name('contact');
    Route::group(['middleware'=>['auth']], function () {

    });
// Auth::routes();

// Route::get('/home', 'HomeController@index')->name('home');
