<template>
  <v-container
    fluid
    grid-list-lg
  >
    <v-layout
      row
      align-center
      justify-center 
      ma-0
    >
      <v-flex
        md4
        class="text-xs-center ml-5 pa-0"
      >
        <!-- TODO: separate this to component -->
        <img-hexa
          :src="`${bgPath}bg-years-in-business.png`"
          title="11"
          text="Years in Business"
        />
      </v-flex>

      <v-flex
        md4
        class="text-xs-center"
      >
        <v-container>
          <v-layout
            column
            align-center
            justify-center
          >
            <h1 class="display-3">23K</h1>
            <p class="body-1 text-capitalize"> sqm turned over</p>
          </v-layout>
        </v-container>
      </v-flex>

      <v-flex
        md3
        class="text-xs-center"
      >
        <v-container>
          <v-layout
            column
            align-center
            justify-center
          >
            <h1 class="display-3">2.2</h1>
            <p class="body-1 text-capitalize">Terabytes of Data</p>
          </v-layout>
        </v-container>
      </v-flex>
    </v-layout>

    <!-- Second Row -->

    <v-layout
      row
      align-center
      justify-center 
      ma-0
    >
      <v-flex
        md4
        class="text-xs-center ml-5 pa-0"
      >
        <img-hexa
          :src="`${bgPath}bg-residential-houses.png`"
          title="54"
          text="Residential Houses"
        />
      </v-flex>

      <v-flex md4>
        <v-container>
          <v-layout 
            column
            align-center
            justify-center
          >
            <h1
              v-text="84"
              class="display-3"
            />
            <p
              v-text="`Condominium Units`"
              class="body-1"
            />
          </v-layout>
        </v-container>
      </v-flex>

      <v-flex
        md4
        class="text-xs-center ml-5 pa-0"
        align-center
        justify-center
      >
        <!-- TODO: separate this to component -->
        <img-hexa
          :src="`${bgPath}bg-unique-cities.png`"
          title="17"
          text="Unique Cities"
        />
      </v-flex>
    </v-layout>
    <!-- Third Row -->
    <v-layout
      row
      align-center
      justify-center
      ma-0
    >
      <v-flex
        md6
        class="text-xs-center"
      >
        <v-container>
          <v-layout
            column
            align-center
            justify-center
          >
            <h1 class="display-3">23K</h1>
            <p class="body-1 text-capitalize"> sqm turned over</p>
          </v-layout>
        </v-container>
      </v-flex>

      <v-flex
        md6
        class="text-xs-center ml-5 pa-0"
      >
        <!-- TODO: separate this to component -->
        <img-hexa
          :src="`${bgPath}bg-residential-houses.png`"
          title="8"
          text="Office Spaces"
        />
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import { bgPath } from '@/utils/path'
import ImgHexa from './components/ImgHexa'

export default {
  name: 'achievements',
  components: {
    ImgHexa
  },

  computed: {
    bgPath: () => bgPath
  }
}
</script>
