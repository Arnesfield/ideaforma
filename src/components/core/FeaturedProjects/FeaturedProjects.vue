<template>
  <section-layout
    class="bg-quite-grey"
    title="Featured Projects"
    :hr-line-props="{ right: true, width: '65vw' }"
  >
    <div
      slot="outside"
      style="bottom: 0"
      class="absolute speed-5 a-from-bottom lower"
      v-animate="{ above: true, offset: -200 }"
    >
      <v-img
        style="opacity: 0.75"
        :style="{ width: imgWidth }"
        :src="`${bgPath}bg-gold-poly.png`"
      />
    </div>

    <v-container
      class="speed-3 a-from-bottom"
      v-animate.100="{ above: true }"
    >
      <carousel v-bind="{ items }">
        <div slot-scope="{ item, index }">
          <!-- TODO: update content -->
          {{ index }}
        </div>
      </carousel>

      <!-- button below -->
      <v-layout>
        <v-spacer/>
        <v-btn
          flat
          large
          class="font-italic"
          color="grey darken-1"
        >
          View All
          <v-icon>chevron_right</v-icon>
        </v-btn>
      </v-layout>
    </v-container>
  </section-layout>
</template>

<script>
import { bgPath } from '@/utils/path'
import { featuredProjects } from '@/data'
import Carousel from '@/components/utils/Carousel'
import SectionLayout from '@/layouts/SectionLayout'

export default {
  name: 'featured-projects',
  components: {
    Carousel,
    SectionLayout
  },

  data: () => ({
    items: featuredProjects
  }),

  computed: {
    bgPath: () => bgPath,

    imgWidth() {
      switch (this.$vuetify.breakpoint.name) {
        case 'xs': return '75vw'
        case 'sm':
        case 'md':
          return '50vw'
        default: return '30vw'
      }
    }
  }
}
</script>
