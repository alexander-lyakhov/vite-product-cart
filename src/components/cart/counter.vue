<template>
  <div
    class="counter"
    :class="{selected: isCounterSelected}"
  >
    <button
      class="decrease"
      @click.stop="decrease"
    />

    <div
      class="value"
      :class="{maximum: amount === max}"
      v-wheel="mouseWheelHandler"
    >{{ amount }}</div>

    <button
      class="increase"
      @click.stop="increase"
    />
  </div>
</template>

<script setup type="ts">
  import { computed } from 'vue'
  import { wheel as vWheel } from '@/utils/directives.js';
  import useMouseWheel from '@/components/composable/useMouseWheel.js'

  //
  // props declaration
  //
  const props = defineProps({
    min: {
      type: Number,
      default: 0
    },

    max: {
      type: Number,
      default: 0
    },

    amount: {
      type: Number,
      default: 0
    }
  })

  //
  // emits declaration
  //
  const emit = defineEmits({
    "update:amount": {
      type: Number
    }
  })

  //
  // computed
  //
  const isCounterSelected = computed(() => props.amount > 0)

  //
  // methods
  //
  const decrease = () => {
    if (props.amount > props.min) {
      emit('update:amount', props.amount - 1)
    }
  }

  const increase = () => {
    if (props.amount < props.max || !props.max) {
      emit('update:amount', props.amount + 1)
    }
  }

  const mouseWheelHandler = useMouseWheel(increase, decrease)
</script>

<style lang="scss" scoped>

.counter {
  background: #e0e0e0;
  border: 1px solid #999;
  height: 48px;
  display: flex;
  justify-content: center;
  align-items: center;

  &.selected {
    background: #ec9;
  }

  button {
    background: transparent;
    border: none;
    outline: 0;
    width: 32px;
    height: 32px;
    cursor: pointer;
    transition: all 0.2s;

    &:after {
      content: '';
      display: block;
      width: 16px;
      height: 16px;
      position: relative;
    }

    &.decrease {
      &:after {
        border-left: 4px solid #404040;
        border-top: 4px solid #404040;
        transform: rotate(-45deg);
      }
      &:hover {
        transform: translate(-4px);
      }
    }
    &.increase {
      &:after {
        border-right: 4px solid #404040;
        border-top: 4px solid #404040;
        transform: rotate(45deg);
      }
      &:hover {
        transform: translate(4px);
      }
    }
  }

  .value {
    font-size: 1rem;
    color: #000;
    background: #fff;
    //box-shadow: 0 2px 4px rgba(0,0,0,0.25);
    border: 1px solid #808080;
    border-radius: 4px;
    width: 40%;
    height: 32px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0 8px;
    cursor: n-resize;

    &.maximum {
      background: #fee;
      border: 1px solid #f00;
    }
  }
}
</style>
