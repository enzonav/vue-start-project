<template>
  <div>
    <h2>Testing xdomain db</h2>
    <!--
    <p>Inserisci Record</p>
    <form class="" method="post" @submit.prevent="addItem">
      <input v-model="websites.title" placeholder="titolo">
      <input v-model="websites.url" placeholder="url">
      <button type="submit" name="button">Submit</button>
    </form>
    -->
    <table border=1>
      <thead>
          <th>Titolo</th>
          <th>Url</th>
        </thead>
      <tbody>
        <tr v-for="(item, index) in websites" :key="index">
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
      websites: state => state.Module1.websites
    })
  },
  methods: {
    addItem () {
      this.$store.dispatch('addItem')
    }
  }
}

</script>

<style ></style>
