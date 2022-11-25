import Vue from "vue";
import Vuex from "vuex";
import authModule from "./modules/auth/index.js";
import sportsModule from "./modules/sports/index.js";

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    auth: authModule,
    sports: sportsModule,
  },
  state() {
    return {};
  },
  getters: {},
  mutations: {},
  actions: {},
});
