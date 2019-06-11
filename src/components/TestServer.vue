<template>
  <div>
    <h2>Testing  db</h2>
    <br>
    <!--
    @1-You can send an object as your payload, like this :
    <button class="btn" @click="removeFromTheCart({ index, price: item.price })">Remove</button>
    -->
    <table border=1>
      <tbody>
        <tr>
          <td><input placeholder="titolo" v-model="myData.title"></td>
          <td><p>Url input: {{ myData.title }}</p></td>
        </tr>
        <tr>
          <td><input placeholder="url" v-model="myData.url"></td>
          <!--<button @click="addItemAction({ title: myData.title, url: myData.url })">Add site</button>-->
          <button @click="addItem(myData.title, myData.url)">Add site</button>
          <!--<p > {this.userAge = age } </p>-->
          <td></td>
        </tr>
      </tbody>
    </table>
    <p>Websites Title</p>
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
      websites: state => state.store_db.websites
    })
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