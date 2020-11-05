import React, { useState } from "react";
import { useTitle, useDualRef } from "ab-hooks";
import Site from "@/Shared/layout";
import Card from "antd/lib/card";
import { BsFillHouseFill } from "react-icons/bs";

function Index() {
    useTitle("Index");

    const [height, setHeight] = useState(0);

    const index = useDualRef(true, updateHeight);

    //? Seems the callback must be defined before the hook if cb is defined as const
    function updateHeight(node) {
        setHeight(node.getBoundingClientRect().height);
    }
    return (
        <Card>
            <div ref={index}>
                I'm the Index component! of height {Math.round(height)}px{" "}
                <BsFillHouseFill /> <br />
            </div>
        </Card>
    );
}
/*
 * This way(Persisted Layouts), the state of the Layout does not change and can be shared across visits
 * Watch The animated Logo while navigating pages
 */
Index.layout = page => <Site children={page} />;

export default Index;
