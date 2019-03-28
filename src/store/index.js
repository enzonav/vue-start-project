import Vue from 'vue'
import Vuex from 'vuex'
import myStore from './modules/myStore.js'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    myStore
  }
})
