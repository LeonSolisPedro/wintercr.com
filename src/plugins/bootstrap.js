import Vue from "vue"
import Tooltip from "bootstrap/js/src/tooltip"
import "bootstrap/scss/bootstrap.scss"

const Bootstrap = {
  // The install method will be called with the Vue constructor as         
  // the first argument, along with possible options
  install(Vue) {
    // Add a component or directive to your plugin, so it will be installed globally to your project.
    Vue.directive("tooltip", {
      inserted(el) {
        el.tooltip = new Tooltip(el)
      },
    
      unbind(el){
        el.tooltip.dispose()
        el.tooltip = null
        delete el.tooltip
      }
    })
  }
}

Vue.use(Bootstrap)