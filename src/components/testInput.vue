<template>
  <div>
    <h4>Hi from Parent component</h4>
    <p v-on:click="test()">{{title}}</p>
    <myTest :title="title" @title-changed="changeTitle"></myTest>
    <!--
    The parent component listens for the title-changed event,
    and whenever it occurs, the parent updates its title field to that new value
    -->
  </div>

</template>

<script>

import myTest from './myTest.vue'

let title = ''

/* The parent component passes its
title component down to the child component
so it has access to it
*/

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
