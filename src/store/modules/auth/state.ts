/* ============
 * State of the auth module
 * ============
 *
 * The initial state of the auth module.
 */

export interface AuthState {
  authenticated: boolean;
  pinRequested: boolean;
}

const state: AuthState = {
  authenticated: false,
  pinRequested: false
};

export default state;
