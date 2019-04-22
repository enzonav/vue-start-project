<template>
  <div>
    <h2>I'm a component Template</h2>
    <p>This is my {{ mymessage }}</p>
  </div>
</template>

<script>

import { mapState } from 'vuex'

export default {
  computed: mapState({
    mymessage: state => state.TestStore.message
  })
}

</script>

<style ></style>
