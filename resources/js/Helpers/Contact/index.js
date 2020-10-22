import { Inertia } from "@inertiajs/inertia";

class ContactHelper {
    constructor(load) {
        this.load = load;
    }
    submit(data, setErrors) {
        //*Inertia implements the custom methods
        Inertia.post(
            route("contact.message"),
            { ...data, _error_bag: "contact" },
            {
                preserveScroll: true,
                onStart: () => this.load(true),
                onFinish: () => this.load(false),
                onSuccess: page => {
                    const errors = page.props.errors.contact;
                    setErrors(errors);
                    console.log(page);
                }
            }
        );
    }
}
export default ContactHelper;
