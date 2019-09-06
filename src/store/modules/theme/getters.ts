import { ThemeState } from './state';
import { RootState } from '@/store';
import { GetterTree } from 'vuex';

/* ============
 * Getters for the theme module
 * ============
 *
 * The getters that are available on the
 * theme module.
 */

const getters: GetterTree<ThemeState, RootState> = {
  getAll: function(state: ThemeState) {
    const CleanObject = {};
    for (const key in state) {
      if (state.hasOwnProperty(key)) {
        CleanObject[key] = state[key];
      }
    }
    return CleanObject;
  }
};

export default getters;
