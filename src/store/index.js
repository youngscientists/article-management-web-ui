/* ============
 * Vuex Store
 * ============
 *
 * The store of the application.
 *
 * http://vuex.vuejs.org/en/index.html
 */

import Vuex from "vuex"
import Vue from "vue"
import VuexPersist from 'vuex-persist'

// Modules
import user from "./user"
import auth from "./auth"
import articles from "./articles"
import editors from "./editors"

const debug = process.env.NODE_ENV !== "production"

const vuexPersist = new VuexPersist({
	key: 'ams',
	storage: localStorage
})

Vue.use(Vuex)
export default new Vuex.Store({
	/**
	 * Assign the modules to the store.
	 */
	modules: {
		user,
		auth,
		articles,
		editors
	},

	state: {
		title: String
	},

	mutations: {
		updateTitle(state, title) {
			state.title = title
		},
	},

	/**
	 * If strict mode should be enabled.
	 */
	strict: debug,

	plugins: [vuexPersist.plugin]

})