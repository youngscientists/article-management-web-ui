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
			if (article.error) {
				return
			}
			state.activeArticle = article
		}
	},
	[Types.FETCHING](state, {
		isFetching,
		query
	}) {
		state.fetching = isFetching
		if (query) {
			state.query = query
		}
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
			const t = state.articles.findIndex(a => a.id == article.id)
			state.articles[t] = article


		}
	},
	[Types.FETCHING_ARTICLE](state, {
		done,
		success,
		message
	}) {
		state.fetchingArticle = !done

		if (!done) {
			state.loadingToast = Vue.toasted.global.loading_message({
				message: "Fetching article..."
			})
		} else if (done && success) {
			state.loadingToast ? state.loadingToast.goAway(0) : null
		} else if (done && !success && message) {
			Vue.toasted.show(`Error: ${message}`)
		} else {
			Vue.toasted.global.error_message()
		}
	},
	[Types.FETCHING_STATES](state, {
		done,
		success,
		message,
		states
	}) {
		state.fetchingArticle = !done

		if (!done) {
			//state.loadingToast = Vue.toasted.global.loading_message({
			//	message: "Fetching states..."
			//})
		} else if (done && success) {
			//state.loadingToast ? state.loadingToast.goAway(0) : null
		} else if (done && !success && message) {
			Vue.toasted.show(`Error: ${message}`)
		} else {
			Vue.toasted.global.error_message()
		}

		if (states) {
			state.states = states
		}
	},
	[Types.STATES](state, states) {
		state.states = states
	}
}