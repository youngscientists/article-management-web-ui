import { DirectiveBinding } from 'vue/types/options';
import { VNode } from 'vue/types/vnode';
import store from '@/store';

export default {
  inserted: function(el: HTMLElement, binding: DirectiveBinding, vNode: VNode) {
    setColors(el, binding.value);
  },
  update: function(el: HTMLElement, binding: DirectiveBinding, vNode: VNode) {
    setColors(el, binding.value);
  }
};

function setColors(el: HTMLElement, colors: { background: string; color: string }) {
  //@ts-ignore
  const theme = store.state.theme;
  if (theme[colors.background]) {
    el.style.backgroundColor = theme[colors.background];
  }
  if (theme[colors.color]) {
    el.style.color = theme[colors.color];
  }
}
