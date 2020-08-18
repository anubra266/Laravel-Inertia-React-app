import React, { useRef } from "react";
import { InertiaLink } from "@inertiajs/inertia-react";
import { Helmet } from "react-helmet";
import Navbar from "@/Shared/Navbar";
import LoadingBar from "react-top-loading-bar";

function About() {
    const ref = useRef(null);

    return (
        <div className="container">
            <Helmet title="About" />
            <LoadingBar color="#f11946" ref={ref} />
            <div className="row justify-content-center">
                <div className="col-md-8">
                    <div className="card">
                        <Navbar />

                        <div className="card-body">I'm an About component!</div>

                        <button
                            className="btn btn-info"
                            onClick={() => ref.current.continuousStart()}
                        >
                            Start
                        </button>
                        <button
                            className="btn btn-danger"
                            onClick={() => ref.current.complete()}
                        >
                            End
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default About;
