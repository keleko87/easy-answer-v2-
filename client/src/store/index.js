import Vue from 'vue';
import Vuex from 'vuex';

import home from './modules/home.module';
import auth from './modules/auth.module';
import ticket from './modules/ticket.module';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    home,
    auth,
    ticket
  }
});
