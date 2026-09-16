<template>
  <g>
    <rect
      width="1600"
      height="1000"
      fill="url(#ambientGlow)"
    />

    <rect
      width="1600"
      height="1000"
      fill="url(#grid)"
      opacity=".24"
    />

    <rect
      width="1600"
      height="1000"
      fill="url(#microGrid)"
      opacity=".12"
    />

    <ellipse
      cx="800"
      cy="410"
      rx="430"
      ry="330"
      fill="url(#reactorGlow)"
      filter="url(#blurXL)"
    />
  </g>
</template>