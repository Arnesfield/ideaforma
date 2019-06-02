<template>
  <div class="y-full">
    <featured-projects/>
    <!-- TODO: add image separator here -->
    <our-process/>
    <Achievements/>
    <our-core/>
    <Footer/>
  </div>
</template>

<script>
import OurProcess from '@/components/core/OurProcess'
import FeaturedProjects from '@/components/core/FeaturedProjects'
import Achievements from '@/components/core/Achievements/Achievements'
import OurCore from '@/components/core/OurCore'
import Footer from '@/components/core/Footer/Footer'


export default {
  name: 'home',
  components: {
    OurProcess,
    FeaturedProjects,
    Achievements,
    OurCore,
    Footer
  }
}
</script>
