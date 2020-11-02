<?php

use Illuminate\Support\Facades\Auth;

if (!function_exists('respond')) {
    /**
     * Flash Response to Frontend
     * @param {array} $messages Messages to flash
     * @return \Illuminate\Support\Facades\Session
     */
    function respond($responses)
    {
        foreach ($responses as  $response) {
            [$key, $message] = $response;
            ((new \App\Helpers\Inertia\InertiaContainer())->withSession())->set($key, $message);
        }
    }
}
