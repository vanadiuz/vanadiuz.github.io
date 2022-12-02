<template>
  <v-container grid-list-xl>
    <v-layout row justify-center align-center wrap class="mt-4 pt-2">
      <v-dialog
        v-model="project.dialog"
        lazy
        max-width="400"
        v-for="project in projects"
        :key="project.title"
      >
        <template v-slot:activator="{ on }">
          <v-flex xs12 sm6 md4 lg4 xl4 v-on="on">
            <v-card hover flat elevation="5" shaped color="black">
              <v-img
                :src="project.poster"
                :alt="project.title"
                height="300"
                lazy-src="https://cdn.dribbble.com/users/503653/screenshots/3143656/fluid-loader.gif"
              ></v-img>
              <v-card-title primary-title class="justify-center">
                <h3 class="subtitle-1">
                  {{project.title}}
                </h3>
              </v-card-title>
            </v-card>
          </v-flex>
        </template>
        <v-card v-if="project.dialog">
          <v-img :src="project.poster"></v-img>
          <v-card-text>
            <h3 class="font-weight-medium">
              <span>{{project.title}}</span>
            </h3>
            <br>
            <h5 class="body-1">
              <span>{{project.subtitle}}</span>
            </h5>
            <h5 class="body-1">
              <a :href="project.journal_link" target="_blank">
                <span>{{project.journal}}</span>
              </a>
            </h5>
            <!-- <v-chip 
              color="green" 
              text-color="white"
              v-for="th in project.tech"
            >
              {{th}}
            </v-chip> -->
          </v-card-text>
          <v-card-actions>
            <v-btn flat large dark color="green" :href="project.arxiv" target="_blank">
              <v-icon left>{{icons.values.arxiv}}</v-icon>arXiv
            </v-btn>
            <v-btn large flat dark color="green" :href="project.youtube" target="_blank">
              <v-icon left>fab fa-youtube</v-icon>YouTube
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  metaInfo: {
    title: "Web Portfolio",
    titleTemplate: "%s ← Eldin's Space",
    meta: [
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      {
        name: "description",
        content:
          "Eldin Zaimovic's Web Portfolio Vue Vue.js Nuxt Nuxt.js HTML CSS Vuetify Axios GraphQL JavaScript Web Developer Front-End Frontend Designer App Responsive"
      },
      { charset: "utf-8" },
      { property: "og:title", content: "Eldin' Space" },
      { property: "og:site_name", content: "Eldin' Space" },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://eldin.space" },
      {
        property: "og:image",
        content: "https://i.imgur.com/Dcz2PGx.jpg"
      },
      {
        property: "og:description",
        content:
          "Eldin Zaimovic's Web Portfolio Vue Vue.js Nuxt Nuxt.js HTML CSS Vuetify Axios GraphQL JavaScript Web Developer Front-End Frontend Designer App Responsive"
      }
    ]
  },
  data() {
    return {
      dialog: false,
      icons: {
        values: {
          custom: "$vuetify.icons.values.custom",
          arxiv: "$vuetify.icons.values.arxiv",
        }
      },
      projects: [
         {
          dialog: false,
          title: "The influence of an applied magnetic field on the self-assembly of magnetic nanogels",
          subtitle: "I.S. Novikau, P.A. Sánchez, S.S. Kantorovich",
          journal: "Journal of Molecular Liquids 307, 112902, 2020",
          journal_link: "https://doi.org/10.1016/j.molliq.2020.112902",
          arxiv: "https://arxiv.org/pdf/2004.00725.pdf",
          youtube: "https://www.youtube.com/watch?v=r55vNMKm__k&list=PLWKzBeQmEdYTqsRtwxRuoHiP84gos4dMI",
          tech: {
            tech1: "Gatsby",
            tech2: "JavaScript",
            tech3: "SCSS",
            tech4: "Markdown",
            tech5: "Markdown"
          },
          poster: "https://rve4pg.am.files.1drv.com/y4myglmiKcrIdCQdti6WUfcsQjsLeOMj9-HrglI339EWNzyqOFZUA_-LxZy-6bwdDbvhUUMhqgOtkFXkpF19xa8FGnaiTaAHdt5gHj7NlDrm5TNwhEZLXQv1KSzTevAVhmGrF1Sre1TV7tvGwGuY7uhxCElXPS5o2wtA17ZHTFMb8phXweSDTHnhNO-R14h2mHbmLroCE5jDFHYcFON-kQi6Q/gels_in_field_slow_AdobeExpress%281%29.gif"
        },
        {
          dialog: false,
          title: "The influence of an applied magnetic field on the self-assembly of magnetic nanogels",
          subtitle: "I.S. Novikau, P.A. Sánchez, S.S. Kantorovich",
          journal: "Journal of Molecular Liquids 307, 112902, 2020",
          journal_link: "https://doi.org/10.1016/j.molliq.2020.112902",
          arxiv: "https://arxiv.org/pdf/2004.00725.pdf",
          youtube: "https://www.youtube.com/watch?v=r55vNMKm__k&list=PLWKzBeQmEdYTqsRtwxRuoHiP84gos4dMI",
          tech: {
            tech1: "Gatsby",
            tech2: "JavaScript",
            tech3: "SCSS",
            tech4: "Markdown",
            tech5: "Markdown"
          },
          poster: "https://rve4pg.am.files.1drv.com/y4myglmiKcrIdCQdti6WUfcsQjsLeOMj9-HrglI339EWNzyqOFZUA_-LxZy-6bwdDbvhUUMhqgOtkFXkpF19xa8FGnaiTaAHdt5gHj7NlDrm5TNwhEZLXQv1KSzTevAVhmGrF1Sre1TV7tvGwGuY7uhxCElXPS5o2wtA17ZHTFMb8phXweSDTHnhNO-R14h2mHbmLroCE5jDFHYcFON-kQi6Q/gels_in_field_slow_AdobeExpress%281%29.gif"
        },
        {
          dialog: false,
          title: "The influence of an applied magnetic field on the self-assembly of magnetic nanogels",
          subtitle: "I.S. Novikau, P.A. Sánchez, S.S. Kantorovich",
          journal: "Journal of Molecular Liquids 307, 112902, 2020",
          journal_link: "https://doi.org/10.1016/j.molliq.2020.112902",
          arxiv: "https://arxiv.org/pdf/2004.00725.pdf",
          youtube: "https://www.youtube.com/watch?v=r55vNMKm__k&list=PLWKzBeQmEdYTqsRtwxRuoHiP84gos4dMI",
          tech: {
            tech1: "Gatsby",
            tech2: "JavaScript",
            tech3: "SCSS",
            tech4: "Markdown",
            tech5: "Markdown"
          },
          poster: "https://rve4pg.am.files.1drv.com/y4myglmiKcrIdCQdti6WUfcsQjsLeOMj9-HrglI339EWNzyqOFZUA_-LxZy-6bwdDbvhUUMhqgOtkFXkpF19xa8FGnaiTaAHdt5gHj7NlDrm5TNwhEZLXQv1KSzTevAVhmGrF1Sre1TV7tvGwGuY7uhxCElXPS5o2wtA17ZHTFMb8phXweSDTHnhNO-R14h2mHbmLroCE5jDFHYcFON-kQi6Q/gels_in_field_slow_AdobeExpress%281%29.gif"
        },
      ]
    };
  }
};
</script>

<style  scoped>
</style>