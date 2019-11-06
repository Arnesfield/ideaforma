<template>
  <div>
    <div class="white">
      <app-toolbar :to="toPath"/>

      <section-layout
        class="pb-3"
        title="Meet the Team"
        title-class="text-xs-center"
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
            :key="i"
            v-for="(layout, i) in layouts"
          >
            <v-flex
              xs12
              v-bind="{
                'sm4 md4': user.emphasize,
                'sm3 md3': !user.emphasize
              }"
              :key="`${i}-${j}`"
              class="pt-4 white--text"
              v-for="(user, j) in layout.team"
            >
              <team-user-info v-bind="user"/>
            </v-flex>
          </v-layout>
        </v-container>
      </section-layout>

      <v-layout
        class="pb-5"
        justify-center
      >
        <v-btn
          large
          outline
          :to="toPath"
          class="title"
          style="height: 56px"
        >
          <v-icon class="mr-1">arrow_left</v-icon>
          <span>Back to Our Core</span>
        </v-btn>
      </v-layout>
    </div>

    <app-footer/>
  </div>
</template>

<script>
import { team } from '@/data'
import AppFooter from '@/components/core/AppFooter'
import SectionLayout from '@/layouts/SectionLayout'
import AppToolbar from '@/components/core/AppToolbar'
import TeamUserInfo from '@/components/core/OurCore/components/TeamUserInfo'

export default {
  name: 'team',
  components: {
    AppFooter,
    AppToolbar,
    TeamUserInfo,
    SectionLayout
  },
  computed: {
    toPath: () => '/?to=core',
    small() {
      return this.$vuetify.breakpoint.xsOnly
    },
    // remove slice if they need everybody
    team: () => team.slice(5),

    layouts() {
      return [
        {
          team: this.team.slice(0, 1)
        },
        {
          team: this.team.slice(1, 2)
        },
        {
          team: this.team.slice(2, 3)
        },
        {
          team: this.team.slice(3, 6)
        }
      ]
    }
  }
}
</script>
