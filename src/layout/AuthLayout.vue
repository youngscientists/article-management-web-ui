<template>
  <div class="main-content" v-theme="{background: 'secondary'}">
    <!-- Header -->
    <div class="header py-7 py-lg-8" v-theme="{background: 'primary'}">
      <img class="login-logo" src="img/brand/logo.png" />
      <div class="separator separator-bottom separator-skew zindex-100">
        <svg
          x="0"
          y="0"
          viewBox="0 0 2560 100"
          preserveAspectRatio="none"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
        >
          <polygon
            v-theme="{fill: 'secondary'}"
            class="fill-default"
            points="2560 0 2560 100 0 100"
          />
        </svg>
      </div>
    </div>
    <!-- Page content -->
    <div class="container mt--8 pb-5">
      <slide-y-up-transition mode="out-in" origin="center top">
        <router-view></router-view>
      </slide-y-up-transition>
    </div>
  </div>
</template>
<script>
import { SlideYUpTransition } from "vue2-transitions";
export default {
  name: "auth-layout",
  components: {
    SlideYUpTransition
  },
  data() {
    return {
      year: new Date().getFullYear(),
      showMenu: false
    };
  }
};
</script>
<style lang="sass" scoped>
.main-content
  height: 100%
  width: 100%
  position: absolute
.login-logo
  width: 10rem !important
  height: 10rem !important
  position: absolute
  top: 20px
  left: 20%
  transition: left 200ms ease
@media screen and ( max-width: 1200px )
  .login-logo
    left: 10%
@media screen and ( max-width: 1000px )
  .login-logo
    left: 2%
@media screen and ( max-width: 800px )
  .login-logo
    left: 4%
    width: 4rem !important
    height: 4rem !important
  .header
    margin-bottom: 3rem

    



</style>

