import React, { useState } from "react";
import MenuList from "./MenuList";
import Typography from "antd/lib/typography";
import Layout from "antd/lib/layout";
import { Drawer, Button } from "antd";
import "./navbar.css";
const Navbar = () => {
    const [current, setCurrent] = useState("mail");
    const [visible, setVisible] = useState(false);

    const showDrawer = () => {
        setVisible(true);
    };
    const onClose = () => {
        setVisible(false);
    };
    return (
        <Layout.Header>
            <div className="menuCon">
                <div className="navLogo">
                    <span>InertiaApp</span>
                </div>
                <div className="menu">
                    <MenuList />
                </div>
                <Button type="ghost" className="barsMenu" onClick={showDrawer}>
                    <span className="barsBtn"></span>
                </Button>
                <Drawer
                    placement="right"
                    closable={false}
                    onClose={onClose}
                    visible={visible}
                >
                    <MenuList mobile />
                </Drawer>
            </div>
        </Layout.Header>
    );
};
export default Navbar;
