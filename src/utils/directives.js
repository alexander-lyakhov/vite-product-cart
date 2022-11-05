export const wheel = {
  mounted: function(el, binding) {
    el.addEventListener('wheel', binding.value.bind(this));
    el.addEventListener('DOMMouseScroll', binding.value.bind(this));
  }
}