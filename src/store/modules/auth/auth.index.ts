import { Module, VuexModule, Action, Mutation } from 'vuex-module-decorators';
import { apiPOST } from '@/utility/api/api';
import Vue from 'vue';
import router from '@/router';

@Module({ name: 'auth' })
export default class AuthModule extends VuexModule {
  authenticated = false;
  pinRequested = false;

  @Action
  requestPin(payload: Payload) {
    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(payload.email)) {
      apiPOST('auth/pin', { email: payload.email })
        .then(res => {
          return res.json();
        })
        .then(data => {
          if (data.success === true) {
            this.pin(true);
          } else {
            payload.vm.$notify({ type: 'warning', message: 'Editor Not Found!', icon: 'ni ni-bell-55' });
          }
        })
        .catch(err => {
          console.warn(err);
        });
    } else {
      payload.vm.$notify({ type: 'warning', message: 'Please enter a valid email address!', icon: 'ni ni-bell-55' });
    }
  }
  @Action
  requestToken(payload: Payload) {
    apiPOST('auth/token', { email: payload.email, pin: payload.pin })
      .then(res => {
        return res.json();
      })
      .then(data => {
        if (data.token) {
          router.push('home');
        } else {
          payload.vm.$notify({ type: 'warning', message: "That didn't work, please try again.", icon: 'ni ni-bell-55' });
        }
      })
      .catch(err => {
        console.warn(err);
      });
  }
  @Mutation
  pin(payload: boolean) {
    this.pinRequested = payload;
  }
}
interface Payload {
  email: string;
  pin: string;
  vm: Vue;
}
