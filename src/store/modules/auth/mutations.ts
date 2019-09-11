/* ============
 * Mutations for the auth module
 * ============
 *
 * The mutations that are available on the
 * account module.
 */

import { MutationTree } from 'vuex';
import { pin } from './mutation-types';
import { AuthState } from './state';

const mutations: MutationTree<AuthState> = {
  [pin](state: AuthState, payload: any) {
    state.pinRequested = payload;
  }
};

export default mutations;
