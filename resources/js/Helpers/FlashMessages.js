import React, { useState, useEffect } from "react";
import { usePage } from "@inertiajs/inertia-react";

export default () => {
    const [visible, setVisible] = useState(true);
    const { flash, errors } = usePage();
    const numOfErrors = Object.keys(errors).length;

    useEffect(() => {
        setVisible(true);
    }, [flash, errors]);

    return (
        <div className="row">
            <div className="col-12">
                {flash.success && visible && (
                    <div
                        class="alert alert-danger alert-dismissible fade show"
                        role="alert"
                    >
                        {flash.success}
                        <button
                            onClick={() => setVisible(false)}
                            type="button"
                            class="close"
                            aria-label="Close"
                        >
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                )}
                {(flash.error || numOfErrors > 0) && visible && (
                    <div
                        class="alert alert-danger alert-dismissible fade show"
                        role="alert"
                    >
                        {flash.error && flash.error}
                        {numOfErrors === 1 && (
                            <span>
                                There's an <strong>{numOfErrors} error</strong>{" "}
                                in the form.
                            </span>
                        )}
                        {numOfErrors > 1 && (
                            <span>
                                There are <strong>{numOfErrors} errors</strong>{" "}
                                in the form.
                            </span>
                        )}
                        <button
                            onClick={() => setVisible(false)}
                            type="button"
                            class="close"
                            aria-label="Close"
                        >
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                )}
            </div>
        </div>
    );
};
