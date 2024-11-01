<template>
  <div id="carouselprojects" class="container px-5 py-4">

    <h2 class="text-center">Mis proyectos</h2>

    <div class="row mt-5 mb-0">
      <div class="col-md-3">
        <div class="nav flex-column nav-pills me-3 mb-2" role="tablist">
          <button class="nav-link active" data-bs-toggle="pill" data-bs-target="#proyecto-1"
            type="button"><font-awesome-icon icon="fa-solid fa-house" /> Viaja ya</button>
          <button class="nav-link" data-bs-toggle="pill" data-bs-target="#proyecto-2" type="button">Blog</button>
          <button class="nav-link" data-bs-toggle="pill" data-bs-target="#proyecto-3" type="button">Help</button>
        </div>
      </div>
      <div class="col-md-9">
        <div class="tab-content">
          <div class="tab-pane fade show active" id="proyecto-1" role="tabpanel" tabindex="0">
            <CarouselForEach />
          </div>
          <div class="tab-pane fade" id="proyecto-2" role="tabpanel" tabindex="0">
            <CarouselForEach />
          </div>
          <div class="tab-pane fade" id="proyecto-3" role="tabpanel" tabindex="0">
            <CarouselForEach />
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
  }
}
</script>