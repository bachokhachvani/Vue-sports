import axios from "axios";

export default {
  namespaced: true,
  state() {
    return { token: null };
  },
  getters: {
    userToken(state) {
      if (!state) {
        return "";
      } else {
        return state.token;
      }
    },
  },
  mutations: {
    setUser(state, payload) {
      console.log("payasd", payload.token);
      console.log("stasd", state.token);
      state.token = payload.token;
      console.log("sasstasd", state.token);
      localStorage.setItem("token", state.token);
      console.log("tokeen", typeof localStorage.getItem("token"));
    },
    initialiseStoreWithToken(state) {
      if (localStorage.getItem("token") || !state.token) {
        // this.replaceState(Object.assign(state, localStorage.getItem("token")));
        state.token = localStorage.getItem("token");
      }
    },
  },
  actions: {
    async login(context, payload) {
      try {
        const response = await axios.post(
          "https://paridirect-ussd.dev.smrtsrc.io/api/auth/signin",
          {
            login: payload.login,
            password: payload.password,
          }
        );
        console.log("asdasd", response);
        context.commit("setUser", {
          token: response.data.token,
        });
      } catch (e) {
        console.error(e);
      }
    },
  },
};
