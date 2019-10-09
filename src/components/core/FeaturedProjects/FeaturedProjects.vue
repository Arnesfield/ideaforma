<template>
  <section-layout
    class="bg-quite-grey"
    title="Featured Projects"
    :hr-line-props="{ right: true, width: '65vw' }"
  >
    <bg-poly
      opacity="0.5"
      slot="outside"
      img="bg-gold-poly.png"
      lazy-img="bg-gold-poly-lazy.png"
      aspect-ratio="1"
    />

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
import { featuredProjects } from '@/data'
import BgPoly from '@/components/utils/BgPoly'
import Carousel from '@/components/utils/Carousel'
import SectionLayout from '@/layouts/SectionLayout'

export default {
  name: 'featured-projects',
  components: {
    BgPoly,
    Carousel,
    SectionLayout
  },

  data: () => ({
    items: featuredProjects
  })
}
</script>
