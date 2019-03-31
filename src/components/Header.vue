<template>
  <header>
    <div class="main-navigation">
      <router-link to="/">Home</router-link>
      <router-link to="/about">About</router-link>
      <router-link to="/contacts">Contacts</router-link>
      <router-link to="/todo">To Do List</router-link>
    </div>
  </header>
</template>

<script>

export default {
  name: 'Header'
}
</script>
