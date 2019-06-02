<template>
  <div class="y-full">
    <featured-projects/>
    <!-- TODO: add image separator here -->
    <our-process/>
    <Achievements/>
    <Core/>
    <AppFooter/>
  </div>
</template>

<script>
import OurProcess from '@/components/core/OurProcess'
import FeaturedProjects from '@/components/core/FeaturedProjects'
import Achievements from '@/components/core/Achievements/Achievements'
import Core from '@/components/core/OurCore/Core'
import AppFooter from '@/components/core/Footer/AppFooter'


export default {
  name: 'home',
  components: {
    OurProcess,
    FeaturedProjects,
    Achievements,
    Core,
    AppFooter
  }
}
</script>
