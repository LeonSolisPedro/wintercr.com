<template>
  <div id="carouselprojects" class="container px-5 py-4">

    <h2 class="text-center">Mis proyectos</h2>

    <div class="row mt-5 mb-0">
      <div class="col-md-3">
        <div class="nav flex-column nav-pills me-3 mb-2" role="tablist">
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
          iconNavBar: "fa-solid fa-house",
          description: "Viaja Ya es una agencia de viajes que se especializa en la venta de tours a través de contenido dinámico y consumo de APIs",
          liveLink: "https://viajaya.wintercr.com",
          linkCode: "https://github.com/LeonSolisPedro/ViajaYa",
          images: [
            "https://b2-backblaze-stackpath.b-cdn.net/1579919/jvezjw_b0e6664ff4d37dde447277873d0c7d5b59b17f06.jpg",
            "https://as1.ftcdn.net/v2/jpg/08/16/30/22/1000_F_816302285_hckOpmwhWP0WeQzEi5qdYANf5w0HT1u2.jpg",
            "https://www.surreal.co.za/leadership/swatches/swatch_landscape_superhero_jun2023_1_9b85.jpg"
          ],
          isFavorite: true
        },
        {
          id: 2,
          title: "BBB",
          titleNavBar: "BB",
          iconNavBar: "fa-solid fa-house",
          description: "bbbbbbbb",
          liveLink: "https://bbb.wintercr.com",
          linkCode: "https://github.com/LeonSolisPedro/BBB",
          images: [
            "https://imgcdn.stablediffusionweb.com/2024/9/25/c61e95ee-c9ba-4541-a24d-8ec57e240d28.jpg",
            "https://picsum.photos/536/354",
            "https://picsum.photos/536/354"
          ],
          isFavorite: true
        }
      ]
    }
  }
}
</script>