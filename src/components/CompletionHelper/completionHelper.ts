import Component from './completionHelper.component.vue';
import { PluginObject } from 'vue';
import { Caret } from 'textarea-caret-ts';

export class CompletionHelper {
  public show = false;
  public offset = { top: 10, left: 2 };

  public Call(element: HTMLTextAreaElement | HTMLInputElement) {
    const helper = document.getElementById('COMPLETION_HELPER_CONTAINER');
    if (helper && element) {
      Caret.setElementPositionBasedOnCaret(document.getElementById('COMPLETION_HELPER_CONTAINER'), element, this.offset);
      this.show = true;
    }
  }
}

const CompletionHelperPlugin: PluginObject<CompletionHelper> = {
  install(Vue, options) {
    let app = new Vue({
      data: {
        completionHelper: new CompletionHelper()
      }
    });
    Vue.prototype.$completionHelper = app.completionHelper;

    Vue.component('completionHelper', Component); // Register custom component
  }
};

export default CompletionHelperPlugin;
