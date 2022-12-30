<template>

    <v-app id="app1">
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
<style>
@import "https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.7.0/animate.min.css";

.v-theme--dark:not(i){
  background-color: transparent !important;
}
</style>
