<template>
  <div class="d-flex gap-3">
    <input
      class="form-control shadow-none"
      type="text"
      :placeholder="input.placeholder"
      v-model="todoName"
      @keyup.enter="newTodo"
      autofocus
    />
    <button class="col btn btn-primary shadow-none" @click="newTodo">
      {{ button.text }}
    </button>
  </div>
</template>

<script>
export default {
  name: "CreateForm",
  data() {
    return {
      input: {
        placeholder: "Awesome activity in my beautiful day",
      },
      button: {
        text: "Create",
      },
      todoName: "",
    };
  },
  methods: {
    newTodo() {
      if (this.todoName) this.$emit("newTodo", this.todoName);
      this.todoName = "";
    },
  },
  emits: ["newTodo"],
};
</script>

<style></style>
