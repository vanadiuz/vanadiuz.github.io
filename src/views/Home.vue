<template>
  <v-layout column justify-center align-center class="mt-4 pt-2">
      <v-card flat color="transparent" max-width="500px">
        <v-card-title primary-title>
          <div>
            <div class="container1">

                <img class="image" src="./../assets/meditate.webp" alt="me" />
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
          <v-icon  >{{icon.icon}}</v-icon>
          <GoogleScolarIcon />
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
              Secondary line text Lorem ipsum dolor sit amet, 1
            </v-list-item-subtitle>
            <v-list-item-subtitle>
              consectetur adipiscing elit.
            </v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>
      </v-card>

  </v-layout>
</template>

<script>
import { getCurrentInstance } from 'vue'
import GoogleScolarIcon from '@/components/GoogleScolarIcon.vue'

export default {
  // inject: ['message'],
  // setup() {
  //         const _instance = getCurrentInstance();
  //         const vueInstance = _instance.appContext;
  //         // console.log(vueInstance.provides.Symbol("vuetify:defaults"));
  //         console.log(GoogleScolarIcon);
  //       },

  components: {
    GoogleScolarIcon
  },

  // created() {
  //   console.log(this.message) // injected value
  // },

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

  data() {
    return {
      icons: [
        { href: "https://github.com/vanadiuz", icon: "fab fa-github" },
        {
          href: "https://www.researchgate.net/profile/Ivan-Novikau",
          icon: "fab fa-brands fa-researchgate"
        },
        { href: "https://scholar.google.com/citations?user=n0wB50gAAAAJ&hl=en", icon: "chevron-right" },
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
    max-width: 100px;
    grid-area: image; 
  }
  .text { grid-area: text; margin-bottom: 0px;}
}

/* rotate .image by 10 degree */
.image {
  transform: rotate(-7deg);
  max-width: 100px;
  /* width: 100%; */
}

.chevron-right {
  display: inline-block;
  /* width: 1rem; */
  -webkit-mask: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 50 50" width="50px" height="50px"><path d="M 25 3 C 12.85 3 3 12.85 3 25 C 3 37.15 12.85 47 25 47 C 37.15 47 47 37.15 47 25 C 47 12.85 37.15 3 25 3 z M 21 11 L 38 11 L 36.980469 11.880859 C 36.980469 11.920859 37 11.96 37 12 L 37 17.279297 C 37.6 17.619297 38 18.26 38 19 L 38 25 C 38 26.1 37.1 27 36 27 C 34.9 27 34 26.1 34 25 L 34 19 C 34 18.26 34.4 17.619297 35 17.279297 L 35 13.570312 L 31.410156 16.650391 C 31.760156 17.350391 32 18.200234 32 19.240234 C 32 21.960234 30.480703 23.309766 28.970703 24.509766 C 28.500703 24.989766 27.949219 25.510312 27.949219 26.320312 C 27.949219 27.120313 28.500391 27.570625 28.900391 27.890625 L 30.189453 28.919922 C 31.779453 30.279922 33.220703 31.530547 33.220703 34.060547 C 33.220703 37.510547 29.930469 41 23.730469 41 C 18.500469 41 15.980469 38.47 15.980469 35.75 C 15.980469 34.43 16.629766 32.559531 18.759766 31.269531 C 20.989766 29.879531 24.020391 29.690078 25.650391 29.580078 C 25.140391 28.920078 24.560547 28.230078 24.560547 27.080078 C 24.560547 26.470078 24.749687 26.100391 24.929688 25.650391 C 24.529688 25.690391 24.129531 25.730469 23.769531 25.730469 C 19.969531 25.730469 17.799297 22.85 17.779297 20 L 11 20 L 21 11 z M 24.269531 14.240234 C 23.339531 14.240234 22.33 14.710938 21.75 15.460938 C 21.14 16.220938 20.949219 17.210156 20.949219 18.160156 C 20.949219 20.620156 22.370938 24.699219 25.460938 24.699219 C 26.370938 24.699219 27.339922 24.259922 27.919922 23.669922 C 28.739922 22.819922 28.820312 21.65 28.820312 21 C 28.820312 18.35 27.269531 14.240234 24.269531 14.240234 z M 26.039062 30.609375 C 25.719062 30.609375 23.769766 30.679219 22.259766 31.199219 C 21.459766 31.499219 19.160156 32.370469 19.160156 34.980469 C 19.160156 37.590469 21.64 39.460938 25.5 39.460938 C 28.97 39.460938 30.800781 37.760234 30.800781 35.490234 C 30.800781 33.620234 29.620859 32.630391 26.880859 30.650391 C 26.590859 30.610391 26.409063 30.609375 26.039062 30.609375 z"/></svg>') 0 0/contain;
  background: currentColor;
}

.chevron-right::before {
  content: "";
  display: block;
  padding-top: 100%;
}

</style>

