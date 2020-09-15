import { useEffect } from "react";
import { usePage } from "@inertiajs/inertia-react";
import message from "antd/lib/message";

const useFlashMesssage = () => {
    const { flash, errors } = usePage();
    message.config({
        duration: 5,
        maxCount: 1
    });
    useEffect(() => {
        flash.success && message.success(flash.success);
        flash.error && message.error(flash.error);
        flash.info && message.info(flash.info);
        flash.warning && message.warning(flash.warning);
    }, [flash]);
    useEffect(() => {
        errors &&
            Object.keys(errors).forEach(err => {
                message.error(errors[err][0], 3);
            });
    }, [errors]);
};
export default useFlashMesssage;
