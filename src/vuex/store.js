import { createStore } from "vuex";
import authModules from "./modules/authModules";

export const store = createStore({
  modules: {
    auth: authModules,
  },
});
