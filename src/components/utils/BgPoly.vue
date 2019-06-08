<template>
  <div
    style="bottom: 0"
    class="absolute speed-5 a-from-bottom lower"
    v-animate="{ above: true, offset: 40 }"
  >
    <v-img
      v-bind="imgProps"
      :src="`${bgPath}${img}`"
      :style="{ opacity, width: imgWidth }"
    />
  </div>
</template>

<script>
import { bgPath } from '@/utils/path'

export default {
  name: 'bg-poly',
  props: {
    xsWidth: {
      type: String,
      required: false,
      default: '75vw'
    },
    img: {
      type: String,
      required: true
    },
    opacity: {
      type: [Number, String],
      default: 0.5,
      required: false
    },
    imgProps: {
      type: Object,
      default: null,
      required: false
    }
  },

  computed: {
    bgPath: () => bgPath,

    imgWidth() {
      switch (this.$vuetify.breakpoint.name) {
        case 'xs': return this.xsWidth ? this.xsWidth : '75vw'
        case 'sm':
        case 'md':
          return '50vw'
        default: return '30vw'
      }
    }
  }
}
</script>
