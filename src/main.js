import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  mounted() {
    this.$store.commit("initialiseStoreWithToken");
  },
  render: (h) => h(App),
}).$mount("#app");
