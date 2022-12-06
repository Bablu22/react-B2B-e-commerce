import React from "react";
import { BsThreeDotsVertical, BsFillShareFill } from "react-icons/bs";

function Product({ product }) {
    return (
        <>
            <div className="bg-white text-dark rounded-lg shadow-lg mb-2">
                <main className="px-5 py-5 h-40">
                    <content className="grid grid-cols-6">
                        <div className="">
                            <img src={product.image} className="h-18 w-18 rounded" alt="" />
                        </div>

                        <div className="col-span-4 px-3 font-semibold flex flex-col">
                            <div className="">
                                {" "}
                                <h2>{product.name}</h2>
                            </div>

                            <div className="text-sm text-gray-400 font-light">
                                <p>Brand: {product.brand}</p>
                            </div>
                            <div className="text-sm text-gray-400 font-light">
                                <p className="text-green-600">In-Stock</p>
                            </div>
                            <div className="text-sm  font-medium">
                                <p>Brand: ${product.price}</p>
                            </div>
                        </div>

                        <div className="col-span-1 py-2 justify-self-end">
                            <button className="text-gray-900 font-bold text-md rounded-full py-1 px-4">
                                <BsThreeDotsVertical />
                            </button>
                        </div>
                    </content>
                </main>

                <footer className="px-5 py-4  border-t border-gray-200 flex justify-center">
                    <button className="flex items-center  space-x-5">
                        <BsFillShareFill /> <span>Share Product</span>
                    </button>

                </footer>
            </div>
        </>
    );
}

export default Product;
