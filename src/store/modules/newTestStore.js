
const newTestStore = {

  namespaced: true,
  state: {
    count: 0
  },
  getters: {
  },
  mutations: {
    increment (state) {
      state.count++
    },
    decrement (state) {
      state.count--
    }
  },
  actions: {
  }

}

this.$store.registerModule('new_store', newTestStore)
