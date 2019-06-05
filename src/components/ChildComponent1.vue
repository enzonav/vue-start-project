<template>
  <div class="component">
    <p>methods -> switchName: {{ switchName() }} </p>
    <p>Child1: $emit.om(ageWasEdited, age  return this.age) Parent: data -> age: {{ userAge }} </p>
    <p>valori e funzioni esportati a Parent,
    <p>values :myName="name" @nameWasReset="name = $event" :resetFn="resetName"</p>
    <button @click="resetName">resetName</button>
    <button @click="resetFn()">reserFn</button>
  </div>
</template>

<script>

import { eventBus } from '../main'
export default {
  props: {
    myName: {
      type: String,
      // required: true
      default: 'Lucas'
    },
    resetFn: Function,
    userAge: Number
  },
  methods: {
    switchName: function () {
      return this.myName.split('').reverse().join('')
    },
    resetName: function () {
      this.myName = 'Child1 -> methods -> resetName -> $emit nameWasReset'
      this.$emit('nameWasReset', this.myName)
    }
  },
  created () {
    eventBus.$on('ageWasEdited', (age) => {
      this.userAge = age
    })
  }
}
</script>

<style scoped> </style>
