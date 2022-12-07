import axios from "axios"

export const getProducts = async (setProducts) => {
    const res = await axios.get('https://raw.githubusercontent.com/Bablu22/react-B2B-e-commerce/main/src/data/products.json')
    const products = res.data
    return setProducts(products)

}

export const getCustomers = async (setCustomers) => {
    const res = await axios.get('https://randomuser.me/api/?results=20')
    const customers = res.data.results
    return setCustomers(customers)
}

export const getOrders = async (setOrders) => {
    const res = await axios.get("https://raw.githubusercontent.com/Bablu22/react-B2B-e-commerce/main/src/data/orders.json")
    const orders = res.data

    return setOrders(orders)
}



