<template>
  <div id="app">
    <v-header></v-header>
    <router-view/>
  </div>
</template>

<script>
import VHeader from "@/components/Header";
export default {
  name: "ArticleManagement",
  components: {
    VHeader
  }
};
</script>

<style lang="scss">
* {
  font-family: sans-serif;
  box-sizing: border-box;
}

body,
html {
  margin: 0;
  padding: 0;
  background-color: #ee3239;
  font-size: 1rem;
}

a,
a:visited {
  color: #1eaedb;
}

$transition: all 0.3s ease-in-out;

.form-group {
  margin-bottom: 12px;
}

input,
textarea,
select {
  padding: 12px;
  margin-top: 12px;
  min-width: 100%;
  max-width: 100%;
  margin: 0 auto;
  box-sizing: border-box;
  font-family: sans-serif;
  font-size: 1.2em;
  -webkit-transition: $transition;
  -moz-transition: $transition;
  -ms-transition: $transition;
  -o-transition: $transition;
  transition: $transition;
  outline: none;
  border: 1px solid #dddddd;

  &:focus {
    box-shadow: 0 0 5px rgba(209, 54, 25, 1);
    border: 1px solid rgba(209, 54, 25, 1);
  }
}
</style>
