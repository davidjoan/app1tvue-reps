import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import CoreuiVue from '@coreui/vue'
import { iconsSet as icons } from './assets/icons/icons.js'

Vue.config.productionTip = false;
Vue.config.performance = true
Vue.use(CoreuiVue)

new Vue({
  icons,
  router,
  store,
  render: h => h(App)
}).$mount("#app");