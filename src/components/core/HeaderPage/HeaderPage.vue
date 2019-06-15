<template>
  <div class="white">
    <v-container
      fluid
      class="pa-0 relative"
      :style="{ height: containerHeight }"
    >
      <bg-poly
        opacity="0.3"
        style="top: -5%; left: -5%"
        img="bg-black-gold-poly.png"
      />

      <div
        class="relative"
      >
        <v-layout
          row
          wrap
          class="absolute x-full y-full"
        >
          <v-flex
            xs12
            md8
            offset-md4
          >
            <v-img
              v-animate="{ above: true }"
              :style="{ height: containerHeight }"
              :src="`${bgPath}/bg-office-section.png`"
              class="pa-3 px-5 text-xs-center white speed-3 a-from-bottom lower"
              :lazy-src="`${bgPath}/bg-office-section-lazy.png`"
              aspect-ratio="1"
            />
          </v-flex>
        </v-layout>
      </div>

      <!-- content -->

      <v-layout
        fill-height
        align-center
      >
        <div class="x-full">

          <v-flex
            xs12
            sm8
            md6
          >
            <v-img
              contain
              aspect-ratio="3.0"
              v-animate="{ above: true }"
              class="speed-5 a-from-bottom"
              :src="`${logoPath}/logo-full-transparent.png`"
            />
          </v-flex>

          <v-flex
            xs12
            sm10
            md10
            v-animate="{ above: true }"
            class="speed-4 a-from-bottom lower"
            :style="{ 'background-color': primaryOpac }"
          >
            <v-container
              class="white--text py-5 ma-0"
            >
              <v-layout
                align-center
                justify-center
              >
                <v-btn v-bind="btnProps">
                  <v-icon
                    x-large
                    color="white"
                  >chevron_left</v-icon>
                </v-btn>

                <v-spacer/>

                <div>
                  <v-layout justify-end>
                    <h1 class="display-2">We create homes in the Philippines</h1>
                  </v-layout>

                  <v-layout>
                    <v-btn
                      large
                      outline
                      color="white"
                      class="font-weight-bold mt-3"
                    >Learn More</v-btn>

                  </v-layout>
                </div>

                <v-spacer/>

                <v-btn v-bind="btnProps">
                  <v-icon
                    x-large
                    color="white"
                  >chevron_right</v-icon>
                </v-btn>

              </v-layout>

            </v-container>
          </v-flex>
        </div>

      </v-layout>

    </v-container>
  </div>
</template>
<script>
import { bgPath, logoPath } from '@/utils/path'
import BgPoly from '@/components/utils/BgPoly'

export default {
  name: 'header-page',
  components: {
    BgPoly
  },

  data: () => ({
    containerHeight: '720px'
  }),

  computed: {
    bgPath: ()  => bgPath,
    logoPath: () => logoPath,
    primaryOpac() {
      const color = this.$vuetify.theme.primary
      return `${color}cc`
    },

    small() {
      return this.$vuetify.breakpoint.smAndDown
    },

    controlSize() {
      return this.small ? 32 : 64
    },

    btnProps() {
      return {
        flat: true,
        icon: true,
        large: true,
        color: 'white',
        class: `wh-${this.controlSize}`
      }
    }
  }
}
</script>

