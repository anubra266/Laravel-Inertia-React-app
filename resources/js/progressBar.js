import { InertiaProgress } from "@inertiajs/progress";
import { useThemeVar } from "ab-hooks";

const progressBar = {
    delay: 0,

    color: useThemeVar("primary-color"),

    includeCSS: true,

    showSpinner: true
};

//? progress bar for request loads
InertiaProgress.init(progressBar);

export const useProgressBar = () => {
    return true;
};
