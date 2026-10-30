import {
  siVuedotjs,
  siTypescript,
  siJavascript,
  siQuasar,
  siPinia,
  siTailwindcss,
  siNestjs,
  siReact,
  siMysql,
  siGit,
  siGithub,
  siNpm,
  siOpenapiinitiative,
  siGooglegemini,
} from 'simple-icons';

import type { SimpleIcon } from 'simple-icons';
import openaiBlossom from '@/assets/logos/openai-blossom.svg';

function toBrandSvgDataUrl(
  icon: SimpleIcon,
  color: string = `#${icon.hex}`,
): string {
  const svg = icon.svg.replace(
    /<path\b/g,
    `<path fill="${color}"`,
  );

  return `data:image/svg+xml;charset=UTF-8,${encodeURIComponent(svg)}`;
}

function toCustomSvgDataUrl(svg: string): string {
  return `data:image/svg+xml;charset=UTF-8,${encodeURIComponent(svg)}`;
}

const restApisIcon = toCustomSvgDataUrl(`
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48">
    <path
      d="M16 15L9 24L16 33M32 15L39 24L32 33"
      fill="none"
      stroke="#175A9E"
      stroke-width="3.2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M27 12L21 36"
      fill="none"
      stroke="#175A9E"
      stroke-width="3"
      stroke-linecap="round"
    />
  </svg>
`);

const indexedDbIcon = toCustomSvgDataUrl(`
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48">
    <path
      d="M8 13C8 9.7 15.2 7 24 7S40 9.7 40 13V35C40 38.3 32.8 41 24 41S8 38.3 8 35Z"
      fill="#B85B1C"
    />
    <ellipse
      cx="24"
      cy="13"
      rx="16"
      ry="6"
      fill="#C77A3D"
    />
    <path
      d="M8 24C8 27.3 15.2 30 24 30S40 27.3 40 24M8 35C8 38.3 15.2 41 24 41S40 38.3 40 35"
      fill="none"
      stroke="#FFF7F0"
      stroke-width="2"
    />
  </svg>
`);

export const technologyIcons = {
  vue3: toBrandSvgDataUrl(siVuedotjs, '#27865F'),
  typescript: toBrandSvgDataUrl(siTypescript, '#245A91'),
  javascript: toBrandSvgDataUrl(siJavascript, '#A98200'),
  quasar: toBrandSvgDataUrl(siQuasar, '#175A9E'),
  pinia: toBrandSvgDataUrl(siPinia, '#A98216'),
  tailwindcss: toBrandSvgDataUrl(siTailwindcss, '#087F96'),

  react: toBrandSvgDataUrl(siReact, '#087EA4'),

  nestjs: toBrandSvgDataUrl(siNestjs, '#B51F40'),
  restApis: restApisIcon,
  openapi: toBrandSvgDataUrl(siOpenapiinitiative, '#688500'),

  mysql: toBrandSvgDataUrl(siMysql, '#075B70'),
  indexeddb: indexedDbIcon,

  git: toBrandSvgDataUrl(siGit, '#B93824'),
  github: toBrandSvgDataUrl(siGithub, '#24292F'),
  npm: toBrandSvgDataUrl(siNpm, '#B52E2E'),

  chatgpt: openaiBlossom,
  gemini: toBrandSvgDataUrl(siGooglegemini, '#356AC3'),
} as const;

export type TechnologyIconId = keyof typeof technologyIcons;