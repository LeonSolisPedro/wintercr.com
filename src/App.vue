<template>
  <div>
    <TsParticles />

    <HeaderComponent />

    <MainCard />

    <CarouselProjects />

    <div class="gray-background">
      <div id="aboutme" class="container px-5 py-5">

        <h1 class="text-center">Acerca de Mí</h1>

        <div class="py-4 text-center">
          <img src="./assets/colorcito.webp" class="img-fluid rounded" alt="Colorcito">
        </div>

        <p>Como desarrollador web moderno, siempre estoy buscando la oportunidad de obtener nuevas experiencias
          trabajando
          a través de la delgada línea de tecnologías actuales y soluciones de alta eficiencia.</p>

        <p>Aunque soy una persona muy inexperta, siempre estoy dispuesto a forjar y mejorar mis habilidades como
          desarrollador, estudiante y como ser humano.</p>

        <p>Ya sea que contribuya a empresas de desarrollo de software o a proyectos personales, siempre enfoco mis
          esfuerzos en proporcionar al usuario final la mejor experiencia en su vida diaria.</p>

        <blockquote class="blockquote text-center">
          <p><em>- "When we hit our lowest point, we are open to the greatest change".</em></p>
        </blockquote>

        <div class="text-center">
          <a class="btn btn-primary m-2" target="_top" href="mailto:pedro@wintercr.com">Contáctame por Correo
            <font-awesome-icon icon="fa-solid fa-envelope" /></a>
          <a class="btn btn-twitter m-3" target="_blank" href="https://twitter.com/LeonSolisPedro">Sígueme en Twitter
            <font-awesome-icon icon="fa-brands fa-twitter" /></a>
          <a class="btn btn-secondary m-2" target="_blank" href="https://github.com/LeonSolisPedro">Ver proyectos en
            Github
            <font-awesome-icon icon="fa-brands fa-github" /></a>
        </div>

      </div>
    </div>
    
    <FooterComponent class="gray-background" />

  </div>
</template>

<style lang="scss">
.btn-twitter {
  --bs-btn-color: var(--bs-white) !important;
  --bs-btn-bg: #008390 !important;
  --bs-btn-hover-bg: #00707A !important;
  --bs-btn-hover-color: var(--bs-white) !important;
}


.gray-background {
  background-color: #F9FAFB;
}

[data-bs-theme="dark"] .gray-background {
  background-color: #24282C !important;
}

@media (min-width: 1400px) {
  .container {
    max-width: 1140px !important;
  }
}
</style>

<script>
import TsParticles from "./components/TsParticles.vue"
import HeaderComponent from "./components/HeaderComponent.vue"
import MainCard from "./components/MainCard.vue"
import FooterComponent from "./components/FooterComponent.vue"
import CarouselProjects from "./components/CarouselProjects.vue"

export default {
  components: {
    TsParticles,
    HeaderComponent,
    MainCard,
    FooterComponent,
    CarouselProjects
  }
}
</script>