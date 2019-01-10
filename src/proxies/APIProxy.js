import BaseProxy from "./Proxy"

const debug = true

export default class APIProxy extends BaseProxy {
	/**
	 * The constructor for the ArtistProxy.
	 *
	 * @param {Object} parameters The query parameters.
	 */
	constructor(
		parameters = {
			callback: ""
		}
	) {
		super(
			debug
				? "http://localhost:8000"
				: "https://ysj-article-management.herokuapp.com",
			parameters
		)
	}

	/**
	 * Request a code from the server
	 *
	 * @param {String} email
	 */
	requestCode(email) {
		const data = {
			email
		}

		Object.assign(this.parameters, data)
		console.log(data)
		return this.submit(
			"get",
			`${this.endpoint}/authentication/authenticate`,
			data
		)
	}

	/**
	 * Method used to login.
	 *
	 * @param {String} email The username.
	 * @param {String} code The password.
	 *
	 * @returns {Promise} The result in a promise.
	 */
	login(email, key) {
		const data = {
			email,
			key
		}

		Object.assign(this.parameters, data)
		return this.submit(
			"get",
			`${this.endpoint}/authentication/authenticate`,
			data
		)
	}

	verifyToken(authToken) {
		const data = {
			authToken
		}

		Object.assign(this.parameters, data)
		return this.submit(
			"get",
			`${this.endpoint}/authentication/authenticate`,
			data
		)
	}

	fetchArticles(authToken, q) {
		const data = {
			authToken,
			q
		}
		Object.assign(this.parameters, data)
		return this.submit("get", `${this.endpoint}/articles/list`)
	}
}
