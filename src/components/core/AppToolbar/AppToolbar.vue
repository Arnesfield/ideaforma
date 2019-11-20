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

    <v-toolbar-title>
      <div
        @click="$router.push(to || '/')"
        style="width: 140px; cursor: pointer"
      >
        <app-logo no-animate/>
      </div>
    </v-toolbar-title>
  </v-toolbar>
</template>

<script>
import AppLogo from '@/components/core/AppLogo'

export default {
  name: 'app-toolbar',
  components: {
    AppLogo
  },

  props: {
    to: {
      type: String,
      default: null,
      required: false
    }
  }
}
</script>
