import Vue from 'vue';
import App from './App.vue';
import './registerServiceWorker';
import router from './router';
import store from './store';
import VueTailwind from 'vue-tailwind';
import theme from '@/theme';

Vue.config.productionTip = false;
Vue.use(VueTailwind, theme);
new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');
