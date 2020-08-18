import React, { useRef } from "react";
import { Helmet } from "react-helmet";
import Navbar from "@/Shared/Navbar";
import CatchError from "@/Helpers/CatchError";

function Home() {
    const pageLoader = useRef(null);

    return (
        <CatchError>
            <div className="container">
                <Helmet title="Home" />
                <div className="row justify-content-center">
                    <div className="col-md-8">
                        <div className="card">
                            <Navbar pageLoader={pageLoader} />
                            <div className="card-body">
                                I'm an Home component!
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </CatchError>
    );
}

export default Home;
