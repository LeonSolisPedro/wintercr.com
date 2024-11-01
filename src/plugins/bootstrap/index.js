import Tooltip from "bootstrap/js/src/tooltip"
import "./customStyle.scss"
import "bootstrap/js/src/tab"
import "bootstrap/js/src/carousel"

export default {
  // The install method will be called with the Vue constructor as         
  // the first argument, along with possible options
  install(app){
    // Add a component or directive to your plugin, so it will be installed globally to your project.
    app.directive("tooltip", {
      mounted(el) {
        el.tooltip = new Tooltip(el)
      },
      unmounted(el){
        el.tooltip.dispose()
        el.tooltip = null
        delete el.tooltip
      }
    })
  }
}