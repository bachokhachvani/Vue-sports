import axios from "axios";

export default {
  //not namespaced because of token
  // namespaced: true,
  state() {
    return { token: null, errorMessage: null, sports: null };
  },
  getters: {
    userToken(state) {
      if (!state) {
        return "";
      } else {
        return state.token;
      }
    },
    loginErrorMessage(state) {
      if (!state) {
        return "";
      } else {
        return state.errorMessage;
      }
    },
    userSports(state) {
      if (!state) {
        return "";
      } else {
        return state.sports;
      }
    },
  },
  mutations: {
    setUser(state, payload) {
      state.token = payload.token;
      console.log("sasstasd", state.token);
      if (payload.token === null) {
        return;
      } else {
        localStorage.setItem("token", state.token);
        console.log("tokeen", typeof localStorage.getItem("token"));
      }
    },
    initialiseStoreWithToken(state) {
      if (localStorage.getItem("token") || !state.token) {
        // this.replaceState(Object.assign(state, localStorage.getItem("token")));
        state.token = localStorage.getItem("token");
      }
    },
    setError(state, payload) {
      state.errorMessage = payload.errorMessage;
      console.log("payload", payload);
    },
    setSports(state, payload) {
      state.sports = payload.sports;
      console.log("sports", payload);
    },
    initialiseStoreWithSports(state) {
      if (localStorage.getItem("sportsList") || !state.sports) {
        state.sports = JSON.parse(localStorage.getItem("sportsList"));
        console.log("sportsgvaq?", state.sports);
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
        context.commit("setError", {
          errorMessage: null,
        });
      } catch (e) {
        context.commit("setError", {
          errorMessage: e.message,
        });
      }
    },
    async getSports(context) {
      try {
        const response = await axios.get(
          "https://paridirect-ussd.dev.smrtsrc.io/api/sports-book/sports?culture=en",
          {
            headers: {
              Authorization: `Bearer ${context.getters.userToken}`,
            },
          }
        );
        localStorage.setItem("sportsList", JSON.stringify(response.data));
        context.commit("setSports", {
          sports: response.data,
        });
      } catch (e) {
        console.error(e);
      }
    },
    setTokenNull(context) {
      context.commit("setUser", { token: null });
    },
  },
};
