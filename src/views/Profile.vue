<template>
  <base-header class="pb-4 pb-5 pt-4 pt-md-5" style="min-height: 100vh;">
    <div class="row">
      <div class="col">
        <div class="p-5 card" v-theme="{background: 'primaryBg'}">
          <div v-if="loading === true" class="d-flex justify-content-center">
            <div
              class="card p-4 d-flex justify-content-center"
              v-theme="{ background: 'primaryBg' }"
            >
              <div class="loader"></div>
            </div>
          </div>
          <div v-if="loading === false">
            <div class="p-4 d-flex justify-content-center">
              <div class="profile-img">
                <img
                  class="img-fluid rounded d-block"
                  alt="Profile"
                  src="https://cdna.artstation.com/p/assets/images/images/016/840/134/large/leonard-grosoli-render-01.jpg?1553674810"
                />
              </div>
            </div>

            <h3
              class="text-center m-2 p-1"
            >You are currently a {{Levels[level]}} member of the Editor team.</h3>
            <div>
              Name
              <base-input class="input-group-alternative m-3" placeholder="Name" v-model="name" />
            </div>
            <div>
              Email
              <base-input class="input-group-alternative m-3" placeholder="Email" v-model="email" />
            </div>
            <div>
              Subjects
              <base-input
                class="input-group-alternative m-3"
                placeholder="Subjects"
                v-model="subjects"
              />
            </div>
            <base-button type="primary" class="m-3" icon="fas fa-edit" @click="update">Update</base-button>
          </div>
        </div>
      </div>
    </div>
  </base-header>
</template>

<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";
import { apiGET, apiPUT, apiPOST } from "../utility/api/api";

import store from "@/store";
import { getModule } from "vuex-module-decorators";
import userModule from "@/store/modules/user/user.index";

enum Levels {
  AUTHOR,
  JUNIOR,
  SENIOR,
  ADMIN
}

@Component({
  data() {
    return {
      name: "",
      email: "",
      subjects: "",
      level: 0,
      Levels,
      loading: true
    };
  },
  methods: {
    update() {
      const user = getModule(userModule, store);
      user.Me({
        data: {
          name: this.$data.name,
          email: this.$data.email,
          subjects: this.$data.subjects,
          id: user.me.id,
          lastPinIssued: user.me.lastPinIssued,
          level: user.me.level
        },
        set: true
      });
    }
  },
  mounted() {
    const user = getModule(userModule, store);
    user.GetMe();
    const This = this;
    const setData = function() {
      if (user.me) {
        This.$data.name = user.me.name;
        This.$data.email = user.me.email;
        This.$data.subjects = user.me.subjects;
        This.$data.level = user.me.level;
        This.$data.loading = false;
      } else {
        setTimeout(() => {
          setData();
        }, 40);
      }
    };
    setTimeout(() => {
      setData();
    }, 10);
    // apiGET("teams")
    //   .then(res => res.json())
    //   .then(res => console.log("TEAM", res));
    // apiGET("editors")
    //   .then(res => res.json())
    //   .then(res => console.log("EDITOR", res));
    // apiGET("user/me")
    //   .then(res => res.json())
    //   .then(res => console.log("ME", res));
    // apiGET("editors/me")
    //   .then(res => res.json())
    //   .then(res => console.log("E/ME", res));
  }
})
export default class Profile extends Vue {}
</script>
<style lang="sass" scoped>
.profile-img
  max-height: 300px
  max-width: 300px
</style>
