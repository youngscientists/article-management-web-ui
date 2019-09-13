import Vue from 'vue';
import App from './App.vue';
import Plugins from './plugins/Plugins';
import './registerServiceWorker';
import router from './router';
import store from './store';
import { InitTheme } from './Theme/Theme.Utility';

Vue.config.productionTip = false;

Vue.use(Plugins);
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app');
InitTheme(); // initializes the theme styles
