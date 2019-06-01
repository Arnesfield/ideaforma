<template>
  <v-container
    fluid
    class="pa-0"
    v-bind="containerProps"
  >
    <v-layout column>
      <div class="pa-3">
        <v-slide-y-transition>
          <h1
            v-text="title"
            v-show="titleAnimate"
            class="mt-5 display-3 primary--text text-xs-center speed-4"
          />
        </v-slide-y-transition>
      </div>

      <div>
        <v-slide-x-transition>
          <hr-line
            class="speed-4"
            v-bind="hrLineProps"
            v-show="titleAnimate"
          />
        </v-slide-x-transition>
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
    titleAnimate: {
      type: Boolean,
      default: false,
      required: false
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
