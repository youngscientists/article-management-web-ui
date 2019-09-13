import store from '@/store';
import { StringToRGB } from 's.color';
import { ITheme } from '@/store/modules/theme/theme.index';
import { getModule } from 'vuex-module-decorators';
import themeModule from '@/store/modules/theme/theme.index';

class ThemeData {
  constructor(public customTheme: ITheme, public currentTheme: string) {}
}

export function InitTheme() {
  GetTheme();
  UpdateTheme();
}

export function GetTheme() {
  const theme = getModule(themeModule, store);
  const SavedThemeData = window.localStorage.getItem('SavedThemeData');
  console.log('SavedThemeData', SavedThemeData);
  if (SavedThemeData === null) {
    SaveTheme();
  } else {
    const Data: ThemeData = JSON.parse(SavedThemeData);
    theme.changeCurrent(Data.currentTheme);
    // TODO mutate custom theme
  }
}
export function SaveTheme() {
  const theme = getModule(themeModule, store);
  window.localStorage.setItem('SavedThemeData', JSON.stringify(new ThemeData(theme.themes.custom, theme.currentTheme)));
}

export function UpdateTheme() {
  const theme = getModule(themeModule, store);
  let themeElement = document.getElementById('themeStyleTag');
  if (themeElement === null) {
    const styleEl = document.createElement('style');
    styleEl.id = 'themeStyleTag';
    document.body.appendChild(styleEl);
    themeElement = styleEl;
  }

  const themeColors: ITheme['colors'] = theme.CurrentThemeColors;
  const themeDefaults: ITheme['defaults'] = theme.CurrentThemeDefaults;
  const shadow = StringToRGB(themeColors[themeDefaults.shadow]);
  let styleContent = `
body::-webkit-scrollbar {
  width: 10px !important;
  height: 10px !important;
}
body::-webkit-scrollbar-track {
  background: ${themeColors[themeDefaults.scrollBar.track]};
}
body::-webkit-scrollbar-thumb {
  background: ${themeColors[themeDefaults.scrollBar.thumb]};
  border-radius: 1rem;
}
body::-webkit-scrollbar-thumb:hover {
  background: ${themeColors[themeDefaults.scrollBar.thumbHover]};
}
body, b, h1, h2, h3, h4, h5, h6, .h1, .h2, .h3, .h4, .h5, .h6, span {
  color: ${themeColors[themeDefaults.color]};
}
body {
  background: ${themeColors[themeDefaults.background]};
}
.loader {
  border: 5px solid ${themeColors[themeDefaults.loader.primary]};
  border-top: 5px solid ${themeColors[themeDefaults.loader.accent]};
  border-radius: 50%;
  background: #0000;
  width: 40px;
  height: 40px;
  animation: spin 1.5s linear infinite;
  margin: 50px;
}
@keyframes spin {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}
.t-shadow {
  box-shadow: 0 0 2rem 0 rgba(${shadow.r * 255}, ${shadow.g * 255}, ${shadow.b * 255}, .15) !important;
}
.t-shadow-sm {
  box-shadow: 0 0 .5rem rgba(${shadow.r * 255}, ${shadow.g * 255}, ${shadow.b * 255}, .15) !important;
}
.t-shadow-lg {
  box-shadow: 0 0 3rem rgba(${shadow.r * 255}, ${shadow.g * 255}, ${shadow.b * 255}, .175) !important;
}
`;
  delete themeColors[themeDefaults.shadow];
  for (const key in themeColors) {
    if (themeColors.hasOwnProperty(key)) {
      const color = themeColors[key];
      styleContent += `.t-bg-${key},
.t-h-bg-${key}:hover,
.t-f-bg-${key}:active,
.t-af-${key}::after {
  background-color: ${color} !important;
}
`;
      styleContent += `.t-c-${key},
.t-h-c-${key}:hover,
.t-a-c-${key}:active,
.t-p-c-${key}::placeholder,
.t-p-h-c-${key}:hover::placeholder,
.t-p-f-c-${key}:focus::placeholder {
  color: ${color} !important;
}
`;
      styleContent += `.t-f-${key},
.t-h-f-${key}:hover,
.t-f-f-${key}:active {
  fill: ${color} !important;
}
`;
      styleContent += `.t-b-${key},
.t-h-b-${key}:hover,
.t-f-b-${key}:active {
  border-color: ${color} !important;
}
`;
    }
  }
  themeElement.textContent = styleContent;
}
