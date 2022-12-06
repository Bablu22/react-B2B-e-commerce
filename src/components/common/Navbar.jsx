import React from "react";
import { MdAddBusiness } from "react-icons/md";

function Navbar() {
    return (
        <nav className="fixed w-full flex flex-wrap items-center justify-between py-5 bg-gray-900 text-gray-200  navbar navbar-expand-lg navbar-light">
            <div className="container-fluid w-full flex flex-wrap items-center justify-between px-6">
                <div className="flex items-center">
                    <MdAddBusiness size={40} />
                    <h1 className="text-3xl">B2B</h1>
                </div>

                <div className="flex items-center relative"></div>
            </div>
        </nav>
    );
}

export default Navbar;
