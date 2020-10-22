import { useEffect } from "react";
import { usePage } from "@inertiajs/inertia-react";
import message from "antd/lib/message";

const FlashMessage = () => {
    const { flash, errors } = usePage().props;
    message.config({
        duration: 5,
        maxCount: 1
    });
    useEffect(() => {
        Object.keys(flash).forEach(status => {
            flash[status] && message[status](flash[status]);
        });
    }, [flash]);
    //* Inform client of errors in requests
    useEffect(() => {
        Object.keys(errors).length > 0 &&
            message.error("There are errors in the form");
    }, [errors]);
};

/**
 * Display Flash Messages in Layout
 */
export const useFlashMessage = () => {
    return FlashMessage();
};
