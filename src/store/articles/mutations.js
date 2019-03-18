/* ============
 * Mutations for the user module
 * ============
 *
 * The mutations that are available on the
 * user module.
 */

/* eslint-disable no-param-reassign */
import * as Types from "./mutation-types"
import Vue from "vue"

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
		state.fetching = isFetching
	},

	[Types.UPDATING](state, {
		isUpdating,
		success,
		message,
		article
	}) {
		state.updating = isUpdating

		if (state.updating) {
			state.loadingToast = Vue.toasted.global.loading_message({
				message: "Updating article..."
			})
		} else if (success) {
			Vue.toasted.show(message, {
				icon: "cloud_done"
			})
		} else if (message && !success) {
			Vue.toasted.show(`Error: ${message}`)
		} else {
			Vue.toasted.global.error_message()
		}

		if (!state.updating) {
			state.loadingToast.goAway(0)
		}

		if (article) {
			const t = state.articles.find(a => a.id == article.id)
			const index = state.articles.indexOf(t)
			state.articles[index] = article
		}
	}
}