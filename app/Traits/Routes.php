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
     * Inject Present Route
     * @param object $routes
     * @return object
     */
    public function presentRoute($routes)
    {
        $route_name = Route::current()->getName();
        $routes = $routes->map(function ($r) use ($route_name) {
            $r['present'] = $route_name == $r['route'];
            return $r;
        });
        return $routes;
    }

    public function sortRoutes($layout)
    {
        $routes = $this->presentRoute(collect($this->AllRoutes($layout)));
        return $routes->filter(fn ($route) => $route['show'])->values()->all();
    }
}
