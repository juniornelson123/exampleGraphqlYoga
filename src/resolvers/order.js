import axios from 'axios'

import { productApi, orderApi, clientApi } from '../service/api'

export default {
    createOrder: async (parent, args) => {
        const order = { value: args.value, product_id: args.product, client_id: args.client }
        const response = await orderApi.post("/orders.json", {order: order})
        
        const product = await productApi.get(`products/${response.data.product_id}`)
        const client = await clientApi.get(`clients/${response.data.client_id}`)

        return {
            id: response.data.id,
            value: response.data.value,
            product: product.data,
            client: client.data
        }
    },
}