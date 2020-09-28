import React, { useState } from "react";
import Navbar from "@/Shared/Navbar";
import { useTitle, useDualRef } from "@/Hooks";
import Site from "@/Shared/layout";
import Card from "antd/lib/card";

function Home() {
    useTitle("Home");

    const [height, setHeight] = useState(0);

    const [lay, layout] = useDualRef();

    const home = useDualRef(true, updateHeight);

    //? Seems the callback must be defined before the hook if cb is defined as const
    function updateHeight(node) {
        setHeight(node.getBoundingClientRect().height);
    }
    return (
        <Site ref={layout}>
            <Card>
                <div ref={home}>
                    I'm the Home component! of height {Math.round(height)}px{" "}
                    <br />
                    <button onClick={() => lay.current.lay_func()}>
                        Run Function in Layout
                    </button>
                    <button onClick={() => lay.current.lay_func2()}>
                        Run Function 2 in Layout
                    </button>
                </div>
            </Card>
        </Site>
    );
}

export default Home;
