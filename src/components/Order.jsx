import React from 'react'
import { MdKeyboardArrowRight } from "react-icons/md"


function Order({ order }) {

    return (
        <>
            <div className="bg-white text-dark rounded-lg shadow-lg mb-2">
                <main className="px-5 py-5 h-40">
                    <div className='mb-6 flex items-center justify-between'>
                        <h2 className='font-medium'>Order #{order.id}</h2>
                        <h2 className='text-gray-500 '>Today, 11:pm</h2>
                    </div>
                    <div className="grid grid-cols-6">

                        <div className="">
                            <img src={order.image} className="h-18 w-18 rounded" alt="" />
                        </div>

                        <div className="col-span-4 px-3 font-semibold flex flex-col">

                            <div className=" text-gray-400 font-light">
                                <p>Quantity: {order.quantity} Items</p>
                            </div>

                            <div className="font-medium">
                                <p>Price: ${order.price}</p>
                            </div>
                        </div>

                        <div className="col-span-1 py-2 justify-self-end">
                            <button className={`font-bold text-md rounded py-1 px-4 ${order.payment === 'PAID' ? 'bg-red-300 text-red-800' : "bg-orange-300 text-orange-800"}`}>
                                {order.payment}
                            </button>
                        </div>
                    </div>
                </main>

                <footer className="px-5 py-4  border-t border-gray-200 flex justify-between">
                    <div className='flex items-center space-x-3'>
                        <span className={`h-5 w-5 rounded-full  block ${order.status === 'Pending' ? 'bg-orange-300' : (order.status === 'Shipped' ? "bg-orange-800" : "bg-green-500")}`}>

                        </span>
                        <span>{order.status}</span>
                    </div>
                    <button className="flex items-center  space-x-5 border px-5 py-1 rounded">
                        Details <MdKeyboardArrowRight />
                    </button>

                </footer>
            </div>
        </>
    )
}

export default Order