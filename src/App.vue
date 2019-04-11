<template>
  <div id="app">
    <v-header></v-header>
    <transition name="fade" mode="out-in" duration="200">
      <router-view/>
    </transition>
  </div>
</template>

<script>
import VHeader from "@/components/Header";
export default {
  name: "ArticleManagement",
  components: {
    VHeader
  },
  computed: {}
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
  cursor: pointer;
}

$transition: all 0.3s ease-in-out;

.form-group {
  margin-bottom: 12px;
}

.active-article {
  overflow: hidden;
}

input,
textarea,
select {
  padding: 12px;
  margin-top: 12px;
  max-width: 100%;
  min-width: 100%;
  margin: 0 auto;
  box-sizing: border-box;
  font-family: sans-serif;
  -webkit-transition: $transition;
  -moz-transition: $transition;
  -ms-transition: $transition;
  -o-transition: $transition;
  transition: $transition;
  outline: none;
  border: 1px solid #dddddd;
  background: white;

  &:focus {
    box-shadow: 0 0 5px rgba(209, 54, 25, 1);
    border: 1px solid rgba(209, 54, 25, 1);
  }
}

.fade-enter-active,
.fade-leave-active {
  transition-duration: 0.3s;
  transition-property: opacity;
  transition-timing-function: ease;
}

.fade-enter,
.fade-leave-active {
  opacity: 0;
}

@-webkit-keyframes rotating /* Safari and Chrome */ {
  from {
    -webkit-transform: rotate(0deg);
    -o-transform: rotate(0deg);
    transform: rotate(0deg);
  }
  to {
    -webkit-transform: rotate(360deg);
    -o-transform: rotate(360deg);
    transform: rotate(360deg);
  }
}
@keyframes rotating {
  from {
    -ms-transform: rotate(0deg);
    -moz-transform: rotate(0deg);
    -webkit-transform: rotate(0deg);
    -o-transform: rotate(0deg);
    transform: rotate(0deg);
  }
  to {
    -ms-transform: rotate(360deg);
    -moz-transform: rotate(360deg);
    -webkit-transform: rotate(360deg);
    -o-transform: rotate(360deg);
    transform: rotate(360deg);
  }
}
.rotating i {
  -webkit-animation: rotating 2s linear infinite;
  -moz-animation: rotating 2s linear infinite;
  -ms-animation: rotating 2s linear infinite;
  -o-animation: rotating 2s linear infinite;
  animation: rotating 2s linear infinite;
}

.toasted-container.bottom-left {
  display: block !important;
}
</style>
