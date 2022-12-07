import React, { useState } from "react";
import { MdAddBusiness } from "react-icons/md";
import FormRow from "../components/common/FormRow";

const initialState = {
    name: "",
    phone: "",
    password: "",
    confirmPassword: "",
    isMember: true,
};

function Account() {
    const [values, setValues] = useState(initialState);

    const toggleMember = () => {
        setValues({ ...values, isMember: !values.isMember });
    };

    const handleChange = (e) => {
        setValues({ ...values, [e.target.name]: e.target.value });
    };
    const onSubmit = (e) => {

        e.preventDefault()
        console.log(values);
    };

    return (
        <>
            <section className="flex items-center justify-center mb-20">
                <div className="w-full max-w-md p-6 space-y-4 bg-white border rounded">
                    <form className="form" onSubmit={onSubmit}>
                        <div className="flex items-center justify-center py-5">

                            <MdAddBusiness size={40} />
                            <h1 className="text-3xl">B2B</h1>

                        </div>
                        <h3 className="mb-4 text-3xl font-bold text-center font-josefin">
                            {values.isMember ? "Login" : "Register"}
                        </h3>

                        {/* name input */}
                        {!values.isMember && (
                            <FormRow
                                labelText="Name"
                                type="text"
                                name="name"
                                value={values.name}
                                handleChange={handleChange}
                                placeholder="Enter your name"
                                required
                            />
                        )}

                        {/* email input */}
                        <FormRow
                            type="phone"
                            name="phone"
                            value={values.phone}
                            handleChange={handleChange}
                            placeholder="Enter your phone"
                            labelText="Phone"
                            required
                        />
                        {/* password input */}
                        <FormRow
                            type="password"
                            name="password"
                            value={values.password}
                            handleChange={handleChange}
                            placeholder="Enter your password"
                            labelText="Password"
                            required
                        />
                        {!values.isMember && (
                            <FormRow
                                labelText="Confirm password"
                                type="password"
                                name="confirmPassword"
                                value={values.confirmPassword}
                                handleChange={handleChange}
                                placeholder="Retype password"
                                required
                            />
                        )}

                        <button
                            type="submit"
                            className={`${values.isMember ? "bg-teal-800" : "bg-teal-800"
                                } flex justify-center w-full p-3 my-5 font-semibold tracking-wide text-gray-100 transition duration-500 ease-in  rounded cursor-pointer hover:bg-gray-900 font-josefin`}
                        >
                            {values.isMember ? "Login" : "Register"}
                        </button>


                        <p className="font-roboto">
                            {values.isMember ? "Not a member yet?" : "Already a member?"}
                            <button
                                type="button"
                                onClick={toggleMember}
                                className="ml-2 text-sm text-blue-600 cursor-pointer font-roboto"
                            >
                                {values.isMember ? "Register" : "Login"}
                            </button>
                        </p>
                    </form>
                </div>
            </section>
        </>
    );
}

export default Account;
