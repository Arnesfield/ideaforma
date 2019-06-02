<template>
  <v-container
    grid-list-lg
    fluid
    style="background-color:#292927 "
  >
    <!-- #292927 -->
    <v-card
      flat
      class="pa-3"
      style="background-color:#292927"
    >
      <!-- Create Layout -->
      <v-layout
        row
        wrap
      >
        <!-- Social Media icons -->
        <v-flex
          xs12
          md4
          class="text-md-center text-sm-center text-xs-center pt-4"
        >
          <v-avatar
            color="primary"
            class="ma-2"
          >
            <v-btn
              class="mx-3"
              icon
            >
              <v-icon>fab fa-facebook-f</v-icon>
            </v-btn>
          </v-avatar>

          <v-avatar
            color="primary"
            class="ma-2"
          >
            <v-btn
              class="mx-3"
              icon
            >
              <v-icon>fab fa-instagram</v-icon>
            </v-btn>
          </v-avatar>

          <v-avatar
            color="primary"
            class="ma-2"
          >
            <v-btn
              class="mx-3"
              icon
            >
              <v-icon>fas fa-envelope</v-icon>
            </v-btn>
          </v-avatar>
        </v-flex>

        <!-- Contact Us -->
        <v-flex
          xs12
          md4
          class="pt-4 white--text"
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
          class="pt-4 white--text"
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
    </v-card>
  </v-container>
</template>


<script>
export default {
  name: 'app-footer'
}
</script>
