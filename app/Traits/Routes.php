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
                "layout" => "general",
                "show" => true
            ],
            [
                "name" => "About",
                "route" => "about",
                "layout" => "general",
                "show" => true
            ],
            [
                "name" => "Contact",
                "route" => "contact",
                "layout" => "general",
                "show" => true
            ],
            [
                "name" => "Blog",
                "route" => "blog",
                "layout" => "general",
                "show" => true
            ],
            [
                "name" => "Propsy",
                "route" => "propsy",
                "layout" => "general",
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
