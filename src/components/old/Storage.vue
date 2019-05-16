<template>
  <div>
    <h2>Testing Storage</h2>
    <input v-model="message" placeholder="edit me">
    <p>Message is: {{ message }}</p>
    <p>Hero is: {{ hero.name }}</p>
     <button>+ Test Button</button>
  </div>
</template>

<script>

export default {
  data () {
    return {
      message: ''
      hero: {
          
      }
    }
  },
  computed: {
    hero: state => JSON.parse(localStorage.getItem('Heroes'))
  }
}

</script>

<style ></style>
