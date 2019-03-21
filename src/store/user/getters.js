/* ============
 * Getters for the account module
 * ============
 *
 * The getters that are available on the
 * account module.
 */

export default {
    senior(state) {
        return state.level === "Senior" || state.level === "Admin"
    }
};