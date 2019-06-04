import Vue from 'vue'
import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import VueRouter from 'vue-router'
import App from './App.vue'
import { routes } from './router/index.js'
import store from './store/index.js'

Vue.config.productionTip = false
Vue.use(BootstrapVue)
Vue.use(VueRouter)

/* creating an event bus with no rendere vue instance */
export const eventBus = new Vue()

const router = new VueRouter({
  routes,
  mode: 'history'
})

/* eslint-disable no-new */

Vue.config.productionTip = false

/* eslint-disable no-new */

new Vue({
  el: '#app',
  store,
  router,
  template: '<App/>',
  components: { App }
})
