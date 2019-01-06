/* ============
 * Actions for the Articles
 * ============
 *
 * The actions that are available on the
 * Articles.
 */

import Vue from "vue"
import store from "@/store"
import * as types from "./mutation-types"
import APIProxy from "../../proxies/APIProxy"

store, Vue

export const list = ({ commit }) => {
	const loadingToast = Vue.toasted.show(`Fetching articles...`)
	new APIProxy()
		.fetchArticles(store.state.auth.authToken)
		.then(response => response.json())
		.then(response => {
			console.log(response)
			if (response.error) Vue.toasted.show(`Error: ${response.error.error}`)
			else if (response instanceof Array) {
				commit(types.ARTICLES, response)
				loadingToast.goAway(0)
				Vue.toasted.show("Fetched all articles")
			} else {
				Vue.toasted.global.error_message()
			}
		})
		.catch(e => {
			console.log(e)
		})
}

export default {
	list
}
