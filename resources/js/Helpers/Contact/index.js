import { Inertia } from "@inertiajs/inertia";

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
                //* When Response is received, handle response
                onSuccess: page => {
                    const errors = page.props.errors.contact;
                    errors && setErrors(errors);
                },
            }
        );
    }
}
export default ContactHelper;
