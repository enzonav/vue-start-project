<template>
  <div>
    <h2>Testing Vuex and Axios!</h2>    
    <p>Test store msg: {{ this.$store.state.MyModule.Message }}</p>
    <p v-for="(item, index) in posts" :key="index">{{ item.title }}</p>
  </div>
</template>

<script>

import { mapState } from 'vuex'
// import { mapGetters } from 'vuex'

export default {  
  mounted () {
    this.$store.dispatch('loadPosts')
  },
  computed: {
    ...mapState([
      'posts'
    ])
  }  
}

</script>

<style ></style>
