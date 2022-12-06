import React, { useEffect, useState } from 'react'
import Customer from '../components/Customer';
import { getCustomers } from '../utils/fetch'

function Customers() {
    const [customers, setCustomers] = useState([])
    console.log(customers);

    useEffect(() => {
        getCustomers(setCustomers)
    }, [])

    return (
        <div className='grid grid-cols-1 md:grid-cols-3 gap-3 mb-20'>
            {
                customers.map((customer) => <Customer key={customer.cell} customer={customer} />)
            }
        </div>
    )
}

export default Customers


