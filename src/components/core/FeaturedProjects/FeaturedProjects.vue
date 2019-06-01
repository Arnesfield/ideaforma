<template>
  <section-layout
    class="bg-quite-grey"
    title="Featured Projects"
    :hr-line-props="{ width: '62vw' }"
  >
    <v-container>
      <!-- TODO: add slider here -->

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
import SectionLayout from '@/layouts/SectionLayout'

export default {
  name: 'featured-projects',
  components: {
    SectionLayout
  }
}
</script>
