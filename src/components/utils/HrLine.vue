<template>
  <v-layout :class="{ 'px-3': small }">
    <v-spacer v-if="right"/>
    <hr
      :style="{ width: mWidth }"
      style="border: 1px solid black"
    />
  </v-layout>
</template>

<script>
export default {
  name: 'hr-line',
  props: {
    width: {
      type: String,
      default: '100%',
      required: false
    },
    right: {
      type: Boolean,
      default: false,
      required: false
    }
  },

  computed: {
    small() {
      return this.$vuetify.breakpoint.xsOnly
    },

    mWidth() {
      return !this.small ? this.width : '100%'
    }
  }
}
</script>
