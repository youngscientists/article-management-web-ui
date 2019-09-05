import { DirectiveBinding } from 'vue/types/options';
import { VNode } from 'vue/types/vnode';

export default {
  inserted: (el: HTMLElement, binding: DirectiveBinding, vNode: VNode) => {
    setColors(el, binding.value, false);
  },
  update: (el: HTMLElement, binding: DirectiveBinding, vNode: VNode) => {
    if (binding.value && binding.value.update) {
      setColors(el, binding.value, true);
    }
  }
};
interface SetColorInputBase {
  background: string;
  color: string;
  fill: string;
  border: string;
}
export interface vTheme extends SetColorInputBase {
  hover: SetColorInputBase;
  focus: SetColorInputBase;
  after: string;
  placeholder: { color: string; hover: string; focus: string };
  shadow: true | 'sm' | 'lg';
  update: { type: 'shadow' | 'color' | 'background' | 'fill' | 'border'; value: string }[];
}

function setColors(el: HTMLElement, input: vTheme, canUpdate: boolean) {
  // update is true if input.update is truthy and the update hook gets called.
  if (canUpdate && input.update) {
    for (const update of input.update) {
      switch (update.type) {
        case 'shadow':
          el.classList.remove(`t-shadow${typeof input.shadow === 'string' ? input.shadow : ''}`);
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
      }
    }
  }
  // base types
  if (input.shadow) {
    el.classList.add(`t-shadow${typeof input.shadow === 'string' ? input.shadow : ''}`);
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
  if (input.after) {
    el.classList.add(`t-af-${input.after}`);
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
}
