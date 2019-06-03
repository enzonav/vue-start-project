<template>
  <div class='wrapper'>
    <h2>Contacts</h2>
    <div class="row">
      <h1 v-on:click="test()">{{title}}</h1>
      <div class="col-md-12"><section_title :title="title" @title-changed="changeTitle">
        </section_title>
        </div>
    </div>
  </div>
</template>

<script>
var title = ''
Vue.component('create_new_entry', {
  template: '<',
  data: function () {
    return {
      title: title
    }
  },
  methods: {
    changeTitle (newTitle) {
      this.title = newTitle
    }
  }
})
Vue.component('section_title', {
  template: '<div><h1 v-on:click="test()">{{title}}</h1><input type="text" class="form-control" v-model="innerTitle"></div>',
  props: ['title'],
  data: function () {
    return {
      innerTitle: this.title
    }
  },
  methods: {
    test: function () {
      console.log(this)
    }
  },
  watch: {
    title (val) {
      this.innerTitle = val
    },
    innerTitle (val) {
      this.$emit('title-changed', val)
    }
  }
})

export default {
  components: {
    create_new_entry,
    section_title
  },
  name: 'Contacts'
}

</script>

<style ></style>
