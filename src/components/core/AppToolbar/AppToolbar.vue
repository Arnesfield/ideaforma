<template>
  <v-toolbar
    app
    flat
    class="white"
    style="border-bottom: 1px solid #21212133 !important"
  >
    <v-btn
      icon
      :to="to || '/'"
    >
      <v-icon>arrow_back</v-icon>
    </v-btn>

    <v-toolbar-title>ideaforma</v-toolbar-title>
  </v-toolbar>
</template>

<script>
export default {
  name: 'app-toolbar',
  props: {
    to: {
      type: String,
      default: null,
      required: false
    }
  }
}
</script>
