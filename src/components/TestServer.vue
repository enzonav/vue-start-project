<template>
  <div>
    <h2>Testing  db</h2>
    <h4>Testing  store {{ getStatus.message }}</h4>
    <br>
    <input placeholder="titolo" v-model="my_data.title">
    <p>Url input: {{ my_data.title }}</p>
    <input placeholder="url" v-model="my_data.url">
    <button @click="addItem(my_data.title, my_data.url)">Add site</button>
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
/* import { mapState, mapGetters } from 'vuex' */
import { mapGetters, mapActions } from 'vuex'
/*
@2 - And fetch the data in your store :
removeFromTheCart({ commit }, { index, price }) {
  console.log('index', index, 'price', price);
}
*/
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
    this.$store.dispatch('loadTest')
    /*
    test () {
      return this.loadTest
    }
    */
  },
  computed: {
    ...mapGetters(['getData', 'getStatus']),
    ...mapActions(['loadTest'])
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
    }
  }
}
</script>

<style ></style>
