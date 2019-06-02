import Axios from 'axios'

export default {
  state: {
    tests: []
  },
  getters: {
  },
  mutations: {
    SET_TESTS (state, tests) {
      state.tests = tests
    }
  },
  actions: {
    loadTest ({ commit }) {
      console.log('load posts test')
      Axios
        .get('https://www.xdomain.it/api/index.php/example/users')
        .then(data => {
          console.log(data.data)
          let tests = data.data
          commit('SET_TESTS', tests)
        })
        .catch(error => {
          console.log(error)
        })
    }
  }
}
