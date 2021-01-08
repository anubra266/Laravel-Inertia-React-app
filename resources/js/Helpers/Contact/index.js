import { Inertia } from "@inertiajs/inertia";
import message from "antd/lib/message";

class ContactHelper {
    constructor(load) {
        this.load = load;
        //* Change to false to deny Request
        this.confirmAction = true;
    }
    submit(data, setErrors) {
        //*Inertia implements custom methods
        Inertia.post(
            route("contact.message"),
            { ...data, _error_bag: "contact" },
            {
                preserveScroll: true,
                //* Before Request Starts, Confirm Action
                onBefore: () => this.confirmAction,
                //* When Request Starts, start Loader
                onStart: () => this.load(true),
                //* When Requests finish, end loader
                onFinish: () => this.load(false),
                // If errors are found, prevents the onSuccess Callback
                onError:errors=>{
                    //* If errors is not an empty object, display it
                    setErrors(errors.contact || {});
                },
                //* When Response is received, handle response(Page Props)
                //* The props would also contain my custom session messages(respond())
                onSuccess: ({ props }) => {
                    props.flash.success && message.success(props.flash.success);
                }
            }
        );
    }
}
export default ContactHelper;
