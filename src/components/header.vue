<template>
  <header>
    <div class="stat products">
      Products in cart
      <span class="value">{{ totalProducts }}</span>
    </div>
    <div class="stat total-price">
      Total price:
      <span class="value">{{totalPrice}} $</span>
    </div>
    <div v-if="!totalProducts" class="stat cart-empty">Cart is empty</div>
  </header>
</template>

<script setup lang="ts">
  import { useStore } from '@/store/products.js'
  import { storeToRefs } from 'pinia'

  const { totalProducts, totalPrice } = storeToRefs(useStore())
</script>

<style lang="scss" scoped>

header {
  font-size: 1rem;
  background: #404040;
  box-shadow: 0 3px 8px rgba(0,0,0,0.25);
  width: 100%;
  height: 64px;
  display: flex;
  align-items: center;
  position: fixed;
  left: 0;
  top: 0;
  z-index: 1;

  .stat {
    margin: 0 0 0 20px;
    color: #ccc;

    .value {
      color: #eee;
      border: 2px solid #c93;
      border-radius: 4px;
      text-align: center;
      min-width: 64px;
      display: inline-block;
      margin: 0 8px;
      padding: 4px 6px;
    }

    &.cart-empty {
      color: #f99;
    }
  }

  .languages {
    margin: 0 20px 0 auto;
    a {
      color: #a0a0a0;
      padding: 0 .25rem;

      &.selected {
        color: #eee;
      }
    }
  }
}
</style>