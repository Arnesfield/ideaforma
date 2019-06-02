<template>
  <v-container
    fluid
    class="pa-0"
    v-bind="containerProps"
  >
    <v-layout column>
      <div class="pa-3">
        <h1
          v-text="title"
          v-animate.140="{ above: true }"
          class="mt-5 display-3 primary--text text-xs-center speed-2 a-from-bottom"
        />
      </div>

      <div>
        <hr-line
          v-bind="hrLineProps"
          class="speed-3 a-from-bottom"
          v-animate.100="{ above: true }"
        />
      </div>

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
