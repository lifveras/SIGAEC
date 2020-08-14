import Vue from "vue";
import VueRouter from "vue-router";
import App from "./App.vue";
import { BootstrapVue, IconsPlugin } from "bootstrap-vue";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";
import router from "./router";

Vue.use(VueRouter);
Vue.use(BootstrapVue);
Vue.use(IconsPlugin);

Vue.config.productionTip = false;

new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");

const url = "https://1d92fc4d-d759-40d0-9b59-369a1c08a054.mock.pstmn.io/";
const eventPath = "eventoacademico?cadastroId=1&offset=1&limit=10";

fetch(url + eventPath)
  .then((response) => response.json())
  .then((json) => console.log(json))
  .catch((error) => console.log(error));
