import Vue from "vue"
import { library, config } from "@fortawesome/fontawesome-svg-core"
import { faEnvelope, faHeart } from "@fortawesome/free-solid-svg-icons"
import { faTwitter, faGithub } from "@fortawesome/free-brands-svg-icons"
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import "@fortawesome/fontawesome-svg-core/styles.css"

config.autoAddCss = false;
library.add(faEnvelope, faHeart, faTwitter, faGithub)

Vue.component("font-awesome-icon", FontAwesomeIcon)