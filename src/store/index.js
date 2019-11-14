import Vue from 'vue';
import Vuex from 'vuex';

import * as sidebar from '@/store/modules/sidebar.js';

Vue.use(Vuex);

export const store = new Vuex.Store({
  modules: {
    sidebar
  }
});
