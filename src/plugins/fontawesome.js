import { library, config } from "@fortawesome/fontawesome-svg-core"
import { faCircleQuestion, faCode, faEnvelope, faHeart, faHouse, faPlaneDeparture, faPlay, faRocket } from "@fortawesome/free-solid-svg-icons"
import { faTwitter, faGithub } from "@fortawesome/free-brands-svg-icons"
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import "@fortawesome/fontawesome-svg-core/styles.css"

export default {
  install(app){
    config.autoAddCss = false;
    library.add(faEnvelope, faHeart, faTwitter, faGithub, faPlaneDeparture, faCode, faPlay, faCircleQuestion)
    //Test
    library.add(faHouse, faRocket)
    app.component("font-awesome-icon", FontAwesomeIcon)
  }
}