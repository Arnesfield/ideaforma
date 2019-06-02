<template>
  <div class="white">
    <section-layout
      class="pb-5"
      title="Our Core"
      :hr-line-props="{ width: '57vw' }"
    >

      <v-container
        grid-list-lg
        class="speed-3 a-from-bottom"
        v-animate.100="{ above: true }"
      >
        <v-layout
          row
          wrap
          class=" text-md-center text-sm-center text-xs-center"
        >
          <v-flex
            xs12
            sm4
            md4
            :key="i"
            v-for="(user, i) in team"
            v-animate.140="{ above: true }"
            class="pt-4 white--text a-from-bottom"
            :class="{
              [`speed-${i + 2}`]: true,
              'mt-5': !small && (i == 0 || i == team.length - 1)
            }"
          >
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
import TeamUserInfo from './components/TeamUserInfo'
import SectionLayout from '@/layouts/SectionLayout'

export default {
  name: 'our-core',
  components: {
    TeamUserInfo,
    SectionLayout
  },

  data: () => ({
    team
  }),

  computed: {
    small() {
      return this.$vuetify.breakpoint.xsOnly
    }
  }
}
</script>
