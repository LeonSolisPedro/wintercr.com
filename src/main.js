import Vue from "vue"
import App from "./App.vue"

/**
 * -----------------
 * Plugins
 * -----------------
 */
import "./plugins/bootstrap-vue"
import "./plugins/fontawesome"
import "./plugins/vue-scrollto"

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount("#app")