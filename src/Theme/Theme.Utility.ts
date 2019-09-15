import store from '@/store';
import { StringToRGB } from 's.color';
import { ITheme, IThemeColors } from '@/store/modules/theme/theme.index';
import { getModule } from 'vuex-module-decorators';
import themeModule from '@/store/modules/theme/theme.index';
import Merge from 'deepmerge';
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
  if (SavedThemeData === null) {
    SaveTheme();
  } else {
    const Data: ThemeData = JSON.parse(SavedThemeData);
    theme.changeCurrent(Data.currentTheme);
    theme.changeTheme({ themeName: 'custom', value: Merge(theme.themes.custom, Data.customTheme) });
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

  const themeColors: IThemeColors = theme.CurrentThemeColors;
  const themeDefaults: ITheme['defaults'] = theme.CurrentThemeDefaults;
  let shadow = StringToRGB(themeColors[themeDefaults.shadow]);
  if (shadow === undefined) {
    shadow = { r: 0, a: 1, b: 0, g: 0 };
  }
  let styleContent = `
.active::before {
  border-color: ${themeColors[themeDefaults.sidebarActive]} !important;
}
.t-image-icon-invert {
  filter: invert(100%)
}
.t-checkboxSwitch {
  border: solid 1.5px ${themeColors[themeDefaults.checkboxSwitch.unchecked]} !important;
}
.t-checkboxSwitch::before {
  background: ${themeColors[themeDefaults.checkboxSwitch.unchecked]} !important;
}
input:checked + .t-checkboxSwitch {
  border: solid 1.5px ${themeColors[themeDefaults.checkboxSwitch.checked]} !important;
}
input:checked + .t-checkboxSwitch::before {
  background: ${themeColors[themeDefaults.checkboxSwitch.checked]} !important;
}
body::-webkit-scrollbar, div::-webkit-scrollbar {
  width: 10px !important;
  height: 10px !important;
}
body::-webkit-scrollbar-track, div::-webkit-scrollbar-track {
  background: ${themeColors[themeDefaults.scrollBar.track]};
}
body::-webkit-scrollbar-thumb, div::-webkit-scrollbar-thumb {
  background: ${themeColors[themeDefaults.scrollBar.thumb]};
  border-radius: 1rem;
}
body::-webkit-scrollbar-thumb:hover, div::-webkit-scrollbar-thumb:hover {
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
.t-shadow-none {
  box-shadow: none;
}
.t-shadow {
  box-shadow: 0 0 2rem 0 rgba(${shadow.r * 255}, ${shadow.g * 255}, ${shadow.b * 255}, .15) !important;
}
.t-shadow-sm {
  box-shadow: 0 0 .5rem rgba(${shadow.r * 255}, ${shadow.g * 255}, ${shadow.b * 255}, .2) !important;
}
.t-shadow-strong {
  box-shadow: 0 0 .5rem rgba(${shadow.r * 255}, ${shadow.g * 255}, ${shadow.b * 255}, .5) !important;
}
.t-shadow-lg {
  box-shadow: 0 0 3rem rgba(${shadow.r * 255}, ${shadow.g * 255}, ${shadow.b * 255}, .175) !important;
}
`;

  for (const key in themeColors) {
    if (themeColors.hasOwnProperty(key) && key !== themeDefaults.shadow) {
      const color = themeColors[key];
      styleContent += `.t-bg-${key},
.t-h-bg-${key}:hover,
.t-f-bg-${key}:active,
.t-af-bg-${key}::after,
.t-bf-bg-${key}::before {
  background-color: ${color} !important;
}
`;
      styleContent += `.t-c-${key},
.t-h-c-${key}:hover,
.t-a-c-${key}:active,
.t-p-c-${key}::placeholder,
.t-p-h-c-${key}:hover::placeholder,
.t-p-f-c-${key}:focus::placeholder,
.t-af-c-${key}::after,
.t-bf-c-${key}::before {
  color: ${color} !important;
}
`;
      styleContent += `.t-f-${key},
.t-h-f-${key}:hover,
.t-f-f-${key}:active,
.t-af-f-${key}::after,
.t-bf-f-${key}::before {
  fill: ${color} !important;
}
`;
      styleContent += `.t-b-${key},
.t-h-b-${key}:hover,
.t-f-b-${key}:active,
.t-af-b-${key}::after,
.t-bf-b-${key}::before {
  border-color: ${color} !important;
}
`;
    }
  }
  themeElement.textContent = styleContent;
}

const TransitionControl = {
  removeAfter: 230,
  loops: 3,
  drawInterval: 20,
  maxSmallShapes: 600,
  maxLargeShapes: 30,
  minSmallShapes: 50,
  minLargeShapes: 10,
  noiseOpacity: 0.1,
  noiseMaxBrightness: 200,
  minShapesOpacity: 0.3,
  maxShapesOpacity: 0.8
};

export function ThemeTransition() {
  const canvas = document.createElement('canvas');
  canvas.height = window.innerHeight;
  canvas.width = window.innerWidth;
  canvas.id = 'THEME_TRANSITION_CANVAS_ID';
  canvas.style.position = 'absolute';
  canvas.style.top = '0px';
  canvas.style.zIndex = '10000000';

  if (canvas.getContext) {
    window.requestAnimationFrame(draw);
    let loop = -2;
    const ctx = canvas.getContext('2d');

    function draw() {
      ctx.clearRect(0, 0, window.innerWidth, window.innerHeight);

      DrawSmallShapes();
      DrawLargeShapes();
      generateNoise(TransitionControl.noiseOpacity);
      if (loop <= TransitionControl.loops) {
        loop++;
        setTimeout(() => draw(), TransitionControl.drawInterval);
      }
    }
    function DrawSmallShapes() {
      const elementNum = Math.round(Math.max(Math.random() * TransitionControl.maxSmallShapes, TransitionControl.minLargeShapes));
      for (let i = 0; i < elementNum; i++) {
        ctx.fillStyle = randomRgb();
        const height = Math.max(Math.random() * 14, 5);
        const width = Math.max(Math.random() * 150, 20);
        const x = Math.random() * window.innerWidth + (window.innerWidth / 2) * loop;
        const y = Math.random() * window.innerHeight;
        ctx.fillRect(x, y, width, height);
      }
    }
    function DrawLargeShapes() {
      const elementNum = Math.round(Math.max(Math.random() * TransitionControl.maxLargeShapes, TransitionControl.minLargeShapes));
      for (let i = 0; i < elementNum; i++) {
        ctx.fillStyle = randomRgb();
        const height = Math.max(Math.random() * 120, 60);
        const width = Math.max(Math.random() * 600, 100);
        const x = Math.random() * window.innerWidth + (window.innerWidth / 2) * loop;
        const y = Math.random() * window.innerHeight;
        ctx.fillRect(x, y, width, height);
      }
    }
    function generateNoise(opacity?: number) {
      const noiseCanvas = document.createElement('canvas');
      const ctx = noiseCanvas.getContext('2d');
      let x: number;
      let y: number;
      let r: number;
      let g: number;
      let b: number;
      opacity = opacity || 0.2;
      noiseCanvas.width = 100;
      noiseCanvas.height = 100;

      for (x = 0; x < noiseCanvas.width; x++) {
        for (y = 0; y < noiseCanvas.height; y++) {
          r = Math.floor(Math.random() * TransitionControl.noiseMaxBrightness);
          g = Math.floor(Math.random() * TransitionControl.noiseMaxBrightness);
          b = Math.floor(Math.random() * TransitionControl.noiseMaxBrightness);

          ctx.fillStyle = 'rgba(' + r + ',' + g + ',' + b + ',' + opacity + ')';
          ctx.fillRect(x, y, 1, 1);
        }
      }
      canvas.style.backgroundImage = 'url(' + noiseCanvas.toDataURL('image/png') + ')';
    }

    document.body.appendChild(canvas);
    setTimeout(() => {
      canvas.remove();
    }, TransitionControl.removeAfter);
  } else {
    canvas.remove();
  }
}
function randomRgb() {
  return `rgb(${Math.random() * 255}, ${Math.random() * 255}, ${Math.random() * 255}, ${Math.max(
    Math.random() * TransitionControl.maxShapesOpacity,
    TransitionControl.minShapesOpacity
  )})`;
}
