import Vue from 'vue'
import './plugins/vuetify'
import App from './App.vue'
import router from './router'
import StoryblokVue from 'storyblok-vue'
import VueAnalytics from 'vue-analytics'



Vue.config.productionTip = false
const isProd = process.env.NODE_ENV === "production"

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')

Vue.use(StoryblokVue)

router.afterEach((to, from) => {
  setTimeout( function(){
    const canvas = document.getElementsByTagName('canvas')[0];
    canvas.height = document.getElementById("app1").clientHeight;
    
  } , 1000);
})





// Vue.use(VueAnalytics, {
//   id: 'UA-139190314-1',
//   router,
//   debug: {
//     enabled: !isProd,
//     sendHitTask: isProd
//   }
// })
