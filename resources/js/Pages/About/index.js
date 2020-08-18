import React, { useRef } from "react";
import { InertiaLink } from "@inertiajs/inertia-react";
import { Helmet } from "react-helmet";
import Navbar from "@/Shared/Navbar";

function About() {
    const loader = useRef(null);

    return (
        <div className="container">
            <Helmet title="About" />
            <div className="row justify-content-center">
                <div className="col-md-8">
                    <div className="card">
                        <Navbar loader={loader} />
                        <div className="card-body">I'm an About component!</div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default About;
