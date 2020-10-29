import React, { useState, useEffect } from "react";
import MenuList from "./MenuList";
import Typography from "antd/lib/typography";
import Layout from "antd/lib/layout";
import { Drawer, Button } from "antd";
import "./navbar.css";
const Navbar = () => {
    const [time, setTime] = useState(0);
    useEffect(() => {
        const showTime = setInterval(() => {
            setTime(t => t + 1);
        }, 1000);
        return () => {
            clearTimeout(showTime);
        };
    }, []);

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
                    <span>InertiaApp {time}s</span>
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
