<template>
  <div>

    <v-container
      class="pa-0 ma-0"
      fluid
    >
      <v-layout
        row
        wrap
      >
        <v-flex
          xs12
          md12
          lg12
          class="text-md-center text-sm-center text-xs-center pt-4"
        >
          <div class="display-1 pb-1 primary--text mt-5">Our Core</div>
        </v-flex>
      
        <v-flex
          xs12
          md8
          lg8
        >
          <hr style="border-top: 2px solid Black"/>
        </v-flex>
      </v-layout>
    </v-container>

    <v-container grid-list-lg>
      <v-layout
        row
        wrap
        class=" text-md-center text-sm-center text-xs-center"
      >
        <v-flex
          xs12
          md4
          class="pt-4 white--text"
          :key="i"
          v-for="(user, i) in users"
          :class="{ 'mt-5': i == 0 || i == users.length - 1 }"
        >

          <!-- FIXME: separate this into component -->
          <user-info
            :name="user.name"
            :description="user.description"
            :src="user.src"
          />
        </v-flex>
      </v-layout>

      <v-layout>
        <v-spacer/>

        <div
          xs12
          md4
          class="pt-4"
        >
          <v-btn
            flat
            class="font-italic"
          >
            <span class="mr-1">Meet The Team</span>
            <v-icon>chevron_right</v-icon>
          </v-btn>
        </div>
      </v-layout>

    </v-container>
  </div>
</template>

<script>
import UserInfo from './UserInfo'

export default {
  name: 'core',
  components: {
    UserInfo
  },

  data: () => ({
    users: [
      {
        name: 'Nina Gomez-Camacho',
        description: `Nina's laser eye for details and passion for excellence becomes the standard for all project 
        management tasks within the company. Once her goals are set, achieving them is as sure as the sun rising
        in the east.`,
        src: 'Nina.png'
      },
      {
        name: 'Dr. Malen Gomez-Garcia',
        description: `With over 15 years of experience in the design field, Malen's style and creative eye
        has proven itself to surpass time and trends. Her ability to understand and interpret your ideas into
        tangible output will leave you in awe wanting for more.`,
        src: 'Malen.png'
      },
      {
        name: 'Rico Gomez',
        description: `Eager to please, Rico exhausts all possible solutions to be able to offer our clients the 
        best options. This enables him to see new business opportunities and services we can possibly offer to others. `,
        src: 'Rico.png'
      }
    ]
  })
}
</script>

