import Vue from 'vue'
import Vuetify from 'vuetify/lib'
import 'vuetify/src/stylus/app.styl'

import colors from 'vuetify/lib/util/colors'
import GoogleScolarIcon from '@/components/GoogleScolarIcon.vue'

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
    },
  },
})


