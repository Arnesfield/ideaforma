<template>
  <div class="white">
    <section-layout
      class="pb-5"
      title="Our Core"
      :hr-line-props="{ width: '58vw' }"
    >

      <v-container
        grid-list-lg
        class="speed-3 a-from-bottom"
        v-animate.60="{ above: true }"
      >
        <v-layout
          row
          wrap
          :key="i"
          justify-center
          v-for="(layout, i) in layouts"
          class="text-md-center text-sm-center text-xs-center"
        >
          <v-flex
            xs12
            sm4
            md4
            :key="i"
            v-bind="layout.flexProps"
            class="pt-4 white--text"
            v-for="(user, i) in layout.team"
          >
            <!-- :class="{ 'mt-5': !small && (i == 0 || i == team.length - 1) }" -->
            <team-user-info v-bind="user"/>
          </v-flex>
        </v-layout>

        <v-layout>
          <v-spacer/>

          <div
            xs12
            md4
            class="pt-4"
          >
            <v-btn
              flat
              large
              to="/team"
              class="font-italic"
              color="grey darken-1"
            >
              <span class="mr-1">Meet the Team</span>
              <v-icon>chevron_right</v-icon>
            </v-btn>
          </div>
        </v-layout>

      </v-container>
    </section-layout>
  </div>
</template>

<script>
import { team } from '@/data'
import SectionLayout from '@/layouts/SectionLayout'
import TeamUserInfo from './components/TeamUserInfo'

export default {
  name: 'our-core',
  components: {
    TeamUserInfo,
    SectionLayout
  },

  computed: {
    small() {
      return this.$vuetify.breakpoint.xsOnly
    },
    team() {
      // only use first 5
      return team.slice(0, 5)
    },

    layouts() {
      return [
        {
          team: this.team.slice(0, 2)
        },
        {
          team: this.team.slice(2)
        }
      ]
    }
  }
}
</script>
