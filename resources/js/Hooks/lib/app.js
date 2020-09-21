import React, { useEffect, useImperativeHandle } from "react";
import { Inertia } from "@inertiajs/inertia";

export function useTitle(title) {
    return (document.title = title);
}

export function useDynamicRefs(list) {
    return list.reduce((acc, nxt, index) => {
        acc[index] = React.createRef();
        return acc;
    });
}

export const useExpose = (ref, functions) => {
    return useImperativeHandle(ref, () => {
        return { ...functions };
    });
};

export function useScroll(ref) {
    ref.current.scrollIntoView({
        behavior: "smooth",
        block: "start"
    });
}

export const useSmoothRefresh = refreshTime => {
    const refresh = () => {
        Inertia.reload();
    };
    useEffect(() => {
        const refresher = setInterval(refresh, refreshTime);
        return () => {
            clearInterval(refresher);
        };
    }, []);
};
