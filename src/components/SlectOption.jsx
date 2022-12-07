import React, { useState } from "react";


function SlectOption({ title, filter }) {
    const [params, setParams] = useState("")

    console.log(params);

    return (
        <div className="flex justify-between items-center">
            <h2 className="text-2xl">{params || title} Orders</h2>
            <fieldset>
                <div className="relative border border-gray-300 text-gray-800 bg-white shadow-lg">
                    <select
                        className="appearance-none w-full py-1 px-4 bg-white mr-5 outline-none"
                        name="status"
                        id="frm-whatever"
                        onChange={(e) => setParams(e.target.value)}
                    >
                        {filter.map((option) => (
                            <option key={option.value} value={option.value}>
                                {option.title}
                            </option>
                        ))}
                    </select>
                    <div className="pointer-events-none absolute right-0 top-0 bottom-0 flex items-center px-2 text-gray-700 border-l">
                        <svg
                            className="h-4 w-4"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 20 20"
                        >
                            <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                        </svg>
                    </div>
                </div>
            </fieldset>
        </div>
    );
}

export default SlectOption;
