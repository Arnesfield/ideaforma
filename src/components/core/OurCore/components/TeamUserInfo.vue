<template>
  <v-card flat>
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
        class="title text-uppercase primary--text"
      />
      <div
        class="body-2 pt-3"
        v-text="description"
      />
    </v-card-text>
  </v-card>
</template>

<script>
import { teamPath } from '@/utils/path'

export default {
  name: 'team-user-info',
  props: {
    name: {
      type: String,
      required: true
    },
    description: {
      type: String,
      required: true
    },
    src: {
      type: String,
      required: true
    }
  },

  computed: {
    teamPath: () => teamPath
  }
}
</script>
