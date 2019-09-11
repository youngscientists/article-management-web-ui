<template>
  <div class="row justify-content-center">
    <div class="col-lg-5 col-md-7">
      <div
        v-theme="{background: 'primaryBg', shadow: true}"
        class="card border-0"
      >
        <div class="card-body px-lg-5 py-lg-5">
          <div class="text-center text-muted mb-4">
            <h1 v-theme="{color: 'primary'}">
              Login
            </h1>
          </div>
          <form role="form">
            <base-input
              v-model="model.email"
              class="input-group-alternative mb-3"
              placeholder="Email"
              addon-left-icon="ni ni-email-83"
              @keypress.enter="((store.dispatch('auth/requestPin', {email: model.email, vm: ref})))"
            />

            <base-input
              v-if="GetAuth.pinRequested"
              v-model="model.pin"
              class="input-group-alternative"
              placeholder="Code"
              type="password"
              addon-left-icon="ni ni-lock-circle-open"
              @keypress.enter="(store.dispatch('auth/requestToken', {email: model.email, pin: model.pin, vm: ref}))"
            />

            <div class="text-center">
              <base-button
                type="primary"
                class="my-4"
                @click="GetAuth.pinRequested ? (store.dispatch('auth/requestToken', {email: model.email, pin: model.pin, vm: ref})) : (store.dispatch('auth/requestPin', {email: model.email, vm: ref}))"
              >
                {{ GetAuth.pinRequested ? 'Enter AMS' : 'Request Pin' }}
              </base-button>
            </div>
          </form>
        </div>
      </div>
      <div class="row mt-3">
        <div class="col-6">
          <a
            v-theme="{color: 'muted', hover: {color: 'mutedHover'}}"
            href="#/login-help"
          >
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


