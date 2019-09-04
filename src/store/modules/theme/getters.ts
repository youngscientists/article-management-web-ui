/* ============
 * Getters for the auth module
 * ============
 *
 * The getters that are available on the
 * auth module.
 */

export default {
  getAll: state => {
    const CleanObject = {};
    for (const key in state) {
      if (state.hasOwnProperty(key)) {
        CleanObject[key] = state[key];
      }
    }
    return CleanObject;
  }
};
