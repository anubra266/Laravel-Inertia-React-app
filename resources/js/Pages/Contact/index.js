import React, { useRef, useState } from "react";
import { Inertia } from "@inertiajs/inertia";
import { usePage } from "@inertiajs/inertia-react";
import { Helmet } from "react-helmet";
import Navbar from "@/Shared/Navbar";
import { random } from "lodash";

function Contact() {
    const loader = useRef(null);
    const { errors } = usePage();
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
        //*If it was an edit form
        values._method = "PUT";
        Inertia.post("/submit", values);
    }
    return (
        <div className="container">
            <Helmet title="Contact" />
            <div className="row justify-content-center">
                <div className="col-md-8">
                    <div className="card">
                        <Navbar loader={loader} />
                        <div className="card-body">
                            <h4>Contact Us! </h4>
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
                                    {errors.first_name && (
                                        <label className="text-danger">
                                            {errors.first_name[0]}
                                        </label>
                                    )}
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
                                    {errors.last_name && (
                                        <label className="text-danger">
                                            {errors.last_name[0]}
                                        </label>
                                    )}
                                </div>
                                <div className="form-group">
                                    <label htmlFor="email">Email:</label>
                                    <input
                                        className="form-control"
                                        id="email"
                                        value={values.email}
                                        onChange={handleChange}
                                    />
                                    {errors.email && (
                                        <label className="text-danger">
                                            {errors.email[0]}
                                        </label>
                                    )}
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
