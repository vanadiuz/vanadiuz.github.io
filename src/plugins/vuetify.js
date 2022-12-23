import Vue from 'vue'
import Vuetify from 'vuetify'
// import 'vuetify/src/stylus/app.styl'
import 'vuetify/dist/vuetify.min.css'

import colors from 'vuetify/lib/util/colors'
import GoogleScolarIcon from '@/components/GoogleScolarIcon.vue'
import ArxivIcon from '@/components/ArxivIcon.vue'

Vue.use(Vuetify, {
  // iconfont: 'md',
  icons: {
    // iconfont: 'fa',
    // values: {
    //   cancel: 'fab fa-github',
    //   menu: 'fa-github',
    // },
    values: {
      custom: { // name of our custom icon
        component: GoogleScolarIcon, // our custom component
      },
      arxiv: { // name of our custom icon
        component: ArxivIcon, // our custom component
      },
    },
  },
})


