/* ============
 * Actions for the auth module
 * ============
 *
 * The actions that are available on the
 * auth module.
 */

import Vue from 'vue';
import store from '@/store';
import * as types from './mutation-types';
import router from '@/router';
import { apiCall } from '@/utility/api/api';

export const requestPin = (state, payload) => {
  apiCall('auth/pin', { email: payload.email })
    .then(res => {
      return res.json();
    })
    .then(data => {
      if (data.success === true) {
        store.commit('auth/pin', true);
      } else {
        // TODO display error notification.
      }
    });
};
export const requestToken = (state, payload) => {
  apiCall('auth/token', { email: payload.email, pin: payload.pin })
    .then(res => {
      return res.json();
    })
    .then(data => {
      if (data.token) {
        store.commit('auth/pin', data.token);
        router.push('home');
      } else {
        // TODO display error notification.
      }
    });
};

export default {
  requestPin,
  requestToken
};
