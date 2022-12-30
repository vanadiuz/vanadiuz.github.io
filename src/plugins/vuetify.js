/**
 * plugins/vuetify.js
 *
 * Framework documentation: https://vuetifyjs.com`
 */

// Styles
// import '@mdi/font/css/materialdesignicons.css'
import 'vuetify/styles'

import GoogleScolarIcon from '@/components/GoogleScolarIcon.vue'
import ArxivIcon from '@/components/ArxivIcon.vue'



// Composables
import { createVuetify } from 'vuetify'


// https://vuetifyjs.com/en/introduction/why-vuetify/#feature-guides
export default createVuetify({
  theme: {
    defaultTheme: 'dark'
  },
  icons: {
    values: {
      custom: { // name of our custom icon
        component: GoogleScolarIcon, // our custom component
      },
      arxiv: { // name of our custom icon
        component: ArxivIcon, // our custom component
      },
    },
  },
  provide: {
    message: 'hello!'
  }
})

// export default vuetify