<template>
  <div id="carouselExampleCaptions" class="carousel carousel-fade slide">
    <div class="carousel-indicators">
      <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active"></button>
      <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1"></button>
      <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2"></button>
    </div>
    <div class="carousel-inner rounded">
      <div class="carousel-item active">
        <img src="https://picsum.photos/536/354" class="d-block w-100 fantastic-image" alt="...">
      </div>
      <div class="carousel-item">
        <img src="https://picsum.photos/536/354" class="d-block w-100 fantastic-image" alt="...">
      </div>
      <div class="carousel-item">
        <img src="https://picsum.photos/536/354" class="d-block w-100 fantastic-image" alt="...">
      </div>
    </div>
    <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
      <span class="carousel-control-prev-icon"></span>
      <span class="visually-hidden">Previous</span>
    </button>
    <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
      <span class="carousel-control-next-icon"></span>
      <span class="visually-hidden">Next</span>
    </button>
  </div>
  <div class="mt-3">
    <h4 class="text-center">Viaja ya</h4>
    <p class="text-center">Viaja Ya es una agencia de viajes que se especializa en la venta de tours a través de contenido dinámico y consumo de APIs</p>
  </div>
  <div class="text-center d-flex flex-column align-items-center gap-2 mt-3">
    <a href="https://viajaya.wintercr.com" target="_blank" class="btn btn-primary btn-sm">Ver <font-awesome-icon class="ms-1" icon="fa-solid fa-play" /></a>
    <a href="https://github.com/LeonSolisPedro/ViajaYa" target="_blank" class="btn btn-primary btn-sm">Ver código <font-awesome-icon class="ms-1" icon="fa-solid fa-code" /></a>
  </div>
  
</template>


<style>
.carousel-caption h5,
.carousel-caption p {
  color: var(--bs-body-color) !important;
}

.fantastic-image {
  aspect-ratio: 16/9;
  object-fit: cover;
}
</style>
