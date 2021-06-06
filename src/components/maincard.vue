<template>
  <b-container class="vh-100">
    <b-row class="vh-100 justify-content-center align-items-center">

      <b-card img-src="../assets/yo.jpg" img-alt="Image">

        <b-card-title class="text-center">
          ¡Hola!
        </b-card-title>

        <b-card-text>
          Me llamo <i>Pedro León</i>
        </b-card-text>

        <div class="text-center">
          <b-button variant="primary" v-scroll-to="'#aboutme'">Acerca de Mí</b-button>
        </div>

      </b-card>

    </b-row>
  </b-container>
</template>

<script>
export default {
  name: "maincard"
}
</script>

<style>
.card {
  max-width: 400px !important;
  width: 65% !important;
}
</style>