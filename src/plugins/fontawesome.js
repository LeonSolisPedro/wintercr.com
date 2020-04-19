import Vue from "vue"

import { library } from "@fortawesome/fontawesome-svg-core"
import { faEnvelope, faHeart } from "@fortawesome/free-solid-svg-icons"
import { faTwitter, faGithub } from "@fortawesome/free-brands-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome"

library.add(faEnvelope, faTwitter, faGithub, faHeart)

const plugin = {
  install(Vue) {
    Vue.component("font-awesome-icon", FontAwesomeIcon)
  }
}

Vue.use(plugin)