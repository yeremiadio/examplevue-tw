import { createStore } from "vuex";
import { SET_USER } from "./types";

export const store = createStore({
  state: {
    auth: {},
  },
  mutations: {
    [SET_USER](state, payload) {
      state.auth = payload;
    },
  },
  actions: {
    loginUser({ commit }, values) {
      commit("SET_USER", values);
    },
  },
});
