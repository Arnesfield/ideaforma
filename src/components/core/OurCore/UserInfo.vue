<template>
  <v-card flat>
    <v-card-title
      primary
      class="title justify-center"
    >
      <v-img :src="imgPath(src)"/>
    </v-card-title>
    <v-card-text class="pt-3">
      <div
        class="title text-uppercase"
        style="color: #C0872C"
      >{{ name }}</div>
      <div
        class="body-2 pt-3"
        v-text="description"
      />
    </v-card-text>
  </v-card>
</template>

<script>
import { imgPath } from '@/helpers/path'

export default {
  name: 'user-info',
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
    imgPath: () => imgPath
  }
}
</script>
