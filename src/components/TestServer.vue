<template>
  <div>
    <h2>Testin xdomain api</h2>
    <p v-for="(item, index) in tests" :key="index">{{ item.name }}</p>
    <p v-for="(item, index) in tests" :key="index">{{ item.email }}</p>
  </div>
</template>

<script>

import { mapState } from 'vuex'

export default {
  mounted () {
    this.$store.dispatch('loadTest')
  },
  computed: {
    ...mapState({      
      tests: state => state.MyModuleNew.tests
    })
  }

}

</script>

<style ></style>
