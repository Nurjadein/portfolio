<template>
  <defs>
    <radialGradient
      id="ambientGlow"
      cx="50%"
      cy="42%"
      r="48%"
    >
      <stop
        offset="0%"
        class="primary-stop"
        stop-opacity=".16"
      />

      <stop
        offset="35%"
        class="primary-stop"
        stop-opacity=".06"
      />

      <stop
        offset="100%"
        class="primary-stop"
        stop-opacity="0"
      />
    </radialGradient>

    <radialGradient
      id="reactorGlow"
      cx="50%"
      cy="50%"
      r="50%"
    >
      <stop
        offset="0%"
        class="primary-stop"
        stop-opacity=".42"
      />

      <stop
        offset="35%"
        class="indigo-stop"
        stop-opacity=".18"
      />

      <stop
        offset="100%"
        class="primary-stop"
        stop-opacity="0"
      />
    </radialGradient>

    <radialGradient
      id="floorGlow"
      cx="50%"
      cy="50%"
      r="50%"
    >
      <stop
        offset="0%"
        class="primary-stop"
        stop-opacity=".14"
      />

      <stop
        offset="100%"
        class="primary-stop"
        stop-opacity="0"
      />
    </radialGradient>

    <radialGradient
      id="core"
      cx="50%"
      cy="50%"
      r="50%"
    >
      <stop
        offset="0%"
        class="core-bright-stop"
      />

      <stop
        offset="25%"
        class="primary-stop"
        stop-opacity=".95"
      />

      <stop
        offset="65%"
        class="indigo-stop"
        stop-opacity=".55"
      />

      <stop
        offset="100%"
        class="primary-stop"
        stop-opacity="0"
      />
    </radialGradient>

    <linearGradient
      id="coreSurface"
      x1="0"
      y1="0"
      x2="1"
      y2="1"
    >
      <stop
        offset="0%"
        class="surface-light-stop"
      />

      <stop
        offset="50%"
        class="surface-mid-stop"
      />

      <stop
        offset="100%"
        class="surface-deep-stop"
      />
    </linearGradient>

    <linearGradient
      id="trace"
      x1="0"
      y1="0"
      x2="1"
      y2="0"
    >
      <stop
        offset="0%"
        class="primary-stop"
        stop-opacity="0"
      />

      <stop
        offset="25%"
        class="primary-stop"
        stop-opacity=".35"
      />

      <stop
        offset="70%"
        class="indigo-stop"
        stop-opacity=".7"
      />

      <stop
        offset="100%"
        class="primary-stop"
        stop-opacity="0"
      />
    </linearGradient>

    <pattern
      id="grid"
      width="64"
      height="64"
      patternUnits="userSpaceOnUse"
    >
      <path
        d="M64 0H0V64"
        class="grid-line"
        stroke-width="1"
      />
    </pattern>

    <pattern
      id="microGrid"
      width="16"
      height="16"
      patternUnits="userSpaceOnUse"
    >
      <path
        d="M16 0H0V16"
        class="micro-grid-line"
        stroke-width=".5"
      />
    </pattern>

    <filter
      id="blurXL"
      x="-100%"
      y="-100%"
      width="300%"
      height="300%"
    >
      <feGaussianBlur stdDeviation="75" />
    </filter>

    <filter
      id="blurL"
      x="-100%"
      y="-100%"
      width="300%"
      height="300%"
    >
      <feGaussianBlur stdDeviation="24" />
    </filter>

    <filter
      id="blurS"
      x="-100%"
      y="-100%"
      width="300%"
      height="300%"
    >
      <feGaussianBlur stdDeviation="5" />
    </filter>

    <linearGradient
      id="pageFade"
      x1="0"
      y1="0"
      x2="0"
      y2="1"
    >
      <stop
        offset="0%"
        stop-color="white"
      />

      <stop
        offset="72%"
        stop-color="white"
      />

      <stop
        offset="100%"
        stop-color="black"
      />
    </linearGradient>

    <mask id="pageMask">
      <rect
        width="1600"
        height="1000"
        fill="url(#pageFade)"
      />
    </mask>
  </defs>
</template>

<style scoped>
.primary-stop {
  stop-color: var(--color-primary);
}

.indigo-stop {
  stop-color: var(--hero-name-end);
}

.core-bright-stop {
  stop-color: var(--hero-name-end);
}

.surface-light-stop {
  stop-color: var(--color-surface-muted);
  stop-opacity: 0.72;
}

.surface-mid-stop {
  stop-color: var(--color-surface);
  stop-opacity: 0.5;
}

.surface-deep-stop {
  stop-color: var(--color-background);
  stop-opacity: 0.96;
}

.grid-line {
  stroke: var(--color-border);
  opacity: 0.5;
}

.micro-grid-line {
  stroke: var(--color-border);
  opacity: 0.3;
}
</style>