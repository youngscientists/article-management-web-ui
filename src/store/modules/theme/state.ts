/* ============
 * State of the auth module
 * ============
 *
 * The initial state of the auth module.
 */

export interface ITheme {
  primaryBg: string;
  primaryFont: string;
  accentFont: string;
  primary: string;
  [key: string]: string;
}

const DefaultTheme: ITheme = {
  primaryBg: '#222',
  primary: '#699',
  primaryFont: '#eee',
  accentFont: '#eff'
};

export default DefaultTheme;
