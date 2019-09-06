/* ============
 * Actions for the auth module
 * ============
 *
 * The actions that are available on the
 * auth module.
 */

import Vue from 'vue';
import store, { RootState } from '@/store';
import router from '@/router';
import { apiCall } from '@/utility/api/api';
import { AuthState } from './state';
import { ActionTree, ActionContext, Store } from 'vuex';

interface Payload {
  email: string;
  pin: string;
  vm: Vue;
}

export const requestPin = function(this: Store<RootState>, injectee: ActionContext<AuthState, RootState>, payload: Payload) {
  if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(payload.email)) {
    apiCall('auth/pin', { email: payload.email })
      .then(res => {
        return res.json();
      })
      .then(data => {
        if (data.success === true) {
          store.commit('auth/pin', true);
        } else {
          payload.vm.$notify({ type: 'warning', message: 'Editor Not Found!', icon: 'ni ni-bell-55 ' });
        }
      });
  } else {
    payload.vm.$notify({ type: 'warning', message: 'Please enter a valid email address!', icon: 'ni ni-bell-55 ' });
  }
};
export const requestToken = function(this: Store<RootState>, injectee: ActionContext<AuthState, RootState>, payload: Payload) {
  apiCall('auth/token', { email: payload.email, pin: payload.pin })
    .then(res => {
      return res.json();
    })
    .then(data => {
      if (data.token) {
        store.commit('auth/token', data.token);
        router.push('home');
      } else {
        payload.vm.$notify({ type: 'warning', message: "That didn't work, please try again.", icon: 'ni ni-bell-55 ' });
      }
    });
};

const AuthActions: ActionTree<AuthState, RootState> = {
  requestPin,
  requestToken
};

export default AuthActions;
