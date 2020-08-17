import { Inertia } from "@inertiajs/inertia";
import { InertiaLink } from "@inertiajs/inertia-react";
import React, { useState } from "react";
import Navbar from "../Layouts/Navbar";

function Contact() {
    const [values, setValues] = useState({
        first_name: "",
        last_name: "",
        email: ""
    });

    function handleChange(e) {
        const key = e.target.id;
        const value = e.target.value;
        setValues(values => ({
            ...values,
            [key]: value
        }));
    }

    function handleSubmit(e) {
        e.preventDefault();
        Inertia.post("/users", values);
    }
    return (
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-md-8">
                    <div className="card">
                    <Navbar />
                        <div className="card-body">
                            Contact Us!
                            <form onSubmit={handleSubmit}>
                                <div className="form-group">
                                    <label htmlFor="first_name">
                                        First name:
                                    </label>
                                    <input
                                        className="form-control"
                                        id="first_name"
                                        value={values.first_name}
                                        onChange={handleChange}
                                    />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="last_name">
                                        Last name:
                                    </label>
                                    <input
                                        className="form-control"
                                        id="last_name"
                                        value={values.last_name}
                                        onChange={handleChange}
                                    />
                                    <label htmlFor="email">Email:</label>
                                </div>
                                <div className="form-group">
                                    <input
                                        className="form-control"
                                        id="email"
                                        value={values.email}
                                        onChange={handleChange}
                                    />
                                </div>
                                <button
                                    className="btn btn-primary"
                                    type="submit"
                                >
                                    Submit
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Contact;
