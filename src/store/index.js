import Vue from 'vue'
import Vuex from 'vuex'
import TestStore from './modules/TestStore.js'
import objectStorage from './modules/objectStorage.js'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    TestStore,
    objectStorage
  },
  state: {},
  getters: {},
  mutations: {},
  actions: {}
})
