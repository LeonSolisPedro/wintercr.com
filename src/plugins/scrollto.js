import Vue from "vue"

const scrollto = {
  // The install method will be called with the Vue constructor as         
  // the first argument, along with possible options
  install(Vue) {
    // Add a component or directive to your plugin, so it will be installed globally to your project.
    Vue.directive("scrollto", {
      bind(el, binding) {
        el.addEventListener("click", scrollFunction);
        el.parameter1 = binding.value;
      },
      unbind(el) {
        el.removeEventListener("click", scrollFunction);
        el.parameter1 = null
        delete el.parameter1
      }
    })
  }
}

function scrollFunction(event) {
  const element = document.getElementById(event.currentTarget.parameter1.substring(1))
  const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
  if (mediaQuery.matches){
    element.scrollIntoView();
  } else {
    element.scrollIntoView({ behavior: 'smooth' });
  }
}

Vue.use(scrollto)