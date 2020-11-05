import React, { useContext } from "react";

import { useTitle } from "ab-hooks";
import Site from "@/Shared/layout";
import Card from "antd/lib/card";
import { Context, Provider } from "./userstore";

const Propsy = () => {
    useTitle("Propsy");
    const user = { name: "Abraham", age: 19 };
    const store = { user };
    return (
        <Card>
            <div className="border">
                I'm an Propsy component, trying to avoid Prop Drilling.
                <br />
                He's {user.name}, aged {user.age}
                <Provider value={store}>
                    <Child />
                </Provider>
            </div>
        </Card>
    );
};
Propsy.layout = page => <Site children={page} />;
export default Propsy;

const Child = () => {
    return (
        <div className=" border card-body">
            Propsy Child
            <GrandChild />
        </div>
    );
};

const GrandChild = () => {
    return (
        <div className=" border card-body">
            Propsy GrandChild
            <GreatGrandChild />
        </div>
    );
};

const GreatGrandChild = () => {
    return (
        <div className=" border card-body">
            Propsy GreatGrandChild
            <GreatGreatGrandChild />
        </div>
    );
};

const GreatGreatGrandChild = () => {
    const store = useContext(Context);
    const { user } = store;
    return (
        <div className=" border card-body">
            Propsy GreatGreatGrandChild
            <br />
            <div>
                My GreatGreatGrandFather is {user.name} aged {user.age}
            </div>
        </div>
    );
};
