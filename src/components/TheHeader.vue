<template>
  <div>
    <v-navigation-drawer v-model="drawer" absolute temporary app width="150" height="340">
      <v-list class="pt-4">
        <v-list-tile active-class="green--text" to="/">
          <v-list-tile-content>
            <v-list-tile-title>HOME</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
        <v-list-tile active-class="green--text" to="/resume">
          <v-list-tile-content>
            <v-list-tile-title>CV</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
        <v-list-tile active-class="green--text" to="/science">
          <v-list-tile-content>
            <v-list-tile-title>Science</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
        <v-list-tile active-class="green--text" to="/teaching">
          <v-list-tile-content>
            <v-list-tile-title>Teaching</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
        <v-list-tile active-class="green--text" to="/contact">
          <v-list-tile-content>
            <v-list-tile-title>Contact</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>
    <v-toolbar flat dense color="transparent" scroll-off-screen>
      <v-toolbar-side-icon class="hidden-md-and-up" @click.stop="drawer = !drawer"></v-toolbar-side-icon>
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
        <v-btn flat to="/science" active-class="green--text headline">Science</v-btn>
        <v-btn flat to="/teaching" active-class="green--text headline">Teaching</v-btn>
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
      drawer: null
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
</style>