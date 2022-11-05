export const wheel = {
  mounted: function(el, binding, vNode) {
    el.addEventListener('wheel', binding.value.bind(vNode))
    el.addEventListener('DOMMouseScroll', binding.value.bind(vNode))
  }
}