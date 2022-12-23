<template>
  <v-layout column justify-center align-center class="mt-4 pt-2">
    <v-flex xs12 sm6 md4 lg4 xl4>
      <v-card flat color="transparent" max-width="500">
        <v-card-title primary-title>
          <div>
            <div class="container1">

                <img class="image" src="./../assets/meditate.webp" alt="me" width="85%"/>
              <div class="text">
                <!-- <v-icon v-text="$vuetify.icons.values"></v-icon> -->
                <div>
                  <h2>PhD Student at U Vienna</h2>
                  <br>
                  <br>
                  <h3><span
                      class="green--text font-weight-bold"
                    >Computer Simulations </span>  of 
                    Soft Matter Physics</h3>
                  <br>
                  <!-- <h2>👨‍💻🧬👀</h2> -->

                </div>
              </div>
            </div>
          </div>
        </v-card-title>

        <v-card-actions class="hidden-sm-and-down justify-center">
          <v-btn
            v-for="icon in icons"
            :key="icon.icon"
            fab
            dark
            outline
            color="green"
            :href="icon.href"
            target="_blank"
          >
            <v-icon dark>{{icon.icon}}</v-icon>
          </v-btn>
        </v-card-actions>

        <v-card-actions class="hidden-md-and-up justify-center">
          <v-btn
            v-for="icon in icons"
            :key="icon.icon"
            small
            fab
            dark
            outline
            color="green"
            :href="icon.href"
            target="_blank"
          >
            <v-icon dark>{{icon.icon}}</v-icon>
          </v-btn>
        </v-card-actions>
      </v-card>
      <v-card
        class="mx-auto"
        max-width="500"
        tile
      >
        <v-list-item>
          <v-list-item-content>
            <v-list-item-title>Single-line item</v-list-item-title>
          </v-list-item-content>
        </v-list-item>

        <v-list-item two-line>
          <v-list-item-content>
            <v-list-item-title>Two-line item</v-list-item-title>
            <v-list-item-subtitle>Secondary text</v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>

        <v-list-item three-line>
          <v-list-item-content>
            <v-list-item-title>Three-line item</v-list-item-title>
            <v-list-item-subtitle>
              Secondary line text Lorem ipsum dolor sit amet,
            </v-list-item-subtitle>
            <v-list-item-subtitle>
              consectetur adipiscing elit.
            </v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>
      </v-card>

    </v-flex>
  </v-layout>
</template>

<script>
import { VueTyper } from "vue-typer";
import VueCompareImage from "vue-compare-image";

export default {
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
    "vue-typer": VueTyper,  
    VueCompareImage
  },
  data() {
    return {
      icons: [
        { href: "https://github.com/vanadiuz", icon: "fab fa-github" },
        {
          href: "https://www.researchgate.net/profile/Ivan-Novikau",
          icon: "fab fa-brands fa-researchgate"
        },
        { href: "https://scholar.google.com/citations?user=n0wB50gAAAAJ&hl=en", icon: "$vuetify.icons.values.custom" },
      ],
      sliderLine: 0,
      hSize: 0,
      sliderPosition: 0.5
    };
  }
};
</script>
<style>
@keyframes rocking {
  0%,
  100% {
    transform: rotateZ(-10deg);
  }

  50% {
    transform: rotateZ(10deg);
  }
}

.vue-typer {
  font-family: Arial, "Helvetica Neue", Helvetica, sans-serif;
}
.vue-typer .custom.char.typed {
  color: green;
}
.vue-typer .custom.char.selected {
  color: #e91e63;
}

.vue-typer .custom.caret {
  animation: rocking 1s ease-in-out 0s infinite;
}
.vue-typer .custom.caret.typing {
  background-color: green;
}
.vue-typer .custom.caret.selecting {
  display: inline-block;
  background-color: #e91e63;
}


.container1 {
  display: grid; 
  grid-auto-columns: 1fr; 
  grid-auto-rows: 1fr; 
  grid-template-columns: 1fr 1fr; 
  grid-template-rows: 1fr; 
  gap: 0px 0px; 
  grid-template-areas: 
    "image text"; 
  justify-items: stretch; 
}
.image { 
  justify-self: center; 
  grid-area: image; 
}
.text { 
  grid-area: text; 
  /* squize bottom space */
  margin-bottom: 0px;
}

/* new layout for small screen grid  */
@media only screen and (max-width: 600px) {
  .container1 {
    display: grid; 
    grid-auto-columns: 1fr; 
    grid-auto-rows: 1fr; 
    grid-template-columns: 1fr; 
    grid-template-rows: 1fr 0.75fr; 
    gap: 50px 0px; 
    grid-template-areas: 
      "image" 
      "text"; 
    justify-items: stretch; 
    /* justify-items: center;  */
    /* justify-content: center;  */
  }
  .image { 
    /* justify-self: center;  */
    /* align-self: center;  */
    /* width: 100%; */
    grid-area: image; 
  }
  .text { grid-area: text; margin-bottom: 0px;}
}

/* rotate .image by 10 degree */
.image {
  transform: rotate(-7deg);
  /* width: 100%; */
}



</style>

