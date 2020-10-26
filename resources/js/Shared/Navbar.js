import React, { useState } from "react";
import { InertiaLink, usePage } from "@inertiajs/inertia-react";
import Layout from "antd/lib/layout";
import Menu from "antd/lib/menu";
import message from "antd/lib/message";

import { useTheme } from "@/Hooks";

function Navbar() {
    const routes = usePage().props.routes.general;

    const getUrl = () => {
        const present = routes.find(r => r.present);
        return `menu-${present.route}`;
    };
    const url = getUrl();

    const applyTheme = async ({ key: theme }) => {
        await message.loading({
            key: 1,
            content: "Applying Theme",
            duration: 0.1
        });
        await useTheme({ theme }).then(() => message.destroy(1));
    };

    return (
        <Layout.Header className="header">
            <div className="logo" />
            <Menu theme="dark" mode="horizontal" defaultSelectedKeys={url}>
                {routes.map(NavItem => {
                    return (
                        <Menu.Item key={`menu-${NavItem.route}`}>
                            <InertiaLink
                                preserveState
                                preserveScroll
                                href={route(NavItem.route)}
                            >
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
                <Menu.Item key="login">
                    <a href={route("login")}>Login</a>
                </Menu.Item>
            </Menu>
        </Layout.Header>
    );
}

export default Navbar;
