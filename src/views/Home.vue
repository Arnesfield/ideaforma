<template>
  <div class="y-full">
    <header-page/>
    <our-core/>
    <services/>
    <featured-projects/>
    <!-- TODO: add image separator here -->
    <our-process/>
    <achievements/>
    <app-footer/>

    <!-- to top -->
    <v-btn
      fab
      icon
      fixed
      right
      bottom
      color="primary"
      @click="toTop"
      class="mr-1 mb-1 elevation-4"
    >
      <v-icon>keyboard_arrow_up</v-icon>
    </v-btn>
  </div>
</template>

<script>
import HeaderPage from '@/components/core/HeaderPage/HeaderPage'
import Services from '@/components/core/Services/Services'
import OurCore from '@/components/core/OurCore'
import AppFooter from '@/components/core/AppFooter'
import OurProcess from '@/components/core/OurProcess'
import FeaturedProjects from '@/components/core/FeaturedProjects'
import Achievements from '@/components/core/Achievements/Achievements'

export default {
  name: 'home',
  components: {
    HeaderPage,
    Services,
    OurCore,
    AppFooter,
    OurProcess,
    Achievements,
    FeaturedProjects
  },
  
  methods: {
    toTop() {
      this.$vuetify.goTo('#app', {
        duration: 1000,
        offset: 0,
        easing: 'easeInOutCubic'
      })
    }
  }
}
</script>
