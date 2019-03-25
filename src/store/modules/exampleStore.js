import Vue from 'vue'
import axios from 'axios'
import VueAxios from 'vue-axios'

Vue.use(VueAxios, axios)

const state = {
  coins: []
}

const getters = {

}

const actions = {
  loadCoins ({ commit }) {
    axios
      .get('http://localhost:4000/results')
      .then(r => r.data)
      .then(coins => console.log(coins))
  }
}

const mutations = {
  SET_COINS (state, coins) {
    state.coins = coins
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
