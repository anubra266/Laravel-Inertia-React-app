import { InertiaLink } from "@inertiajs/inertia-react";
import React from "react";
import Navbar from "../Layouts/Navbar";

function About() {
    return (
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-md-8">
                    <div className="card">
                        <Navbar />

                        <div className="card-body">I'm an About component!</div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default About;
