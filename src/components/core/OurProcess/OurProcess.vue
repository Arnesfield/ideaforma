<template>
  <div class="white py-3">
    <section-layout
      class="pb-5"
      title="Our Process"
      :title-animate="animate"
      :hr-line-props="{ width: '60vw' }"
      v-onscreen.200="v => TR = v"
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
              class="mx-auto"
              style="width: 30%"
              :src="`${imgPath}icon-gold-i.png`"
            />
          </v-flex>

          <v-flex
            xs12
            sm12
            md4
          >
            <v-expand-transition
              :key="i"
              v-for="(item, i) in leftItems"
            >
              <process-item
                v-show="TR"
                class="mx-auto"
                v-bind="{ ...processItemProps, ...item }"
                :class="{
                  [`speed-${3 - i}`]: true,
                  'mr-5': isItemCenter(i, leftItems.length),
                  'ml-5': isItemCenter(i, leftItems.length, true)
                }"
              />
            </v-expand-transition>
          </v-flex>

          <v-flex
            md4
            hidden-sm-and-down
          >
            <v-bottom-sheet-transition>
              <v-img
                v-show="TR"
                class="speed-3"
                :src="`${imgPath}icon-gold-i.png`"
              />
            </v-bottom-sheet-transition>
          </v-flex>

          <v-flex
            xs12
            sm12
            md4
          >
            <v-expand-transition
              :key="i"
              v-for="(item, i) in rightItems"
            >
              <process-item
                :key="i"
                v-show="TR"
                class="mx-auto"
                v-bind="{ ...processItemProps, ...item }"
                :class="{
                  [`speed-${i + 1}`]: true,
                  'ml-5': isItemCenter(i, rightItems.length),
                  'mr-5': isItemCenter(i, rightItems.length, true)
                }"
              />
            </v-expand-transition>
          </v-flex>
        </v-layout>
      </v-container>
    </section-layout>
  </div>
</template>

<script>
import { ourProcess } from '@/data'
import { animatable } from '@/mixins'
import { imgPath } from '@/utils/path'
import ProcessItem from './components/ProcessItem'
import SectionLayout from '@/layouts/SectionLayout'

export default {
  name: 'our-process',
  mixins: [animatable],
  components: {
    ProcessItem,
    SectionLayout
  },

  data: () => ({
    items: ourProcess,
    // ux
    TR: false
  }),

  computed: {
    imgPath: () => imgPath,

    // first 3
    leftItems() {
      return this.items.slice(0, 3)
    },
    // last 3
    rightItems() {
      return this.items.slice(3)
    },

    // ui
    processItemProps() {
      return { width: this.smallOnly ? 420 : undefined }
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
