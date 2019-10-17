<template>
  <div class="white py-3">
    <section-layout
      class="pb-5"
      title="Our Process"
      :hr-line-props="{ width: '61vw' }"
    >
      <v-container class="y-auto px-2">
        <v-layout
          row
          wrap
          align-center
          justify-center
        >
          <v-flex
            xs12
            sm12
            hidden-md-and-up
          >
            <v-img
              style="width: 30%"
              class="mx-auto speed-2 a-from-bottom"
              v-animate.100="{ above: true }"
              :src="`${logoPath}icon-gold-i.png`"
            />
          </v-flex>

          <v-flex
            xs12
            sm6
            md4
          >
            <process-item
              :key="i"
              v-bind="item"
              class="mx-auto a-from-bottom"
              v-animate.40="{ above: true }"
              v-for="(item, i) in leftItems"
              :class="{
                [`speed-${i + 2}`]: true,
                'mr-5': isItemCenter(i, leftItems.length),
                'ml-5': isItemCenter(i, leftItems.length, true)
              }"
            />
          </v-flex>

          <v-flex
            md4
            hidden-sm-and-down
          >
            <v-img
              class="speed-2 a-from-bottom"
              v-animate.100="{ above: true }"
              :src="`${logoPath}icon-gold-i.png`"
            />
          </v-flex>

          <v-flex
            xs12
            sm6
            md4
          >
            <process-item
              :key="i"
              v-bind="item"
              v-animate.45="{ above: true }"
              v-for="(item, i) in rightItems"
              class="mx-auto a-from-bottom lower"
              :class="{
                [`speed-${i + 2}`]: true,
                'ml-5': isItemCenter(i, rightItems.length),
                'mr-5': isItemCenter(i, rightItems.length, true)
              }"
            />
          </v-flex>
        </v-layout>
      </v-container>
    </section-layout>
  </div>
</template>

<script>
import { ourProcess } from '@/data'
import { logoPath } from '@/utils/path'
import ProcessItem from './components/ProcessItem'
import SectionLayout from '@/layouts/SectionLayout'

export default {
  name: 'our-process',
  components: {
    ProcessItem,
    SectionLayout
  },

  data: () => ({
    items: ourProcess
  }),

  computed: {
    logoPath: () => logoPath,

    // first 3
    leftItems() {
      return this.items.slice(0, 3)
    },
    // last 3
    rightItems() {
      return this.items.slice(3)
    },

    // ux
    small() {
      return this.$vuetify.breakpoint.smAndDown
    },
    smallOnly() {
      return this.$vuetify.breakpoint.smOnly
    }
  },

  methods: {
    isItemCenter(i, length, negate = false) {
      let cond = i > 0 && i < length - 1
      cond = negate ? !cond : cond
      return !this.small && cond
    }
  }
}
</script>
