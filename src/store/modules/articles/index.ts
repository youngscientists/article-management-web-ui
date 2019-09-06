/* ============
 * Articles Module
 * ============
 */

import actions from './actions';
import getters from './getters';
import mutations from './mutations';
import state, { ArticlesSate } from './state';
import { Module } from 'vuex';
import { RootState } from '@/store';

const AuthStoreModule: Module<ArticlesSate, RootState> = {
  namespaced: true,
  actions,
  getters,
  mutations,
  state
};

export default AuthStoreModule;
