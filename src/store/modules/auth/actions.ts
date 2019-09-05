/* ============
 * Actions for the auth module
 * ============
 *
 * The actions that are available on the
 * auth module.
 */

import store from '@/store';
import router from '@/router';
import { apiCall } from '@/utility/api/api';
import { Password } from 'suf-password';

export const requestPin = (state, payload) => {
  if (Password.Validate(payload.email, [{ type: 'customRegex', customRegex: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/ }]).passed) {
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
export const requestToken = (state, payload) => {
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

export default {
  requestPin,
  requestToken
};
