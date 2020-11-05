//* libraries
import React, { useState, useEffect } from "react";
import { useRememberedState } from "@inertiajs/inertia-react";
//* Hooks and Helpers
import { useIprops, useTitle } from "ab-hooks";
import ContactHelper from "@/Helpers/Contact";
//* Library Components
import Form from "antd/lib/form";
import Input from "antd/lib/input";
import Button from "antd/lib/button";
import Card from "antd/lib/card";
import Site from "@/Shared/layout";
function Contact() {
    useTitle("Contact");
    const [loading, setLoading] = useState(false);
    const [errors, setErrors] = useState({});
    const [data, setData] = useRememberedState();
    const Handle = new ContactHelper(setLoading);

    const { contact, message } = useIprops();

    function handleSubmit(data) {
        Handle.submit(data, setErrors);
    }
    return (
        <Card>
            {contact}
            {message}
            <Form
                layout="vertical"
                onFinish={handleSubmit}
                onValuesChange={(a, b) => setData(b)}
                initialValues={
                    data || {
                        first_name: "Abraham",
                        last_name: "Aremu",
                        // email: "anubra266@gmail.com",
                        message: "Just Saying Hi!"
                    }
                }
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
                    validateStatus={errors.first_name && "error"}
                    help={errors.first_name}
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
                    help={errors.last_name}
                >
                    <Input placeholder="Last Name" />
                </Form.Item>
                <Form.Item
                    label="Email"
                    name="email"
                    rules={[
                        {
                            // required: true,
                            message: "Please input Email!"
                        }
                    ]}
                    validateStatus={errors.email && "error"}
                    help={errors.email}
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
                    help={errors.message}
                >
                    <Input.TextArea placeholder="message" />
                </Form.Item>
                <Form.Item>
                    <Button type="primary" htmlType="submit" loading={loading}>
                        Submit
                    </Button>
                </Form.Item>
            </Form>
        </Card>
    );
}
Contact.layout = page => <Site children={page} />;

export default Contact;
