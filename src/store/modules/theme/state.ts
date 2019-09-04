/* ============
 * State of the auth module
 * ============
 *
 * The initial state of the auth module.
 */

interface ITheme {
  shadow: string;
  [key: string]: string;
}

const DefaultTheme: ITheme = {
  shadow: '#673ab7',
  primaryBg: '#222',
  primary: '#c00',
  primaryHover: '#d00',
  primaryFont: '#eee',
  link: '#59f',
  accentFont: '#673ab7',
  icon: '#eee',
  cards: '#444',
  secondary: '#4C1717'
};

export default DefaultTheme;
