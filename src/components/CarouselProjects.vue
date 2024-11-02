<template>
  <div id="carouselprojects" class="container px-5 py-4">

    <h2 class="text-center">Mis proyectos</h2>

    <div class="row mt-5 mb-0">
      <div class="col-md-3">
        <div class="nav flex-column nav-pills me-3 mb-3" role="tablist">
          <button v-for="(car, index) in favCarousel" class="nav-link" :class="{ 'active': index === 0 }"
            :data-bs-target="`#proyecto-${index}`" data-bs-toggle="pill" type="button">
            <font-awesome-icon :icon="car.iconNavBar" /> {{ car.titleNavBar }}
          </button>
        </div>
      </div>
      <div class="col-md-9">
        <div class="tab-content">
          <div v-for="(car, index) in favCarousel" class="tab-pane fade" :class="{ 'active show': index === 0 }"
            :id="`proyecto-${index}`" role="tabpanel" tabindex="0">
            <CarouselForEach :car="car" />
          </div>
        </div>
      </div>
    </div>


  </div>
</template>

<script>
import CarouselForEach from './_CarouselForEach.vue';
import viajaya1 from "../assets/viajaya1.png"
import viajaya2 from "../assets/viajaya2.png"
import viajaya3 from "../assets/viajaya3.png"

export default {
  components: {
    CarouselForEach
  },
  computed: {
    favCarousel() {
      return this.carousel.filter(x => x.isFavorite == true)
    }
  },
  data() {
    return {
      carousel: [
        {
          id: 1,
          title: "Viaja Ya",
          titleNavBar: "Viaja Ya",
          iconNavBar: "fa-solid fa-plane-departure",
          description: "Viaja Ya es una agencia de viajes que se especializa en la venta de tours a través de contenido dinámico y consumo de APIs",
          liveLink: "https://viajaya.wintercr.com",
          linkCode: "https://github.com/LeonSolisPedro/ViajaYa",
          images: [
            viajaya1,
            viajaya2,
            viajaya3
          ],
          isFavorite: true
        }
      ]
    }
  }
}
</script>