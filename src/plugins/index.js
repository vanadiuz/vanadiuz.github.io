/**
 * plugins/index.js
 *
 * Automatically included in `./src/main.js`
 */

// Plugins
import { loadFonts } from './webfontloader'
import vuetify from './vuetify'
import router from '../router'

export function registerPlugins (app) {
  loadFonts()
  app
    .use(vuetify)
    .use(router)
}

router.afterEach((to, from) => {
  setTimeout( function(){
    const canvas = document.getElementsByTagName('canvas')[0];
    canvas.height = document.getElementById("app1").clientHeight;
    
  } , 1000);
})


