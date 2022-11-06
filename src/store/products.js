import { defineStore } from 'pinia'
import data from './data.json';

export const useStore = defineStore('products', {
  state: () => ({
    products: [],
    totalProducts: 0,
    totalPrice: 0
  }),

  actions: {
    increaseTotalPrice(value) {
      this.totalProducts++
      this.totalPrice += value
    },

    decreaseTotalPrice(value) {
      this.totalProducts--
      this.totalPrice -= value
    },

    decreaseAmount(amount, price) {
      this.totalProducts -= amount;
      this.totalPrice -= amount * price;
    },

    increaseAmount(amount, price) {
      this.totalProducts += amount;
      this.totalPrice += amount * price;
    },

    async fetchData() {
      const res = await fetch('http://my-json-server.typicode.com/alexander-lyakhov/vue3-product-cart/products')
      
      if (!res.ok) {
        throw new Error(res.statusText)
      }
      
      this.products = await res.json()
    }
  }
})