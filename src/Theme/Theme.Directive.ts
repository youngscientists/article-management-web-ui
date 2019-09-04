import { DirectiveBinding } from 'vue/types/options';
import { VNode } from 'vue/types/vnode';

export default {
  inserted: function(el: HTMLElement, binding: DirectiveBinding, vNode: VNode) {
    setColors(el, binding.value);
  }
};
interface SetColorInputBase {
  background: string;
  color: string;
  fill: string;
  border: string;
}
interface SetColorInput extends SetColorInputBase {
  hover: SetColorInputBase;
  shadow: true | 'sm' | 'lg';
}

function setColors(el: HTMLElement, input: SetColorInput) {
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
}
