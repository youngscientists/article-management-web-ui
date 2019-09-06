/* ============
 * Mutations for the auth module
 * ============
 *
 * The mutations that are available on the
 * account module.
 */

import { pin, token } from './mutation-types';
import { MutationTree } from 'vuex';
import { AuthState } from './state';

const mutations: MutationTree<AuthState> = {
  [pin](state: AuthState, payload: any) {
    state.pinRequested = payload;
  },
  [token](state: AuthState, payload: any) {
    state.token = payload;
  }
};

export default mutations;
