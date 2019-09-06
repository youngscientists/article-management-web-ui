/* ============
 * Vuex Store
 * ============
 *
 * The store of the application.
 *
 * http://vuex.vuejs.org/en/index.html
 */

import Vuex from 'vuex';
import createLogger from 'vuex/dist/logger';

// Modules
import account from './modules/account';
import auth from './modules/auth';
import theme from './modules/theme';
import articles from './modules/articles';
import Vue from 'vue';
import { AuthState } from './modules/auth/state';
import { ThemeState } from './modules/theme/state';
import { ArticlesSate } from './modules/articles/state';

Vue.use(Vuex);

const debug = process.env.NODE_ENV !== 'production';

export interface RootState {
  auth: AuthState;
  theme: ThemeState;
  articles: ArticlesSate;
}

export default new Vuex.Store<RootState>({
  /**
   * Assign the modules to the store.
   */
  modules: {
    account, // REVIEW  Can be removed ?
    auth,
    theme,
    articles
  },

  /**
   * If strict mode should be enabled.
   */
  strict: debug,

  /**
   * Plugins used in the store.
   */
  plugins: debug ? [createLogger()] : []
});
