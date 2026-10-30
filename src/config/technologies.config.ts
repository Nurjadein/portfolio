import { technologyIcons } from '@/lib/technology-icons'

export const technologies = {
  vue3: {
    name: 'Vue 3',
    category: 'frontend',
    icon: technologyIcons.vue3,
  },
  typescript: {
    name: 'TypeScript',
    category: 'frontend',
    icon: technologyIcons.typescript,
  },
  javascript: {
    name: 'JavaScript',
    category: 'frontend',
    icon: technologyIcons.javascript,
  },
  quasar: {
    name: 'Quasar',
    category: 'frontend',
    icon: technologyIcons.quasar,
  },
  pinia: {
    name: 'Pinia',
    category: 'frontend',
    icon: technologyIcons.pinia,
  },
  tailwindcss: {
    name: 'Tailwind CSS',
    category: 'frontend',
    icon: technologyIcons.tailwindcss,
  },

  nestjs: {
    name: 'NestJS',
    category: 'backend',
    icon: technologyIcons.nestjs,
  },
  restApis: {
    name: 'REST APIs',
    category: 'backend',
    icon: technologyIcons.restApis,
  },
  openapi: {
    name: 'OpenAPI',
    category: 'backend',
    icon: technologyIcons.openapi,
  },

  mysql: {
    name: 'MySQL',
    category: 'database',
    icon: technologyIcons.mysql,
  },
  indexeddb: {
    name: 'IndexedDB',
    category: 'database',
    icon: technologyIcons.indexeddb,
  },

  git: {
    name: 'Git',
    category: 'tools',
    icon: technologyIcons.git,
  },
  github: {
    name: 'GitHub',
    category: 'tools',
    icon: technologyIcons.github,
  },
  npm: {
    name: 'npm',
    category: 'tools',
    icon: technologyIcons.npm,
  },

  chatgpt: {
    name: 'ChatGPT',
    category: 'ai',
    icon: technologyIcons.chatgpt,
  },
  gemini: {
    name: 'Gemini',
    category: 'ai',
    icon: technologyIcons.gemini,
  },

  react: {
    name: 'React',
    category: 'frontend',
    icon: technologyIcons.react,
  },
} as const

export type TechnologyId = keyof typeof technologies
export type Technology = (typeof technologies)[TechnologyId]
export type TechnologyCategory = Technology['category']

export const technologyIds = Object.keys(
  technologies,
) as TechnologyId[]

export const currentlyLearningTechnologyIds = [
  'react',
] as const satisfies readonly TechnologyId[]

export const currentlyLearningTechnologies =
  currentlyLearningTechnologyIds.map((id) => ({
    id,
    ...technologies[id],
  }))

export const skillCategoryOrder = [
  'frontend',
  'backend',
  'database',
  'tools',
  'ai',
] as const satisfies readonly TechnologyCategory[]

export const skillCategories = skillCategoryOrder.map((category) => ({
  category,
  technologies: technologyIds
    .filter(
      (id) =>
        technologies[id].category === category &&
        !currentlyLearningTechnologyIds.includes(
          id as (typeof currentlyLearningTechnologyIds)[number],
        ),
    )
    .map((id) => ({
      id,
      ...technologies[id],
    })),
}))

export const heroTechnologyIds = [
  'vue3',
  'typescript',
  'quasar',
  'tailwindcss',
  'nestjs',
  'mysql',
  'chatgpt',
  'gemini',
] as const satisfies readonly TechnologyId[]

export const heroTechnologies = heroTechnologyIds.map((id) => ({
  id,
  ...technologies[id],
}))

export function getTechnology(id: TechnologyId): Technology {
  return technologies[id]
}