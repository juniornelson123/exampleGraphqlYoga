import axios from 'axios'

export const url = "http://10.86.9.69:"

export const productApi = axios.create({
    baseURL: `${url}3001`,
    timeout: 10000,
    headers: { 'X-Custom-Header': 'foobar' }
});

export const orderApi = axios.create({
    baseURL: `${url}3000`,
    timeout: 10000,
    headers: { 'X-Custom-Header': 'foobar' }
});

export const clientApi = axios.create({
    baseURL: `${url}3002`,
    timeout: 10000,
    headers: { 'X-Custom-Header': 'foobar' }
});