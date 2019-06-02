<template>
  <v-container
    class="pa-0 y-full"
  >
    <v-layout
      row
      align-center
      class="y-full"
    >
      <v-btn
        v-bind="btnProps"
        @click="value++"
      >
        <v-icon :size="mControlSize">chevron_left</v-icon>
      </v-btn>

      <!-- window start -->

      <v-window
        class="x-full -b"
        v-model="value"
        :style="{ height }"
      >
        <v-window-item
          :key="i"
          :value="i"
          :style="{ height }"
          v-bind="item.props"
          v-for="(item, i) in items"
        >
          <slot v-bind="{ item, index: i }"/>
        </v-window-item>
      </v-window>

      <!-- window end -->

      <v-btn
        v-bind="btnProps"
        @click="value++"
      >
        <v-icon :size="mControlSize">chevron_right</v-icon>
      </v-btn>

    </v-layout>
  </v-container>
</template>

<script>
export default {
  name: 'carousel',
  props: {
    items: {
      type: Array,
      required: false,
      default: () => []
    },
    height: {
      type: String,
      default: '500px',
      required: false
    },
    controlSize: {
      type: Number,
      default: 64,
      required: false
    }
  },

  data: () => ({
    value: 0
  }),

  computed: {
    small() {
      return this.$vuetify.breakpoint.smAndDown
    },

    mControlSize() {
      return this.small ? 32 : this.controlSize
    },

    btnProps() {
      return {
        flat: true,
        icon: true,
        color: 'primary',
        class: `wh-${this.mControlSize}`
      }
    }
  }
}
</script>
