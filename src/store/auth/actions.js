/* ============
 * Actions for the auth module
 * ============
 *
 * The actions that are available on the
 * auth module.
 */

import Vue from "vue"
import * as types from "./mutation-types"
import APIProxy from "../../proxies/APIProxy"

const postLogin = user => {
	Vue.toasted.show(`Welcome, ${user.name}`, {
		icon: "how_to_reg"
	})
	Vue.router.push({
		name: "home.index"
	})
}

export const check = ({ commit }) => {
	commit(types.CHECK)
}

export const requestCode = ({ commit }, email) => {
	const toast = Vue.toasted.show(`Requesting code...`, {
		icon: "sync",
		className: "rotating"
	})
	new APIProxy()
		.requestCode(email)
		.then(response => response.json())
		.then(response => {
			commit
			console.log(response)
			if (response.error) {
				commit(types.CHECK, false)
				toast.goAway(0)
				Vue.toasted.show(`${response.error}`, {
					icon: "error"
				})
			} else if (response.email) {
				commit(types.CHECK, true)
				toast.goAway(0)
				Vue.toasted.show(`Code sent to ${response.email}`, {
					icon: "mail"
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
	const toast = Vue.toasted.global.loading_message({ message: "Logging in..." })
	new APIProxy()
		.login(user.email, user.code)
		.then(response => response.json())
		.then(response => {
			commit
			console.log(response)
			if (response.error) Vue.toasted.show(`Error: ${response.error.error}`)
			else if (response.user) {
				commit(types.LOGIN, response)
				toast.goAway(0)
				postLogin(response.user)
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
	const toast = Vue.toasted.global.loading_message({
		message: "Verifying previous session..."
	})
	new APIProxy()
		.verifyToken(authToken)
		.then(response => response.json())
		.then(response => {
			toast.goAway(0)
			if (response.user) {
				const user = response.user
				commit(types.LOGIN, { user, authToken })
				postLogin(response.user)
			} else {
				Vue.toasted.show(`Please log in again`, {
					icon: "domain_disabled"
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
