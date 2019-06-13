<template>
    <div class="component">
      <h3>Parent Component</h3>
      <p>Data -> name, age -> returned vaue: {{ name }} </p>
      <p>Methods -> Parent -> changeName<p>
      <button @click="changeName">changeName</button>
      <p>Child1 -> props -> myName (type and default: 'lucas'), methods -> switchName, resetName, </p>
      <p>eventBus $on ('ageWasEdited', (age) => {this.userAge = age } </p>
      <br>
      <hr>
      <Component1
        :myName="name"
        @nameWasReset="name = $event"
        :resetFn="resetName">
      </Component1>
      <hr>
      <Component2 :userAge="age"></Component2>
    </div>
</template>

<script>

import ChildComponent1 from './ChildComponent1.vue'
import ChildComponent2 from '././ChildComponent2.vue'

export default {
  props: ['userAge'],
  data: function () {
    return {
      name: 'start name',
      age: 21
    }
  },
  computed: {

  },
  methods: {
    changeName: function () {
      this.name = 'methods -> changeName'
    },
    resetName: function () {
      this.name = 'Child 1 -> restFn -> Parent -> methods -> resetName'
    }
  },
  components: {
    Component1: ChildComponent1,
    Component2: ChildComponent2
  }
}
</script>

<style ></style>
