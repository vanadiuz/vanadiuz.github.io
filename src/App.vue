<template>

    <v-app flat id="app1">
        <v-container  align-center flat color="transparent">
          <TheHeader/>

          <transition
            name="router-animation"
            mode="out-in"
            enter-active-class="animated fadeIn fast"
            leave-active-class="animated fadeOut faster"
          >
            <router-view ></router-view>
          </transition>
          
        </v-container>
      <TheFooter/>
    </v-app>
</template>

<script>
import TheHeader from "./components/TheHeader";
import TheFooter from "./components/TheFooter";

export default {
  name: "App",
  metaInfo: {
    title: "Home",
    titleTemplate: "%s ← Ivan Novikau",
    meta: [
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { name: "description", content: "Ivan Novikau Homepage" },
      { charset: "utf-8" },
      { property: "og:title", content: "Ivan Novikau" },
      { property: "og:site_name", content: "Ivan Novikau" },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://vanadiuz.github.io" },
      {
        property: "og:image",
        content: "./../assets/mebw.webp"
      },
      { property: "og:description", content: "Ivan Novikau Homepage" }
    ]
  },
  components: {
    TheHeader,
    TheFooter
  },
};
</script>
<style lang="scss">
@import "https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.7.0/animate.min.css";

$body-font-family: 'IBM Plex Sans';
$title-font: 'IBM Plex Sans';

.v-theme--dark:not(i){
  background-color: transparent !important;
}

.v-application {
  font-family: $body-font-family, sans-serif !important;
  .title { // To pin point specific classes of some components
      font-family: $title-font, sans-serif !important;
  }
}


</style>
