/* ============
 * State of the Theme module
 * ============
 *
 * The initial state of the Theme module.
 */

export interface ThemeState {
  shadow: string;
  [key: string]: string;
}

const DefaultTheme: ThemeState = {
  shadow: '#673ab7',
  primaryBg: '#222',
  primary: '#c00',
  primaryHover: '#d00',
  primaryFont: '#eee',
  link: '#59f',
  accentFont: '#673ab7',
  icon: '#eee',
  muted: '#777',
  mutedHover: '#555',
  cards: '#444',
  secondary: '#4C1717'
};

export default DefaultTheme;
