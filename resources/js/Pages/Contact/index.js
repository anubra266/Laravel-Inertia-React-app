import React, { useRef, useState } from "react";
import { Inertia } from "@inertiajs/inertia";
import { usePage } from "@inertiajs/inertia-react";
import { Helmet } from "react-helmet";
import Navbar from "@/Shared/Navbar";
import FlashMessages from "@/Helpers/FlashMessages";
function Contact() {
    const pageLoader = useRef(null);
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
                        <Navbar pageLoader={pageLoader} />
                        <div className="card-body">
                            <FlashMessages />
                            <h4>Contact Us! </h4>
                            <form onSubmit={handleSubmit}>
                                <div className="form-group">
                                    <label htmlFor="first_name">
                                        First name:
                                    </label>
                                    <input
                                        className={`form-control ${errors.first_name &&
                                            "is-invalid"}`}
                                        id="first_name"
                                        value={values.first_name}
                                        onChange={handleChange}
                                    />
                                    {errors.first_name && (
                                        <div className="invalid-feedback">
                                            {errors.first_name[0]}
                                        </div>
                                    )}
                                </div>
                                <div className="form-group">
                                    <label htmlFor="last_name">
                                        Last name:
                                    </label>
                                    <input
                                        className={`form-control ${errors.last_name &&
                                            "is-invalid"}`}
                                        id="last_name"
                                        value={values.last_name}
                                        onChange={handleChange}
                                    />
                                    {errors.last_name && (
                                        <div className="invalid-feedback">
                                            {errors.last_name[0]}
                                        </div>
                                    )}
                                </div>
                                <div className="form-group">
                                    <label htmlFor="email">Email:</label>
                                    <input
                                        className={`form-control ${errors.email &&
                                            "is-invalid"}`}
                                        id="email"
                                        value={values.email}
                                        onChange={handleChange}
                                    />
                                    {errors.email && (
                                        <div className="invalid-feedback">
                                            {errors.email[0]}
                                        </div>
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
