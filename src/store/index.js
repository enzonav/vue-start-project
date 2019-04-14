import Vue from 'vue'
import Vuex from 'vuex'
import TestStore from './modules/TestStore.js'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    TestStore
  }
})
