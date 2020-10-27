import React, { useState } from "react";
import MenuList from "./MenuList";
import Typography from "antd/lib/typography";
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
        <React.Fragment>
            <div className="menuCon">
                <div className="logo">
                    <Typography.Title type="secondary" level={3}>
                        InertiaApp
                    </Typography.Title>
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
        </React.Fragment>
    );
};
export default Navbar;
