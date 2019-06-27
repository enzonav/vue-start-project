<template>
<div>
  <h2>I'm New Component</h2>
  <select name="Category" v-model="action">
    <option value="" disabled hidden>Select Product</option>
    <option value="start">Start</option>
    <option value="load">Load</option>
    <option value="loaded">Loaded</option>
    <option value="releasing">Releasing</option>
  </select>
  <!--<p>Selected Action : {{action}}</p>-->
  <p>Selected Action : {{getAction}}</p>

  Kilometers : <input type = "text" v-model = "kilometers">
  Meters : <input type = "text" v-model = "meters">
</div>
</template>

<script>

import { mapGetters, mapMutations } from 'vuex'

export default {

  data () {
    return {
      kilometers: 0,
      meters: 0
    }
  },
  beforeCreate () {
    console.log('beforeCreate', this)
  },
  computed: {
    ...mapGetters(['getAction']),
    // ...mapMutations(['updateAction']),
    action: {
      get () {
        // return this.$store.state.store_test.action
        return this.getAction
      },
      set (value) {
        // this.change_action(value)
        console.log('Value of category changed')
        // return this.updateAction(value)
        this.$store.commit('updateAction', value)
      }
    }
  },
  watch: {
    kilometers: function (val) {
      this.kilometers = val
      this.meters = val * 1000
    },
    meters: function (val) {
      this.kilometers = val / 1000
    }
  }
}
</script>
