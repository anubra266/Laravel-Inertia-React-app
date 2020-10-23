<?php

namespace App\Traits;

use Illuminate\Support\Arr;

trait Routes
{
    /**
     * Return all routes
     * @return array
     */
    public function AllRoutes()
    {
        return [
            [
                "name" => "Home",
                "route" => "home",
                "layout" => "home",
                "show" => true
            ],
            [
                "name" => "About",
                "route" => "about",
                "layout" => "home",
                "show" => true
            ],
            [
                "name" => "Contact",
                "route" => "contact",
                "layout" => "homei",
                "show" => true
            ],
            [
                "name" => "Blog",
                "layout" => "home",
                "route" => "blog",
                "show" => false
            ],
            [
                "name" => "Propsy",
                "route" => "propsy",
                "layout" => "home",
                "show" => true
            ],
        ];
    }


    public function sortRoutes($layout)
    {
        $routes = collect($this->AllRoutes());
        return  $routes->filter(function ($route) use ($layout) {
            return (($route['layout'] === $layout) && ($route['show']));
        })->values()->all();
    }
}
