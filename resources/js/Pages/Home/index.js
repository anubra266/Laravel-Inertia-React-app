import React, { useState } from "react";
import { useTitle, useDualRef } from "@/Hooks";
import Site from "@/Shared/layout";
import Card from "antd/lib/card";
import Button from "antd/lib/button";
import Space from "antd/lib/space";

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
                    <Space>
                        <Button
                            type="primary"
                            onClick={() => lay.current.lay_func()}
                        >
                            Run Function in Layout
                        </Button>
                        <Button
                            type="primary"
                            onClick={() => lay.current.lay_func2()}
                        >
                            Run Function 2 in Layout
                        </Button>
                    </Space>
                </div>
            </Card>
        </Site>
    );
}

export default Home;
