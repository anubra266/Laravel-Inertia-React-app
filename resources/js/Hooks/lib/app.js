import { useCallback, useEffect, useImperativeHandle, useRef } from "react";
import { Inertia } from "@inertiajs/inertia";

/**
 * Sets Title for Page
 * @param {string} title Page Title
 */
export function useTitle(title) {
    return (document.title = title);
}

/**
 * Set Ref for an Element or Component
 * @param {boolean} cbonly indicates whether to return just callbackref
 * @param {function} callback Function to execute on Node Render (optional)
 * @param {function} cleanup Function to execute on Node Unmount (optional)
 */
export const useDualRef = (cbonly, callback, cleanup) => {
    const ref = useRef(null);
    const setRef = useCallback(node => {
        if (ref.current) {
            cleanup && cleanup(node);
        }
        if (node) {
            callback && callback(node);
        }

        ref.current = node;
    }, []);
    return cbonly ? setRef : [ref, setRef];
};

/**
 * Assign References to a collection
 * @param {array} list Collection to assign references
 */
export function useDynamicRefs(list) {
    return list.reduce((acc, nxt, index) => {
        acc[index] = useRef();
        return acc;
    }, []);
}

/**
 * Expose instances to a Parent Component
 * @param {object} ref Ref to identify Component
 * @param {object} instances Variables, functions to expose to Parent
 */
export const useExpose = (ref, instances) => {
    return useImperativeHandle(ref, () => {
        return { ...instances };
    });
};

/**
 * Scroll to an element
 * @param {object} ref Element to scroll to
 */
export function useScroll(ref) {
    ref.current.scrollIntoView({
        behavior: "smooth",
        block: "start"
    });
}

/**
 * Perform Silent Inertia Reload
 * @param {integer} refreshTime Number od Seconds interval for refresh
 */
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
