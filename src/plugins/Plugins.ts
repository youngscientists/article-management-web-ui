import '@/assets/vendor/nucleo/css/nucleo.css';
import '@/assets/scss/argon.scss';
import globalComponents from './globalComponents';
import globalDirectives from './globalDirectives';
import SidebarPlugin, { ISidebarStore } from '@/components/SidebarPlugin/index';
import NotificationPlugin, { NotificationStore, Notification } from '@/components/NotificationPlugin/index';
import completionHelper, { CompletionHelper } from '@/components/CompletionHelper/completionHelper';
import ThemePlugin from '@/ThemePlugin/theme.plugin';
import { ThemeOptions } from '@/ThemePlugin/theme.store';
import { darkTheme, lightTheme, customThemeDefaults } from '@/theme.defaults';

const ThemeOptions: ThemeOptions = {
  defaults: {
    defaultTheme: 'light',
    themes: {
      dark: darkTheme,
      light: lightTheme,
      custom: customThemeDefaults
    }
  }
};

export default {
  install(Vue: Vue.VueConstructor) {
    Vue.use(ThemePlugin, ThemeOptions);
    Vue.use(globalComponents);
    Vue.use(globalDirectives);
    Vue.use(SidebarPlugin);
    Vue.use(completionHelper, {
      theme: {
        container: ['t-bg-primaryBg', 't-shadow-sm', 't-b-primary'],
        item: ['t-bg-cards', 't-h-bg-primaryHover', 't-f-bg-primary'],
        active: ['t-bg-primary', 't-h-bg-primaryHover', 't-f-bg-primary']
      }
    });
    Vue.use(NotificationPlugin);
  }
};
declare module 'vue/types/vue' {
  interface Vue {
    $sidebar: ISidebarStore;
    $notifications: NotificationStore;
    $notify: (notification: Notification | string) => void;
    $completionHelper: CompletionHelper;
  }
}
