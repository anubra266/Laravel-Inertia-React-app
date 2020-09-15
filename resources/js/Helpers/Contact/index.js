import { Inertia } from "@inertiajs/inertia";

class ContactHelper {
    constructor(load) {
        this.load = load;
    }
    submit(data) {
        this.load(true);
        //*Inertia implements the custom methods
        Inertia.put("/submit", data).then(() => this.load(false));
    }
}
export default ContactHelper;
