import React from "react";
import Layout from "antd/lib/layout";
import Menu from "antd/lib/menu";
import HeartOutlined from "@ant-design/icons/HeartOutlined";
const { Footer } = Layout;
function SiteFooter() {
    return (
        <React.Fragment>
            <Footer style={{ textAlign: "center" }}>
                InertiaApp ©{new Date().getFullYear()}{" "}
                <a href="https://www.linkedin.com/in/anubra266" target="_blank">
                    Anubra
                </a>
            </Footer>
        </React.Fragment>
    );
}

export default SiteFooter;
