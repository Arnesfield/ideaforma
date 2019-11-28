<template>
  <div class="bg-quite-grey">
    <v-container
      grid-list-lg
      class="relative"
    >

      <v-layout
        row
        class="pb-4"
        align-center
      >
        <!-- <v-flex xs5 sm3 style="transform: translateY(18px)">
          <app-logo/>
        </v-flex> -->

        <h1
          v-text="'Our Numbers'"
          v-animate="{ above: true }"
          class="mt-5 primary--text speed-2 a-from-bottom text-uppercase"
          :class="{
            'display-1': $vuetify.breakpoint.xsOnly,
            'display-2': $vuetify.breakpoint.smOnly,
            'display-3': !$vuetify.breakpoint.smAndDown,
          }"
        />
      </v-layout>

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
        <div style="width: 224px">
          <img-hexa
            title="12"
            text="Years in Business"
            :src="`${bgPath}bg-business-years.png`"
            v-animate.120="{ above: true }"
            class="pt-4 speed-3 a-from-bottom"
            :title-props="{
              class: 'white--text',
              style: `${bigFont}; ${shadowFont}; margin-top: -64px;`
            }"
            :text-props="{
              class: 'white px-2 py-1'
            }"
          />
        </div>

        <div
          style="width: 164px"
          v-animate.40="{ above: true }"
          class="speed-5 a-from-bottom lower"
        >
          <img-hexa
            title="2"
            text="Schools"
            :src="`${bgPath}bg-schools.png`"
            :text-props="{
              class: 'white px-2 py-1'
            }"
            :title-props="{
              class: 'white--text',
              style: `${shadowFont}; margin-top: -16px`
            }"
          />
        </div>

        <!-- :style="!small ? 'transform: translateY(-40px)' : null" -->
        <div style="width: 224px">
          <img-hexa
            title="94"
            text="Houses"
            :src="`${bgPath}bg-houses.png`"
            v-animate.40="{ above: true }"
            class="pt-4 speed-3 a-from-bottom"
            :title-props="{
              class: 'white--text',
              style: `${bigFont}; ${shadowFont}; margin-top: -32px;`
            }"
            :text-props="{
              class: 'white px-2 py-1'
            }"
          />
        </div>

        <div
          style="width: 204px"
          v-animate.60="{ above: true }"
          class="speed-5 a-from-bottom lower"
        >
          <img-hexa
            title="34"
            text="Commercial Spaces"
            :src="`${bgPath}bg-commercial-spaces.png`"
            :text-props="{
              class: 'white px-2 py-1'
            }"
          />
        </div>

        <!-- <div
          v-animate.40="{ above: true }"
          class="pa-3 text-xs-center speed-3 a-from-bottom lower"
        >
          <h1 class="display-3 font-weight-bold">13</h1>
          <p class="body-1 text-uppercase">Restaurants</p>
        </div> -->

        <div
          style="width: 144px"
          v-animate.40="{ above: true }"
          class="speed-5 a-from-bottom"
        >
          <img-hexa
            title="13"
            text="Restaurants"
            :src="`${bgPath}bg-hexagon-black-bordered.png`"
            :text-props="{
              class: 'white--text'
            }"
            :title-props="{
              class: 'white--text',
              style: 'margin-top: -16px'
            }"
          />
        </div>

        <!-- <div
          v-animate.70="{ above: true }"
          class="pa-3 text-xs-center speed-5 a-from-bottom lower"
        >
          <h1
            class="display-3 font-weight-bold"
          >25</h1>
          <p class="body-1 text-uppercase">Office Spaces</p>
        </div> -->

        <div
          style="width: 144px"
          v-animate.70="{ above: true }"
          class="speed-5 a-from-bottom"
        >
          <img-hexa
            title="25"
            text="Office Spaces"
            :src="`${bgPath}bg-hexagon-gray-bordered.png`"
            :text-props="{
              class: 'white--text'
            }"
            :title-props="{
              class: 'white--text',
              style: 'margin-top: -16px'
            }"
          />
        </div>

      </v-layout>

      <!-- Second Row -->

      <v-layout
        row
        ma-0
        wrap
        justify-center
        class="pb-4"
      >
        <!-- style="border: 1.5px solid #ccc !important" -->
        <!-- <div
          v-animate.70="{ above: true }"
          class="pa-3 text-xs-center speed-4 a-from-bottom lower"
        >
          <h1 class="display-3 font-weight-bold">14,004</h1>
          <p class="body-1 text-uppercase">SQM Turned Over</p>
        </div> -->

        <div
          style="width: 208px"
          v-animate.70="{ above: true }"
          class="speed-5 a-from-bottom"
        >
          <img-hexa
            title="14,004"
            text="SQM Turned Over"
            :src="`${bgPath}bg-hexagon-white-bordered.png`"
          />
        </div>

        <!-- style="border: 1.5px solid #ccc !important" -->
        <!-- <div
          v-animate.40="{ above: true }"
          class="pa-3 text-xs-center speed-4 a-from-bottom"
        >
          <h1 class="display-3 font-weight-bold">414,000</h1>
          <p class="body-1 text-uppercase">Color Palettes Chosen</p>
        </div> -->

        <div
          style="width: 224px"
          v-animate.70="{ above: true }"
          class="speed-5 a-from-bottom"
        >
          <img-hexa
            title="414,000"
            text="Color Palettes Chosen"
            :src="`${bgPath}bg-hexagon-primary-bordered.png`"
          />
        </div>

        <div
          style="width: 208px"
          v-animate.100="{ above: true }"
          class="speed-5 a-from-bottom lower"
        >
          <img-hexa
            title="313"
            class="mx-auto pt-4"
            text="Skilled Workers Employed"
            :src="`${bgPath}bg-workers.png`"
            :text-props="{
              class: 'white px-2 py-1'
            }"
            :title-props="{
              style: 'margin-top: -32px'
            }"
          />
        </div>

        <div
          style="width: 280px"
          v-animate.60="{ above: true }"
          class="speed-5 a-from-bottom lower"
        >
          <img-hexa
            title="134"
            text="Condominium Units"
            :src="`${bgPath}bg-condominium-units.png`"
            :text-props="{
              class: 'white px-2 py-1'
            }"
            :title-props="{
              class: 'white--text',
              style: `${bigFont}; ${shadowFont}`
            }"
          />
        </div>

        <div
          style="width: 208px"
          v-animate.90="{ above: true }"
          class="speed-5 a-from-bottom"
        >
          <img-hexa
            title="26"
            text="Retail Stores"
            :src="`${bgPath}bg-store.png`"
            :text-props="{
              class: 'white px-2 py-1'
            }"
            :title-props="{
              class: 'white--text'
            }"
          />
        </div>

      </v-layout>
      
    </v-container>
  </div>
</template>

<script>
import { bgPath } from '@/utils/path'
import ImgHexa from './components/ImgHexa'
import BgPoly from '@/components/utils/BgPoly'
import AppLogo from '@/components/core/AppLogo'

export default {
  name: 'achievements',
  components: {
    BgPoly,
    ImgHexa,
    AppLogo
  },

  computed: {
    bgPath: () => bgPath,

    small() {
      return this.$vuetify.breakpoint.smAndDown
    },

    bigFont() {
      return 'font-size: 124px !important; font-weight: bolder; margin-top: -32px;'
    },

    shadowFont() {
      return 'text-shadow: 3px 4px #000000'
    }
  }
}
</script>
