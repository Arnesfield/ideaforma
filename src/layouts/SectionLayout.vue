<template>
  <v-container
    fluid
    class="pa-0 relative"
    v-bind="containerProps"
  >
    <v-layout column>
      <div class="pa-3">
        <h1
          v-text="title"
          v-animate.140="{ above: true }"
          class="mt-5 primary--text text-xs-center speed-2 a-from-bottom"
          :class="{
            'display-1': $vuetify.breakpoint.xsOnly,
            'display-2': $vuetify.breakpoint.smOnly,
            'display-3': !$vuetify.breakpoint.smAndDown,
          }"
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

    <slot name="outside"/>
  </v-container>
</template>

<script>
import { bgPath } from '@/utils/path'
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
  },

  computed: {
    bgPath: () => bgPath
  }
}
</script>
