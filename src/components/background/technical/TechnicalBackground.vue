<template>
  <div
    class="
      pointer-events-none
      fixed
      inset-0
      z-0
      overflow-hidden
    "
    aria-hidden="true"
  >
    <svg
      class="
        absolute
        left-1/2
        top-0
        hidden
        h-full
        min-h-[900px]
        w-full
        min-w-[1200px]
        -translate-x-1/2
        md:block
      "
      viewBox="0 0 1600 1000"
      fill="none"
      preserveAspectRatio="xMidYMid slice"
    >
      <TechnicalBackgroundDefs />
      <TechnicalBackgroundAtmosphere />
      <TechnicalBackgroundCircuits />
      <TechnicalBackgroundReactor />
      <TechnicalBackgroundFloor />
    </svg>

    <svg
      class="
        absolute
        inset-0
        block
        h-full
        w-full
        md:hidden
      "
      viewBox="0 0 390 844"
      fill="none"
      preserveAspectRatio="xMidYMid slice"
    >
      <TechnicalBackgroundDefs />
      <TechnicalBackgroundMobile />
    </svg>

    <div
      class="
        absolute
        inset-0
        bg-[radial-gradient(ellipse_at_center,transparent_18%,var(--color-background)_100%)]
      "
    />

    <div
      class="
        absolute
        inset-0
        bg-linear-to-b
        from-background/10
        via-transparent
        to-background/90
      "
    />
  </div>
</template>

<script setup lang="ts">
import TechnicalBackgroundAtmosphere from './TechnicalBackgroundAtmosphere.vue'
import TechnicalBackgroundCircuits from './TechnicalBackgroundCircuits.vue'
import TechnicalBackgroundDefs from './TechnicalBackgroundDefs.vue'
import TechnicalBackgroundFloor from './TechnicalBackgroundFloor.vue'
import TechnicalBackgroundMobile from './TechnicalBackgroundMobile.vue'
import TechnicalBackgroundReactor from './TechnicalBackgroundReactor.vue'
</script>