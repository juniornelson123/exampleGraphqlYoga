import post, {posts} from './post'
import order from './order'
import axios from 'axios'
const url = "http://localhost:"

const productApi = axios.create({
    baseURL: `${url}3001`,
    timeout: 10000,
    headers: { 'X-Custom-Header': 'foobar' }
});

const orderApi = axios.create({
    baseURL: `${url}3000`,
    timeout: 10000,
    headers: { 'X-Custom-Header': 'foobar' }
});

const clientApi = axios.create({
    baseURL: `${url}3002`,
    timeout: 10000,
    headers: { 'X-Custom-Header': 'foobar' }
});


export const resolvers = {
    Query: {
        products: async (parent, args, ctx) => {
            const products = await product.get("products")
            
            return products.data
        },
        clients: async () => {
            const clients = await client.get("clients")

            return clients.data
        },
        orders: async () => {
            let ordersNew = []
            const arrayOrder = await orderApi.get("orders")
            ordersNew = arrayOrder.data.map(async (order) => {
                const product = await productApi.get(`products/${order.product_id}`)
                const client = await clientApi.get(`clients/${order.client_id}`)
                
                return {
                    id: order.id,
                    value: order.value,
                    product: product.data,
                    client: client.data
                }
                
            });

            return ordersNew

        },
    },
    Mutation: {
        ...order
    }


}
