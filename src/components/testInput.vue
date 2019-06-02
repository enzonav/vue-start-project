<template>
  <div>
    <h2>Test Input Binding in Vuex</h2>
    <div>
      <form>
        <input @change="update">
        <input @change="update">
      </form>
    </div>
  </div>
</template>

<script>

export default {
  computed: {
    update () {
      return true
    }
  }
}

</script>

<style ></style>
