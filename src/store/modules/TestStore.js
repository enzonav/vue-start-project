
export default {

  state: {
    Message: 'this is my first state!',
    MyVariable: [1]    
  },
  getters: {
    someFilter: state => {
      return state.MyVariable[1]
    }
  },
  mutations: {
    addToArray (state, value) {
      state.MyVariable.push(value)
    }
  },
  actions: {
    addToArray (context) {
      context.commit('addToArray')
    }
  }
}
