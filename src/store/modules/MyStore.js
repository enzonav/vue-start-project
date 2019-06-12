export default {
  state: {
    status: 'pending'
  },
  getters: {
    status: state => state.status
  },
  mutations: {
    UPDATE_STATUS (state, response) {
      console.log('into the II mutations')
      state.status = response.message
    }
  },
  actions: {
    status_update ({ commit }, response) {
      console.log('into the II store module')
      commit('UPDATE_STATUS', response)
    }
  }
}
