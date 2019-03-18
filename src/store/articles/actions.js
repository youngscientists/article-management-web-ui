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

export const list = ({
	commit
}, query) => {
	if (store.state.articles.fetching) return
	commit(types.FETCHING, true)
	const loadingToast = Vue.toasted.global.loading_message({
		message: "Fetching articles..."
	})
	if (!store.state.auth.authToken) Vue.toasted.global.error_message()
	new APIProxy()
		.fetchArticles(store.state.auth.authToken, query)
		.then(response => response.json())
		.then(response => {
			console.log(response)
			if (response.error) Vue.toasted.show(`Error: ${response.error.error}`)
			else if (response instanceof Array) {
				commit(types.ARTICLES, response)
				loadingToast.goAway(0)
			} else {
				Vue.toasted.global.error_message()
			}
		})
		.catch(e => {
			console.log(e)
		})
		.then(() => commit(types.FETCHING, false))
}

/**
 * Assign an article to an editor
 * 
 * @param {*} commit the commit function
 * @param {*} id id of article to assign
 * @param {*} email email of editor
 */
export const assign = ({
	commit
}, {
	id,
	email
}) => {
	commit,
	id,
	email

	commit(types.UPDATING, {
		isUpdating: true
	})

	if (!store.state.auth.authToken) {
		commit(types.UPDATING, {
			isUpdating: false,
			success: false
		})
		return
	}
	new APIProxy()
	.updateArticle(store.state.auth.authToken, id, {
		editor: {
			email
		}
	})
	.then(response => response.json())
	.then(response => {
		if (response.error) {
			commit(types.UPDATING, {
				isUpdating: false,
				success: false,
				message: response.error.error
			})
		} else if (response.message) {
			console.log(response.message)
			commit(types.UPDATING, {
				isUpdating: false,
				success: true,
				message: `Successfully updated ${response.message.title}`
			})
		} else {
			console.log("else")
			commit(types.UPDATING, {
				isUpdating: false,
				success: true,
			})
		}
	})
	.catch(e => {
		console.log(e)
	})
}

export const update = ({
	commit
}, {
	id,
	status
}) => {

	commit(types.UPDATING, {
		isUpdating: true
	})

	if (!store.state.auth.authToken) {
		commit(types.UPDATING, {
			isUpdating: false,
			success: false
		})
		return
	}
	new APIProxy()
		.updateArticle(store.state.auth.authToken, id, {
			status
		})
		.then(response => response.json())
		.then(response => {
			if (response.error) {
				commit(types.UPDATING, {
					isUpdating: false,
					success: false,
					message: response.error.error
				})
			} else if (response.message) {
				console.log(response.message)
				commit(types.UPDATING, {
					isUpdating: false,
					success: true,
					message: `Successfully updated ${response.message.title}`
				})
			} else {
				console.log("else")
				commit(types.UPDATING, {
					isUpdating: false,
					success: true,
				})
			}
		})
		.catch(e => {
			console.log(e)
		})
}


export const setActive = ({
	commit
}, article) => {
	if (!article) Vue.toasted.global.error_message()
	commit(types.ACTIVEARTICLE, article)
}

export default {
	list,
	setActive,
	assign,
	update
}