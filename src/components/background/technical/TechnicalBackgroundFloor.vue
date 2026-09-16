<template>
  <g>
    <path
      d="
        M0 690
        H1600
        V1000
        H0
        Z
      "
      class="floor"
    />

    <ellipse
      cx="800"
      cy="700"
      rx="360"
      ry="45"
      fill="url(#floorGlow)"
      filter="url(#blurL)"
    />

    <path
      d="M150 690H1450"
      class="horizon"
    />

    <g class="floor-grid">
      <path d="M800 690L420 1000" />
      <path d="M800 690L580 1000" />
      <path d="M800 690L700 1000" />
      <path d="M800 690L900 1000" />
      <path d="M800 690L1020 1000" />
      <path d="M800 690L1180 1000" />

      <path d="M650 750H950" />
      <path d="M575 820H1025" />
      <path d="M500 900H1100" />
      <path d="M420 990H1180" />
    </g>

    <path
      d="
        M775 690
        H825
        L900 1000
        H700
        Z
      "
      class="light-spill"
    />
  </g>
</template>

<style scoped>
.floor {
  fill: var(--color-background);
  opacity: 0.72;
}

.horizon {
  stroke: var(--color-primary);
  stroke-width: 1;
  opacity: 0.16;
}

.floor-grid {
  fill: none;
  stroke: var(--color-border);
  stroke-width: 1;
  opacity: 0.14;
}

.light-spill {
  fill: var(--color-primary);
  opacity: 0.018;
}
</style>