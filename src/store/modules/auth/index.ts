/* ============
 * Auth Module
 * ============
 */

import actions from './actions';
import getters from './getters';
import mutations from './mutations';
import state, { AuthState } from './state';
import { Module } from 'vuex';
import { RootState } from '@/store';

const AuthStoreModule: Module<AuthState, RootState> = {
  namespaced: true,
  actions,
  getters,
  mutations,
  state
};

export default AuthStoreModule;
