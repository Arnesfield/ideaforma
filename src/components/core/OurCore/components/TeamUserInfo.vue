<template>
  <v-card flat>
    <v-card-title
      primary
      class="title justify-center"
    >
      <v-img :src="`${teamPath}${src}`"/>
    </v-card-title>
    <v-card-text class="pt-3">
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
