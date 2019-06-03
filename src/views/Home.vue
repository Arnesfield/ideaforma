<template>
  <div class="y-full">
    <services/>
    <featured-projects/>
    <!-- TODO: add image separator here -->
    <our-process/>
    <achievements/>
    <our-core/>
    <app-footer/>
  </div>
</template>

<script>
import Services from '@/components/core/Services/Services'
import OurCore from '@/components/core/OurCore'
import OurProcess from '@/components/core/OurProcess'
import AppFooter from '@/components/core/Footer/AppFooter'
import FeaturedProjects from '@/components/core/FeaturedProjects'
import Achievements from '@/components/core/Achievements/Achievements'

export default {
  name: 'home',
  components: {
    Services,
    OurCore,
    AppFooter,
    OurProcess,
    Achievements,
    FeaturedProjects
  }
}
</script>
