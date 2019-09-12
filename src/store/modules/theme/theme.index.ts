import { Module, VuexModule } from 'vuex-module-decorators';
import store from '@/store';
export interface ITheme {
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
  badgeColors: {
    default: string;
    status: {
      [color: string]: string;
    };
  };
}

@Module({ name: 'theme', store: store })
export default class ThemeModule extends VuexModule {
  currentTheme: string = 'default';
  themes: { [name: string]: ITheme } = {
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
      },
      badgeColors: {
        default: '#090909',
        status: {
          Rejected: '#b00',
          Published: '#0b0',
          'Ready to Publish': '#070',
          'Ethical Question': '#50a',
          Submitted: '#24a',
          'Failed Data Check': '#a50',
          'Revisions Requested': '#ba0',
          'Technical Review': '#90a',
          'In Review': '#07c',
          'Final Review': '#a25',
          '2nd Editor Required': '#f45',
          'Passed Data Check': '#2aa'
        }
      }
    },
    light: {
      name: 'Light Theme',
      canBeModified: false,
      colors: {
        shadow: '#b39ddb',
        primaryBg: '#fff',
        primary: '#c00',
        primaryHover: '#d00',
        primaryFont: '#222',
        link: '#59f',
        mutedFont: '#444',
        icon: '#333',
        muted: '#aaa',
        border: '#eee',
        button: '#222',
        mutedHover: '#bbb',
        cards: '#ccc',
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
      },
      badgeColors: {
        default: '#090909',
        status: {
          Rejected: '#b00',
          Published: '#0b0',
          'Ready to Publish': '#070',
          'Ethical Question': '#50a',
          Submitted: '#24a',
          'Failed Data Check': '#a50',
          'Revisions Requested': '#ba0',
          'Technical Review': '#90a',
          'In Review': '#07c',
          'Final Review': '#a25',
          '2nd Editor Required': '#f45',
          'Passed Data Check': '#2aa'
        }
      }
    }
  };

  get CurrentThemeColors() {
    const CleanObject: ITheme['colors'] = {};
    for (const key in this.themes[this.currentTheme].colors) {
      if (this.themes[this.currentTheme].colors.hasOwnProperty(key)) {
        CleanObject[key] = this.themes[this.currentTheme].colors[key];
      }
    }
    return CleanObject;
  }

  get CurrentThemeDefaults() {
    return this.themes[this.currentTheme].defaults;
  }
}
