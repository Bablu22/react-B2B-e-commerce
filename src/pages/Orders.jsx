import React, { useEffect, useState } from 'react'
import Order from '../components/Order'
import { getOrders } from '../utils/fetch'

function Orders() {
    const [orders, setOrders] = useState([])

    useEffect(() => {
        getOrders(setOrders)
    }, [])

    return (
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-3 mb-20'>
            {
                orders.map((order) => <Order key={order.id} order={order} />)
            }
        </div>
    )
}

export default Orders


