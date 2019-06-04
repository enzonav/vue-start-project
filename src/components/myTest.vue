<template>
  <div>
    <h5>Hi from child component</h5>
    <p v-on:click="test()">{{title}}</p>
    <input type="text" v-model="innerTitle">
    <!-- The input in the child component is bound to the innerTitle using v-model -->
  </div>
</template>

<script>

/*
The child component is unable to modify its props,
so it copies the value of the prop to a local
 data field innerTitle
*/
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
    /*
    The child component also has a watch on the title prop
    so that if the parent's title value changes for any other reason,
    the child component will be able to update its internal state to match
    the parent's new value
    */
    innerTitle (val) {
      this.$emit('title-changed', val)
    }
    /*
    A watch is added on the innerTitle
    so that any time it changes, it emits
    an event title-changed
    */
  },
  name: 'myTest'
}
</script>

<style></style>
