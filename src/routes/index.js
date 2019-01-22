/* ============
 * Routes File
 * ============
 *
 * The routes and redirects are defined in this file.
 */

export default [
	// Home
	{
		path: "/articles",
		name: "home.index",
		component: () => import("@/views/Home/Index.vue"),

		// If the user needs to be authenticated to view this page
		meta: {
			title: "Home",
			auth: true
		}
	},

	// Login
	{
		path: "/",
		name: "login.index",
		component: () => import("../views/Login/Index.vue"),

		// If the user needs to be a guest to view this page.
		meta: {
			title: "Login",
			guest: true
		}
	},

	// User Page
	{
		path: "/me",
		name: "home.user",
		component: () => import("../views/Home/User.vue"),
		meta: {
			title: "Me",
			guest: false
		}
	}

	/*
    // Register
    {
        path: '/register',
        name: 'register.index',
        component: () => import('@/views/Register/Index.vue'),

        // If the user needs to be a guest to view this page.
        meta: {
            guest: true,
        },
    },

    {
        path: '/',
        redirect: '/home',
    },

    {
        path: '/*',
        redirect: '/home',
    },*/
]
