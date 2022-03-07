import { createApp } from "vue";
import App from "./App.vue";
import "./index.css";
import router from "./router/index.js";
import { store } from "./vuex/store";

const app = createApp(App);
app.use(router);
app.use(store);
app.mount("#app");
