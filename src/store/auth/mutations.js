/* ============
 * Mutations for the user module
 * ============
 *
 * The mutations that are available on the
 * user module.
 */

/* eslint-disable no-param-reassign */
import { CHECK, LOGIN } from "./mutation-types"
import Cookies from "js-cookie"
import store from "@/store"

export default {
	[CHECK](state, isChecked) {
		state.codeRequested = isChecked
	},
	[LOGIN](state, { user, authToken }) {
		state.authenticated = true
		state.authToken = authToken
		store.commit("user/setUser", user)
		Cookies.set("authToken", authToken, {
			expires: 1
		})
	}
}
