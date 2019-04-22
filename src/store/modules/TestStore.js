
const state = {
  mystate: 'Hi, im a state!',
  score: 0
}

const getters = {

}

const mutations = {
  increment (state) {
    state.score++
  },
  decrement (state) {
    state.score--
  }
}

const actions = {

}

export default {

  state,
  getters,
  actions,
  mutations

}
