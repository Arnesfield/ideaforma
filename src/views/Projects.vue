<template>
  <div v-if="project">
    <div class="white">
      <app-toolbar :to="toPath"/>

      <section-layout
        class="pb-4"
        :title="dir"
        title-class="text-xs-center"
        :hr-line-props="{ right: true, width: '65vw' }"
      >

        <!-- <v-layout
          slot="subtitle"
          justify-center
        >
          <div
            v-animate="{ above: true }"
            class="mb-3 text-xs-center speed-2 a-from-bottom"
          >
            Projects
          </div>
        </v-layout> -->

        <v-container
          grid-list-lg
          class="speed-3 a-from-bottom"
          v-animate.60="{ above: true }"
        >
          <v-layout
            row
            wrap
            justify-center
            class="text-md-center text-sm-center text-xs-center"
          >
            <v-flex
              xs12
              sm6
              md6
              :key="i"
              class="white--text"
              v-for="(col, i) in projectSizes"
            >
              <v-card
                flat
                outline
                :key="`${i}-${j}`"
                v-for="(p, j) in col"
                class="pt-4"
              >
                <v-img
                  :src="`${galleryPath}${dir}/${+p + getTotalBefore(i)}.png`"
                />
              </v-card>
            </v-flex>
          </v-layout>
        </v-container>
      </section-layout>

      <v-layout
        class="pb-5"
        justify-center
      >
        <v-btn
          large
          outline
          :to="toPath"
          class="title"
          style="height: 56px"
        >
          <v-icon class="mr-1">arrow_left</v-icon>
          <span>Back to Projects</span>
        </v-btn>
      </v-layout>
    </div>

    <app-footer/>
  </div>
</template>

<script>
import { featuredProjects } from '@/data'
import { galleryPath } from '@/utils/path'
import AppFooter from '@/components/core/AppFooter'
import SectionLayout from '@/layouts/SectionLayout'
import AppToolbar from '@/components/core/AppToolbar'

export default {
  name: 'projects',
  components: {
    AppFooter,
    AppToolbar,
    SectionLayout
  },

  props: {
    dir: {
      type: String,
      required: true
    }
  },

  computed: {
    toPath: () => '/?to=projects',
    galleryPath: () => galleryPath,
    small() {
      return this.$vuetify.breakpoint.xsOnly
    },
    project() {
      return featuredProjects.find(e => this.dir === e.title)
    },

    projectSizes() {
      const total = this.project.noOfPics
      const n1 = Math.ceil(total / 2)
      const n2 = total - n1

      return [n1, n2]
    }
  },

  methods: {
    getTotalBefore(i) {
      return this.projectSizes.slice(0, i).reduce((total, size) => size + total, 0)
      // (i - 1 >= 0 ? projectSizes[i - 1] : 0)
    }
  }
}
</script>
