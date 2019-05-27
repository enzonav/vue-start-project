import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import MyStore from './modules/MyStore.js'
import MyStoreNew from './modules/MyStoreNew.js'

Vue.use(Vuex, axios)

export default new Vuex.Store({
  modules: {
    MyModule: MyStore,
    MyModuleNew: MyStoreNew
  },
  state: {},
  getters: {},
  mutations: {},
  actions: {}
})
