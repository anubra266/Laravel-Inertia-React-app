//* libraries
import React, { useState, useEffect } from "react";
import { usePage } from "@inertiajs/inertia-react";
//* Hooks and Helpers
import { useFlashMessage, useTitle } from "@/Hooks";
import ContactHelper from "@/Helpers/Contact";
//* Library Components
import Form from "antd/lib/form";
import Input from "antd/lib/input";
import Button from "antd/lib/button";
//* Custom components
import Navbar from "@/Shared/Navbar";
//* CSS
import "antd/dist/antd.css";
import { generateThemeColor, changeAntdTheme } from "dynamic-antd-theme";
function Contact() {
    useTitle("Contact");
    useFlashMessage();
    const { errors } = usePage();
    const [loading, setLoading] = useState(false);
    const Handle = new ContactHelper(setLoading);

    function handleSubmit(data) {
        Handle.submit(data);
    }
    //? Dynamic theme changing
    changeAntdTheme(generateThemeColor("purple"));
    return (
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-md-8">
                    <div className="card">
                        <Navbar />
                        <div className="card-body">
                            <h4>Contact Us! </h4>
                            <Form
                                layout="vertical"
                                onFinish={handleSubmit}
                                initialValues={{
                                    first_name: "Abraham"
                                }}
                            >
                                <Form.Item
                                    label="First Name"
                                    name="first_name"
                                    rules={[
                                        {
                                            required: true,
                                            message: "Please input First Name!"
                                        }
                                    ]}
                                    validateStatus={
                                        errors.first_name && "error"
                                    }
                                    help={
                                        errors.first_name &&
                                        errors.first_name[0]
                                    }
                                >
                                    <Input placeholder="First Name" />
                                </Form.Item>

                                <Form.Item
                                    label="Last Name"
                                    name="last_name"
                                    rules={[
                                        {
                                            required: true,
                                            message: "Please input Last Name!"
                                        }
                                    ]}
                                    validateStatus={errors.last_name && "error"}
                                    help={
                                        errors.last_name && errors.last_name[0]
                                    }
                                >
                                    <Input placeholder="Last Name" />
                                </Form.Item>
                                <Form.Item
                                    label="Email"
                                    name="email"
                                    rules={[
                                        {
                                            required: true,
                                            message: "Please input Email!"
                                        }
                                    ]}
                                    validateStatus={errors.email && "error"}
                                    help={errors.email && errors.email[0]}
                                >
                                    <Input type="email" placeholder="Email" />
                                </Form.Item>
                                <Form.Item
                                    label="Message"
                                    name="message"
                                    rules={[
                                        {
                                            required: true,
                                            message: "Please input Message!"
                                        }
                                    ]}
                                    validateStatus={errors.message && "error"}
                                    help={errors.message && errors.message[0]}
                                >
                                    <Input.TextArea placeholder="message" />
                                </Form.Item>
                                <Form.Item>
                                    <Button
                                        type="primary"
                                        htmlType="submit"
                                        loading={loading}
                                    >
                                        Submit
                                    </Button>
                                </Form.Item>
                            </Form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Contact;
