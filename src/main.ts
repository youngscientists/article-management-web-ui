import Vue from 'vue';
import App from './App.vue';
import router from './router';
import './registerServiceWorker';
import Plugins from './plugins/Plugins';

import store from './store';
import { SetThemeStyle } from './Theme/Theme.Utility';
import { InitCookie } from './utility/cookie/cookie';

Vue.config.productionTip = false;

Vue.use(Plugins);
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app');
SetThemeStyle(); // initializes the theme styles
InitCookie(); // get token from cookie
