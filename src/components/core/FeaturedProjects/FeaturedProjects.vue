<template>
  <section-layout
    class="bg-quite-grey"
    title="Featured Projects"
    :title-animate="animate"
    :hr-line-props="{ right: true, width: '64vw' }"
  >
    <v-container>
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
import { animatable } from '@/mixins'
import { featuredProjects } from '@/data'
import Carousel from '@/components/utils/Carousel'
import SectionLayout from '@/layouts/SectionLayout'

export default {
  name: 'featured-projects',
  mixins: [animatable],
  components: {
    Carousel,
    SectionLayout
  },

  data: () => ({
    items: featuredProjects
  })
}
</script>
