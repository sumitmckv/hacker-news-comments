import Vue from 'vue';
import Vuex from 'vuex';
import createPersistedState from "vuex-persistedstate";

import loader from '@/store/modules/loader';
import user from '@/store/modules/user';
import comment from '@/store/modules/comment';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {loader, user, comment},
  plugins: [
    createPersistedState({
      paths: ["user.currentUser"]
    })
  ]
});
