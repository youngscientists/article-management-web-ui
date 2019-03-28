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
	[Types.EDITORS](state, editors) {
		state.editors = editors
	},
	[Types.ACTIVEEDITOR](state, editor) {
		if (editor) {
			if (editor.error) {
				return
			}
			state.activeEditor = null
			state.activeEditor = editor
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
		editor
	}) {
		state.updating = isUpdating

		if (state.updating) {
			state.loadingToast = Vue.toasted.global.loading_message({
				message: "Updating editor..."
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

		if (editor) {
			const t = state.editors.find(a => a.id == editor.id)
			const index = state.editors.indexOf(t)
			state.editors[index] = editor
		}
	},
	[Types.FETCHING_EDITOR](state, {
		done,
		success,
		message
	}) {
		state.fetchingEditor = !done

		if (!done) {
			state.loadingToast = Vue.toasted.global.loading_message({
				message: "Fetching editor..."
			})
		} else if (done && success) {
			state.loadingToast ? state.loadingToast.goAway(0) : null
		} else if (done && !success && message) {
			Vue.toasted.show(`Error: ${message}`)
		} else {
			Vue.toasted.global.error_message()
		}
	},
	[Types.CLEAR](state) {
		state.editors = []
	}
}