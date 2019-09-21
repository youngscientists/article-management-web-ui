import { PluginObject } from 'vue';
import directive from './theme.directive';
import ThemeStore, { ThemeOptions } from './theme.store';

export class ThemeController {
  public static store = new ThemeStore();
  public static Init(options?: ThemeOptions) {
    this.store.Init(options);
  }
}

const ThemePlugin: PluginObject<ThemeOptions> = {
  install(Vue, options) {
    ThemeController.Init(options);
    let app = new Vue({
      data: {
        theme: ThemeController
      }
    });
    Vue.prototype.$theme = app.theme;
    Vue.directive('theme', directive);
  }
};

export default ThemePlugin;
