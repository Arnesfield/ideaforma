<template>
  <div class="white">
    <section-layout
      title="Featured Projects"
      :hr-line-props="{ right: true, width: '65vw' }"
    >
      <bg-poly
        opacity="0.5"
        slot="outside"
        img="bg-gold-poly.png"
        lazy-img="bg-gold-poly-lazy.png"
        aspect-ratio="1"
      />

      <v-container
        class="speed-3 a-from-bottom"
        v-animate.100="{ above: true }"
      >
        <carousel
          class="mb-5"
          height="520px"
          v-bind="{ items }"
        >
          <div
            :key="index"
            slot-scope="{ item, index }"
            style="height: inherit;"
          >
            <v-layout
              justify-center
              style="height: inherit;"
            >
              <v-img
                contain
                class="x-full"
                style="height: inherit;"
                :src="`${galleryPath}/${item.imgSrc}`"
              >
                <v-layout
                  align-end
                  justify-center
                  fill-height
                  class="pr-3 pb-2"
                >
                  <v-layout
                    row
                    wrap
                    justify-center
                  >
                    <v-flex xs12>
                      <v-layout justify-center>
                        <v-btn
                          dark
                          flat
                          large
                          :to="item.to"
                          class="subheading elevation-1"
                          :style="`height: 52px; background-color: ${color}`"
                        >
                          <span
                            v-text="'View Photos'"
                          />
                          <!-- style="letter-spacing: 0.28em" -->
                          <v-icon>arrow_right</v-icon>
                        </v-btn>
                      </v-layout>
                    </v-flex>

                    <v-flex xs12>
                      <v-layout justify-center>
                        <div
                          style="background-color: #ffffffee"
                          class="px-2 py-1 elevation-1 text-xs-center"
                        >
                          <div v-text="`${item.description} (${item.meta.sqm} SQM)`"/>
                          <div v-text="item.location"/>
                        </div>
                      </v-layout>
                    </v-flex>

                  </v-layout>

                </v-layout>
              </v-img>

            </v-layout>
          </div>
        </carousel>

        <!-- button below -->
        <!-- <v-layout class="mt-2">
          <v-spacer/>
          <v-btn
            flat
            large
            class="font-italic"
            color="grey darken-1"
          >
            View All
            <v-icon>chevron_right</v-icon>
          </v-btn>
        </v-layout> -->
      </v-container>
    </section-layout>
  </div>
</template>

<script>
import { colors } from '@/utils'
import { featuredProjects } from '@/data'
import { galleryPath } from '@/utils/path'
import BgPoly from '@/components/utils/BgPoly'
import Carousel from '@/components/utils/Carousel'
import SectionLayout from '@/layouts/SectionLayout'

export default {
  name: 'featured-projects',
  components: {
    BgPoly,
    Carousel,
    SectionLayout
  },

  computed: {
    color: () => `${colors[2]}cc`,
    galleryPath: () => galleryPath,
    items: () => featuredProjects
  }
}
</script>
