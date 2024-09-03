<template>
  <div id="carouselprojects" class="container px-5 py-4">

    <h2 class="text-center">Mis proyectos</h2>

    <p class="text-center">Temporal</p>

    

    <div id="flex-carouselprojects">
      <div class="nav flex-column nav-pills me-3" role="tablist">
        <button class="nav-link active" data-bs-toggle="pill" data-bs-target="#proyecto-1" type="button">Proyecto 1</button>
        <button class="nav-link" data-bs-toggle="pill" data-bs-target="#proyecto-2" type="button">Proyecto 2</button>
        <button class="nav-link" data-bs-toggle="pill" data-bs-target="#proyecto-3" type="button">Proyecto 3</button>
      </div>
      <div class="tab-content">
        <div class="tab-pane fade show active" id="proyecto-1" role="tabpanel" tabindex="0">
          <CarouselForEach />
        </div>
        <div class="tab-pane fade" id="proyecto-2" role="tabpanel" tabindex="0">
          Proyecto 2
        </div>
        <div class="tab-pane fade" id="proyecto-3" role="tabpanel" tabindex="0">
          Proyecto 3
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

<style>
#flex-carouselprojects {
  display: flex;
}

#flex-carouselprojects .nav {
  flex: 0 0 25%;
}

#flex-carouselprojects .tab-content {
  flex: 0 0 75%;
}
</style>