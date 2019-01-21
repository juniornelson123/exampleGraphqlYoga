import post, {posts} from './post'
import order from './order'
import axios from 'axios'

import { productApi, orderApi, clientApi } from '../service/api'

export const resolvers = {
    Query: {
        products: async (parent, args, ctx) => {
            const products = await productApi.get("products")
            
            return products.data
        },
        clients: async () => {
            const clients = await clientApi.get("clients")

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
