import React from "react";
import { InertiaLink, usePage } from "@inertiajs/inertia-react";
import Menu from "antd/lib/menu";
import message from "antd/lib/message";
import { useTheme } from "ab-hooks";

const MenuList = props => {
    const routes = usePage().props.routes.general;

    const url = `menu-${route().current()}`;

    const applyTheme = async ({ key: theme }) => {
        await message.loading({
            key: 1,
            content: "Applying Theme",
            duration: 0.1
        });
        await useTheme({ theme }).then(() => message.destroy(1));
    };

    return (
        <Menu
            theme={props.mobile ? "light" : "dark"}
            mode={props.mobile ? "vertical" : "horizontal"}
            activeKey={url}
            defaultSelectedKeys={url}
        >
            {routes.map(NavItem => {
                return (
                    <Menu.Item key={`menu-${NavItem.route}`}>
                        <InertiaLink
                            preserveScroll
                            preserveState
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
    );
};
export default MenuList;
