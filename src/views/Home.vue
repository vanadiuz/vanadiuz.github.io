<template>
  <v-layout column justify-center align-center class="mt-4 pt-2">
    <!-- <VueCompareImage
      class="hidden-md-and-down"
      hover
      :style="{ minWidth: '1300px' }"
      :sliderLineWidth="sliderLine"
      :handleSize="hSize"
      :leftImage="leftImage"
      :rightImage="rightImage"
      :sliderPositionPercentage="sliderPosition"
    />
    <VueCompareImage
      class="hidden-lg-and-up"
      hover
      :style="{ maxWidth: '400px' }"
      :sliderLineWidth="sliderLine"
      :handleSize="hSize"
      :leftImage="leftImage2"
      :rightImage="rightImage2"
      :sliderPositionPercentage="sliderPosition"
    />

    <br> -->

    <!-- <vue-typer class="headline" :repeat="0" text="Eldin Zaimovic"></vue-typer>
    <vue-typer
      :text="text1"
      :repeat="Infinity"
      :shuffle="false"
      initial-action="erasing"
      :pre-type-delay="70"
      :type-delay="70"
      :pre-erase-delay="1980"
      :erase-delay="150"
      erase-style="select-back"
      :erase-on-complete="false"
      caret-animation="smooth"
    ></vue-typer> -->
    <!-- <br> -->
    <v-flex xs12 sm6 md4 lg4 xl4>
      <v-card flat color="transparent" max-width="500">
        <v-card-title primary-title>
          <div>
            <!-- <v-icon>$vuetify.icons.values.custom</v-icon> -->
            <!-- <v-icon aria-hidden="false">
              fab fa-github
            </v-icon> -->

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
                  <h2>👨‍💻🧬👀</h2>

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
    </v-flex>
  </v-layout>
</template>

<script>
import { VueTyper } from "vue-typer";
import VueCompareImage from "vue-compare-image";

export default {
  metaInfo: {
    title: "Home",
    titleTemplate: "%s ← Eldin's Space",
    meta: [
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { name: "description", content: "Eldin Zaimovic's Portfolio" },
      { charset: "utf-8" },
      { property: "og:title", content: "Eldin' Space" },
      { property: "og:site_name", content: "Eldin' Space" },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://eldin.space" },
      {
        property: "og:image",
        content: "https://i.imgur.com/Dcz2PGx.jpg"
      },
      { property: "og:description", content: "Eldin Zaimovic's Portfolio" }
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
      text1: ["Front-End Developer", "Web Developer", "Web Designer"],
      leftImage: "https://i.imgur.com/bU50uS9.jpg",
      rightImage: "https://i.imgur.com/z3ZoEEw.jpg",
      leftImage2: "https://i.imgur.com/SXBitjh.jpg",
      rightImage2: "https://i.imgur.com/Dcz2PGx.jpg",
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

