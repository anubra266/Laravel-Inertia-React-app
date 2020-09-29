import React from "react";
import { InertiaLink } from "@inertiajs/inertia-react";
import Layout from "antd/lib/layout";
import Menu from "antd/lib/menu";

import routes from "./Routes";
import { useTheme } from "@/Hooks";

function Navbar() {
    return (
        <Layout.Header className="header">
            <div className="logo" />
            <Menu theme="dark" mode="horizontal" defaultSelectedKeys={["2"]}>
                {routes.general.routes.map((NavItem, key) => {
                    return (
                        <Menu.Item key={`nav-${key}`}>
                            <InertiaLink href={route(NavItem.route)}>
                                {NavItem.name}
                            </InertiaLink>
                        </Menu.Item>
                    );
                })}
                <Menu.Item>
                    <span
                        onClick={() =>
                            useTheme("dark")
                        }
                    >
                        Change Theme
                    </span>
                </Menu.Item>
            </Menu>
        </Layout.Header>
    );
}

export default Navbar;
