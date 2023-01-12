<template>
  <header class="m-3">

    <div>
      <a class="d-inline-block mx-2" target="_top" href="mailto:pedro@wintercr.com" v-tooltip aria-label="Contáctame por Correo" data-bs-title="Contáctame por Correo" data-bs-placement="bottom">
        <font-awesome-icon icon="fa-solid fa-envelope" size="3x" />
      </a>
      <a class="d-inline-block mx-3" target="_blank" href="https://twitter.com/LeonSolisPedro" v-tooltip aria-label="Twitter" data-bs-title="Twitter" data-bs-placement="bottom">
        <font-awesome-icon icon="fa-brands fa-twitter" size="3x" />
      </a>
      <a class="d-inline-block mx-2" target="_blank" href="https://github.com/LeonSolisPedro" v-tooltip aria-label="Github" data-bs-title="Github" data-bs-placement="bottom">
        <font-awesome-icon icon="fa-brands fa-github" size="3x" />
      </a>
    </div>

  </header>
</template>


<style>
header {
  position: absolute;
  right: 0;
}

header svg {
  transition: all 0.3s ease;
  color: rgba(255, 255, 255, 0.5);
}

header svg:hover {
  color: rgba(255, 255, 255, 1);
}

@media (prefers-reduced-motion: reduce) {
  header svg {
    transition: none;
    color: rgba(255, 255, 255, 0.85);
  }
}
</style>