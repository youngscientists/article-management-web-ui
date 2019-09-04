/* ============
 * Mutations for the auth module
 * ============
 *
 * The mutations that are available on the
 * account module.
 */

import Vue from 'vue';
import { pin, token } from './mutation-types';

/* eslint-disable no-param-reassign */
export default {
  [pin](state: any, payload: any) {
    state.pinRequested = payload;
  },
  [token](state: any, payload: any) {
    state.token = payload;
  }
};
