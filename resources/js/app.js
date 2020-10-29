import { InertiaApp } from "@inertiajs/inertia-react";
import React from "react";
import { render } from "react-dom";
import CatchError from "@/Shared/CatchError";
import { useProgressBar } from "./progressBar";

const app = document.getElementById("app");
useProgressBar();

render(
    <CatchError>
        <React.Fragment>
            <InertiaApp
                initialPage={JSON.parse(app.dataset.page)}
                resolveComponent={name =>
                    import(`@/Pages/${name}`).then(module => module.default)
                }
                transformProps={props => {
                    return {
                        //* Mutate the props passed to frontend here
                        ...props
                    };
                }}
            />
        </React.Fragment>
    </CatchError>,
    app
);
