import { DirectiveBinding } from 'vue/types/options';
import { VNode } from 'vue/types/vnode';
import store from '@/store';
import { getModule } from 'vuex-module-decorators';
import themeModule from '@/store/modules/theme/theme.index';
import { DirectiveOptions } from 'vue';

const directive: DirectiveOptions = {
  inserted: (el: HTMLElement, binding: DirectiveBinding, vNode: VNode) => {
    vThemeSetClasses(el, binding.value, false);
  },
  update: (el: HTMLElement, binding: DirectiveBinding, vNode: VNode) => {
    if (binding.value && binding.value.update) {
      vThemeSetClasses(el, binding.value, true);
    }
  }
};

export default directive;
interface SetColorInputBase {
  background: string;
  color: string;
  fill: string;
  border: string;
}
export interface vTheme extends SetColorInputBase {
  isImage: boolean;
  hover: SetColorInputBase;
  focus: SetColorInputBase;
  after: SetColorInputBase;
  placeholder: { color: string; hover: string; focus: string };
  shadow: boolean | 'sm' | 'lg' | 'strong';
  update: { type: 'shadow' | 'color' | 'background' | 'fill' | 'border' | 'hover'; value: string | SetColorInputBase }[] | true;
  checkboxSwitch: boolean;
  before: SetColorInputBase;
}

export function vThemeSetClasses(el: HTMLElement, input: vTheme, canUpdate: boolean) {
  // update is true if input.update is truthy and the update hook gets called.
  if (canUpdate && typeof input.update !== 'boolean') {
    for (const update of input.update) {
      switch (update.type) {
        case 'shadow':
          el.classList.remove(`t-shadow${typeof input.shadow === 'string' ? '-'.concat(input.shadow) : ''}`);
          break;
        case 'background':
          el.classList.remove(`t-bg-${update.value}`);
          break;
        case 'color':
          el.classList.remove(`t-c-${update.value}`);
          break;
        case 'fill':
          el.classList.remove(`t-f-${update.value}`);
          break;
        case 'border':
          el.classList.remove(`t-b-${update.value}`);
          break;
        case 'hover':
          if (typeof update.value !== 'string') {
            if (update.value.background) {
              el.classList.remove(`t-h-bg-${update.value.background}`);
            }
            if (update.value.color) {
              el.classList.remove(`t-h-c-${update.value.color}`);
            }
            if (update.value.fill) {
              el.classList.remove(`t-h-f-${update.value.fill}`);
            }
            if (update.value.border) {
              el.classList.remove(`t-h-b-${update.value.border}`);
            }
          }
          break;
      }
    }
  }

  if (input.isImage) {
    const theme = getModule(themeModule, store);
    if (theme.themes[theme.currentTheme].invertImageIcon) {
      el.classList.add('t-image-icon-invert');
    } else {
      el.classList.remove('t-image-icon-invert');
    }
  }
  if (input.checkboxSwitch) {
    el.classList.add('t-checkboxSwitch');
  }

  // base types
  if (input.shadow) {
    el.classList.add(`t-shadow${typeof input.shadow === 'string' ? '-'.concat(input.shadow) : ''}`);
  }
  if (input.shadow === false) {
    el.classList.add('t-shadow-none');
  }
  if (input.background) {
    el.classList.add(`t-bg-${input.background}`);
  }
  if (input.color) {
    el.classList.add(`t-c-${input.color}`);
  }
  if (input.fill) {
    el.classList.add(`t-f-${input.fill}`);
  }
  if (input.border) {
    el.classList.add(`t-b-${input.border}`);
  }

  if (input.hover) {
    if (input.hover.background) {
      el.classList.add(`t-h-bg-${input.hover.background}`);
    }
    if (input.hover.color) {
      el.classList.add(`t-h-c-${input.hover.color}`);
    }
    if (input.hover.fill) {
      el.classList.add(`t-h-f-${input.hover.fill}`);
    }
    if (input.hover.border) {
      el.classList.add(`t-h-b-${input.hover.border}`);
    }
  }

  if (input.focus) {
    if (input.focus.background) {
      el.classList.add(`t-f-bg-${input.focus.background}`);
    }
    if (input.focus.color) {
      el.classList.add(`t-f-c-${input.focus.color}`);
    }
    if (input.focus.fill) {
      el.classList.add(`t-f-f-${input.focus.fill}`);
    }
    if (input.focus.border) {
      el.classList.add(`t-f-b-${input.focus.border}`);
    }
  }

  if (input.placeholder) {
    if (input.placeholder.color) {
      el.classList.add(`t-p-c-${input.placeholder.color}`);
    }
    if (input.placeholder.hover) {
      el.classList.add(`t-p-h-c-${input.placeholder.hover}`);
    }
    if (input.placeholder.focus) {
      el.classList.add(`t-p-f-c-${input.placeholder.focus}`);
    }
  }

  if (input.after) {
    if (input.after.border) {
      el.classList.add(`t-af-b-${input.after.border}`);
    }
    if (input.after.background) {
      el.classList.add(`t-af-bg-${input.after.background}`);
    }
    if (input.after.color) {
      el.classList.add(`t-af-c-${input.after.color}`);
    }
    if (input.after.fill) {
      el.classList.add(`t-af-f-${input.after.fill}`);
    }
  }

  if (input.before) {
    if (input.before.border) {
      el.classList.add(`t-bf-b-${input.before.border}`);
    }
    if (input.before.background) {
      el.classList.add(`t-bf-bg-${input.before.background}`);
    }
    if (input.before.color) {
      el.classList.add(`t-bf-c-${input.before.color}`);
    }
    if (input.before.fill) {
      el.classList.add(`t-bf-f-${input.before.fill}`);
    }
  }
}
