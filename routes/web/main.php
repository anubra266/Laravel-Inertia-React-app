<?php

use App\Http\Requests\ContactMessage;
use Inertia\Inertia;
use Illuminate\Support\Facades\Route;


Route::get('/', function () {
    return inertia('Index')->withViewData(['theme' => "#141414"]);;
})->name('index');

Route::get('/about', function () {
    $info = "A Boilerplate for Laravel - InertiaJs - React";
    return inertia('About', [
        'info' => Inertia::lazy(fn () => $info)
    ]);
})->name('about');


Route::get('/contact', function () {
    return inertia('Contact');
})->name('contact');

Route::post('/submit', function (ContactMessage $request) {
    $message = (object)$request->validated();
    respond([['contact', 'Data Analysed'], ['message', 'Data Accepted']]);
    return backward('success', "Data accepted! $message->first_name");
})->name('contact.message');

Route::get('/blog', function () {
    return inertia('Blog');
})->name('blog');
Route::get('/propsy', function () {
    return inertia('Propsy'); 
})->name('propsy');
