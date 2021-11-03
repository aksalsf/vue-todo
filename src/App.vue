<script setup>
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup

import Header from "./components/Header.vue";
import CreateForm from "./components/CreateForm.vue";
import TodoItem from "./components/TodoItem.vue";
</script>

<template>
  <main class="container">
    <section class="col-11 col-lg-8 mx-auto py-5">
      <Header />
      <CreateForm @new-todo="newTodo" />
      <div class="mt-3 d-flex flex-column">
        <todo-item
          :todos="computedTodos"
          @remove-todo="removeTodo"
          @did-todo="didTodo"
        ></todo-item>
      </div>
    </section>
  </main>
</template>

<script>
export default {
  data() {
    return {
      todos: [],
    };
  },
  mounted() {
    this.todos = JSON.parse(localStorage.getItem("todos"));
  },
  methods: {
    newTodo(todoName) {
      this.todos.unshift({
        activity: todoName,
        isDone: false,
      });
      this.saveToLocalStorage();
    },
    removeTodo(index) {
      this.todos.splice(index, 1);
      this.saveToLocalStorage();
    },
    didTodo(index) {
      this.todos[index].isDone = true;
      this.saveToLocalStorage();
    },
    saveToLocalStorage() {
      localStorage.setItem("todos", JSON.stringify(this.todos));
    },
  },
  computed: {
    computedTodos() {
      for (let i = 0; i < this.todos.length; i++) {
        if (this.todos[i].isDone) {
          this.todos.push(this.todos[i]);
          this.todos.splice(i, 1);
        }
      }
      return this.todos;
    },
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif !important;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
</style>
