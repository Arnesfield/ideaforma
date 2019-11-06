<template>
  <v-img
    contain
    v-bind="{ aspectRatio }"
    v-animate="animateProps"
    :src="`${logoPath}/logo-full-transparent.png`"
    :class="{ 'speed-5 a-from-bottom': !noAnimate }"
  />
</template>

<script>
import { logoPath } from '@/utils/path'

export default {
  name: 'app-logo',
  props: {
    noAnimate: {
      type: Boolean,
      default: false,
      required: false
    },
    aspectRatio: {
      type: [Number, String],
      required: false,
      default: 2.0
    }
  },

  computed: {
    logoPath: () => logoPath,
    animateProps() {
      return this.noAnimate ? null : { above: true }
    }
  }
}
</script>
