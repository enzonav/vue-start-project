import Axios from "axios";

export default {
  state: {
    Message: 'Im a state!',
    posts: []
  },
  getters: {
  },
  mutations: {
    SET_POSTS (state, posts) {
      state.posts = posts
    }
  },
  actions: {
    loadPosts ({commit}) {
      //console.log('load posts test')
      Axios
        .get('https://jsonplaceholder.typicode.com/posts')
        .then(data => {
          console.log(data.data)
          let posts = data.data
          commit('SET_POSTS', posts)
        })
        .catch(error => {
          console.log(error)
        })
    }
  } 
}

