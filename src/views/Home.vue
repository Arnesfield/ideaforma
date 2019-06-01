<template>
  <div class="y-full">
    <featured-projects/>
    <!-- TODO: add image separator here -->
    <our-process v-onscreen:1.300="onScreen"/>
  </div>
</template>

<script>
import OurProcess from '@/components/core/OurProcess'
import FeaturedProjects from '@/components/core/FeaturedProjects'

export default {
  name: 'home',
  components: {
    OurProcess,
    FeaturedProjects
  },

  data: () => ({
    TR: {
      1: false,
      2: false
    }
  }),

  methods: {
    onScreen(value, arg) {
      this.TR[arg] = value
    }
  }
}
</script>
