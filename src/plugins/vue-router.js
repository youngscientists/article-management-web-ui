/* ============
 * Vue Router
 * ============
 *
 * The official Router for Vue.js. It deeply integrates with Vue.js core
 * to make building Single Page Applications with Vue.js a breeze.
 *
 * http://router.vuejs.org/en/index.html
 */

import Vue from "vue"
import VueRouter from "vue-router"
import routes from "@/routes"
import store from "@/store"

Vue.use(VueRouter)

export const router = new VueRouter({
	routes,
	scrollBehavior(to, from, savedPosition) {
		let position = {
			x: 0,
			y: 0
		}
		// Keep scroll position when using browser buttons
		if (savedPosition) {
			position = savedPosition
		}

		// Workaround for transitions scrolling to the top of the page
		// However, there are still some problems being fixed by the vue team
		return new Promise((resolve, reject) => {
			reject
			setTimeout(() => {
				resolve(position)
			}, 400)
		})
	}
})
router.beforeEach((to, from, next) => {
	store.commit("updateTitle", to.meta.title)
	if (to.matched.some(m => m.meta.auth) && !store.state.auth.authenticated) {
		/*
		 * If the user is not authenticated and visits
		 * a page that requires authentication, redirect to the login page
		 */
		next({
			name: "login.index",
			params: {
				from
			}

		})
	} else if (
		to.matched.some(m => m.meta.guest) &&
		store.state.auth.authenticated
	) {
		/*
		 * If the user is authenticated and visits
		 * an guest page, redirect to the dashboard page
		 */
		next({
			name: "home.index"
		})
	} else {
		next()
	}
})



Vue.router = router

export default {
	router
}