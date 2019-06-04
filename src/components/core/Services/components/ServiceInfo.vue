<template>
  <v-card
    flat
    color="transparent"
  >
    <v-card-title
      primary
      class="title justify-center"
    >
      <div style="width: 50%">
        <v-img
          :src="`${iconPath}${src}`"
          class="a-from-bottom"
          :class="speed"
          v-animate.40="{ above: true }"
        />
      </div>
    </v-card-title>

    <v-card-text
      :class="speed"
      v-animate="{ above: true }"
      class="pt-3 a-from-bottom"
    >
      <div
        v-text="name"
        class="title text-uppercase primary--text"
      />
      <div
        class="body-2 pt-3"
        v-text="desc"
      />
    </v-card-text>
  </v-card>
</template>

<script>
import { iconPath } from '@/utils/path'

export default {
  name: 'service-info',
  props: {
    name: {
      type: String,
      required: true
    },
    desc: {
      type: String,
      required: true
    },
    src: {
      type: String,
      required: true
    },
    speed: {
      type: String,
      required: false,
      default: 'speed-3'
    }
  },

  computed: {
    iconPath: () => iconPath
  }
}
</script>
