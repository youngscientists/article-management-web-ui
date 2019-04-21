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

	{
		path: "/articles/:id",
		name: "home.article",
		component: () => import("@/views/Home/Article.vue"),

		// If the user needs to be authenticated to view this page
		meta: {
			title: "View Article",
			auth: true
		}
	},

	{
		path: "/editors",
		name: "home.editors",
		component: () => import("@/views/Home/Editors.vue"),

		// If the user needs to be authenticated to view this page
		meta: {
			title: "Editors",
			auth: true
		}
	},

	{
		path: "/neweditor",
		name: "editors.create",
		component: () => import("@/views/Home/NewEditor.vue"),

		// If the user needs to be authenticated to view this page
		meta: {
			title: "New Editor",
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
	},
	{
		path: '/*',
		redirect: '/articles',
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