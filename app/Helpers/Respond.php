<?php

use Illuminate\Support\Facades\Auth;

if (!function_exists('respond')) {
    /**
     * Flash Response to Frontend
     * @return \Illuminate\Support\Facades\Session
     */
    function respond($key, $message)
    {
        return ((new \App\Helpers\Inertia\InertiaContainer())->withoutSession())->set($key, $message);
    }
}
