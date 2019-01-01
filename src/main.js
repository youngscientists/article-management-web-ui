import Vue from "vue"


import "./plugins/vuex"
import {
    router
} from "./plugins/vue-router"
import "./plugins/vuex"


/**
 * Import the store
 */
import store from "./store"

/**
 * Import main app component
 */
import App from "./App"


Vue.config.productionTip = false;
new Vue({
    /**
     * Bind the Vue instance to the HTML.
     */
    el: '#app',

    /**
     * The router.
     */
    router,

    /**
     * The Vuex store.
     */
    store,

    /**
     * Will render the application.
     *
     * @param {Function} h Will create an element.
     */
    render: h => h(App),
})