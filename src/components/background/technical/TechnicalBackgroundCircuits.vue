<template>
  <g>
    <g mask="url(#pageMask)">
      <g class="circuit-traces">
        <path d="M0 280H190V330H330" />
        <path d="M0 390H125V430H300" />
        <path d="M0 520H210V475H335" />
        <path d="M100 150V245H250V290H350" />
        <path d="M220 0V105H320V190H400" />
        <path d="M60 690H190V620H310V570H365" />

        <path d="M160 280V220H235" />
        <path d="M125 430V495H205" />
        <path d="M210 475V400H270" />
        <path d="M250 290V350H320" />
      </g>

      <g class="circuit-traces">
        <path d="M1600 280H1410V330H1270" />
        <path d="M1600 390H1475V430H1300" />
        <path d="M1600 520H1390V475H1265" />
        <path d="M1500 150V245H1350V290H1250" />
        <path d="M1380 0V105H1280V190H1200" />
        <path d="M1540 690H1410V620H1290V570H1235" />

        <path d="M1440 280V220H1365" />
        <path d="M1475 430V495H1395" />
        <path d="M1390 475V400H1330" />
        <path d="M1350 290V350H1280" />
      </g>

      <g class="circuit-traces">
        <path d="M400 0V110H520V180H640" />
        <path d="M600 0V85H700V145H735" />
        <path d="M1000 0V85H900V145H865" />
        <path d="M1200 0V110H1080V180H960" />
      </g>

      <g class="circuit-traces">
        <path d="M420 1000V870H540V790H650" />
        <path d="M600 1000V900H700V820H745" />
        <path d="M1000 1000V900H900V820H855" />
        <path d="M1180 1000V870H1060V790H950" />
      </g>
    </g>

    <g class="nodes">
      <g>
        <circle cx="190" cy="330" r="4" />
        <circle
          cx="190"
          cy="330"
          r="9"
          class="node-ring"
        />
      </g>

      <g>
        <circle cx="300" cy="430" r="3" />
        <circle
          cx="300"
          cy="430"
          r="8"
          class="node-ring"
        />
      </g>

      <g>
        <circle cx="210" cy="475" r="4" />
        <circle
          cx="210"
          cy="475"
          r="9"
          class="node-ring"
        />
      </g>

      <g>
        <circle cx="250" cy="290" r="3" />
        <circle
          cx="250"
          cy="290"
          r="8"
          class="node-ring"
        />
      </g>

      <g>
        <circle cx="1410" cy="330" r="4" />
        <circle
          cx="1410"
          cy="330"
          r="9"
          class="node-ring"
        />
      </g>

      <g>
        <circle cx="1300" cy="430" r="3" />
        <circle
          cx="1300"
          cy="430"
          r="8"
          class="node-ring"
        />
      </g>

      <g>
        <circle cx="1390" cy="475" r="4" />
        <circle
          cx="1390"
          cy="475"
          r="9"
          class="node-ring"
        />
      </g>

      <g>
        <circle cx="1350" cy="290" r="3" />
        <circle
          cx="1350"
          cy="290"
          r="8"
          class="node-ring"
        />
      </g>

      <g>
        <circle cx="520" cy="180" r="3" />
        <circle
          cx="520"
          cy="180"
          r="8"
          class="node-ring"
        />
      </g>

      <g>
        <circle cx="1080" cy="180" r="3" />
        <circle
          cx="1080"
          cy="180"
          r="8"
          class="node-ring"
        />
      </g>
    </g>

    <g class="energy-paths">
      <path d="M610 420H335" />
      <path d="M990 420H1265" />

      <path d="M800 230V145" />
      <path d="M800 610V695" />

      <path d="M665 285L540 160" />
      <path d="M935 285L1060 160" />

      <path d="M665 555L540 680" />
      <path d="M935 555L1060 680" />
    </g>

    <g class="hud-data">
      <path d="M120 350H165" />
      <path d="M120 360H145" />

      <path d="M1435 350H1480" />
      <path d="M1455 360H1480" />

      <path d="M250 735H310" />
      <path d="M250 745H285" />

      <path d="M1290 735H1350" />
      <path d="M1315 745H1350" />

      <path d="M455 110H510" />
      <path d="M1090 110H1145" />
    </g>

    <g class="particles">
      <circle cx="290" cy="205" r="1.5" />
      <circle cx="1310" cy="205" r="1.5" />
      <circle cx="175" cy="570" r="1" />
      <circle cx="1425" cy="570" r="1" />
      <circle cx="390" cy="120" r="1" />
      <circle cx="1210" cy="120" r="1" />
      <circle cx="350" cy="620" r="1" />
      <circle cx="1250" cy="620" r="1" />
      <circle cx="510" cy="260" r="1" />
      <circle cx="1090" cy="260" r="1" />
    </g>
  </g>
</template>

<style scoped>
.circuit-traces {
  fill: none;
  stroke: var(--color-primary);
  stroke-width: 1.2;
  opacity: 0.16;
}

.circuit-traces path:nth-child(3n) {
  stroke: var(--hero-name-end);
  opacity: 0.12;
}

.nodes circle:first-child {
  fill: var(--color-primary);
  opacity: 0.65;
}

.node-ring {
  fill: none !important;
  stroke: var(--color-primary);
  stroke-width: 1;
  opacity: 0.22;
}

.energy-paths {
  fill: none;
  stroke: url(#trace);
  stroke-width: 1.5;
  opacity: 0.65;
}

.hud-data {
  fill: none;
  stroke: var(--color-border);
  stroke-width: 1;
  opacity: 0.18;
}

.particles {
  fill: var(--color-primary);
  opacity: 0.28;
}
</style>