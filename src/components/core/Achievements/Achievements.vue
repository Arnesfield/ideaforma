<template>
  <div class="bg-quite-grey">
    <v-container
      grid-list-lg
      class="relative"
    >
      <bg-poly
        opacity="0.25"
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
        <div style="width: 256px">
          <img-hexa
            title="11"
            v-animate="animate"
            class="mx-auto pt-4 speed-3 a-from-bottom higher"
            text="Years in Business"
            :src="`${bgPath}bg-years-in-business.png`"
          />
        </div>

        <div
          v-animate="animate"
          class="pa-3 px-5 text-xs-center white speed-3 a-from-bottom higher"
          style="border: 1.5px solid #ccc !important"
        >
          <h1 class="display-3 font-weight-bold">23K</h1>
          <p class="body-1 text-uppercase"> sqm turned over</p>
        </div>

        <div 
          class="pa-3 text-xs-center"
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
            v-animate="animate"
            class=" pt-4 speed-3 a-from-bottom higher"
          />
        </div>

        <div class="pa-3 text-xs-center">
          <h1 class="display-3 font-weight-bold">84</h1>
          <p class="body-1 text-uppercase">Condominium Units</p>
        </div>

        <div class="pa-3 text-xs-center">
          <h1 class="display-3 font-weight-bold">34</h1>
          <p class="body-1 text-uppercase">Commercial Spaces</p>
        </div>

        <div style="width: 256px">
          <img-hexa
            :src="`${bgPath}bg-unique-cities.png`"
            title="17"
            text="Unique Cities"
            v-animate="animate"
            class="speed-3 a-from-bottom"
          />
        </div>

        <div style="width: 208px;">
          <img-hexa
            title="8"
            text="Office Spaces"
            :src="`${bgPath}bg-residential-houses.png`"
            v-animate="animate"
            class=" speed-3 a-from-bottom higher"
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
