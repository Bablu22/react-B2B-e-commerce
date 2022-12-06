import React from 'react'

function Customer({ customer }) {
    return (
        <div className="bg-white  px-5 py-3.5 rounded-lg shadow hover:shadow-xl w-full mx-auto transform hover:-translate-y-[0.125rem] transition duration-100 ease-linear" >
            <div className="w-full flex items-center justify-between">
                <span className="font-medium text-sm text-slate-400">Customer</span>
                <button className="-mr-1 bg-slate-100 hover:bg-slate-200 text-slate-400 hover:text-slate-600 h-5 w-5 rounded-full flex justify-center items-center">
                    <svg className="h-2 w-2 fill-current items-center" viewBox="0 0 20 20"><path d="M10 8.586L2.929 1.515 1.515 2.929 8.586 10l-7.071 7.071 1.414 1.414L10 11.414l7.071 7.071 1.414-1.414L11.414 10l7.071-7.071-1.414-1.414L10 8.586z" /></svg>
                </button>
            </div>
            <div className="flex items-center mt-2 rounded-lg px-1 py-1 cursor-pointer">
                <div className="relative flex flex-shrink-0 items-end">
                    <img className="h-16 w-16 rounded" src={customer.picture.medium} alt='' />

                </div>
                <div className="ml-3">
                    <span className="font-semibold tracking-tight">{customer.name.first} {customer.name.last}</span>

                    <p className="text-sm leading-4 pt-2  opacity-70">10 Orders</p>

                </div>
            </div>
        </div >
    )
}

export default Customer
