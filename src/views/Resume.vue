/* eslint-disable */
<template>
  <v-layout column justify-center align-center wrap class="mt-4 pt-2">
    <v-flex xs12 sm12 md5 lg6 xl6 class="mt-4 pt-4">
      <h2 class="mb-4 pl-4 pt-2">⏳line</h2>
      <v-card-text class="py-0">
        <v-timeline align-top dense>
          <v-timeline-item color="green" small>
            <v-layout pt-1>
              <v-flex xs4>
                <div class="caption font-weight-bold green--text">SEP 2013 -</div>
                <div class="caption font-weight-bold green--text">JUL 2017</div>
              </v-flex>
              <v-flex class="pl-2">
                <strong>BSc, Radiophysics</strong>
                <div class="caption mb-2">Belarusian State University</div>
                <div class="subtitle-2 mb-2">Thesis: <em>Monte Carlo simulations of current fluctuations in GaAs</em></div>
                <div class="subtitle-2 mb-2">Adviser: <em>V. M. Borzdov</em></div>
              </v-flex>
            </v-layout>
          </v-timeline-item>

          <v-timeline-item color="green" small>
            <v-layout pt-1>
              <v-flex xs3>
                <div class="caption font-weight-bold green--text">APR 2018 -</div>
                <div class="caption font-weight-bold green--text">SEP 2020</div>
              </v-flex>
              <v-flex class="pl-2">
                <strong>MSc, Computational Science</strong>
                <div class="caption mb-2">University of Vienna</div>
                <div class="subtitle-2 mb-2">Thesis: <em>Magnetic Nanogels</em></div>
                <div class="subtitle-2 mb-2">Adviser: <em>S. S. Kantorovich</em></div>
              </v-flex>
            </v-layout>
          </v-timeline-item>

          <v-timeline-item color="green" small>
            <v-layout pt-1>
              <v-flex xs3>
                <div class="caption font-weight-bold green--text">SEP 2020 -</div>
                <div class="caption font-weight-bold green--text">CURRENT</div>
              </v-flex>
              <v-flex class="pl-2">
                <strong>PhD, Physics</strong>
                <div class="caption mb-2">University of Vienna</div>
                <div class="subtitle-2 mb-2">Thesis: <em>Magnetic Nanogels</em></div>
                <div class="subtitle-2 mb-2">Adviser: <em>S. S. Kantorovich</em></div>
              </v-flex>
            </v-layout>
          </v-timeline-item>
        </v-timeline>
      </v-card-text>
    </v-flex>
    <v-layout row justify-center align-center wrap class="mt-4 pt-2">
      <div class="mt-4 pt-2">
        <v-btn
          href="https://1drv.ms/b/s!AhcaUMd40DRFidU4VYExBTZ5un17GA?e=9yoWzt"
          target="_blank"
          color="green"
          dark
          large
        >
          Download Resume
          <v-icon right dark>fas fa-file-download</v-icon>
        </v-btn>
      </div>
    </v-layout>
  </v-layout>
</template>

<script>
export default {
  metaInfo: {
    title: "Resume",
    titleTemplate: "%s ← Eldin's Space",
    meta: [
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      {
        name: "description",
        content:
          "Ivan Novikau CV"
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
          "Ivan Novikau CV"
      }
    ]
  },
  data() {
    return {
      value: 0,
      buffer1: 0,
      buffer2: 0,
      buffer3: 0,
      buffer4: 0,
      buffer5: 0,
      buffer6: 0,
      bufferValue: 100,
      interval: 0
    };
  },
  mounted() {
    this.startBuffer();
  },

  beforeDestroy() {
    clearInterval(this.interval);
  },

  methods: {
    startBuffer() {
      this.interval = setInterval(() => {
        this.buffer1 = 90;
        this.buffer2 = 85;
        this.buffer3 = 80;
        this.buffer4 = 80;
        this.buffer5 = 90;
        this.buffer6 = 70;
      }, 800);
    }
  }
};
</script>
<style >
</style>

