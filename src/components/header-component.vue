<template>
  <header class="m-3">

    <div>
      <a href="mailto:pedro@wintercr.com" v-b-tooltip.hover title="Contáctame por Correo" class="mx-2" target="_top">
        <font-awesome-icon :icon="[ 'fa', 'envelope' ]" size="3x" />
      </a>
      <a href="https://twitter.com/LeonSolisPedro" v-b-tooltip.hover title="Twitter" class="mx-3" target="_blank">
        <font-awesome-icon :icon="[ 'fab', 'twitter' ]" size="3x" />
      </a>
      <a href="https://github.com/LeonSolisPedro" v-b-tooltip.hover title="Github" class="mx-2" target="_blank">
        <font-awesome-icon :icon="[ 'fab', 'github' ]" size="3x" />
      </a>

    </div>

  </header>
</template>

<script>
export default {
  name: "header-component"
}
</script>

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
</style>