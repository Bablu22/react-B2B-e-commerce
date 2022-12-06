import axios from "axios"

export const getProducts = async (setProducts) => {
    const res = await axios.get('https://raw.githubusercontent.com/Bablu22/react-B2B-e-commerce/main/src/data/products.json')
    const products = res.data
    setProducts(products)

}

export const getCustomers = async (setCustomers) => {
    const res = await axios.get('https://randomuser.me/api/?results=10')
    const customers = res.data.results
    setCustomers(customers)

}