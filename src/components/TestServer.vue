<template>
  <div>
    <h2>Testing  db</h2>
    <br>
    <h1 v-if="status === 'success'">Status request: Success</h1>
    <h1 v-else-if="status === 'error'">Status request: Error</h1>
    <h1 v-else>Loading</h1>
    <input placeholder="titolo" v-model="myData.title">
    <p>Url input: {{ myData.title }}</p>
    <input placeholder="url" v-model="myData.url">
    <button @click="addItem(myData.title, myData.url)">Add site</button>
    <p>Websites Title</p>
    <table border=1>
      <thead>
          <th>Titolo</th>
          <th>Url</th>
        </thead>
      <tbody>
        <tr v-for="(item, index) in getData" :key="index">
          <td>{{ item.title }} -- {{ index }}</td>
          <td>{{ item.url }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import { mapState, mapGetters } from 'vuex'
/*
@2 - And fetch the data in your store :
removeFromTheCart({ commit }, { index, price }) {
  console.log('index', index, 'price', price);
}
*/
export default {
  data () {
    return {
      myData: {
        title: '',
        url: ''
      }
    }
  },
  mounted () {
    this.$store.dispatch('loadTest')
  },
  computed: {
    ...mapState({
      /* websites: state => state.store_db.websites, */
      status: state => state.store_my.status
    }),
    ...mapGetters(['getData'])
  },
  methods: {
    addItem (title, url) {
      console.log('method ok')
      console.log(title, url)
      this.$store.dispatch('addItem', {
        'title': title,
        'url': url
      })
    }
  }
}
</script>

<style ></style>
