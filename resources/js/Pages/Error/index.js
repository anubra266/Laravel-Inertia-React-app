import React from "react";
import Result from "antd/lib/result";
import Button from "antd/lib/button";
import { InertiaLink } from "@inertiajs/inertia-react";
import "antd/dist/antd.css";

export default function ErrorPage({ status }) {
    const title = {
        503: "503: Service Unavailable",
        500: "500: Server Error",
        404: "404: Page Not Found",
        403: "403: Forbidden"
    }[status];

    const description = {
        503: "Sorry, we are doing some maintenance. Please check back soon.",
        500: "Whoops, something went wrong on our servers.",
        404: "Sorry, the page you are looking for could not be found.",
        403: "Sorry, you are not authorized to access this page."
    }[status];

    return (
        <div>
            <Result
                status={status} 
                title={title}
                subTitle={description}
                extra={
                    <Button type="primary">
                        <InertiaLink href="/">Go Home</InertiaLink>
                    </Button>
                }
            />
        </div>
    );
}
