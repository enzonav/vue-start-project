<template>
  <div class="component">
    <h3>Child Component2</h3>
    <p>Child2: props: userAge, editAge ($emit(ageWasEdited, this.userAge)</p>
    <button @click="editAge">editAge</button>
  </div>
</template>

<script>

import { eventBus } from '../main'
console.log(this)

export default {
  props: ['userAge'],
  methods: {
    editAge: function () {
      eventBus.$emit('ageWasEdited', this.userAge)
    }
  }
}
</script>

<style scoped></style>
