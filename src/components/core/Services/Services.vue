<template>
  <div class="white">
    <section-layout
      class="pb-5"
      title="Services"
      :hr-line-props="{ width: '57vw' }"
    >

      <div
        slot="outside"
        style="bottom: 0; right: 0"
        class="absolute speed-5 a-from-bottom lower"
        v-animate="{ above: true, offset: -200 }"
      >
        <v-img
          style="opacity: 0.5"
          :style="{ width: imgWidth }"
          :src="`${bgPath}bg-black-poly.png`"
        />
      </div>

      <v-container
        grid-list-lg
        fluid
        class="speed-3 a-from-bottom"
        v-animate.60="{ above: true }"
      >
        <v-layout
          justify-center
          row
          wrap
          fill-height
          class=" text-md-center text-sm-center text-xs-center"
        >
          <v-flex
            xs12
            sm4
            md3
            :key="i"
            v-for="(user, i) in service"
            class="pt-4 white--text"
          >
            <service-info v-bind="user"/>
          </v-flex>
        </v-layout>

      </v-container>
    </section-layout>
  </div>
</template>

<script>
import { service } from '@/data'
import { bgPath } from '@/utils/path'
import ServiceInfo from './components/ServiceInfo'
import SectionLayout from '@/layouts/SectionLayout'

export default {
  name: 'services',
  components: {
    ServiceInfo,
    SectionLayout
  },

  data: () => ({
    service
  }),

  computed: {
    bgPath: () => bgPath,

    imgWidth() {
      switch (this.$vuetify.breakpoint.name) {
        case 'xs': return '75vw'
        case 'sm':
        case 'md':
          return '50vw'
        default: return '30vw'
      }
    }
  }
}
</script>
