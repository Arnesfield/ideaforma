<template>
  <v-container
    fluid
    fill-height
    class="pa-0 y-full"
    v-bind="containerProps"
  >
    <v-layout column>
      <div class="pa-3">
        <h1
          v-text="title"
          class="mt-5 display-2 primary--text text-xs-center"
        />
      </div>

      <hr-line v-bind="hrLineProps"/>

      <slot/>
    </v-layout>
  </v-container>
</template>

<script>
import HrLine from '@/components/utils/HrLine'

export default {
  name: 'section-layout',
  components: {
    HrLine
  },
  props: {
    title: {
      type: String,
      required: true
    },
    containerProps: {
      type: Object,
      required: false,
      default: null
    },
    hrLineProps: {
      type: Object,
      required: false,
      default: null
    }
  }
}
</script>
