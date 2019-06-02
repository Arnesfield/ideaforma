<template>
  <div class="y-full">
    <featured-projects/>
    <!-- TODO: add image separator here -->
    <our-process/>
    <achievements/>
    <our-core/>
    <app-footer/>
  </div>
</template>

<script>
import OurCore from '@/components/core/OurCore'
import AppFooter from '@/components/core/AppFooter'
import OurProcess from '@/components/core/OurProcess'
import FeaturedProjects from '@/components/core/FeaturedProjects'
import Achievements from '@/components/core/Achievements/Achievements'

export default {
  name: 'home',
  components: {
    OurCore,
    AppFooter,
    OurProcess,
    Achievements,
    FeaturedProjects
  }
}
</script>
