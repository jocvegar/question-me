import Vue from "vue";
import App from "./App.vue";
import vueDebounce from "vue-debounce";
import "./registerServiceWorker";

Vue.use(vueDebounce);

Vue.config.productionTip = false;

new Vue({
  render: h => h(App)
}).$mount("#app");
