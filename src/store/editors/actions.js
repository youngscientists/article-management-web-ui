/* ============
 * Actions for the Editors
 * ============
 *
 * The actions that are available on the
 * Editorss.
 */

import Vue from "vue"
import store from "@/store"
import * as types from "./mutation-types"
import APIProxy from "../../proxies/APIProxy"

export const list = ({
	commit
}, query) => {
	//if (store.state.editors.fetching) return
	commit(types.FETCHING, {
		isFetching: true,
		query
	})
	const loadingToast = Vue.toasted.global.loading_message({
		message: "Fetching editors..."
	})
	if (!store.state.auth.authToken) Vue.toasted.global.error_message()
	new APIProxy()
		.fetchEditors(store.state.auth.authToken, query)
		//
		.then(response => {
			console.log(response)
			if (response.error) Vue.toasted.show(`Error: ${response.error}`)
			else if (response instanceof Array) {
				commit(types.EDITORS, response)
				loadingToast.goAway(0)
			} else {
				Vue.toasted.global.error_message()
			}
			commit(types.FETCHING, {
				isFetching: false
			})
		})
		.catch(e => {
			console.log(e)
			commit(types.FETCHING, {
				isFetching: false
			})
		})
}

export const get = ({
	commit
}, id) => {
	if (!store.state.auth.authToken) Vue.toasted.global.error_message()

	// Check 'cache'
	const cachedArticle = store.state.editors.editors.find(a => a.id == id)
	if (cachedArticle) {
		commit(types.FETCHING_EDITOR, {
			success: true,
			done: true
		})
		commit(types.ACTIVEEDITOR, cachedArticle)
		return
	}

	commit(types.FETCHING_EDITOR, {
		done: false
	})

	new APIProxy()
		.getArticle(store.state.auth.authToken, id)
		//
		.then(response => {
			commit(types.ACTIVEEDITOR, response)
			commit(types.FETCHING_EDITOR, {
				success: true,
				done: true
			})
		})
		.catch(e => {
			console.log(e)
		})
		.then(() =>
			commit(types.FETCHING_EDITOR, {
				success: false,
				done: true
			})
		)
}

/**
 * Assign an editor to an editor
 *
 * @param {*} commit the commit function
 * @param {*} id id of editor to assign
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
	//
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
				success: true
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
		//
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
					success: true
				})
			}
		})
		.catch(e => {
			console.log(e)
		})
}

export const setActive = ({
	commit
}, editor) => {
	if (!editor) Vue.toasted.global.error_message()
	commit(types.ACTIVEEDITOR, editor)
}

export const create = ({
	commit
}, editor) => {
	commit
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
		.createEditor(store.state.auth.authToken, editor)
		//
		.then(response => {
			if (response.error) {
				commit(types.UPDATING, {
					isUpdating: false,
					success: false,
					message: response.error.error
				})
			} else if (response.message) {
				commit(types.UPDATING, {
					isUpdating: false,
					success: true,
					message: `Successfully created ${response.message.name}`
				})
			} else {
				commit(types.UPDATING, {
					isUpdating: false,
					success: true
				})
			}
		})
		.catch(e => {
			console.log(e)
		})
}

export const clear = ({
	commit
}) => {
	commit(types.CLEAR)
}

export const openCreate = ({
	commit
}) => {
	commit

	Vue.router.push({
		name: "editors.create"
	})
}

export default {
	list,
	setActive,
	assign,
	update,
	get,
	clear,
	create,
	openCreate
}