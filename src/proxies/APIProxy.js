import BaseProxy from "./Proxy";

export default class APIProxy extends BaseProxy {
    /**
     * The constructor for the ArtistProxy.
     *
     * @param {Object} parameters The query parameters.
     */
    constructor(parameters = {
        callback: ""
    }) {
        super('https://script.google.com/macros/s/AKfycbxGlDi_tCifqCC-tBfJ5mK1VDNi2t6Qa8ClNexIeOr1Ll59nodb/exec/', parameters);
    }

    requestCode(email) {

        const data = {
            email
        }

        Object.assign(this.parameters, data)
        this.parameters.path = "authentication/authenticate"

        return this.submit('get', `${this.endpoint}`, data)
    }

    /**
     * Method used to login.
     *
     * @param {String} username The username.
     * @param {String} password The password.
     *
     * @returns {Promise} The result in a promise.
     */
    login({
        username,
        password
    }) {
        const data = {
            username,
            password,
            client_id: process.env.VUE_APP_API_CLIENT_ID,
            client_secret: process.env.VUE_APP_API_CLIENT_SECRET,
            grant_type: 'password',
            scope: '',
        };

        return this.submit('post', `${this.endpoint}/token`, data);
    }

    /**
     * Method used to register the user.
     *
     * @param {Object} data The register data.
     *
     * @returns {Promise} The result in a promise.
     */
    register(data) {
        return this.submit('post', `${this.endpoint}/register`, data);
    }
}