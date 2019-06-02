<template>
  <v-card
    color="transparent"
    class="elevation-0"
    v-bind="{ width }"
  >
    <v-card-title
      :class="titleClass"
      class="px-0 pb-0 headline primary--text"
    >
      <v-spacer v-if="mTitleRight"/>

      <div>
        <span
          v-text="number"
          class="mr-2 mono"
        />
        <strong v-html="title"/>
      </div>

      <v-spacer v-if="mTitleCenter"/>
    </v-card-title>

    <v-card-text
      class="px-2"
      :class="textClass"
    >
      <div
        v-html="text"
        class="text--secondary"
      />
    </v-card-text>
  </v-card>
</template>

<script>
export default {
  name: 'process-item',
  props: {
    number: {
      type: Number,
      required: true
    },
    title: {
      type: String,
      required: true
    },
    text: {
      type: String,
      required: true
    },
    width: {
      type: [Number, String],
      required: false,
      default: undefined
    },
    titlePos: {
      type: String,
      default: 'left',
      required: false,
      validator: prop => {
        return ['left', 'right', 'center'].includes(prop)
      }
    },
    titleClass: {
      type: [String, Object],
      default: null,
      required: false
    },
    textClass: {
      type: [String, Object],
      default: null,
      required: false
    }
  },

  computed: {
    mTitleCenter() {
      // center also if small screen
      return this.titlePos === 'center' || this.$vuetify.breakpoint.smAndDown
    },
    mTitleRight() {
      return this.titlePos === 'right' || this.mTitleCenter
    }
  }
}
</script>
