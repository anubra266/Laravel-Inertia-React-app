<?php

namespace App\Traits\Routes;

trait General
{
    /**
     * Return General routes
     * @return array
     */
    public function GeneralRoutes()
    {
        return [
            [
                "name" => "Index",
                "route" => "index",
                "show" => true
            ],
            [
                "name" => "About",
                "route" => "about",
                "show" => true
            ],
            [
                "name" => "Contact",
                "route" => "contact",
                "show" => true
            ],
            [
                "name" => "Blog",
                "route" => "blog",
                "show" => true
            ],
            [
                "name" => "Propsy",
                "route" => "propsy",
                "show" => true
            ],
        ];
    }
}
