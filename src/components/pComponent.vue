<template>
<div>
  <h2>I'm a Page!</h2>
  <div>
    {{ my_action }}
  </div>
  <mainComponent></mainComponent>
</div>
</template>

<script>

import mainComponent from './cComponent.vue'
import { mapState } from 'vuex'

export default {

  name: 'headerComponent',
  components: { mainComponent },

  data () {
    return {
      dummy: ''
    }
  },
  computed: {
    ...mapState({
      my_action: state => state.store_test.action
    }),
    test () {
      return this.$store.state.store_test.action
    }
    /*
    count () {
      return basket.state.fruits.length
      // Or return basket.getters.fruitsCount
      // (depends on your design decisions).
    } */
  },
  watch: {
    test () {
      console.log('boh, qualcosa è accaduto')
    }
  },
  /*
    count (newCount, oldCount) {
      // Our fancy notification (2).
      console.log(`We have ${newCount} fruits now, yaay!`)
    }
    action: {
      get () {
        return this.$store.state.store_test.action
      }
    }
    */
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
