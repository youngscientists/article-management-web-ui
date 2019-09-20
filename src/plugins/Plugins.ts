import '@/assets/vendor/nucleo/css/nucleo.css';
import '@/assets/scss/argon.scss';
import globalComponents from './globalComponents';
import globalDirectives from './globalDirectives';
import SidebarPlugin, { ISidebarStore } from '@/components/SidebarPlugin/index';
import NotificationPlugin, { NotificationStore, Notification } from '@/components/NotificationPlugin/index';
import completionHelper, { CompletionHelper } from '@/components/CompletionHelper/completionHelper';

export default {
  install(Vue: Vue.VueConstructor) {
    Vue.use(globalComponents);
    Vue.use(globalDirectives);
    Vue.use(SidebarPlugin);
    Vue.use(completionHelper);
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
