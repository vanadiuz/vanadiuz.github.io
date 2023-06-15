// eslint-disable-next-line
<template>
  <v-container grid-list-xl>
    <v-layout row justify-center align-center wrap class="mt-4 pt-2">
      <v-flex xs12 sm8 md6 lg4 xl3>
        <h2 class="pb-4 mt-2 mailing">
          <span>Office/Mailing</span>
          <span class="green--text">Address:</span>
        </h2>
        <div class="py-4 subheading font-weight-bold">
          <v-icon large color="green" left>fas fa-map-marker-alt</v-icon>
          <div class="algn-ctnr">
            <span>Computational and Soft Matter Physics,&nbsp;</span>
            <span class="green--text">University of Vienna</span>
            <h5 class="font-weight-medium"><span >Kolingasse 14-16, Room 03.25</span></h5>
            <h5 class="font-weight-medium"><span >1090 Vianna, Austria</span></h5>
          </div>
        </div>
        <div class="py-4 subheading font-weight-bold" style="justify-content: center;">
          <v-icon large color="green" left>fas fa-envelope</v-icon>
          <div class="algn-ctnr">
            <span>ivan.novikau[at]</span>
            <span class="green--text">univie.ac.at</span>
          </div>
        </div>
        <!-- <div class="py-4 subheading font-weight">
          <span><em>Sorry if you didn't get any response, most likely your inquiry wasn't relevant enough.</em>😔</span>
        </div> -->
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import { validationMixin } from "vuelidate";
import {
  required,
  maxLength,
  email,
  minLength
} from "vuelidate/lib/validators";
export default {
  metaInfo: {
    title: "Contact",
    titleTemplate: "%s ← Ivan Novikau",
    meta: [
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      {
        name: "description",
        content:
          "Ivan Novikau Contact Info"
      },
      { charset: "utf-8" },
      { property: "og:title", content: "Ivan Novikau" },
      { property: "og:site_name", content: "Ivan Novikau" },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://vanadiuz.github.io" },
      {
        property: "og:image",
        content: "./../assets/mebw.webp"
      },
      {
        property: "og:description",
        content:
          "Ivan Novikau Contact Info"
      }
    ]
  },
  
};
</script>

<style scoped>

.algn-ctnr{
  text-align: center;
}

.subheading{
  display: flex;
  justify-content: flex-start; /* Align horizontal */
  align-items: center; 
}

.mailing{
  text-align: center;
}
</style>
