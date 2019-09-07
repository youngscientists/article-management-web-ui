import { ThemeState, Theme } from './state';
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
  getCurrentThemeColors: function(state: ThemeState) {
    const CleanObject: Theme['colors'] = {};
    for (const key in state.themes[state.currentTheme].colors) {
      if (state.themes[state.currentTheme].colors.hasOwnProperty(key)) {
        CleanObject[key] = state.themes[state.currentTheme].colors[key];
      }
    }
    return CleanObject;
  },
  getCurrentThemeDefaults: function(state: ThemeState) {
    return state.themes[state.currentTheme].defaults;
  }
};

export default getters;
