<template>
  <div>
    <h2>Testing  db</h2>
    <h4>Add item response: {{ getStatus.message }}</h4>
    <br>
    <input placeholder="titolo" v-model="my_data.title">
    <p>Url input: {{ my_data.title }}</p>
    <input placeholder="url" v-model="my_data.url">
    <button @click="addItem(my_data.title, my_data.url)">Add site</button>
    <button @click="test('test')">test</button>
    
    <p>Websites Title</p>
    <table border=1>
      <thead>
          <th>Titolo</th>
          <th>Url</th>
        </thead>
      <tbody>
        <tr v-for="(item, index) in getData" :key="index">
          <td>{{ item.title }}</td>
          <td>{{ item.url }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>

import { mapGetters, mapActions } from 'vuex'

export default {
  data () {
    return {
      my_data: {
        title: '',
        url: ''
      }
    }
  },
  mounted () {
    /*
    try to call the dispatch action from computed property
    this.$store.dispatch('getServerData')
    */
  },
  computed: {
    ...mapGetters(['getData', 'getStatus']),
    ...mapActions(['getServerData']),
    fetchData: function () {
      return this.$store.dispatch('getServerData')
      // return this.geServerData()
    }
    /*
    ...mapState({
      websites: state => state.store_db.websites,
      status: state => state.store_my.status
    }),
    */
  },
  methods: {
    addItem (title, url) {
      console.log('method ok')
      console.log(title, url)
      this.$store.dispatch('addItem', {
        'title': title,
        'url': url
      })
      //this.$store.dispatch('getServerData')
    }
  }  
}
</script>

<style ></style>
