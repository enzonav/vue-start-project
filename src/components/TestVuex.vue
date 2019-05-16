<template>
  <div>
    <h2>{{ }}</h2>
    <p>This is my {{ message }}</p>
    <p>And this is my {{ someFilter }}</p>
    <button @click='addToArray'>+ Add to Array</button>   
  </div>
</template>

<script>

import { mapState } from 'vuex'
// import { mapGetters } from 'vuex'

export default {
  /*
  computed: mapState({
    mymessage: state => state.myStore.message,
    MyVariable: state => state.myStore.MyVariable
  }),
  */
  computed: {
    ...mapState({
      message: state => state.myStore.Message
    }),
    /*
    message () {
      return this.$store.state.myStore.Message
    },
    */
    someFilter () {
      return this.$store.getters.someFilter
    }
  },
  methods: {
    addToArray () {
      return this.$store.commit('addToArray', 1000)
    }
  }
}

</script>

<style ></style>
