
export default {

  state: {
    message: 'this is my first state!',
    myVariable: 0
  },
  getters: {
    someFilter: state => {
      return state.myVariable[0]
    }
  },
  mutations: {
    addToArray (state, value) {
      state.myVariable.push(value)
    }
  },
  actions: {
    addToArray (context) {
      context.commit('addToArray')
    }
  }
}
