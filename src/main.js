import { createApp } from "vue";
import App from "./App.vue";

// TailwindCSS
import "./style.css";

// router-vue
import router from "@router";

// pinia store
import { createPinia } from "pinia";
const usePinia = createPinia()

// Cookies
import Vue3Cookies from "@cookies/Vue3-cookies";

// Axios
import VueAxios from "vue-axios";
import Axios from "@axios/axios";

// DayJS
import dayjs from "dayjs";

const app = createApp(App)
  .use(usePinia)
  .use(VueAxios, Axios)
  .use(router)
  .use(Vue3Cookies.VueCookies, Vue3Cookies.cookiesConfig);

app.config.globalProperties.$dayjs = dayjs;

app.mount("#app");
