/* ============
 * Actions for the user module
 * ============
 *
 * The actions that are available on the
 * user module.
 */

import * as types from "./mutation-types"
import Vue from "vue"

export const setUser = ({ commit }, user) => {
	commit(types.SET, user)
}

export const show = () => {
	Vue.router.push({
		name: "home.user"
	})
}

export default {
	setUser,
	show
}
