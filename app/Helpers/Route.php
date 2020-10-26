<?php

if (!function_exists('backward')) {
    /**
     * Redirect to previous route
     * @param string $status Status of Request Response
     * @param string $response The Request's response
     */
    function backward($status = '', $response = '')
    {
        return back()->with($status, $response);
    }
}

if (!function_exists('visit')) {
    /**
     * Redirect to any route
     * @param string $route Named route to visit
     * @param string $status Status of Request Response
     * @param string $response The Request's response
     */
    function visit($route, $status = '', $response = '')
    {
        return redirect()->route($route)->with($status, $response);
    }
}
