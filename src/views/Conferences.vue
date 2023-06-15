// eslint-disable-next-line
<template>
  <div class="outer">
    <h1>Let's talk about φυσική!</h1>
    <div v-for="year in years">
      <div class="container">
        <div class="events">
          <div class="container_event" v-for="event in events" v-if="event.year==year">
            <div class="where">
              <a :href="event.link" target="_blank">
                <span>{{event.name}}</span>
              </a> {{event.city}}
              <span class="date">
                {{event.start}}-{{event.end}}
              </span>
            </div>
            <div class="what">
              <div v-for="contribution in event.contributions">
                {{ contribution }} &nbsp;
              </div>
            </div>
          </div>
        </div>
        <div class="year green--text">
          <h3>
            {{year}}
          </h3>
        </div>
      </div>
    </div>
  </div>
  
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
    title: "Conferences, etc.",
    titleTemplate: "%s ← Ivan Novikau",
    meta: [
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      {
        name: "description",
        content:
          "Ivan Novikau Conferences, etc."
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
          "Ivan Novikau Conferences, etc."
      }
    ]
  },
  data() {
    return {
      years: [2023, 2022],
      events: [
      {
          name: '(7th ISMC)',
          link: "https://ismc2021.jp/",
          city: "Osaka",
          year: 2023,
          start: "04.09",
          end: "08.09",
          contributions: [
            'Poster: "Magnetic Nanogels\' Suspension: Exploring Magnetic and Hydrodynamic Responses"'
          ]
        },
        {
          name: '(SISM)',
          link: "https://sism.samdu.uz/",
          city: "Samarkand",
          year: 2023,
          start: "02.07",
          end: "06.07",
          contributions: [
            'Poster: "Magnetic Nanogels\' Suspension: Exploring Magnetic and Hydrodynamic Responses"'
          ]
        },
        {
          name: '(16th ICMF)',
          link: "https://eventos.ugr.es/icmf-2023/",
          city: "Granada",
          year: 2023,
          start: "12.06",
          end: "16.06",
          contributions: [
            'Poster: "Magnetic Nanogels\' Suspension: Exploring Magnetic and Hydrodynamic Responses"'
          ]
        },
        {
          name: '(DPG Spring Meeting)',
          link: "https://www.dpg-verhandlungen.de/year/2023/conference/skm/parts?lang=en",
          city: "Dresden",
          year: 2023,
          start: "26.03",
          end: "31.03",
          contributions: [
            'Talk: "How topology impacts magnetic and rheological properties of a suspension of magnetic nanogels"',
          ]
        },
        {
          name: '(DPG Spring Meeting)',
          link: "https://www.dpg-verhandlungen.de/year/2022/conference/regensburg/parts?lang=de",
          city: "Regensburg",
          year: 2022,
          start: "04.09",
          end: "09.09",
          contributions: [
            'Talk: "Behaviour of a magnetic nanogel in a shear flow"',
            'Poster: "Rheological properties of Stcokmayer supracolloidal magnetic polymers under shear flow"'
          ]
        },
      ]
    };
  }
  
};
</script>

<style scoped>

.outer {
  position: relative;
  width: 100%;
  height: 100%;
  margin: 42px auto;
  padding: 0;
}

.outer h1{
  text-align: center;
  font-size: 2.5em;
  font-weight: 700;
  margin: 42px 0 20px 0;
  padding: 0;
}

.container {
  display: grid; 
  grid-template-columns: 1fr 2fr; 
  grid-template-rows: 1fr; 
  gap: 0px 0px; 
  grid-template-areas: 
    "year events"; 
  justify-content: center; 
  justify-items: center; 
}
.events { grid-area: events; }
.year { grid-area: year; }

.container_event {
  display: grid; 
  grid-template-columns: 1fr; 
  grid-template-rows: 0.33fr 1fr; 
  gap: 0px 0px; 
  justify-items: stretch; 
  margin: 0 0 40px 0px;
  grid-template-areas: 
    "where"
    "what"; 
}
.where { grid-area: where; }
.where .date{
  font-size: smaller;
}
.what { 
  grid-area: what; 
}

.what div{
  display: inline-block;
  margin: 0px 0 0 0px;
  font-size: smaller;
}

</style>
