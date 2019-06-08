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
          style="width: 256px"
          v-animate.180="{ above: true }"
          class="speed-5 a-from-bottom lower"
        >
          <img-hexa
            title="11"
            class="mx-auto pt-4"
            text="Years in Business"
            :src="`${bgPath}bg-years-in-business.png`"
          />
        </div>

        <div
          v-animate.40="{ above: true }"
          style="border: 1.5px solid #ccc !important"
          class="pa-3 px-5 text-xs-center white speed-4 a-from-bottom"
        >
          <h1 class="display-3 font-weight-bold">23K</h1>
          <p class="body-1 text-uppercase"> sqm turned over</p>
        </div>

        <div 
          v-animate.120="{ above: true }"
          class="pa-3 text-xs-center speed-5 a-from-bottom lower"
        >
          <h1 class="display-3 font-weight-bold">2.2</h1>
          <p class="body-1 text-uppercase">Terabytes of Data</p>
        </div>
      </v-layout>

      <!-- Second Row -->

      <v-layout
        row
        ma-0
        wrap
        justify-center 
      >
        <div style="width: 208px">
          <img-hexa
            title="54"
            text="Residential Houses"
            :src="`${bgPath}bg-residential-houses.png`"
            v-animate.40="{ above: true }"
            class="pt-4 speed-3 a-from-bottom"
          />
        </div>

        <div
          v-animate.110="{ above: true }"
          class="pa-3 text-xs-center speed-5 a-from-bottom lower"
        >
          <h1 class="display-3 font-weight-bold">84</h1>
          <p class="body-1 text-uppercase">Condominium Units</p>
        </div>

        <div
          v-animate.90="{ above: true }"
          class="pa-3 text-xs-center speed-3 a-from-bottom lower"
        >
          <h1 class="display-3 font-weight-bold">34</h1>
          <p class="body-1 text-uppercase">Commercial Spaces</p>
        </div>

        <div
          style="width: 256px"
          v-animate.60="{ above: true }"
          class="speed-5 a-from-bottom lower"
        >
          <img-hexa
            title="17"
            text="Unique Cities"
            :src="`${bgPath}bg-unique-cities.png`"
          />
        </div>

        <div
          style="width: 208px;"
          v-animate.90="{ above: true }"
          class="speed-3 a-from-bottom"
        >
          <img-hexa
            title="8"
            text="Office Spaces"
            :src="`${bgPath}bg-residential-houses.png`"
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

export default {
  name: 'achievements',
  components: {
    BgPoly,
    ImgHexa
  },

  computed: {
    bgPath: () => bgPath
  }
}
</script>
