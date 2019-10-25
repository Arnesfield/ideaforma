<template>
  <v-card
    flat
    v-bind="cardProps"
    class="smooth-corners"
    style="overflow: hidden"
    :style="!emphasize ? null : {
      'background-color': `${color}14`
    }"
  >
    <v-card-title
      primary
      class="title justify-center"
    >
      <v-img
        :src="`${teamPath}${src}`"
        class="speed-3 a-from-bottom"
        v-animate.40="{ above: true }"
      />
    </v-card-title>

    <v-card-text
      v-animate="{ above: true }"
      class="pt-3 speed-3 a-from-bottom"
    >
      <div
        v-text="name"
        class="text-uppercase primary--text"
        :class="{
          title: !emphasize,
          'font-weight-bold display-1': emphasize
        }"
      />
        <!-- :style="!emphasize ? null : {
          'font-size': '28px !important'
        }" -->

      <div
        v-if="title"
        v-text="title"
        class="mt-1 body-1 grey--text text--darken-1"
      />

      <div
        class="body-2 pt-3"
        v-text="description"
      />
    </v-card-text>
  </v-card>
</template>

<script>
import { colors } from '@/utils'
import { teamPath } from '@/utils/path'

export default {
  name: 'team-user-info',
  props: {
    name: {
      type: String,
      required: true
    },
    title: {
      type: String,
      default: '',
      required: false
    },
    description: {
      type: String,
      required: true
    },
    src: {
      type: String,
      required: true
    },
    emphasize: {
      type: Boolean,
      default: false,
      required: false
    }
  },

  computed: {
    color: () => colors[2],
    teamPath: () => teamPath,

    // just leave this here
    cardProps() {
      return !this.emphasize ? null : {
        style: {
          // border: `1px solid ${this.color}`
        }
      }
    }
  }
}
</script>
