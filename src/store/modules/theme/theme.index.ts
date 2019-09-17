import { Module, VuexModule, Mutation } from 'vuex-module-decorators';
import store from '@/store';
import { customThemeDefaults, darkTheme, lightTheme } from './theme.defaults';
export interface ITheme {
  name: string;
  canBeModified: boolean;
  colors: {
    shadow: string;
    primaryBg: string;
    primary: string;
    primaryHover: string;
    primaryFocus: string;
    primaryFont: string;
    secondaryFont: string;
    link: string;
    mutedFont: string;
    icon: string;
    muted: string;
    border: string;
    button: string;
    mutedHover: string;
    cards: string;
    secondary: string;
    [key: string]: string;
  };
  invertImageIcon: boolean;
  defaults: {
    color: string;
    background: string;
    scrollBar: { track: string; thumb: string; thumbHover: string };
    shadow: string;
    loader: {
      primary: string;
      accent: string;
    };
    checkboxSwitch: {
      checked: string;
      unchecked: string;
    };
    sidebarActive: string;
  };
  badgeColors: {
    default: string;
    status: {
      [color: string]: string;
    };
  };
  notificationColors: {
    fontColor: string;
    warning: string;
    error: string;
    info: string;
    success: string;
  };
}
export interface IThemeColors {
  [color: string]: string;
}

@Module({ name: 'theme', store: store })
export default class ThemeModule extends VuexModule {
  currentTheme: string = 'light';
  themes: { [name: string]: ITheme } = {
    dark: darkTheme,
    light: lightTheme,
    custom: customThemeDefaults
  };

  get CurrentThemeColors() {
    return this.themes[this.currentTheme].colors;
  }

  get CurrentThemeDefaults() {
    return this.themes[this.currentTheme].defaults;
  }
  @Mutation
  changeCurrent(themeName: string) {
    this.currentTheme = themeName;
  }
  @Mutation
  changeCurrentColor(input: { key: string; value: string }) {
    this.themes[this.currentTheme].colors[input.key] = input.value;
  }
  @Mutation
  changeBadgeCurrentColor(input: { key: string; value: string }) {
    this.themes[this.currentTheme].badgeColors.status[input.key] = input.value;
  }
  @Mutation
  changeNotificationCurrentColor(input: { key: string; value: string }) {
    this.themes[this.currentTheme].notificationColors[input.key] = input.value;
  }
  @Mutation
  toggleInvertImageIcon() {
    this.themes[this.currentTheme].invertImageIcon = !this.themes[this.currentTheme].invertImageIcon;
  }
  @Mutation
  changeTheme(input: { themeName: string; value: ITheme }) {
    if (this.themes[input.themeName].canBeModified) {
      this.themes[input.themeName] = input.value;
    } else {
      console.warn(`[${input.themeName}] Cannot be Modified!`);
    }
  }
}
