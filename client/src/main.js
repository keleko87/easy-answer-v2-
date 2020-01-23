import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import Vuelidate from 'vuelidate'
import ApiService from './common/api.service';
import DateFilter from "./common/date.filter";
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue';
import './registerServiceWorker';

Vue.use(BootstrapVue)
Vue.use(IconsPlugin)
Vue.use(Vuelidate);
Vue.filter("date", DateFilter);

Vue.config.productionTip = false;

ApiService.init();

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app');
