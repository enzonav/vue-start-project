<template>
  <div class='wrapper'>
    <h2>Contacts</h2>
    <button v-on:click="test()">Button</button>
    <p>{{title}}</p>
  </div>
</template>

<script>

let title = ''
export default {
  data: function () {
    return {
      title: title
    }
  },
  methods: {
    test: function () {
      console.log(this)
    }
  },
  name: 'Contacts'
}
</script>

<style ></style>
