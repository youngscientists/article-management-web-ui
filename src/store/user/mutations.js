/* ============
 * Mutations for the user module
 * ============
 *
 * The mutations that are available on the
 * user module.
 */

import { SET } from "./mutation-types"

/* eslint-disable no-param-reassign */
export default {
	[SET](state, user) {
		Object.assign(state, user)
	}
}
