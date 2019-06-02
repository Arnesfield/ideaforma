import Vue from 'vue'

const ANIMATE_CLASS_NAME = 'animate'

// TODO: still disregards x or width of el
const onScreenStat = function(el, offset = 0) {
  const rect = el.getBoundingClientRect()
  // const clientWidth = window.innerWidth || document.documentElement.clientWidth
  const clientHeight = window.innerHeight || document.documentElement.clientHeight

  const above = rect.bottom + offset < 0
  const below = rect.top + offset - clientHeight > 0

  const res = {
    above,
    below,
    visible: !above && !below
  }

  // const res = rect.top + offset - clientHeight <= 0 && rect.bottom >= 0
  // (rect.left >= 0 || rect.right <= clientWidth) &&
  // (rect.top >= 0 || rect.bottom >= clientHeight)

  // console.warn(res)
  return res
}

Vue.directive('animate', {
  bind(el, binding) {
    // if value is falsy, don't do anything
    const { value: bval, modifiers } = binding
    if (bval === null || bval === false) {
      return
    }

    const modOffset = !modifiers ? 0 : Object.keys(modifiers).reduce(
      (total, e) => total + (!isNaN(+e) ? +e : 0),
      0
    )

    el.$onScroll = function() {
      const { arg, value } = binding
      const isValueObject = value !== null && typeof value === 'object'
      let offset = modOffset
      let animateWhen = true

      if (isValueObject) {
        // either use modifier offset or prioritized value.offset
        offset = value.offset || offset
        // compare value value keys to stat keys
        animateWhen = Object.keys(value).every(k => !!value[k] === !!stat[k])
      }

      const stat = onScreenStat(el, offset)

      if (stat.visible && animateWhen) {
        el.classList.add(ANIMATE_CLASS_NAME)
        // def.unbind(el, binding)
      } else {
        el.classList.remove(ANIMATE_CLASS_NAME)
      }
      
      if (typeof value === 'function') {
        value(stat, arg)
      } else if (isValueObject && typeof value.cb === 'function') {
        value.cb(stat, arg)
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
