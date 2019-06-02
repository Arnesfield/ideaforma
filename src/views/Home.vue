<template>
  <div class="y-full">
    <featured-projects/>
    <!-- TODO: add image separator here -->
    <our-process/>
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
  }
}
</script>
