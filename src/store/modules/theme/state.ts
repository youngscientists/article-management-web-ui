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
  icon: string;
  cards: string;
  [key: string]: string;
}

const DefaultTheme: ITheme = {
  primaryBg: '#222',
  primary: '#699',
  primaryFont: '#eee',
  accentFont: '#5E72E4',
  icon: '#eee',
  cards: '#444'
};

export default DefaultTheme;
