import { useEffect } from "react";
import { usePage } from "@inertiajs/inertia-react";
import message from "antd/lib/message";

const FlashMessage = () => {
    const { flash, errors } = usePage();
    message.config({
        duration: 5,
        maxCount: 1
    });
    useEffect(() => {
        Object.keys(flash).forEach(status => {
            flash[status] && message[status](flash[status]);
        });
    }, [flash]);
    useEffect(() => {
        Object.keys(errors).length > 0 &&
            message.error(
                Object.keys(errors)
                    .reduce((acc, err) => {
                        acc.push(`${errors[err][0]} `);
                        return acc;
                    }, [])
                    .join("")
            );
    }, [errors]);
};

/**
 * Display Flash Messages in Layout
 */
export const useFlashMessage = () => {
    return FlashMessage();
};
