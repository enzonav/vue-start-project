<template>
<div>
  <h2>I'm a Page!</h2>
  <h4>testStore: {{ getAction }}</h4>
  <h4 v-if="getStatus.message === 'success'">myStore: success</h4>
  <h4 v-else-if="getStatus.message === 'error'">myStore: error</h4>
  <h4 v-else>mah</h4>
  <h4>testing internal funcion: {{my_test}} </h4>
  <mainComponent></mainComponent>
</div>
</template>

<script>

import { mapGetters } from 'vuex'
/* import { mapState } from 'vuex' */

import mainComponent from './cComponent.vue'

export default {

  name: 'headerComponent',
  components: { mainComponent },

  data () {
    return {
      dummy: ''
    }
  },
  computed: {
    /*
    ...mapState({
      my_action: state => state.store_test.action
    }),
    */
    ...mapGetters(['getAction', 'getStatus']),
    my_test () {
      // console.log('mmmm' + this.getAction)
      return this.getAction
    }
  },
  beforeCreate () {
    console.log('beforeCreate', this)
  },
  created () {
    console.log('created')
  },
  beforeMounted () {
    console.log('beforeMounted')
  },
  mounted () {
    console.log('mounted')
  },
  beforeUpdate () {
    console.log('beforeUpdate')
  },
  updated () {
    console.log('updated')
  },
  beforeDestroy () {
    console.log('beoreDestroy')
  },
  destroyed () {
    console.log('destroyed')
  }
}
</script>
