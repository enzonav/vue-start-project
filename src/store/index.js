import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import MyStore from './modules/MyStore.js'

Vue.use(Vuex, axios)

export default new Vuex.Store({
  modules: {
    MyModule: MyStore
  },
  state: {},
  getters: {},
  mutations: {},
  actions: {}
})
