/* ============
 * Theme Module
 * ============
 */

import actions from './actions';
import getters from './getters';
import mutations from './mutations';
import state, { ThemeState } from './state';
import { Module } from 'vuex';
import { RootState } from '@/store';

const ThemeStoreModule: Module<ThemeState, RootState> = {
  namespaced: true,
  actions,
  getters,
  mutations,
  state
};

export default ThemeStoreModule;
