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
              :src="`${bgPath}/bg-office-section.jpg`"
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
            <app-logo aspect-ratio="3.0"/>
          </v-flex>

          <v-flex
            xs12
            sm9
            md9
            v-animate="{ above: true }"
            class="speed-4 a-from-bottom lower double-border"
            :style="{ 'background-color': colorOpac }"
          >
            <!-- style="border-collapse: separate; border-spacing: 32px 16px" -->
          <!-- 'border': `4px solid white`, //${colorOpac} -->
            <v-container
              class="white--text py-5 ma-0"
            >
              <v-layout
                align-center
              >
                <div>
                  <v-layout justify-end>
                    <h1 class="display-2 text-uppercase">Creating homes in the Philippines</h1>
                  </v-layout>
                </div>
              </v-layout>

            </v-container>
          </v-flex>
        </div>

      </v-layout>

    </v-container>
  </div>
</template>
<script>
import { colors } from '@/utils'
import { bgPath, logoPath } from '@/utils/path'
import BgPoly from '@/components/utils/BgPoly'
import AppLogo from '@/components/core/AppLogo'

export default {
  name: 'header-page',
  components: {
    BgPoly,
    AppLogo
  },

  data: () => ({
    containerHeight: '720px'
  }),

  computed: {
    bgPath: ()  => bgPath,
    logoPath: () => logoPath,
    colorOpac() {
      const color = colors[2] // this.$vuetify.theme.primary
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
