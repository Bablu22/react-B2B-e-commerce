import React, { useEffect, useState } from "react";
import Order from "../components/Order";
import Overview from "../components/Overview";
import SlectOption from "../components/SlectOption";
import { dateFilters, ordersFilters } from "../data/filters";
import { getOrders } from "../utils/fetch";

function Home() {
    const [orders, setOrders] = useState([])

    useEffect(() => {
        getOrders(setOrders)
    }, [])


    return (
        <div>
            {/* Orders and sales overviews options */}
            <SlectOption title="Overview" filter={dateFilters} />
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mt-10">
                <Overview title="Orders" amount="33" />
                <Overview title="Total Sales" amount="2,918" />
                <Overview title="Store Views" amount="301" />
                <Overview title="Product Views" amount="19,121" />
            </div>
            {/* Order filtering options */}
            <div className="mt-10">
                <SlectOption title="Active " filter={ordersFilters} />
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-3 mb-20 mt-10'>
                {
                    orders.map((order) => <Order key={order.id} order={order} />)
                }
            </div>
        </div>
    );
}

export default Home;
