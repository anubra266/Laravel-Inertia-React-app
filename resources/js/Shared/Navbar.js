import React, { useState } from "react";
import { InertiaLink } from "@inertiajs/inertia-react";
import Layout from "antd/lib/layout";
import Menu from "antd/lib/menu";
import message from "antd/lib/message";

import routes from "./Routes";
import { useTheme } from "@/Hooks";

function Navbar() {
    const getUrl = () => {
        const location = window.location.href;
        const present_route = routes.general.routes.find(
            r => route(r.route).template === location
        );
        return [`menu-${present_route.route}`];
    };
    const url = getUrl();

    const applyTheme = async ({ key: theme }) => {
        message.loading({
            key: 1,
            content: "Applying Theme"
        });
        setTimeout(() => {
            useTheme(theme).then(() => message.destroy(1));
        }, 500);
    };

    return (
        <Layout.Header className="header">
            <div className="logo" />
            <Menu theme="dark" mode="horizontal" defaultSelectedKeys={url}>
                {routes.general.routes.map(NavItem => {
                    return (
                        <Menu.Item key={`menu-${NavItem.route}`}>
                            <InertiaLink href={route(NavItem.route)}>
                                {NavItem.name}
                            </InertiaLink>
                        </Menu.Item>
                    );
                })}
                <Menu.Item key="dark" onClick={applyTheme}>
                    Dark Theme
                </Menu.Item>
                <Menu.Item key="light" onClick={applyTheme}>
                    Light Theme
                </Menu.Item>
            </Menu>
        </Layout.Header>
    );
}

export default Navbar;
