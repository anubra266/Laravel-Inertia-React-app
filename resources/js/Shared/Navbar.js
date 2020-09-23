import React, { forwardRef } from "react";
import { InertiaLink } from "@inertiajs/inertia-react";

import { useExpose } from "@/Hooks";

import routes from "./Routes";

function Navbar({}, ref) {
    const nav_func = () => {
        alert("function in Navbar");
    };
    const nav_func2 = () => {
        alert("function 2 in Navbar");
    };
    useExpose(ref, { nav_func, nav_func2 });
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <a className="navbar-brand" href="#">
                InertiaApp
            </a>
            <button
                className="navbar-toggler collapsed"
                type="button"
                data-toggle="collapse"
                data-target="#navbarText"
                aria-controls="navbarText"
                aria-expanded="false"
                aria-label="Toggle navigation"
            >
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarText">
                <ul className="navbar-nav mr-auto">
                    {routes.general.routes.map((NavItem, key) => {
                        return (
                            <li
                                key={`nav-${key}`}
                                className={`nav-item ${`active`}`}
                            >
                                <InertiaLink
                                    className="nav-link"
                                    href={route(NavItem.route)}
                                >
                                    {NavItem.name}
                                </InertiaLink>
                            </li>
                        );
                    })}
                </ul>
                <span className="text-info navbar-text">Wow</span>
            </div>
        </nav>
    );
}

export default forwardRef(Navbar);
