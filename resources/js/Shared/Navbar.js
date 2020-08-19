import React, { useRef } from "react";
import LoadingBar from "react-top-loading-bar";
import { useBattery, useEffectOnce } from "react-use";
import { InertiaLink } from "@inertiajs/inertia-react";

import { loadPage } from "@/Helpers/PageLoad";
import routes from "./Routes";
function Navbar({ pageLoader }) {
    //* load battery State
    const batteryState = useBattery();
    //* Start page Load on Navigator Change
    loadPage(pageLoader);
    useEffectOnce(() => {
        //*complete pageLoader loading
        pageLoader && pageLoader.current.complete();
    });
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <LoadingBar color="black" ref={pageLoader} waitingTime={0} />

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
                <span className="text-info navbar-text">
                    {(batteryState.level * 100).toFixed(0)}%{" "}
                    {batteryState.charging ? "Charging" : ""}
                </span>
            </div>
        </nav>
    );
}

export default Navbar;
