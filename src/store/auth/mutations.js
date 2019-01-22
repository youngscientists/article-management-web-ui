/* ============
 * Mutations for the user module
 * ============
 *
 * The mutations that are available on the
 * user module.
 */

/* eslint-disable no-param-reassign */
import { CHECK, LOGIN, LOGOUT } from "./mutation-types"
import Cookies from "js-cookie"
import store from "@/store"

export default {
	[CHECK](state, isChecked) {
		state.codeRequested = isChecked
	},
	[LOGIN](state, { user, authToken }) {
		state.authenticated = true
		state.authToken = authToken
		store.dispatch("user/setUser", user)
		Cookies.set("authToken", authToken, {
			expires: 1
		})
	},
	[LOGOUT](state) {
		state.authenticated = false
		state.authToken = null
		Cookies.remove("authToken")
	}
}
