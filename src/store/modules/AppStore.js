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
    updateStatus (state, response) {
      console.log('into the II mutations')
      state.status = response.message
    },
    updateAction (state, response) {
      console.log('updateAction')
      state.action = response
    }
  },
  actions: {
    fetch_cat: (state) => {},
    status_update ({ commit }, response) {
      console.log('into the II store module')
      commit('updateStatus', response)
    },
    change_action ({ commit }, response) {
      commit('updateAction', response)
    }
  }
}
