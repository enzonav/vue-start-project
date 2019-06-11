import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
// import MyStore from './modules/MyStore.js'
import DbStore from './modules/storeAxiosDB.js'
import MyStore from './modules/MyStore.js'

Vue.use(Vuex, axios)

export default new Vuex.Store({
  modules: {
    // MyModule: MyStore,
    store_db: DbStore,
    store_my: MyStore
  },
  state: {},
  getters: {},
  mutations: {},
  actions: {}
})
