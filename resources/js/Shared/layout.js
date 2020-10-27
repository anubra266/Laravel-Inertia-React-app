import React, { forwardRef } from "react";
import "antd/dist/antd.css";

import Layout from "antd/lib/layout";

import Navbar from "@/Shared/Navbar/index";
// import Navbar from "@/Shared/Navbar";

import { useExpose, useFlashMessage } from "@/Hooks";

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
            <Navbar />
            <Layout>
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
            </Layout>
        </Layout>
    );
};

export default forwardRef(layout);
