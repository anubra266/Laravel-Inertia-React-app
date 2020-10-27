import React, { forwardRef } from "react";
import "antd/dist/antd.css";

import Layout from "antd/lib/layout";

import Navbar from "@/Shared/Navbar/index";
import SiteFooter from "./SiteFooter";
import BackTop from "antd/lib/back-top";

import { useExpose, useFlashMessage } from "@/Hooks";
const up = {
    height: 40,
    width: 40,
    lineHeight: "40px",
    borderRadius: 4,
    backgroundColor: "#7971ea",
    color: "#fff",
    textAlign: "center",
    fontSize: 14
};
const layout = ({ children }, ref) => {
    useFlashMessage();
    const lay_func = () => {
        alert("function in Layout");
    };
    const lay_func2 = () => {
        alert("function 2 in Layout");
    };
    useExpose(ref, { lay_func, lay_func2 });

    return (
        <Layout>
            <Layout style={{ minHeight: "100vh" }}>
                <Navbar />
                <Layout style={{ padding: "0 24px 24px" }}>
                    <Layout.Content
                        className="site-layout-background"
                        style={{
                            padding: 24,
                            margin: 0
                        }}
                    >
                        {children}
                    </Layout.Content>
                </Layout>
                <SiteFooter />
            </Layout>
            <BackTop>
                <div style={up}>UP</div>
            </BackTop>
        </Layout>
    );
};

export default forwardRef(layout);
