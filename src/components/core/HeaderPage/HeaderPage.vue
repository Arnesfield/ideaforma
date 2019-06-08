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
            offset-md4
            xs12
            md8
            :style="!this.$vuetify.breakpoint.xsOnly ? { 'height': 'auto' } : null"
          >
            <v-img
              v-animate
              :style="{ height: containerHeight }"
              :src="`${bgPath}/bg-office-section.png`"
              class="pa-3 px-5 text-xs-center white speed-3 a-from-bottom lower"
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
              v-animate
              aspect-ratio="3.0"
              class="speed-5 a-from-bottom"
              :src="`${logoPath}/logo-full-transparent.png`"
            />
          </v-flex>

          <v-flex
            xs12
            sm9
            md9
            v-animate="{ above: true }"
            class="primary speed-4 a-from-bottom lower"
          >
            <v-container
              class="white--text pa-5"
            >
              <v-layout justify-end>
                <h1 class="display-2 mb-2">We create homes in the Philippines</h1>
              </v-layout>

              <v-layout justify-end>
                <v-btn
                  large
                  outline
                  color="white"
                  class="font-weight-bold"
                >Learn More</v-btn>

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
    logoPath: () => logoPath
  }
}
</script>

