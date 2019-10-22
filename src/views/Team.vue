<template>
  <div class="about">
    <div class="white">
      <section-layout
        class="pb-5"
        title="Meet the Team"
        :hr-line-props="{ width: '62vw' }"
      >

        <v-container
          grid-list-lg
          class="speed-3 a-from-bottom"
          v-animate.60="{ above: true }"
        >
          <v-layout
            row
            wrap
            justify-center
            class="text-md-center text-sm-center text-xs-center"
          >
            <v-flex
              xs12
              sm3
              md3
              :key="i"
              class="pt-4 white--text"
              v-for="(user, i) in team"
            >
              <team-user-info v-bind="user"/>
            </v-flex>
          </v-layout>
        </v-container>
      </section-layout>
    </div>

    <app-footer/>
  </div>
</template>

<script>
import { team } from '@/data'
import AppFooter from '@/components/core/AppFooter'
import SectionLayout from '@/layouts/SectionLayout'
import TeamUserInfo from '@/components/core/OurCore/components/TeamUserInfo'

export default {
  name: 'team',
  components: {
    AppFooter,
    TeamUserInfo,
    SectionLayout
  },
  computed: {
    small() {
      return this.$vuetify.breakpoint.xsOnly
    },
    team: () => team
  }
}
</script>
