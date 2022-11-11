import { defineStore } from 'pinia'
import api from '@/api'
// import data from './data.json';

// interface Product {
// 	id: number
// }

export const useStore = defineStore('products', {
	state: () => ({
		products: [],
		totalProducts: 0,
		totalPrice: 0,
	}),

	actions: {
		increaseTotalPrice(value:number) {
			this.totalProducts++
			this.totalPrice += value
		},

		decreaseTotalPrice(value:number) {
			this.totalProducts--
			this.totalPrice -= value
		},

		decreaseAmount(amount:number, price:number) {
			this.totalProducts -= amount;
			this.totalPrice -= amount * price;
		},

		increaseAmount(amount:number, price:number) {
			this.totalProducts += amount;
			this.totalPrice += amount * price;
		},

		async fetchData() {
			
			// const res = await fetch('http://my-json-server.typicode.com/alexander-lyakhov/vue3-product-cart/products')
			const res = await api.getProducts()
			
			if (!res.ok) {
				throw new Error(res.statusText)
			}
			
			this.products = await res.json()			
		}
	}
})