/* ============
 * Mutations for the user module
 * ============
 *
 * The mutations that are available on the
 * user module.
 */

/* eslint-disable no-param-reassign */
import * as Types from "./mutation-types"

export default {
	[Types.ARTICLES](state, articles) {
		state.articles = articles
	},
	[Types.ACTIVEARTICLE](state, article) {
		if (article) {
			state.activeArticle = null
			state.activeArticle = article
		}
	},
	[Types.FETCHING](state, isFetching) {
		state.fetching - isFetching
	}
}
