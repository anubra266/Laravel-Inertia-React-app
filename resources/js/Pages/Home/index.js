import React, { useState } from "react";
import Navbar from "@/Shared/Navbar";
import { useTitle, useDualRef } from "@/Hooks";

function Home() {
    useTitle("Home");

    const [height, setHeight] = useState(0);

    const [nav, navbar] = useDualRef();

    const home = useDualRef(true, updateHeight);

    //? Seems the callback must be defined before the hook if cb is defined as const
    function updateHeight(node) {
        setHeight(node.getBoundingClientRect().height);
    } 
    return (
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-md-8">
                    <div className="card">
                        <Navbar ref={navbar} />
                        <div className="card-body" ref={home}>
                            I'm the Home component! of height{" "}
                            {Math.round(height)}px <br />
                            <button onClick={() => nav.current.nav_func()}>
                                Run Function in Navbar
                            </button>
                            <button onClick={() => nav.current.nav_func2()}>
                                Run Function 2 in Navbar
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Home;
