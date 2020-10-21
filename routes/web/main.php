<?php

use App\Http\Requests\ContactMessage;
use Inertia\Inertia;
use Illuminate\Support\Facades\Route;


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

Route::post('/submit', function (ContactMessage $request) {
    $message = (object)$request->validated();
    return redirect()->back()->with('success', "Data accepted! $message->first_name");
})->name('contact.message');

Route::get('/blog', function () {
    return Inertia::render('Blog');
})->name('blog');
Route::get('/propsy', function () {
    return Inertia::render('Propsy');
})->name('propsy');
