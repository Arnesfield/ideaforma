<template>
  <div class="y-full">
    <header-page/>
    <achievements/>
    <our-core id="core"/>
    <services/>
    <featured-projects id="projects"/>
    <!-- TODO: add image separator here -->
    <our-process/>
    <app-footer/>

    <!-- to top -->
    <!-- <v-btn
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
    </v-btn> -->
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

  computed: {
    goTo() {
      const { to } = this.$route.query || {}
      return to
    },

    gotoProps: () => ({
      duration: 1000,
      offset: 0,
      easing: 'easeInOutCubic'
    })
  },

  mounted() {
    if (this.goTo) {
      this.$nextTick(() => {
        this.$vuetify.goTo(`#${this.goTo}`, this.gotoProps)

        // remove the routes query
        this.$router.replace('')
      })
    }
  },

  methods: {
    toTop() {
      this.$vuetify.goTo('#app', this.gotoProps)
    }
  }
}
</script>
