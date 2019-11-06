<template>
  <v-container
    class="pa-0 relative"
    v-bind="containerProps"
  >
    <slot name="outside"/>

    <v-layout column>
      <div class="pa-3">
        <v-container
          class="pa-0"
          :class="{ 'px-3': !!(containerProps || {}).fluid }"
        >
          <h1
            v-text="title"
            v-animate="{ above: true }"
            class="mt-5 primary--text speed-2 a-from-bottom text-uppercase"
            :class="{
              ...cTitleClass,
              'display-1': $vuetify.breakpoint.xsOnly,
              'display-2': $vuetify.breakpoint.smOnly,
              'display-3': !$vuetify.breakpoint.smAndDown,
            }"
          />
        </v-container>
      </div>

      <slot name="subtitle"/>

      <!-- <div>
        <hr-line
          v-bind="hrLineProps"
          class="speed-3 a-from-bottom"
          v-animate="{ above: true }"
        />
      </div> -->

      <slot/>
    </v-layout>

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
    titleClass: {
      type: [String, Object],
      default: 'text-xs-center text-sm-left',
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
  },

  computed: {
    bgPath: () => bgPath,
    cTitleClass() {
      const { titleClass: c } = this
      return typeof c === 'string' ? { [c]: true } : c
    }
  }
}
</script>
