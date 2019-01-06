/* ============
 * Actions for the auth module
 * ============
 *
 * The actions that are available on the
 * auth module.
 */

import Vue from "vue"
import store from "@/store"
import * as types from "./mutation-types"
import APIProxy from "../../proxies/APIProxy"

store

export const check = ({ commit }) => {
	commit(types.CHECK)
}

export const requestCode = ({ commit }, email) => {
	new APIProxy()
		.requestCode(email)
		.then(response => response.json())
		.then(response => {
			commit
			console.log(response)
			if (response.error) Vue.toasted.show(`Error: ${response.error}`)
			else if (response.email) {
				commit(types.CHECK, true)
				Vue.toasted.show(`Code sent to ${response.email}`, {
					icon: "envelope"
				})
			} else {
				commit(types.CHECK, false)
				Vue.toasted.global.error_message()
			}
		})
		.catch(e => {
			console.log(e)
		})
}

export const login = ({ commit }, user) => {
	new APIProxy()
		.login(user.email, user.code)
		.then(response => response.json())
		.then(response => {
			commit
			console.log(response)
			if (response.error) Vue.toasted.show(`Error: ${response.error.error}`)
			else if (response.authToken) {
				commit(types.LOGIN, response.authToken)
				Vue.toasted.show(`Logged in as ${user.email}`, {
					icon: "envelope"
				})
				Vue.router.push({
					name: "home.index"
				})
			} else {
				commit(types.CHECK, false)
				Vue.toasted.global.error_message()
			}
		})
		.catch(e => {
			console.log(e)
		})
}

/**
 * Check if the current session is still valid. Will require a new endpoint
 *
 * @param {Object} o
 * @param {Function} o.commit
 * @param {String} authToken
 */
export const verifyToken = ({ commit }, authToken) => {
	new APIProxy()
		.fetchArticles(authToken)
		.then(response => response.json())
		.then(response => {
			if (response instanceof Array) {
				commit(types.LOGIN, authToken)
				Vue.toasted.show(`Logged in with previous session`, {
					icon: "envelope"
				})
				Vue.router.push({
					name: "home.index"
				})
			} else {
				Vue.toasted.show(`Please log in again`, {
					icon: "user"
				})
				commit(types.LOGOUT)
			}
		})
}

export const logout = ({ commit }) => {
	commit(types.LOGOUT)
	Vue.router.push({
		name: "login.index"
	})
}

export default {
	check,
	requestCode,
	login,
	logout,
	verifyToken
}
