/* ============
 * State of the Theme module
 * ============
 *
 * The initial state of the Theme module.
 */

export interface ThemeState {
  currentTheme: string;
  themes: { [name: string]: Theme };
}
export interface Theme {
  name: string;
  canBeModified: boolean;
  colors: { [key: string]: string };
  defaults: {
    color: string;
    background: string;
    scrollBar: { track: string; thumb: string; thumbHover: string };
    shadow: string;
    loader: {
      primary: string;
      accent: string;
    };
  };
}

const State: ThemeState = {
  currentTheme: 'default',
  themes: {
    default: {
      name: 'Dark Theme (default)',
      canBeModified: false,
      colors: {
        shadow: '#b39ddb',
        primaryBg: '#222',
        primary: '#c00',
        primaryHover: '#d00',
        primaryFont: '#eee',
        link: '#59f',
        mutedFont: '#aaa',
        icon: '#ddd',
        muted: '#777',
        border: '#555',
        button: '#333',
        mutedHover: '#555',
        cards: '#444',
        secondary: '#4C1717'
      },
      defaults: {
        color: 'primaryFont',
        scrollBar: {
          thumb: 'mutedHover',
          thumbHover: 'muted',
          track: 'primaryBg'
        },
        shadow: 'shadow',
        background: 'primary',
        loader: {
          accent: 'primary',
          primary: 'cards'
        }
      }
    }
  }
};

export default State;
