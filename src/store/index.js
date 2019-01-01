/* ============
 * Vuex Store
 * ============
 *
 * The store of the application.
 *
 * http://vuex.vuejs.org/en/index.html
 */

import Vuex from 'vuex';
import Vue from "vue"

// Modules
import user from './user';
import auth from './auth'

const debug = process.env.NODE_ENV !== 'production';

Vue.use(Vuex)
export default new Vuex.Store({
    /**
     * Assign the modules to the store.
     */
    modules: {
        user,
        auth
    },

    /**
     * If strict mode should be enabled.
     */
    strict: debug,
});