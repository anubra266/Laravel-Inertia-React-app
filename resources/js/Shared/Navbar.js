import React, { useRef } from "react";
import { InertiaLink } from "@inertiajs/inertia-react";
import { useBattery } from "react-use";
import routes from "./Routes";
import LoadingBar from "react-top-loading-bar";
import { useEffectOnce } from "react-use";
import { loadPage } from "@/Helpers/PageLoad";
function Navbar({ pageLoader }) {
    const batteryState = useBattery();
    useEffectOnce(() => {
        //*complete pageLoader loading
        pageLoader && pageLoader.current.complete();
    });
    loadPage(pageLoader);
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <LoadingBar color="black" ref={pageLoader} waitingTime={0} />

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
            </div>
            <span className="text-info">
                {(batteryState.level * 100).toFixed(0)}%{" "}
                {batteryState.charging ? "Charging" : ""}
            </span>
        </nav>
    );
}

export default Navbar;
