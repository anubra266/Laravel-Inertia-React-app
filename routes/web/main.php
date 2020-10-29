<?php

use App\Http\Requests\ContactMessage;
use Inertia\Inertia;
use Illuminate\Support\Facades\Route;


Route::get('/', function () {
    return Inertia::render('Index');
})->name('index');

Route::get('/about', function () {
    $info = "A Boilerplate for Laravel - InertiaJs - React";
    return Inertia::render('About', [
        'info' => Inertia::lazy(fn () => $info)
    ]);
})->name('about');


Route::get('/contact', function () {
    return Inertia::render('Contact');
})->name('contact');

Route::post('/submit', function (ContactMessage $request) {
    $message = (object)$request->validated();
    return backward('success', "Data accepted! $message->first_name");
})->name('contact.message');

Route::get('/blog', function () {
    return Inertia::render('Blog');
})->name('blog');
Route::get('/propsy', function () {
    return Inertia::render('Propsy');
})->name('propsy');
