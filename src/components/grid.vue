<template>
  <template v-if="!error">
    <div v-if="isLoading" class="message msg-info transparent" ref="msgInfo">
      Fetching data...
    </div>

    <div v-else class="grid">
      <div class="grid-cell" v-for="(cart, index) in products" :key="index">
        <product-cart :cart="cart" />
      </div>
    </div>
  </template>

  <template v-else>
    <div class="message msg-error fade-in">
      {{error}}
    </div>
  </template>
</template>

<script setup lang="ts">

import {reactive, toRefs, ref, onMounted} from 'vue';
import { storeToRefs } from 'pinia'
import { useStore } from '@/store/products.js'
import { fadeIn, fadeOut } from '@/components/composible/use-animation.js';
import productCart from '@/components/cart';

const { products } = storeToRefs(useStore())
/*
export default {
  name: 'Grid',

  components: {
    'product-cart': productCart
  },

  setup() {
    const store = useStore();

    const state = reactive({
      isLoading: true,
      error: ''
    });

    const msgInfo = ref(null);

    onMounted(async () => {
      await fadeIn(msgInfo.value, 250); // 2nd argument is delay befor animation start
      msgInfo.value.classList.remove('transparent');

      store.dispatch('fetchProducts').then(
        async (res) => {
          await fadeOut(msgInfo.value, 500); // 2nd argument is delay befor animation start
          state.isLoading = false;
        },
        async (err) => {
          await fadeOut(msgInfo.value, 500) // 2nd argument is delay befor animation start
          state.error = err.toString().replace(/\"/,'')
        }
      )
    })

    return {
      ...toRefs(state),
      msgInfo,
    }
  },

  computed: {
    ...mapState(['products'])
  }
}
*/
</script>

<style lang="scss" scoped>

.transparent {
  opacity: 0;
}

.message {
  text-align: center;
  letter-spacing: 2px;
  line-height: 6rem;
  width: 100%;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
}

.msg-info {
  font-size: 2rem;
  background: #606080;
}

.msg-error {
  font-size: 1.5rem;
  background: #804040;
}

.fade-out {
  animation: fade-out .25s;
}

@keyframes fade-out {
  from  {
    opacity: 1;
    margin-top: 0;
  }
  to {
    opacity: 0;
    margin-top: -100px;
  }
}

.fade-in {
  animation: fade-in .25s;
}

@keyframes fade-in {
  from  {
    opacity: 0;
    margin-top: 100px;
  }
  to {
    opacity: 1;
    margin-top: 0;
  }
}

.grid {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  padding-top: 80px;

  .grid-cell {
    min-width: 20%;
  }
}

@media screen and (max-width: 1600px) {
  .grid .grid-cell {
    min-width: 25%;
  }
}

@media screen and (max-width: 1280px) {
  .grid .grid-cell {
    min-width: 33.33%;
  }
}

@media screen and (max-width: 930px) {
  .grid .grid-cell {
    min-width: 50%;
  }
}
</style>