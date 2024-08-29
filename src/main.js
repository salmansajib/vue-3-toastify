import "./assets/main.css";

import App from "./App.vue";
import { createApp } from "vue";

import Vue3Toastify from "vue3-toastify";
import "vue3-toastify/dist/index.css";

const toastOptions = {
  autoClose: 1500,
  theme: "dark",
};

// createApp(App).use(Vue3Toastify, toastOptions).mount("#app");

const app = createApp(App);

app.use(Vue3Toastify, toastOptions);
app.mount("#app");
