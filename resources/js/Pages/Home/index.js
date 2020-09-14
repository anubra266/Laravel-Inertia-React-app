import React from "react";
import Navbar from "@/Shared/Navbar";

function Home() {
    document.title = "Home";
    return (
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-md-8">
                    <div className="card">
                        <Navbar />
                        <div className="card-body">I'm the Home component!</div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Home;
