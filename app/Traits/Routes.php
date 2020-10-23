<?php

namespace App\Traits;

use App\Traits\Routes\General;

trait Routes
{
    use General;
    /**
     * Return all routes
     * @return array
     */
    public function AllRoutes($layout)
    {
        $routes =  [
            "general" => $this->GeneralRoutes(),
        ];
        return $routes[$layout];
    }


    public function sortRoutes($layout)
    {
        $routes = collect($this->AllRoutes($layout));
        return $routes->filter(fn ($route) => $route['show'])->values()->all();
    }
}
