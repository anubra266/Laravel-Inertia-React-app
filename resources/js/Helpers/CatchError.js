import React from "react";

export default class CatchError extends React.Component {
    constructor(props) {
        super(props);
        this.state = { error: null, errorInfo: null };
    }

    componentDidCatch(error, errorInfo) {
        // Catch errors in any components below and re-render with error message
        this.setState({
            error: error,
            errorInfo: errorInfo
        });
        // You can also log error messages to an error reporting service here
    }

    render() {
        if (this.state.errorInfo) {
            // Error path
            return (
                <div
                    style={{
                        background: "white",
                        position: "fixed",
                        height: "100%",
                        width: "100%"
                    }}
                >
                    <div className="container-fluid">
                        <div className="row justify-content-md-center mt-3">
                            <div className="col-9">
                                <div className="row">
                                    <div className="col">
                                        <h4 style={{ color: "red" }}>
                                            Failed to compile
                                        </h4>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col">
                                        <pre className="pt-2 pl-3 pb-2 alert alert-danger">
                                            <code className="text-danger">
                                                {this.state.error &&
                                                    this.state.error.toString()}
                                            </code>
                                            {
                                                this.state.errorInfo
                                                    .componentStack
                                            }
                                        </pre>
                                        <small className="text-muted text-sm">
                                            This error occurred during the build
                                            time and cannot be dismissed. -{" "}
                                            <a href="https://github.com/anubra266">
                                                anubra266{" "}
                                            </a>
                                            Error Analyzer
                                        </small>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            );
        }
        // Normally, just render children
        return this.props.children;
    }
}
