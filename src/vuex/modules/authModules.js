import { SET_USER } from "../types";

const authModules = {
  state: {
    isAuthenticated: false,
    user: {},
  },
  mutations: {
    [SET_USER](state, payload) {
      state.isAuthenticated = true;
      state.user = payload;
    },
  },
  actions: {
    loginUser({ commit }, values) {
      commit("SET_USER", values);
    },
  },
};

export default authModules;
