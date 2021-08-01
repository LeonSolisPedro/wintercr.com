<template>
  <div id="app">
    <particlesjs />

    <headercomponent />

    <maincard />

    <b-container id="aboutme" class="px-5 py-4">

      <h1 class="text-center">Acerca de Mí</h1>

      <div class="py-4 text-center">
        <b-img src="./assets/colorcito.png" rounded fluid alt="Fluid image"></b-img>
      </div>

      <p>Como desarrollador web moderno, siempre estoy buscando la oportunidad de obtener nuevas experiencias trabajando
        a través de la delgada línea de tecnologías actuales y soluciones de alta eficiencia.</p>

      <p>Aunque soy una persona muy inexperta, siempre estoy dispuesto a forjar y mejorar mis habilidades como
        desarrollador, estudiante y como ser humano.</p>

      <p>Ya sea que contribuya a empresas de desarrollo de software o a proyectos personales, siempre enfoco mis
        esfuerzos en proporcionar al usuario final la mejor experiencia en su vida diaria.</p>

      <blockquote class="blockquote text-center">
        <p><em>- "When we hit our lowest point, we are open to the greatest change".</em></p>
      </blockquote>

      <div class="text-center">
        <b-button href="mailto:pedro@wintercr.com" variant="primary" class="m-2" target="_top">Contáctame por Correo
          <font-awesome-icon :icon="[ 'fa', 'envelope' ]" />
        </b-button>
        <b-button href="https://twitter.com/LeonSolisPedro" variant="info" class="m-3" target="_blank">Sígueme en
          Twitter
          <font-awesome-icon :icon="[ 'fab', 'twitter' ]" />
        </b-button>
        <b-button href="https://github.com/LeonSolisPedro" variant="secondary" class="m-2" target="_blank">Ver proyectos en
          Github
          <font-awesome-icon :icon="[ 'fab', 'github' ]" />
        </b-button>
      </div>

    </b-container>

    <footercomponent />

  </div>
</template>

<script>
import particlesjs from "./components/particlesjs"
import headercomponent from "./components/headercomponent"
import maincard from "./components/maincard"
import footercomponent from "./components/footercomponent"

export default {
  name: "app",
  components: {
    particlesjs,
    headercomponent,
    maincard,
    footercomponent
  }
}
</script>