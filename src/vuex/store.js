import { createStore } from "vuex";
import { SET_USER } from "./types";

export const store = createStore({
  state: {
    auth: {
      isAuthenticated: false,
      user: {},
    },
  },
  mutations: {
    [SET_USER](state, payload) {
      state.auth.isAuthenticated = true;
      state.auth.user = payload;
    },
  },
  actions: {
    loginUser({ commit }, values) {
      commit("SET_USER", values);
    },
  },
});
