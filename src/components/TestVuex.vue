<template>
  <div>
    <h2>I'm a component Template</h2>
    <p>Count is: {{ score }}</p>
    <p>And the text is: {{ display }}</p>
  </div>
</template>

<script>

export default {
  computed: {
    score () {
      return this.$store.state.TestStore.score
    },
    display () {
      return this.$store.state.TestStore.mystate
    }
  }
}

</script>

<style ></style>
