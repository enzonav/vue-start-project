<template>
  <div>
    <h1>Hi i come from myTest component</h1>
    <p v-on:click="test()">{{title}}</p>
    <input type="text" v-model="innerTitle">
  </div>
</template>

<script>

export default {
  props: ['title'],
  data: function () {
    return {
      innerTitle: this.title
    }
  },
  methods: {
    test: function () {
      console.log(this)
    }
  },
  watch: {
    title (val) {
      this.innerTitle = val
    },
    innerTitle (val) {
      this.$emit('title-changed', val)
    }
  },
  name: 'myTest'
}
</script>

<style></style>
