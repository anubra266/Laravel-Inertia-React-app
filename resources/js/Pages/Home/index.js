import { InertiaLink } from "@inertiajs/inertia-react";
import React from "react";

function Example() {
    return (
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-md-8">
                    <div className="card">
                        <div className="card-header">Home Component</div>
                        <InertiaLink href="/about">About</InertiaLink>

                        <div className="card-body">I'm an Home component!</div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Example;
