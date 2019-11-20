<template>
  <div>
    <div class="white">
      <app-toolbar :to="toPath"/>

      <section-layout
        class="pb-3"
        title="Meet the Team"
        title-class="text-xs-center"
        :hr-line-props="{ width: '62vw' }"
        :container-props="{ fluid: true }"
      >

        <v-container
          fluid
          grid-list-lg
          class="speed-3 a-from-bottom"
          v-animate.60="{ above: true }"
        >
          <!--
            :key="i"
            v-for="(layout, i) in layouts" -->
          <v-layout v-bind="layoutProps">
            <v-flex v-bind="flexProps()"/>

            <v-flex v-bind="flexProps(team[2])">
              <team-user-info v-bind="team[2]"/>
            </v-flex>

            <v-flex v-bind="flexProps()"/>
            <v-flex v-bind="flexProps()"/>

            <v-flex v-bind="flexProps(team[0])">
              <team-user-info v-bind="team[0]"/>
            </v-flex>
          </v-layout>

          <v-layout v-bind="layoutProps">
            <v-flex v-bind="flexProps(team[3])">
              <team-user-info v-bind="team[3]"/>
            </v-flex>

            <v-flex v-bind="flexProps(team[4])">
              <team-user-info v-bind="team[4]"/>
            </v-flex>

            <v-flex v-bind="flexProps(team[5])">
              <team-user-info v-bind="team[5]"/>
            </v-flex>

            <v-flex v-bind="flexProps()"/>

            <v-flex v-bind="flexProps(team[1])">
              <team-user-info v-bind="team[1]"/>
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

    // TODO: remove
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
    },

    layoutProps: () => ({
      row: true,
      wrap: true,
      'justify-center': true,
      class: 'text-md-center text-sm-center text-xs-center'
    })
  },

  methods: {
    flexProps(user) {
      const em = user ? !!user.emphasize : false
      const addClass = user ? '' : 'hidden-xs-only'

      return {
        xs12: true,
        class: `pt-4 white--text ${addClass}`,
        'sm4 md4': em,
        'sm2 md2': !em
      }
    }
  }
}
</script>
