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
      justify-center
      v-animate="animate"
      color="transparent"
      class="pa-3 pb-4"
    >
      <!-- Social Media icons -->
      <!-- <v-flex
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
      </v-flex> -->

      <!-- Contact Us -->
      <v-flex
        xs12
        sm6
        md4
        v-animate="animate"
        class="pt-4 white--text speed-2 a-from-bottom higher"
      >
        <div class="headline pb-2 text-uppercase">Contact Us</div>
        <!-- <div
          col
          wrap
          class="body-2 grey--text mb-2"
        >
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Nullam consectetur auctor odio, nec tempor mi placerat at.
            Donec et mauris pretium, rutrum urna eu, sollicitudin velit.
            Praesent vitae nulla venenatis, interdum metus nec, placerat magna.
          </p>
        </div> -->

        <v-layout
          wrap
          class="px-2 body-2 pt-2 grey--text"
        >
          <div>
            <v-icon
              class="pr-2"
              color="white"
            >fas fa-home</v-icon>
          </div>
          <div>Unit 235 Cityflex Towers, SOHO Tower,<br/>7th Avenue corner Lane T,<br/>Bonifacio Global City, Taguig City</div>
        </v-layout>

        <v-layout
          wrap
          class="px-2 body-2 pt-2 grey--text"
        >
          <div>
            <v-icon
              class="pr-2"
              color="white"
            >far fa-envelope</v-icon>
          </div>
          <div>jobs@ideaforma.com.ph</div>
        </v-layout>

        <v-layout
          wrap
          class="px-2 body-2 pt-3 grey--text"
        >
          <div>
            <v-icon
              class=" pr-3 light"
              color="white"
            >fas fa-mobile-alt</v-icon>
          </div>
          <div>79466011 / 0917 170 6563</div>
        </v-layout>
      </v-flex>

      <!-- spacer -->
      <v-flex hidden-xs-only sm1 md1/>

      <!-- Careers -->
      <v-flex
        xs12
        sm6
        md4
        v-animate="animate"
        class="pt-4 white--text speed-3 a-from-bottom higher"
      >
        <div class="headline pb-2 text-uppercase">Careers</div>
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
            <li>Accounting Staff</li>
          </ul>
        </div>
        <div
          col
          wrap
          class="body-2 pt-3 grey--text"
        >
          <p>
            Send your resume and cover letter to<br/>
            jobs@ideaforma.com.ph
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
