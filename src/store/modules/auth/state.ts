/* ============
 * State of the auth module
 * ============
 *
 * The initial state of the auth module.
 */

export interface AuthState {
  authenticated: boolean;
  pinRequested: boolean;
  token: string;
}

const state: AuthState = {
  authenticated: false,
  pinRequested: false,
  token: ''
};

export default state;
