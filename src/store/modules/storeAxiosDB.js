import Axios from 'axios'

// import { eventBus } from '../../main'
// src/store/modules/MyStoreNew.js
// src/main.js
// import { eventBus } from '../main'

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
    /*
    ADD_ITEM (state, payload) {
      state.message = payload.title + payload.url
    }
    */
  },
  actions: {
    loadTest ({ commit }) {
      console.log('load posts test')
      Axios
        .get('https://www.xdomain.it/api/index.php/my-controller/websites')
        .then(response => {
          // console.log(response.data)
          let websites = response.data
          commit('SET_TESTS', websites)
        })
        .catch(error => {
          console.log(error)
        })
    },
    /*
    no change in you action
    yourAction: ({commit}, payload) => {
      commit('YOUR_MUTATION',  payload )
    },
    */
    addItem ({ commit, dispatch }, myValues) {
      // console.log('into the store')
      // console.log(myValues.title + myValues.url + '?')
      Axios
        .post('https://www.xdomain.it/api/index.php/my_controller/add_website', myValues)
        .then(response => {
          console.log('server response ' + response.data.message)
          let message = {
            'message': response.data.message
          }
          dispatch('status_update', { message })
        })
        .catch(error => {
          console.log(error)
        })
    }
  }
}
