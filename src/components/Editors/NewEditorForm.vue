<template>
  <form class="form-inline" @submit.prevent="handleSubmit">
    <label for="email">Email</label>
    <input type="email" id="email" placeholder="Enter email" name="email" v-model="email">
    <label for="name">Name</label>
    <input type="text" id="name" placeholder="Enter editor name" name="name" v-model="name">

    <label for="level">Level</label>
    <select name="level" v-model="level">
      <option value="Senior">Senior</option>
      <option value="Junior">Junior</option>
    </select>
    <material-button icon="add" text="Create"></material-button>
  </form>
</template>

<script>
import MaterialButton from "../Buttons/MaterialButton.vue";

export default {
  name: "NewEditorForm",
  components: {
    MaterialButton
  },
  data() {
    return {
      email: "",
      name: "",
      level: ""
    };
  },
  methods: {
    handleSubmit() {
      this.$store.dispatch("editors/create", {
        email: this.email,
        name: this.name,
        level: this.level
      });
    }
  }
};
</script>

<style lang="scss" scoped>
input {
  margin-top: 8px;
  margin-bottom: 16px;
}
</style>
