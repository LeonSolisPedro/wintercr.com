import Vue from "vue"
import App from "./App.vue"

/**
 * Global plugins goes here
 */
import "./plugins/fontawesome"
import "./plugins/scrollto"
import "./plugins/bootstrap"

new Vue({
  render: (h) => h(App)
}).$mount("#app")