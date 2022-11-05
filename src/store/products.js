import { defineStore } from 'pinia'
import data from './data.json';

export const useStore = defineStore('products', {
  state: () => ({
    products: data,
    totalProducts: 0,
    totalPrice: 0
  })
})