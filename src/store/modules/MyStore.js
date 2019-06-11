export default {
  state: {
    status: 'pending'
  },
  getters: {
    status: state => state.status
  },
  mutations: {
    UPDATE_STATUS (state, status) {
      console.log('into the II mutations')
      state.status = status
    }
  },
  actions: {
    status_update ({ commit }, status) {
      console.log('into the II store module')
      commit('UPDATE_STATUS', status)
    }
  }
}
