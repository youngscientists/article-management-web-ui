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
    font: string;
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
  fonts: {
    primary: string;
  };
}
export interface IThemeColors {
  [color: string]: string;
}
export interface ThemeOptions {
  defaults?: { defaultTheme: string; themes: { [name: string]: ITheme } };
}

export default class ThemeStore {
  public currentTheme: string = '';
  public themes: { [name: string]: ITheme } = {};

  public Init(options?: ThemeOptions) {
    if (options) {
      if (options.defaults) {
        this.currentTheme = options.defaults.defaultTheme;
        this.themes = options.defaults.themes;
      }
    }
  }

  public get CurrentThemeColors() {
    return this.themes[this.currentTheme].colors;
  }

  public get CurrentThemeDefaults() {
    return this.themes[this.currentTheme].defaults;
  }

  public get CurrentThemeFonts() {
    return this.themes[this.currentTheme].fonts;
  }

  public changeCurrent(themeName: string) {
    this.currentTheme = themeName;
  }

  public changeCurrentColor(input: { key: string; value: string }) {
    this.themes[this.currentTheme].colors[input.key] = input.value;
  }

  public changeCurrentFont(input: { key: string; value: string }) {
    this.themes[this.currentTheme].fonts[input.key] = input.value;
  }

  public changeBadgeCurrentColor(input: { key: string; value: string }) {
    this.themes[this.currentTheme].badgeColors.status[input.key] = input.value;
  }

  public changeNotificationCurrentColor(input: { key: string; value: string }) {
    this.themes[this.currentTheme].notificationColors[input.key] = input.value;
  }

  public toggleInvertImageIcon() {
    this.themes[this.currentTheme].invertImageIcon = !this.themes[this.currentTheme].invertImageIcon;
  }

  public changeTheme(input: { themeName: string; value: ITheme }) {
    if (this.themes[input.themeName].canBeModified) {
      this.themes[input.themeName] = input.value;
    } else {
      console.warn(`[${input.themeName}] Cannot be Modified!`);
    }
  }
}
