import React, { useState } from "react";
import { InertiaLink } from "@inertiajs/inertia-react";
import Layout from "antd/lib/layout";
import Menu from "antd/lib/menu";

import routes from "./Routes";
import { useTheme } from "@/Hooks";

function Navbar() {
    const getUrl = () => {
        const location = window.location.href;
        const present_route = routes.general.routes.find(r => (route(r.route)).template === location)
        return [`menu-${present_route.route}`]
    }
    const url = getUrl()

    return (
        <Layout.Header className="header">
            <div className="logo" />
            <Menu theme="dark" mode="horizontal" defaultSelectedKeys={url}>
                {routes.general.routes.map((NavItem) => {
                    return (
                        <Menu.Item key={`menu-${NavItem.route}`}>
                            <InertiaLink href={route(NavItem.route)}>
                                {NavItem.name}
                            </InertiaLink>
                        </Menu.Item>
                    );
                })}
                <Menu.Item>
                    <span onClick={() => useTheme("dark")}>Dark Theme</span>
                </Menu.Item>
                <Menu.Item>
                    <span onClick={() => useTheme("light")}>Light Theme</span>
                </Menu.Item>
            </Menu>
        </Layout.Header>
    );
}

export default Navbar;
