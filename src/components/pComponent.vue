<template>
<div>
  <h2>I'm a Page!</h2>
  <h4>action: {{ getAction }}</h4>
  <h4>status: {{ getStatus }}</h4>
  <h4 v-if="getStatus === 'success'">status: success</h4>
  <h4 v-else-if="getStatus === 'error'">status: error</h4>
  <h4 v-else>status not set</h4>
  <h4>testing map helper getter: {{my_test}} </h4>
  <h4>Array lenght: {{ array_index  }}</h4>
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
    ...mapGetters(['getAction', 'getStatus', 'returnIndex']),
    my_test () {
      console.log('computed')
      return this.getAction
    },
    array_index () {
      // console.log('computed')
      if (this.returnIndex === 0) {
        if (this.getStatus === 'not_set') {
          this.fetchData()
          this.changeAction('function called')
          this.setStatus('success')
          // this.getAction()
          // here dispach action loadTest
        }
      }
      return this.returnIndex
    }
  },
  methods: {
    changeAction (value) {
      // this.change_action(value)
      // console.log('Value of category changed')
      // return this.updateAction(value)
      return this.$store.commit('updateAction', value)
    },
    setStatus (value) {
      // this.change_action(value)
      // console.log('Value of category changed')
      // return this.updateAction(value)
      return this.$store.commit('setStatus', { value })
    },
    fetchData: function () {
      return this.$store.dispatch('getServerData')
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
    console.log('beforeUpdate...mmm qui?')
    this.setStatus('ahahahhah')
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
