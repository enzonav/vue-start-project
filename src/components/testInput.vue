<template>
  <div>
    <h1>Hi i come from testInput component</h1>
    <p v-on:click="test()">{{title}}</p>>
    <myTest :title="title" @title-changed="changeTitle"></myTest>
  </div>

</template>

<script>

import myTest from './myTest.vue'

let title = ''
export default {
  data: function () {
    return {
      title: title
    }
  },
  methods: {
    changeTitle (newTitle) {
      this.title = newTitle
    }
  },
  components: { myTest }
}
</script>

<style></style>
