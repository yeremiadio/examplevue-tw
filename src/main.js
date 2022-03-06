import { createApp } from "vue";
import App from "./App.vue";
import "./index.css";
import router from "./router/index.js";
import axios from "axios";
import { store } from "./vuex/store";

axios.defaults.withCredentials = true;
axios.defaults.headers.common["X-Requested-With"] = "XMLHttpRequest";

const app = createApp(App);
app.use(router);
app.use(store);
app.mount("#app");
