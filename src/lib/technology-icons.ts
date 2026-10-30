
import {
  siVuedotjs,
  siTypescript,
  siJavascript,
  siQuasar,
  siPinia,
  siTailwindcss,
  siNestjs,
  siMysql,
  siGit,
  siGithub,
  siNpm,
  siOpenapiinitiative,
  siGooglegemini,
} from 'simple-icons';

import type { SimpleIcon } from 'simple-icons';

function toBrandSvgDataUrl(icon: SimpleIcon): string {
  const svg = icon.svg.replace(
    /<path\b/g,
    `<path fill="#${icon.hex}"`,
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
      stroke="#2563EB"
      stroke-width="3.2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M27 12L21 36"
      fill="none"
      stroke="#2563EB"
      stroke-width="3"
      stroke-linecap="round"
    />
  </svg>
`);

const indexedDbIcon = toCustomSvgDataUrl(`
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48">
    <path
      d="M8 13C8 9.7 15.2 7 24 7S40 9.7 40 13V35C40 38.3 32.8 41 24 41S8 38.3 8 35Z"
      fill="#E96B24"
    />
    <ellipse
      cx="24"
      cy="13"
      rx="16"
      ry="6"
      fill="#F59A59"
    />
    <path
      d="M8 24C8 27.3 15.2 30 24 30S40 27.3 40 24M8 35C8 38.3 15.2 41 24 41S40 38.3 40 35"
      fill="none"
      stroke="#FFF7F0"
      stroke-width="2"
    />
  </svg>
`);

const chatgptIcon = toCustomSvgDataUrl(`
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 48 48"
    fill="none"
    stroke="#10A37F"
    stroke-width="2.8"
    stroke-linecap="round"
    stroke-linejoin="round"
  >
    <path d="M24 7.5 32.5 12.4 32.5 22.2 24 27.1 15.5 22.2 15.5 12.4Z"/>
    <path d="M24 7.5 32.5 2.8 41 7.7 41 17.5 32.5 22.2"/>
    <path d="M41 17.5 41 27.3 32.5 32.2 24 27.1"/>
    <path d="M32.5 32.2 24 37.1 15.5 32.2 15.5 22.2"/>
    <path d="M15.5 32.2 7 27.3 7 17.5 15.5 12.4"/>
    <path d="M7 17.5 7 7.7 15.5 2.8 24 7.5"/>
  </svg>
`);

export const technologyIcons = {
  vue3: toBrandSvgDataUrl(siVuedotjs),
  typescript: toBrandSvgDataUrl(siTypescript),
  javascript: toBrandSvgDataUrl(siJavascript),
  quasar: toBrandSvgDataUrl(siQuasar),
  pinia: toBrandSvgDataUrl(siPinia),
  tailwindcss: toBrandSvgDataUrl(siTailwindcss),
  nestjs: toBrandSvgDataUrl(siNestjs),
  restApis: restApisIcon,
  openapi: toBrandSvgDataUrl(siOpenapiinitiative),
  mysql: toBrandSvgDataUrl(siMysql),
  indexeddb: indexedDbIcon,
  git: toBrandSvgDataUrl(siGit),
  github: toBrandSvgDataUrl(siGithub),
  npm: toBrandSvgDataUrl(siNpm),
  chatgpt: chatgptIcon,
  gemini: toBrandSvgDataUrl(siGooglegemini),
} as const;

export type TechnologyIconId = keyof typeof technologyIcons;