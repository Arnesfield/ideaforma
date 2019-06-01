<template>
  <section-layout
    class="bg-quite-grey"
    title="Featured Projects"
    :hr-line-props="{ width: '62vw' }"
  >
    <v-container>
      <carousel :items="featuredProjects">
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
import Carousel from '@/components/utils/Carousel'
import SectionLayout from '@/layouts/SectionLayout'

export default {
  name: 'featured-projects',
  components: {
    Carousel,
    SectionLayout
  },

  data: () => ({
    featuredProjects
  })
}
</script>
