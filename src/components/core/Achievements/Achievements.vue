<template>
  <div>
    <v-layout/>
    <v-container
      fluid
      grid-list-lg
    >
      <v-layout
        row
        wrap
        justify-center 
        ma-0
      >
        <v-flex
          md4
          class="text-md-center text-sm-center text-xs-center ml-5 pa-0"
        >
          <v-img
            :src="`${bgPath}bg-years-in-business.png`"
            style="width:50%;
            height: auto;
            contain
            "
          >
            <div
              class="display-1"
              style="
             position: relative;
             top:50%;
             transform: translateY(-50%);
            "
            >
              11
              <p class="body-1">
                YEARS IN BUSINESS
              </p>
            </div>
          </v-img>
        </v-flex>

        <v-flex
          md4
          class="text-md-center text-sm-center text-xs-center justify-center pa-0 mt-5"
          style="
            position: relative;
            transform: translateX(-70%);
          "
        >
          <div class="display-1">
            23K
            <p class="body-1">
              SQM TURNED OVER
            </p>
          </div>
        </v-flex>
      </v-layout>
    </v-container>
  </div>
</template>

<script>
import { bgPath } from '@/utils/path'

export default {
  name: 'achievements',
  computed: {
    bgPath: () => bgPath
  }
}
</script>
