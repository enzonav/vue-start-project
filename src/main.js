import Vue from 'vue'
import Vuetify from 'vuetify'
import VueRouter from 'vue-router'
import App from './App.vue'
import { routes } from './router/index.js'
import store from './store/index.js'

Vue.config.productionTip = false
Vue.use(Vuetify, VueRouter)

/* creating an event bus with no rendere vue instance */
export const eventBus = new Vue()

const router = new VueRouter({
  routes,
  mode: 'history'
})

new Vue({
  el: '#app',
  store,
  router,
  template: '<App/>',
  components: { App }
})
