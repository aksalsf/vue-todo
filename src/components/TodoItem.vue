<template>
  <div
    class="p-4 d-flex justify-content-between align-items-center"
    v-for="(todo, index) in todos"
    :key="index"
    :class="{
      'bg-primary text-white rounded mb-3': !todo.isDone,
      'alert alert-primary text-decoration-line-through': todo.isDone,
    }"
  >
    <h3 class="fs-6 fw-bold mb-0">
      {{ todo.activity }}
    </h3>
    <aside>
      <button
        class="btn btn-link shadow-none"
        :class="{ disabled: todo.isDone, 'text-light': !todo.isDone }"
        @click="didTodo(index)"
      >
        <fa icon="check" />
      </button>
      <button
        class="btn btn-link shadow-none"
        :class="{ 'text-light': !todo.isDone }"
        @click="removeTodo(index)"
      >
        <fa icon="trash" />
      </button>
    </aside>
  </div>
</template>

<script>
export default {
  name: "TodoItem",
  props: {
    todos: {
      type: Array,
      default: [],
    },
  },
  methods: {
    removeTodo(index) {
      this.$emit("removeTodo", index);
    },
    didTodo(index) {
      this.$emit("didTodo", index);
    },
  },
  emits: ["removeTodo", "didTodo"],
};
</script>

<style></style>
