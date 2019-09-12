import { error } from '@/components/NotificationPlugin/presets';
import router from '@/router';
import { apiPOST } from '@/utility/api/api';
import Vue from 'vue';
import { Action, Module, Mutation, VuexModule } from 'vuex-module-decorators';

@Module({ name: 'auth' })
export default class AuthModule extends VuexModule {
  authenticated = false;
  pinRequested = false;

  @Action
  requestPin(payload: Payload) {
    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(payload.email)) {
      apiPOST('auth/pin', { email: payload.email })
        .then(res => res.json())
        .then(data => {
          if (data.success === true) {
            this.pin(true);
          } else {
            payload.vm.$notify(error('Editor Not Found!'));
          }
        })
        .catch(err => {
          console.warn(err);
        });
    } else {
      payload.vm.$notify(error('Please enter a valid email address!'));
    }
  }

  @Action
  requestToken(payload: Payload) {
    apiPOST('auth/token', { email: payload.email, pin: payload.pin })
      .then(res => !res.ok || router.push('home'))
      .catch(err => payload.vm.$notify(error(`That didn't work, please try again.`)));
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
