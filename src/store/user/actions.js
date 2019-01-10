/* ============
 * Actions for the user module
 * ============
 *
 * The actions that are available on the
 * user module.
 */

import * as types from "./mutation-types"

export const setUser = ({ commit }, user) => {
	commit(types.SET, user)
}

export default {
	setUser
}
