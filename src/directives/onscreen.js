import Vue from 'vue'

// TODO: still disregards x or width of el
const isInViewport = function(el, offset = 0) {
  const rect = el.getBoundingClientRect()
  // const clientWidth = window.innerWidth || document.documentElement.clientWidth
  const clientHeight = window.innerHeight || document.documentElement.clientHeight

  const res = rect.top + offset - clientHeight <= 0 && rect.bottom >= 0
  // (rect.left >= 0 || rect.right <= clientWidth) &&
  // (rect.top >= 0 || rect.bottom >= clientHeight)

  // console.warn(res)
  return res
}

Vue.directive('onscreen', {
  bind(el, binding) {
    // if value is falsy, don't do anything
    if (!binding.value) {
      return
    }

    const { modifiers } = binding
    const offset = !modifiers ? 0 : Object.keys(modifiers).reduce(
      (total, e) => total + (!isNaN(+e) ? +e : 0),
      0
    )
    
    el.$onScroll = function() {
      const { arg, value } = binding
      const visible = isInViewport(el, offset)

      // if (visible) {
      //   def.unbind(el, binding)
      // }
      
      if (typeof value === 'object' && arg) {
        value[arg] = visible
      } else if (typeof value === 'function') {
        value(visible, arg)
      }
    }

    document.addEventListener('scroll', el.$onScroll)
  },

  inserted(el) {
    if (typeof el.$onScroll === 'function') {
      el.$onScroll()
    }
  },
  
  unbind(el) {
    document.removeEventListener('scroll', el.$onScroll)
    delete el.$onScroll
  }
})
