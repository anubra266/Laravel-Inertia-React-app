import { Inertia } from "@inertiajs/inertia";

class ContactHelper {
    constructor(load) {
        this.load = load;
    }
    submit(data) {
        //*Inertia implements the custom methods
        Inertia.post(route("contact.message"), data, {
            preserveScroll: true,
            onStart: () => this.load(true),
            onFinish: () => this.load(false),
            onSuccess: () => console.log("Finished")
        });
    }
}
export default ContactHelper;
