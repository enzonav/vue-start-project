<template>
  <div>
    <h2>I'm a component Template</h2>
    <p>This is my {{ mymessage }}</p>
    <p>And this is my {{ myvariable }}</p>
    <!-- <button @click='increment'>+</button> -->
  </div>
</template>

<script>

import { mapState } from 'vuex'

export default {
  computed: mapState({
    mymessage: state => state.myStore.message,
    myvariable: state => state.myStore.myVariable
  })
}

</script>

<style ></style>
