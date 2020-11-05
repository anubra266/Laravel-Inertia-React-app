import React from "react";
import { useTitle } from "ab-hooks";
import Site from "@/Shared/layout";
import Card from "antd/lib/card";
import Button from "antd/lib/button";
import { Inertia } from "@inertiajs/inertia";

function About(props) {
    useTitle("About");
    const loadInfo = () => {
        Inertia.reload({ only: ["info"] });
    };
    return (
        <React.Fragment>
            <Card className="card-body">
                <p>I'm an About component!</p>
                <p>
                    <Button type="primary" onClick={loadInfo}>
                        Load App Info
                    </Button>
                </p>
                <p>{props.info}</p>
            </Card>
        </React.Fragment>
    );
}
About.layout = page => <Site children={page} />;

export default About;
