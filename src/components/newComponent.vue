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
  <p>Selected Action : {{action}}</p>
  Kilometers : <input type = "text" v-model = "kilometers">
  Meters : <input type = "text" v-model = "meters">
  <!--
  <component-to-re-render :key="componentKey" />
  -->
  <!--
  <h1 v-if="category === 'start'">Start</h1>
  <h1 v-else-if="category === 'load'">Load</h1>
  <h1 v-else-if="category === 'loaded'">Loaded</h1>
  <h1 v-else>Loading</h1>
  <p>Selected Category : {{category}}</p>
  -->

</div>
</template>

<script>
export default {
  /*
  data() {
    return {
      componentKey: 0,
    };
  },
  methods: {
    forceRerender() {
      this.componentKey += 1;
    }
  }
  */
  data () {
    return {
      kilometers: 0,
      meters: 0,
      ahah: 'vediamo'
    }
  },
  computed: {
    action: {
      get () {
        return this.$store.state.store_test.action
      },
      set (value) {
        console.log('Value of category changed')
        this.$store.commit('SET_CAT', value)
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
