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
}
