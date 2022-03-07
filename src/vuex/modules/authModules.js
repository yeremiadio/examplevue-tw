import { DELETE_USER, SET_USER } from "../types";
import apiClient from "../../utils/apiClient";

const authModules = {
  state: {
    data: {},
  },
  mutations: {
    [SET_USER](state, payload) {
      state.data = payload;
    },
    [DELETE_USER](state) {
      state.data = {};
    },
  },
  actions: {
    async loginUser({ commit }, val) {
      await apiClient()
        .get("sanctum/csrf-cookie")
        .then(
          async (res) =>
            await apiClient()
              .post("api/login", val)
              .then(async (res) => {
                await commit("SET_USER", res.data.data);
              })
        );
    },
    async registerUser({ commit }, val) {
      await apiClient()
        .post("api/register", val)
        .then(async (res) => {
          await commit("SET_USER", res.data.data);
        });
    },
    deleteUser({ commit }) {
      commit("DELETE_USER");
    },
  },
};

export default authModules;
