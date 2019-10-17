<template>
  <div class="bg-quite-grey">
    <v-container
      grid-list-lg
      class="relative"
    >
      <bg-poly
        opacity="0.65"
        style="right: 0"
        img="bg-gold-poly.png"
      />

      <v-layout
        row
        ma-0
        wrap
        align-center
        justify-center
      >
        <div 
          v-animate.120="{ above: true }"
          class="pa-3 text-xs-center speed-5 a-from-bottom lower"
        >
          <h1
            :style="bigFont"
            class="display-3 font-weight-bold"
          >11</h1>
          <p class="body-1 text-uppercase">Years in Business</p>
          <!-- Terabytes of Data -->
        </div>

        <div
          v-animate.40="{ above: true }"
          style="border: 1.5px solid #ccc !important"
          class="pa-3 px-5 text-xs-center white speed-4 a-from-bottom"
        >
          <h1 class="display-3 font-weight-bold">14,004</h1>
          <p class="body-1 text-uppercase">SQMs Turned Over</p>
        </div>

        <div
          style="width: 256px"
          v-animate.180="{ above: true }"
          class="speed-5 a-from-bottom lower"
        >
          <img-hexa
            title="313"
            class="mx-auto pt-4"
            text="Skilled Workers Employed"
            :src="`${bgPath}bg-years-in-business.png`"
            :text-props="{
              class: 'white px-2 py-1'
            }"
            :title-props="{
              style: 'margin-top: -32px'
            }"
          />
        </div>

        <div
          v-animate.40="{ above: true }"
          class="pa-3 text-xs-center speed-3 a-from-bottom lower"
        >
          <h1 class="display-3 font-weight-bold">13</h1>
          <p class="body-1 text-uppercase">Restaurants</p>
        </div>

        <div
          v-animate.40="{ above: true }"
          style="border: 1.5px solid #ccc !important"
          class="pa-3 px-5 text-xs-center white speed-4 a-from-bottom"
        >
          <h1 class="display-3 font-weight-bold">414,000</h1>
          <p class="body-1 text-uppercase">Color Palettes Chosen</p>
        </div>

      </v-layout>

      <!-- Second Row -->

      <v-layout
        row
        ma-0
        wrap
        justify-center
        :style="!small ? 'transform: translateY(-40px)' : null"
      >
        <div style="width: 208px">
          <img-hexa
            title="94"
            text="Houses"
            :title-props="{
              style: `${bigFont}; margin-top: -32px`
            }"
            :src="`${bgPath}bg-residential-houses.png`"
            v-animate.40="{ above: true }"
            class="pt-4 speed-3 a-from-bottom"
          />
        </div>

        <div
          v-animate.90="{ above: true }"
          class="pa-3 text-xs-center speed-3 a-from-bottom lower"
        >
          <h1 class="display-3 font-weight-bold">34</h1>
          <p class="body-1 text-uppercase">Commercial Spaces</p>
        </div>

        <div
          v-animate.110="{ above: true }"
          class="pa-3 text-xs-center speed-5 a-from-bottom lower"
        >
          <h1
            :style="bigFont"
            class="display-3 font-weight-bold"
          >134</h1>
          <p class="body-1 text-uppercase">Condominium Units</p>
        </div>

        <div
          style="width: 256px"
          v-animate.60="{ above: true }"
          class="speed-5 a-from-bottom lower"
        >
          <img-hexa
            title="25"
            text="Office Spaces"
            :src="`${bgPath}bg-unique-cities.png`"
            :text-props="{
              class: 'white px-2 py-1'
            }"
          />
        </div>

        <div
          style="width: 208px;"
          v-animate.90="{ above: true }"
          class="speed-3 a-from-bottom"
        >
          <img-hexa
            title="26"
            text="Retail Stores"
            :src="`${bgPath}bg-residential-houses.png`"
          />
        </div>

        <div
          v-animate.70="{ above: true }"
          class="pa-3 text-xs-center speed-3 a-from-bottom lower"
        >
          <h1 class="display-3 font-weight-bold">2</h1>
          <p class="body-1 text-uppercase">Schools</p>
        </div>

      </v-layout>
      
    </v-container>
  </div>
</template>

<script>
import { bgPath } from '@/utils/path'
import ImgHexa from './components/ImgHexa'
import BgPoly from '@/components/utils/BgPoly'

export default {
  name: 'achievements',
  components: {
    BgPoly,
    ImgHexa
  },

  computed: {
    bgPath: () => bgPath,

    small() {
      return this.$vuetify.breakpoint.smAndDown
    },

    bigFont() {
      return 'font-size: 102px !important; font-weight: bolder'
    }
  }
}
</script>
