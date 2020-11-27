<?php

namespace App\Traits;

use Illuminate\Support\Facades\Route;
use App\Traits\Routes\General;

trait Routes
{
    use General;

    /**
     * Return all routes
     * @param string $layout
     * @return array
     */
    public function AllRoutes($layout)
    {
        $routes =  [
            "general" => $this->GeneralRoutes(),
        ];

        return $routes[$layout];
    }

    /**
     * Sort Routes
     * @param string $layout
     * @return array
     */
    public function sortRoutes($layout)
    {
        $routes = collect($this->AllRoutes($layout));
        return $routes->filter(fn ($route) => $route['show'])->values()->all();
    }
}
