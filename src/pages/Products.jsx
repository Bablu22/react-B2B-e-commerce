import React, { useEffect, useState } from 'react'
import Product from '../components/Product';
import { getProducts } from '../utils/fetch'

function Products() {
    const [products, setProducts] = useState([])

    useEffect(() => {
        getProducts(setProducts)
    }, [])

    return (
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-3 mb-20'>
            {
                products.map((product) => <Product key={product.id} product={product} />)
            }
        </div>
    )
}

export default Products


