<template>
  <v-container grid-list-xl>
    <v-layout row justify-center wrap class="mt-4 pt-2">
      <v-dialog
        v-model="project.dialog"
        lazy
        max-width="400"
        v-for="project in projects"
        :key="project.title"
      >
        <template v-slot:activator="{ on }">
          <v-flex xs12 sm6 md4 lg3 xl2 v-on="on">
            <v-card hover flat elevation="5" shaped color="black">
              <v-img
                :src="project.poster"
                :alt="project.title"
                
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
            <v-btn large flat dark color="green" :href="project.youtube" v-if="project.youtube" target="_blank">
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
    title: "Research",
    titleTemplate: "%s ← Ivan Novikau",
    meta: [
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      {
        name: "description",
        content:
          "my research papers"
      },
      { charset: "utf-8" },
      { property: "og:title", content: "Ivan Novikau" },
      { property: "og:site_name", content: "Ivan Novikau" },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://vanadiuz.github.io" },
      {
        property: "og:image"
      },
      {
        property: "og:description",
        content:
          "My research papers"
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
          title: "Behaviour of a magnetic nanogel in a shear flow",
          subtitle: "I.S. Novikau, E.V. Novak, E.S. Pyanzina, S.S. Kantorovich",
          journal: "Journal of Molecular Liquids 346, 118056, 2022",
          journal_link: "https://doi.org/10.1016/j.molliq.2021.118056",
          arxiv: "https://arxiv.org/pdf/2111.05376.pdf",
          youtube: "https://youtube.com/shorts/8vdF2-dSVBk?feature=share",
          poster: "https://oththg.am.files.1drv.com/y4mehVHUAgBJyCJsCwf0dac_8Qtl3kycNT8m4BgrxXzcS-14i512EzEH9AZBxapRiS0Mt6ieHTXng3JAgrFvUufDFamGNnPoQdzCFccrQ850tj0wqIGlM4LMM88U88hqy9D8gw4OR2SkMzZMZXP4xJq_CNY0Ov382obTmbA33lINXfDXOgtJemDaehfpD5lfrRAxY6BYu-ci7B9n7jxY3nU8A/gel_in_flow.gif"
        },
         {
          dialog: false,
          title: "The influence of an applied magnetic field on the self-assembly of magnetic nanogels",
          subtitle: "I.S. Novikau, P.A. Sánchez, S.S. Kantorovich",
          journal: "Journal of Molecular Liquids 307, 112902, 2020",
          journal_link: "https://doi.org/10.1016/j.molliq.2020.112902",
          arxiv: "https://arxiv.org/pdf/2004.00725.pdf",
          youtube: "https://www.youtube.com/watch?v=r55vNMKm__k&list=PLWKzBeQmEdYTqsRtwxRuoHiP84gos4dMI",
          poster: "https://rve4pg.am.files.1drv.com/y4myglmiKcrIdCQdti6WUfcsQjsLeOMj9-HrglI339EWNzyqOFZUA_-LxZy-6bwdDbvhUUMhqgOtkFXkpF19xa8FGnaiTaAHdt5gHj7NlDrm5TNwhEZLXQv1KSzTevAVhmGrF1Sre1TV7tvGwGuY7uhxCElXPS5o2wtA17ZHTFMb8phXweSDTHnhNO-R14h2mHbmLroCE5jDFHYcFON-kQi6Q/gels_in_field_slow_AdobeExpress%281%29.gif"
        },
        {
          dialog: false,
          title: "Suspensions of magnetic nanogels at zero field: Equilibrium structural properties",
          subtitle: "I.S. Novikau, E. S. Minina, P.A. Sánchez, S.S. Kantorovich",
          journal: "Journal of Magnetism and Magnetic Materials 498, 166152, 2020",
          journal_link: "https://doi.org/10.1016/j.jmmm.2019.166152",
          arxiv: "https://arxiv.org/pdf/1911.06031.pdf",
          poster: "https://am3pap002files.storage.live.com/y4msYGmObEXye5mt_MlsHQ1qsXC9MfFS6Bv8K1NanMfptNDgodn0H_H_KIC_cXElgi4B4v2cnCejncLQF7oj4fgne4VT5AzaWU_4Y2rRQNGpFgdxARvj-PRfDm60dXZylguB2qQTdd1B_-qxBu76ZDGacbJXpmsgn3RgGQPfnKYQvHe8p4BLOCf3U-afxAcvOMAYlrHOCahllViD4QBAKxPmg/1st_paper.png?psid=1&width=400&height=374"
        },
      ]
    };
  }
};
</script>

<style  scoped>

.v-card {
  background-color: transparent !important;
  backdrop-filter: grayscale(100%) blur(10px) brightness(0.5);
}
</style>