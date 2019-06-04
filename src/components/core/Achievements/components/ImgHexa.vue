<template>
  <v-img v-bind="{ src }">
    <v-container
      fill-height
      class="pa-0"
    >
      <v-layout
        column
        align-center
        justify-center
        class="mx-auto"
      >
        <h1
          v-text="title"
          class="display-3 font-weight-bold"
        />
        <p
          v-text="text"
          class="body-1 text-uppercase"
        />
      
      </v-layout>
    </v-container>
  </v-img>
</template>

<script>
export default {
  name: 'img-hexa',
  props: {
    src: {
      type: String,
      required: true
    },
    title: {
      type: String,
      required: true
    },
    text: {
      type: String,
      required: true
    }
  }
}
</script>
