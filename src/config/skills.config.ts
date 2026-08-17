import type { ISkillsData } from '@/interfaces/skills.interface';
export const skillsData: ISkillsData = {
  title: 'Skills',

  categories: [
    {
      title: 'Frontend',
      skills: [
        'Vue 3',
        'TypeScript',
        'JavaScript',
        'Quasar',
        'Pinia',
        'Tailwind CSS',
      ],
    },

    {
      title: 'Backend',
      skills: [
        'NestJS',
        'REST APIs',
        'OpenAPI',
      ],
    },

    {
      title: 'Database',
      skills: [
        'MySQL',
        'IndexedDB',
      ],
    },

    {
      title: 'Tools',
      skills: [
        'Git',
        'GitHub',
        'npm',
      ],
    },
  ],
};