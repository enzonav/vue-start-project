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
    getData: state => state.websites,
    returnIndex: state => {
      return state.websites.length
    }
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
    getServerData ({ commit }) {
      console.log('load posts test')
      Axios
        .get('https://www.xdomain.it/api/index.php/my-controller/websites')
        .then(response => {
          // console.log(response.data)
          let websites = response.data
          commit('SET_TESTS', websites)
          // dispatch('status_update', )
        })
        .catch(error => {
          console.log(error)
        })
    },
    addItem ({ commit, dispatch }, myValues) {
      Axios
        .post('https://www.xdomain.it/api/index.php/my_controller/add_website', myValues)
        .then(response => {
          console.log('server response ' + response.data.message)
          let message = {
            'message': response.data.message
          }
          dispatch('status_update', { message })
          dispatch('getServerData')
        })
        .catch(error => {
          console.log(error)
        })
    }
  }
}
