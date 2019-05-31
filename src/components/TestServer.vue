<template>
  <div>
    <h2>Testing xdomain db</h2>
    <p>Inserisci Record</p>
    <form class="" method="post" @submit.prevent="">
      <input v-model="title" placeholder="titolo">
      <input v-model="url" placeholder="url">
      <button type="submit" name="button">Submit</button>
    </form>
    <table border=1>
      <thead>
          <th>Titolo</th>
          <th>Url</th>
        </thead>
      <tbody>
        <tr v-for="(item, index) in tests" :key="index">
          <td>{{ item.title }}</td>
          <td>{{ item.url }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>

import { mapState } from 'vuex'

export default {
  mounted () {
    this.$store.dispatch('loadTest')
  },
  computed: {
    ...mapState({
      tests: state => state.MyModuleNew.tests
    })
  }
}

</script>

<style ></style>
