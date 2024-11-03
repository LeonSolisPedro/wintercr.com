<template>
  <div :id="`carouselExampleCaptions${car.id}`" class="carousel slide" data-bs-ride="carousel">
    <div class="carousel-indicators">
      <button v-for="(img, index) in car.images" type="button" :data-bs-target="`#carouselExampleCaptions${car.id}`"
        :data-bs-slide-to="index" :class="{ 'active': index === 0 }"></button>
    </div>
    <div class="carousel-inner rounded">
      <div v-for="(img, index) in car.images" class="carousel-item" :class="{ 'active': index === 0 }" data-bs-interval="5500">
        <img :src="img" class="d-block w-100 fantastic-image" alt="...">
      </div>
    </div>
    <button v-if="car.images.length !== 1" class="carousel-control-prev" type="button" :data-bs-target="`#carouselExampleCaptions${car.id}`"
      data-bs-slide="prev">
      <span class="carousel-control-prev-icon"></span>
      <span class="visually-hidden">Anterior</span>
    </button>
    <button v-if="car.images.length !== 1" class="carousel-control-next" type="button" :data-bs-target="`#carouselExampleCaptions${car.id}`"
      data-bs-slide="next">
      <span class="carousel-control-next-icon"></span>
      <span class="visually-hidden">Siguiente</span>
    </button>
  </div>
  <div class="mt-3">
    <h4 class="text-center">{{ car.title }}</h4>
    <p class="text-center">{{ car.description }}</p>
  </div>
  <div class="text-center d-flex flex-column align-items-center gap-2 mt-3">
    <a v-if="car.liveLink" :href="car.liveLink" target="_blank" class="btn btn-primary btn-sm">Ver <font-awesome-icon class="ms-1"
        icon="fa-solid fa-play" /></a>
    <a v-if="car.linkCode" :href="car.linkCode" target="_blank" class="btn btn-primary btn-sm">Ver código <font-awesome-icon class="ms-1"
        icon="fa-solid fa-code" /></a>
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


<script>
export default {
  props: {
    car: {
      type: Object,
      required: true
    }
  }
}
</script>
