import BaseProxy from "./Proxy"

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
    const API_PRODUCTION = "https://ysj-article-management.herokuapp.com"
    const API_DEV = "http://localhost:8000"
    super(
      window.location.hostname === "localhost" ? API_DEV : API_PRODUCTION,
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

  getArticle(authToken, id) {
    const data = {
      authToken,
      id
    }
    Object.assign(this.parameters, data)
    return this.submit("get", `${this.endpoint}/articles/get`)
  }

  getStates(authToken) {
    const data = {
      authToken
    }
    Object.assign(this.parameters, data)
    return this.submit("get", `${this.endpoint}/states/list`)
  }

  updateArticle(authToken, id, props) {
    const data = {
      authToken
    }

    const payload = {
      id,
      properties: {
        ...props
      }
    }

    console.log(payload)

    Object.assign(this.parameters, data)
    return this.submit("post", `${this.endpoint}/articles/update`, payload)
  }

  fetchEditors(authToken, q) {
    const data = {
      authToken,
      q
    }
    Object.assign(this.parameters, data)
    return this.submit("get", `${this.endpoint}/editors/list`)
  }

  createEditor(authToken, editor) {
    const data = {
      authToken
    }

    const payload = editor

    Object.assign(this.parameters, data)
    return this.submit("post", `${this.endpoint}/editors/create`, payload)
  }
}