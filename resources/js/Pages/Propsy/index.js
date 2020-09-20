import React, { useContext } from "react";

import { useDynamicRefs, useTitle } from "@/Hooks";
import { Context, Provider } from "./userstore";

import Navbar from "@/Shared/Navbar";

export default function Propsy() {
    useTitle("Propsy");
    const user = { name: "Abraham", age: 19 };
    const store = { user };
    return (
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-md-8">
                    <div className="card">
                        <Navbar />
                        <div className=" border card-body">
                            I'm an Propsy component, trying to avoid Prop
                            Drilling.
                            <br />
                            He's {user.name}, aged {user.age}
                            <Provider value={store}>
                                <Child />
                            </Provider>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

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
