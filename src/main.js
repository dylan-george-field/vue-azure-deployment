import Vue from 'vue';
import SuiVue from 'semantic-ui-vue';
import 'semantic-ui-css/semantic.min.css';
import App from './App';
import router from './router';

Vue.config.productionTip = false;

/* eslint-disable no-new */
Vue.use(SuiVue);
new Vue({
  el: '#app',
  router,
  render: h => h(App),
});
