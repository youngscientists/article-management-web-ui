import Vue from 'vue';
import App from './App.vue';
import router from './router';
import './registerServiceWorker';
import ArgonDashboard from './plugins/argon-dashboard';

import store from './store';
import { SetThemeStyle } from './Theme/Theme.Utility';

Vue.config.productionTip = false;

Vue.use(ArgonDashboard);
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app');
SetThemeStyle(); // initializes the theme styles
