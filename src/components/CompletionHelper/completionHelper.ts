import Component from './completionHelper.component.vue';
// eslint-disable-next-line
import { PluginObject } from 'vue';
import { Caret } from 'textarea-caret-ts';

interface CompletionHelperItem {
  title: string;
}
interface CompletionHelperOptions {
  theme: CompletionHelper['theme'];
}

export class CompletionHelper {
  public show = false;
  public offset = { top: 20, left: -20 };
  public items: CompletionHelperItem[] = [];
  public filter = '';
  public active = 0;
  public theme: { container: string[]; item: string[]; active: string[] } = { container: [], item: [], active: [] };
  constructor(options?: CompletionHelperOptions) {
    if (options) {
      if (options.theme) {
        Object.assign(this.theme, options.theme);
      }
    }
  }

  public Call(element: HTMLTextAreaElement | HTMLInputElement, items: CompletionHelperItem[]) {
    const helper = document.getElementById('COMPLETION_HELPER_CONTAINER');
    this.items = items;
    if (helper && element) {
      Caret.setElementPositionBasedOnCaret(helper, element, this.offset, 5);
      this.show = true;
      return new Promise<CompletionHelperItem | null>(
        function(this: CompletionHelper, _resolve) {
          // State
          let isInHelper = false;

          // input Events
          const keydownListener = function(this: CompletionHelper, e: KeyboardEvent) {
            if (e.key === 'ArrowUp') {
              this.active = this.active > 0 ? this.active - 1 : this.items.length - 1;
              const item = document.getElementById(`COMPLETION_HELPER_ITEM_${this.active}`);
              if (item) {
                item.scrollIntoView(false);
              }
            } else if (e.key === 'ArrowDown') {
              this.active = this.items.length - 1 > this.active ? this.active + 1 : 0;
              const item = document.getElementById(`COMPLETION_HELPER_ITEM_${this.active}`);
              if (item) {
                item.scrollIntoView(false);
              }
            } else if (e.key === 'Enter') {
              Resolve(this.items[this.active]);
            }
            setTimeout(() => {
              this.filter = element.value;
            }, 0);
          }.bind(this);
          element.addEventListener('keydown', keydownListener);
          const blurListener = () => {
            if (!isInHelper) {
              Resolve(null);
            }
          };
          element.addEventListener('blur', blurListener);
          // Helper Events
          const EnterHelperListener = () => {
            isInHelper = true;
          };
          helper.addEventListener('mouseenter', EnterHelperListener);
          const LeaveHelperListener = () => {
            isInHelper = false;
            element.focus();
          };
          helper.addEventListener('mouseleave', LeaveHelperListener);
          // Intercept this.completed
          this.completed = item => {
            Resolve(item);
          };

          const Resolve = (res: CompletionHelperItem) => {
            element.removeEventListener('keydown', keydownListener);
            element.removeEventListener('blur', blurListener);
            helper.removeEventListener('mouseenter', EnterHelperListener);
            helper.removeEventListener('mouseleave', LeaveHelperListener);
            this.show = false;
            _resolve(res);
          };
        }.bind(this)
      );
    }
    return new Promise<CompletionHelperItem>((res, rej) => rej('Completion Helper Error 0'));
  }
  // eslint-disable-next-line
  public completed(item: CompletionHelperItem) {}
}

const CompletionHelperPlugin: PluginObject<CompletionHelperOptions> = {
  install(Vue, options) {
    let app = new Vue({
      data: {
        completionHelper: new CompletionHelper(options)
      }
    });
    Vue.prototype.$completionHelper = app.completionHelper;

    Vue.component('completionHelper', Component); // Register custom component
  }
};

export default CompletionHelperPlugin;
