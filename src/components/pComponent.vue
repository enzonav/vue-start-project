<template>
<div>
  <h2>I'm a Page!</h2>
  <mainComponent></mainComponent>
</div>
</template>

<script>

import mainComponent from './cComponent.vue'

export default {
  name: 'headerComponent',
  components: { mainComponent },
  data () {
    return {
      dummy: ''
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
