<?php

use Inertia\Inertia;
use App\Http\Requests\ContactMessage;
use Illuminate\Support\Facades\Route;


// $router->get('/user', [UserController::class, 'index']);

$router->get('/', fn () => inertia('Index')->withViewData(['theme' => "#141414"]))->name('index');


$router->get('/about', function () {
    $info = "A Boilerplate for Laravel - InertiaJs - React";
    return inertia('About', [
        'info' => Inertia::lazy(fn () => $info)
    ]);
})->name('about');

$router->get('/contact', fn () => inertia('Contact'))->name('contact');

$router->post('/submit', function (ContactMessage $request) {
    $message = (object)$request->validated();
    respond([['contact', 'Data Analysed'], ['message', 'Data Accepted']]);
    return backward('success', "Data accepted! $message->first_name");
})->name('contact.message');

$router->get('/blog', fn () => inertia('Blog'))->name('blog');
//? Using Route::inertia static method.
$router->inertia('/propsy', 'Propsy')->name('propsy');
