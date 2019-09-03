<template>
  <div class="row justify-content-center">
    <div class="col-lg-5 col-md-7">
      <div class="card bg-secondary shadow border-0">
        <div class="card-body px-lg-5 py-lg-5">
          <div class="text-center text-muted mb-4">
            <h1>Login</h1>
          </div>
          <form role="form">
            <base-input
              class="input-group-alternative mb-3"
              placeholder="Email"
              addon-left-icon="ni ni-email-83"
              v-model="model.email"
            ></base-input>

            <base-input
              v-if="isCodeFieldVisible"
              class="input-group-alternative"
              placeholder="Code"
              type="password"
              addon-left-icon="ni ni-lock-circle-open"
              v-model="model.password"
            ></base-input>

            <div class="text-center">
              <base-button
                type="primary"
                class="my-4"
                @click="isCodeFieldVisible ? $router.push({name: 'home'}) : isCodeFieldVisible = true"
              >{{isCodeFieldVisible ? 'Enter AMS' : 'Request Code'}}</base-button>
            </div>
          </form>
        </div>
      </div>
      <div class="row mt-3">
        <div class="col-6">
          <a href="#/login-help" class="text-light">
            <small>Need Help?</small>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "login",
  data() {
    return {
      model: {
        email: "",
        password: ""
      },
      isCodeFieldVisible: false
    };
  }
};
</script>
<style>
</style>


