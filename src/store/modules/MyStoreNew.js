import Axios from 'axios'

export default {
  state: {
    websites: []
  },
  getters: {
  },
  mutations: {
    SET_TESTS (state, websites) {
      state.websites = websites
    }
  },
  actions: {
    loadTest ({ commit }) {
      console.log('load posts test')
      Axios
        .get('https://www.xdomain.it/api/index.php/my-controller/websites')
        .then(response => {
          console.log(response.data)
          let websites = response.data
          commit('SET_TESTS', websites)
        })
        .catch(error => {
          console.log(error)
        })
    },
    addItem ({ commit }) {
      console.log('test add item')
      alert('Form funziona')
      /*
      Axios
        .post('https://www.xdomain.it/api/index.php/my_controller/add_website', {})
        .then(data => {
          console.log(data.data)
        })
        .catch(error => {
          console.log(error)
        })
      */
    }
  }
}
