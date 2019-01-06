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

export default {
	[CHECK](state, isChecked) {
		state.codeRequested = isChecked
	},
	[LOGIN](state, authToken) {
		state.authenticated = true
		state.authToken = authToken
		Cookies.set("authToken", authToken, {
			expires: 1
		})
	}
}
