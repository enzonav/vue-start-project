export default {
  state: {
    category: 'AC'
  },
  mutations: {
    SET_CAT (state, response) {
      console.log('SET_CAT')
      state.category = response
    }
  },
  actions: {
    FETCH_CAT: (state) => {
    }
  }

}
