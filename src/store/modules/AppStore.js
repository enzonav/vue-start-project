export default {
  state: {
    action: 'start',
    status: 'pending'
  },
  getters: {
    getAction: state => state.action,
    getStatus: state => state.status
  },
  mutations: {
    UPDATE_STATUS (state, response) {
      console.log('into the II mutations')
      state.status = response.message
    },
    SET_CAT (state, response) {
      console.log('SET_CAT')
      state.action = response
    }
  },
  actions: {
    fetch_cat: (state) => {},
    status_update ({ commit }, response) {
      console.log('into the II store module')
      commit('UPDATE_STATUS', response)
    },
    change_action ({ commit }, response) {
      commit('SET_CAT', response)
    }
  }
}
