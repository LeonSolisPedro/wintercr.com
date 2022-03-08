import Vue from "vue"

import { library, config } from "@fortawesome/fontawesome-svg-core"
import { faEnvelope } from "@fortawesome/free-solid-svg-icons/faEnvelope"
import { faHeart } from "@fortawesome/free-solid-svg-icons/faHeart"
import { faTwitter } from "@fortawesome/free-brands-svg-icons/faTwitter"
import { faGithub } from "@fortawesome/free-brands-svg-icons/faGithub"
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome"
import "@fortawesome/fontawesome-svg-core/styles.css"

config.autoAddCss = false

library.add(faEnvelope, faTwitter, faGithub, faHeart)

Vue.component("font-awesome-icon", FontAwesomeIcon)