<template>
  <div >
    <!-- <v-navigation-drawer
        v-model="drawer"
        location="top"
        temporary
      >
        <v-list
          :items="items"
        ></v-list>
      </v-navigation-drawer> -->
    <v-navigation-drawer v-model="drawer" location="left"  temporary theme="dark" app width="150" height="340">
      <v-list >
        <v-list-item active-class="green--text" to="/">
          <v-list-tile-content>
            <v-list-tile-title>HOME</v-list-tile-title>
          </v-list-tile-content>
        </v-list-item>
        <v-list-item active-class="green--text" to="/resume">
          <v-list-tile-content>
            <v-list-tile-title>CV</v-list-tile-title>
          </v-list-tile-content>
        </v-list-item>
        <v-list-item active-class="green--text" to="/research">
          <v-list-tile-content>
            <v-list-tile-title>Research</v-list-tile-title>
          </v-list-tile-content>
        </v-list-item>
        <v-list-item active-class="green--text" href="https://ufind.univie.ac.at/en/person.html?id=105426&teaching=true">
          <v-list-tile-content>
            <v-list-tile-title>Teaching</v-list-tile-title>
          </v-list-tile-content>
        </v-list-item>
        <v-list-item active-class="green--text" to="/contact">
          <v-list-tile-content>
            <v-list-tile-title>Contact</v-list-tile-title>
          </v-list-tile-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-toolbar flat  dense color="transparent" scroll-off-screen >
      <v-app-bar-nav-icon variant="text" class="hidden-md-and-up" @click.stop="drawer = !drawer"><v-icon icon="fa fa-light fa-bars"></v-icon></v-app-bar-nav-icon>
      <v-toolbar-title class="headline">
        <span class="font-weight-light">Ivan</span> 
        <span class="green--text">Novikau</span>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <!-- <v-btn @click="changeTheme" depressed small icon class="hidden-md-and-up"> -->
        <!-- <v-icon v-if="goDark==true">fas fa-sun</v-icon> -->
        <!-- <v-icon v-else>fas fa-moon</v-icon> -->
      <!-- </v-btn> -->
      <v-toolbar-items class="hidden-sm-and-down">
        <v-btn flat to="/" active-class="green--text headline">Home</v-btn>
        <v-btn flat to="/resume" active-class="green--text headline">CV</v-btn>
        <v-btn flat to="/research" active-class="green--text headline">Research</v-btn>
        <v-btn flat href="https://ufind.univie.ac.at/en/person.html?id=105426&teaching=true" active-class="green--text headline">Teaching</v-btn>
        <v-btn flat to="/contact" active-class="green--text headline">Contact</v-btn>
        <!-- <v-btn @click="changeTheme" depressed small icon> -->
          <!-- <v-icon v-if="goDark==true">fas fa-sun</v-icon> -->
          <!-- <v-icon v-else>fas fa-moon</v-icon> -->
        <!-- </v-btn> -->
      </v-toolbar-items>
    </v-toolbar>
  </div>
</template>

<script>
export default {
  props: {
    goDark: {
      type: Boolean
    }
  },
  data() {
    return {
      drawer: null,
      group: null,
      items: [
        {
          title: 'CV',
          value: '/resume',
        },
        {
          title: 'Bar',
          value: 'bar',
        },
        {
          title: 'Fizz',
          value: 'fizz',
        },
        {
          title: 'Buzz',
          value: 'buzz',
        },
      ],
    };
  },
  methods: {
    changeTheme() {
      this.$emit("changeTheme", this.goDark);
    }
  }
};
</script>

<style >

.v-navigation-drawer__content {
	background: black !important;
}
</style>