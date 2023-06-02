import { createApp } from "vue"
import App from "./App.vue"
import bootstrap from "./plugins/bootstrap"
import fontawesome from "./plugins/fontawesome"
import scrollto from "./plugins/scrollto"

//Global Plugins
const app = createApp(App)
app.use(bootstrap)
app.use(fontawesome)
app.use(scrollto)
app.mount("#app")