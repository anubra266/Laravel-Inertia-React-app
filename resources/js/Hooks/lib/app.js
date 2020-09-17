import React from "react";

export function useTitle(title) {
    return (document.title = title);
}

export function useDynamicRefs(list) {
    return list.reduce((acc, nxt, index) => {
        acc[index] = React.createRef();
        return acc;
    });
}

export function useScroll(ref) {
    ref.current.scrollIntoView({
        behavior: "smooth",
        block: "start"
    });
}
