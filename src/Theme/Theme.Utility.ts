import store from '@/store';
import { StringToRGB } from 's.color';
import { Theme } from '@/store/modules/theme/state';
export function SetThemeStyle() {
  let themeElement = document.getElementById('themeStyleTag');
  if (themeElement === null) {
    const styleEl = document.createElement('style');
    styleEl.id = 'themeStyleTag';
    document.body.appendChild(styleEl);
    themeElement = styleEl;
  }

  const themeColors: Theme['colors'] = store.getters['theme/getCurrentThemeColors'];
  const themeDefaults: Theme['defaults'] = store.getters['theme/getCurrentThemeDefaults'];
  const shadow = StringToRGB(themeColors[themeDefaults.shadow]);
  let styleContent = `
*::-webkit-scrollbar {
  width: 10px !important;
  height: 10px !important;
}
*::-webkit-scrollbar-track {
  background: ${themeColors[themeDefaults.scrollBar.track]};
}
*::-webkit-scrollbar-thumb {
  background: ${themeColors[themeDefaults.scrollBar.thumb]};
  border-radius: 1rem;
}
*::-webkit-scrollbar-thumb:hover {
  background: ${themeColors[themeDefaults.scrollBar.thumbHover]};
}
* {
  color: ${themeColors[themeDefaults.color]};
}
.t-shadow {
  box-shadow: 0 0 2rem 0 rgba(${shadow.r * 255}, ${shadow.g * 255}, ${shadow.b * 255}, .15) !important;
}
.t-shadow-sm {
  box-shadow: 0 0 .5rem rgba(${shadow.r * 255}, ${shadow.g * 255}, ${shadow.b * 255}, .075) !important;
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