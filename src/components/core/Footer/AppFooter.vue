<template>
  <v-container
    fluid
    grid-list-lg
    class="bg-footer"
  >
    <!-- Create Layout -->
    <v-layout
      row
      wrap
      v-animate="animate"
      color="transparent"
      class="pa-3 pb-4"
    >
      <!-- Social Media icons -->
      <v-flex
        xs12
        md4
        class="text-md-center text-sm-center text-xs-center pt-4"
      >
        <v-btn
          icon
          large
          :key="i"
          :to="social.to"
          :title="social.title"
          v-animate="animate"
          v-for="(social, i) in socials"
          color="primary"
          class="a-from-bottom higher"
          :class="{
            [`speed-${i + 2}`]: true
          }"
        >
          <v-icon
            medium
            class="color-footer"
          >{{ social.icon }}</v-icon>
        </v-btn>
      </v-flex>

      <!-- Contact Us -->
      <v-flex
        xs12
        sm4
        md4
        v-animate="animate"
        class="pt-4 white--text speed-2 a-from-bottom higher"
      >
        <div class="headline pb-2">Contact Us</div>
        <div
          col
          wrap
          class="body-2 grey--text"
        >
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Nullam consectetur auctor odio, nec tempor mi placerat at.
            Donec et mauris pretium, rutrum urna eu, sollicitudin velit.
            Praesent vitae nulla venenatis, interdum metus nec, placerat magna.
          </p>
        </div>
        <div
          col
          wrap
          class="body-2 pt-2 grey--text"
        >
          <v-icon
            class="pr-2"
            color="white"
          >far fa-envelope</v-icon>
          info@ideaforma.com.ph
        </div>
        <div
          col
          wrap
          class="body-2 pt-3 grey--text"
        >
          <v-icon
            class=" pr-3 light"
            color="white"
          >fas fa-mobile-alt</v-icon>
          (+63) 123 45 67
        </div>
      </v-flex>

      <!-- Careers -->
      <v-flex
        xs12
        md4
        v-animate="animate"
        class="pt-4 white--text speed-3 a-from-bottom"
      >
        <div class="headline pb-2">Careers</div>
        <div>
          <ul
            row
            wrap
            class="body-2 grey--text"
            style="columns: 2"
          >
            <li>Interior Designer</li>
            <li>Marketing</li>
            <li>Project Manager</li>
            <li>Accounting Admin</li>
          </ul>
        </div>
        <div
          col
          wrap
          class="body-2 pt-3 grey--text"
        >
          <p>
            Send your resume and cover letter to<br/>
            info@ideaforma.com.ph
          </p>
        </div>
      </v-flex>
    </v-layout>
  </v-container>
</template>


<script>
import { socials } from '@/data'

export default {
  name: 'app-footer',
  data: () => ({
    socials
  }),

  computed: {
    animate() {
      return { above: true, offset: 0 }
    }
  }
}
</script>
