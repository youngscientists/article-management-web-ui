<template>
  <div class="row justify-content-center">
    <div class="col-lg-5 col-md-7 bg-transparent">
      <div v-theme="{background: 'primaryBg', shadow: true}" class="card border-0 overflow-hidden">
        <div class="card-body px-lg-5 py-lg-5">
          <div class="text-center text-muted mb-4">
            <h1 v-theme="{color: 'primary'}">Login</h1>
          </div>
          <form role="form">
            <base-input
              class="input-group-alternative mb-3"
              placeholder="Email"
              addon-left-icon="ni ni-email-83"
              v-model="model.email"
              @keypress.enter="((store.dispatch('auth/requestPin', {email: model.email, vm: ref})))"
            ></base-input>

            <base-input
              v-if="GetAuth.pinRequested"
              class="input-group-alternative"
              placeholder="Code"
              type="password"
              addon-left-icon="ni ni-lock-circle-open"
              v-model="model.pin"
              @keypress.enter="(store.dispatch('auth/requestToken', {email: model.email, pin: model.pin, vm: ref}))"
            ></base-input>

            <div class="text-center">
              <base-button
                type="primary"
                class="my-4"
                @click="GetAuth.pinRequested ? (store.dispatch('auth/requestToken', {email: model.email, pin: model.pin, vm: ref})) : (store.dispatch('auth/requestPin', {email: model.email, vm: ref}))"
              >{{GetAuth.pinRequested ? 'Enter AMS' : 'Request Pin'}}</base-button>
            </div>
          </form>
        </div>
      </div>
      <div class="row mt-3">
        <div class="col-6">
          <a href="#/login-help" v-theme="{color: 'muted', hover: {color: 'mutedHover'}}">
            <small>Need Help?</small>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import Vue from "vue";
import store from "@/store";
import Component from "vue-class-component";

@Component({
  computed: {
    GetAuth() {
      return store.state.auth;
    }
  },
  data() {
    return {
      model: {
        email: "",
        pin: ""
      },
      isPinFieldVisible: false,
      store,
      ref: this
    };
  }
})
export default class Login extends Vue {
  name: "login";
}
</script>
<style>
</style>


