export default {
  // The install method will be called with the Vue constructor as         
  // the first argument, along with possible options
  install(app){
    // Add a component or directive to your plugin, so it will be installed globally to your project.
    app.directive("scrollto", {
      beforeMount(el, binding) {
        el.addEventListener("click", scrollFunction);
        el.parameter1 = binding.value;
      },
      unmounted(el) {
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