<template>
  <div class="main-content" v-theme="{background: 'secondary'}">
    <!-- Header -->
    <div class="header py-8 py-lg-8" v-theme="{background: 'primary'}">
      <img class="login-logo" src="img/brand/logo.png" />
      <div
        class="separator separator-bottom separator-skew zindex-100 test"
        v-theme="{after: 'secondary'}"
      ></div>
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
    width: 7rem !important
    height: 7rem !important
  .header
    margin-bottom: 3rem
.test
  &::after
    position: absolute
    top: 20px
    left: 0

    content: ' '
    width: 200vw !important
    height: 200px !important
    z-index: 1000
    background: #000
    transform: rotate( -1deg ) !important

    



</style>

