<template>
  <v-img
    v-bind="{ src }"
    style="width: 50%;"
  >
    <v-container fill-height>
      <v-layout
        column
        align-center
        justify-center
      >
        <h1
          v-text="title"
          class="display-3"
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
