import { InertiaLink } from "@inertiajs/inertia-react";
import React from "react";

function About() {
    return (
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-md-8">
                    <div className="card">
                        <div className="card-header">About Component</div>
                        <InertiaLink href="/">Home</InertiaLink>

                        <div className="card-body">I'm an About component!</div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default About;
