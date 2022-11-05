import { defineStore } from 'pinia'
import data from './data.json';

export const useStore = defineStore('products', {
  state: () => ({
    products: data,
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
  }
})