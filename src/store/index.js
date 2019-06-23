import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
// import MyStore from './modules/MyStore.js'
import DbStore from './modules/storeAxiosDB.js'
// import MyStore from './modules/MyStore.js'
// import TestStore from './modules/TestStore.js'
import AppStore from './modules/AppStore.js'

Vue.use(Vuex, axios)

export default new Vuex.Store({
  modules: {
    store_db: DbStore,
    store_app: AppStore
    // MyModule: MyStore,
    // store_my: MyStore,
    // store_test: TestStore
  },
  state: {},
  getters: {},
  mutations: {},
  actions: {}
})
