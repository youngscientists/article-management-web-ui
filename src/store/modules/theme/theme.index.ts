import { Module, VuexModule } from 'vuex-module-decorators';

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
}

@Module({ name: 'theme' })
export default class ThemeModule extends VuexModule {
  private currentTheme: string = 'default';
  private themes: { [name: string]: ITheme } = {
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
