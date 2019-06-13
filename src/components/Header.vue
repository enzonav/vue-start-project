<template>
  <header>
    <div class="main-navigation">
      <router-link to="/">Home</router-link>
      <router-link to="/about">About</router-link>
      <router-link to="/contacts">Contacts</router-link>
      <router-link to="/test-server">Test Server</router-link>
      <router-link to="/test-input">Test Input </router-link>
      <router-link to="/test-watch">New Component</router-link>
      <!--<router-link to="/sharing-components">Test Shared Componens</router-link>-->
      <!--<a href="https://www.xdomain.it/guides/rest-server" target="_blank">Rest Server Doc</a> -->
      <!--<router-link to="/test-vuex">Test Vuex</router-link>-->
    </div>
  </header>
</template>

<script>

export default {
  name: 'Header'
}
</script>
