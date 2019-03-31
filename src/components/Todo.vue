<template>

  <div class='wrapper'>
    <h2>To Do List</h2>
    <div>
      <ul>
        <li v-for="todo in todos"
        :class="{ completed: todo.completed }"
        @click="toggleTodo(id)"
        @dblclick="deleteTodo(todo.id)">{{ todo.task }}</li>
      </ul>
    </div>
    <div>
      <form @submit.prevent="addTodo">
        <input type="text" v-model="task" placeholder="Add new Task" />
      </form>
    </div>
  </div>

</template>

<script>

export default {
  name: 'TodoList',
  computed: {
    todos () {
      return this.$store.getters.getTodos
    }
  },
  methods: {
    toggleTodo: function (id) {
      this.$store.dispatch('toggleTodo', id)
    },
    deleteTodo: function (id) {
      this.$store.dispatch('deleteTodo', id)
    }
  }
}

</script>

<style></style>
