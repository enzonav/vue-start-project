<template>
<div>
  <h2>I'm New Component</h2>
  <select name="Category" v-model="category">
    <option value="" disabled hidden>Select Product</option>
    <option value="AC">AC</option>
    <option value="TV">TV</option>
    <option value="Mobile">Mobile</option>
    <option value="Washing Machine">Washing Machine</option>
  </select>
  <p>Selected Category : {{category}}</p>

</div>
</template>

<script>
export default {
  data () {
    return {
    }
  },
  computed: {
    category: {
      get () {
        return this.$store.state.store_test.category
      },
      set (value) {
        console.log('Value of category changed')
			  this.$store.commit('SET_CAT', value)
      }
    }
  }
}
</script>
