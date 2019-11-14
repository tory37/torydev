import Vue from 'vue';
import Vuex from 'vuex';

import * as sidebar from '@/store/modules/sidebar.ts';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    sidebar
  }
});
