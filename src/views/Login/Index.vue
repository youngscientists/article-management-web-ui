<template>
  <div>
    <v-layout>
      <v-card contextual-style="dark">
        <span slot="header">Login</span>
        <div slot="body">
          <form @submit.prevent="login()">
            <div class="form-group">
              <input v-model="user.email" type="email" placeholder="Email" class="form-control">
            </div>
            <div class="form-group">
              <input
                v-if="state.codeRequested"
                v-model="user.code"
                type="password"
                placeholder="Password"
                class="form-control"
              >
            </div>
            <div class="form-group">
              <IntermediateButton>{{buttonText}}</IntermediateButton>
            </div>
          </form>
        </div>
        <div slot="footer">
          No account?
          <a @click="modals.help = true">Help</a>
        </div>
      </v-card>
    </v-layout>

    <modal v-if="modals.help" @close="modals.help = false">
      <h1 slot="header">Help</h1>
      <div slot="body">
        <p>
          Welcome to the
          <a href="https://ysjournal.com" target="_blank">Young Scientists Journal</a> article management system. To gain access, you must be registered with the
          journal as an editor. If you are not an editor and wish to become one, please send an email to:
          <code>chief.editor@ysjournal.com</code>
          <br>
        </p>
        <p>
          If you are already an editor but your email is not recognised,
          notify the production team immediately on the
          <code>#productionteam</code>
          <a href="https://ysjournal.slack.com" target="_blank">Slack</a> channel.
        </p>
      </div>
    </modal>
  </div>
</template>

<script>
import VLayout from "@/layouts/Minimal.vue";
import VCard from "@/components/Card.vue";
import Modal from "@/components/Modal.vue";
import IntermediateButton from "@/components/IntermediateButton.vue";

export default {
  name: "LoginIndex",
  components: {
    VLayout,
    VCard,
    Modal,
    IntermediateButton
  },
  computed: {
    buttonText() {
      return "Request Code";
    }
  },
  /**
   * The data that can be used by the page.
   *
   * @returns {Object} The view-model data.
   */
  data() {
    return {
      state: {
        codeRequested: false
      },
      user: {
        email: null,
        code: null
      },
      modals: {
        help: false
      }
    };
  },
  /**
   * The methods the page can use.
   */
  methods: {
    login() {
      if (!this.$data.state.codeRequested) this.requestCode();
    },
    /**
     * Request a code for the user
     *     */
    requestCode() {
      console.log(this.$data.user.email);
      this.$store.dispatch("auth/requestCode", this.$data.user.email);
    }
  }
};
</script>

<style>
</style>
