import React, { useRef } from "react";
import Navbar from "@/Shared/Navbar";
import { useTitle } from "@/Hooks";

function Home() {
    useTitle("Home");
    const navbar = useRef();
    return (
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-md-8">
                    <div className="card">
                        <Navbar ref={navbar} />
                        <div className="card-body">
                            I'm the Home component! <br />
                            <button onClick={() => navbar.current.nav_func()}>
                                Run Function in Navbar
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Home;
