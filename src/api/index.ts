
const getProducts = () => {
  return fetch('http://my-json-server.typicode.com/alexander-lyakhov/vue3-product-cart/products')
}

export default {
  getProducts
}