import React from "react";
import { useTitle } from "@/Hooks";
import Site from "@/Shared/layout";
import Card from "antd/lib/card";

function About() {
    useTitle("About");

    return <Card className="card-body">I'm an About component!</Card>;
}
About.layout = page => <Site children={page} />;

export default About;
