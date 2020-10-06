import { InertiaApp } from "@inertiajs/inertia-react";
import { InertiaProgress } from "@inertiajs/progress";
import progressBar from "./progress.json";
import React from "react";
import { render } from "react-dom";
import CatchError from "@/Shared/CatchError";

const app = document.getElementById("app");

//? progress bar for request loads
InertiaProgress.init(progressBar);

render(
    <CatchError>
        <React.Fragment>
            <InertiaApp
                initialPage={JSON.parse(app.dataset.page)}
                resolveComponent={name =>
                    import(`@/Pages/${name}`).then(module => module.default)
                }
            />
        </React.Fragment>
    </CatchError>,
    app
);
