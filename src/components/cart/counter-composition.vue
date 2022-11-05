<template>
  <div class="counter" :class="{selected: value > 0}">
    <button class="decrease" @click.stop="decrease" />
    <div class="value" :class="{maximum: value === max}" v-wheel="mouseWheelHandler">{{value}}</div>
    <button class="increase" @click.stop="increase" />
  </div>
</template>

<script>

import { wheel } from '@/utils/directives.js';

export default {
  name: 'counter',

  props: {
    min: {
      type: Number,
      default: 0
    },

    max: {
      type: Number,
      default: 0
    },

    value: {
      type: Number,
      default: 0
    }
  },

  emits: {
    change: {
      type: Number
    }
  },

  setup(props, { emit }) {
    const decrease = () => {
      if (props.value > props.min) {
        emit('change', props.value - 1)
      }
    }

    const increase = () => {
      if (props.value < props.max || !props.max) {
        emit('change', props.value + 1)
      }
    }

    const mouseWheelHandler = (e) => {
      e.preventDefault();
      e.stopPropagation();

      var direction = e.deltaY || e.detail || e.wheelDelta;

      Math.abs(direction) === 120 ?
        direction > 0 ? increase():decrease():
        direction < 0 ? increase():decrease();
    }

    return {
      decrease,
      increase,
      mouseWheelHandler
    }
  },

  directives: { wheel }
}
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
