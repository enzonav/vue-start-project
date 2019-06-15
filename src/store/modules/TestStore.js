export default {
  state: {
    action: 'Start'
  },
  mutations: {
    SET_CAT (state, response) {
      console.log('SET_CAT')
      state.action = response
    }
  },
  actions: {
    FETCH_CAT: (state) => {
    }
  }

}
