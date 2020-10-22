import { Inertia } from "@inertiajs/inertia";

class ContactHelper {
    constructor(load) {
        this.load = load;
    }
    submit(data) {
        this.load(true);
        //*Inertia implements the custom methods
        Inertia.post(route("contact.message"), data, {
            onStart: () => console.log("Sending"),
            onFinish: () => console.log("Sent"),
            onSuccess: () => this.load(false)
        });
    }
}
export default ContactHelper;
