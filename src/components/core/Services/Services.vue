<template>
  <div class="white">
    <section-layout
      class="pb-5"
      title="Services"
      :hr-line-props="{ width: '57vw' }"
    >

      <bg-poly
        opacity="0.3"
        slot="outside"
        style="right: 0"
        img="bg-black-poly.png"
      />

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
import BgPoly from '@/components/utils/BgPoly'
import ServiceInfo from './components/ServiceInfo'
import SectionLayout from '@/layouts/SectionLayout'

export default {
  name: 'services',
  components: {
    BgPoly,
    ServiceInfo,
    SectionLayout
  },

  data: () => ({
    service
  })
}
</script>
