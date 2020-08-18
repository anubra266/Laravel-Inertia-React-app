import { InertiaLink } from "@inertiajs/inertia-react";
import React from "react";
import routes from "./routes";

function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <a className="navbar-brand" href="#">
                Navbar
            </a>
            <button
                className="navbar-toggler"
                type="button"
                data-toggle="collapse"
                data-target="#navbarNav"
                aria-controls="navbarNav"
                aria-expanded="false"
                aria-label="Toggle navigation"
            >
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">
                {routes.general.routes.map((route)=>{
                    return (
                        <li className={`nav-item ${`active`}`}>
                            <InertiaLink className="nav-link" href={route.url}>
                                {route.name}
                            </InertiaLink>
                        </li>
                    );
                })}
                </ul>
            </div>
        </nav>
    );
}

export default Navbar;
