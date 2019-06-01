<template>
  <div class="y-full">
    <featured-projects
      :animate="TR[0]"
      v-onscreen:0="onScreen"
    />
    <!-- TODO: add image separator here -->
    <our-process
      :animate="TR[1]"
      v-onscreen:1.140="onScreen"
    />
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
      0: false,
      1: false
    }
  }),

  methods: {
    onScreen(value, arg) {
      this.TR[arg] = value
    }
  }
}
</script>
