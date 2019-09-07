/* ============
 * Theme Module
 * ============
 */

import actions from './actions';
import getters from './getters';
import mutations from './mutations';
import State, { ThemeState } from './state';
import { Module } from 'vuex';
import { RootState } from '@/store';

const ThemeStoreModule: Module<ThemeState, RootState> = {
  namespaced: true,
  actions,
  getters,
  mutations,
  state: State
};

export default ThemeStoreModule;
