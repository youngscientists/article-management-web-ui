import clickOutside from '@/directives/click-outside';
import theme from '@/Theme/Theme.Directive';

/**
 * You can register global directives here and use them as a plugin in your main Vue instance
 */

const GlobalDirectives = {
  install(Vue: Vue.VueConstructor) {
    Vue.directive('click-outside', clickOutside);
    Vue.directive('theme', theme);
  }
};

export default GlobalDirectives;
