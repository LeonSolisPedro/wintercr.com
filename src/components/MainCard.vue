<template>
  <div class="container vh-100">
    <div class="row vh-100 justify-content-center align-items-center">

      <div class="card" style="width: 18rem">
        <img src="../assets/yo.webp" class="card-img-top" alt="Image" />
        <div class="card-body">
          <h4 class="card-title text-center"> ¡Hola! </h4>
          <p class="card-text">
            Me llamo <i>Pedro León</i>
          </p>
          <div class="text-center">
            <button type="button" class="btn btn-primary" v-scrollto="'#carouselprojects'">Ver proyectos </button>
          </div>
        </div>
      </div>

    </div>
  </div>
</template>


<style>
.card {
  max-width: 400px !important;
  width: 65% !important;
}
</style>