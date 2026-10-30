import type { IExperience } from '@/interfaces/experience.interface'

import itsmarawiLogoSrc from '@/assets/images/experience/itsmarawi-logo.png'
import dunkinLogoSrc from '@/assets/images/experience/dunkin-logo.png'
import eseqrScreenshotSrc from '@/assets/images/experience/eseqr-transportation.png'
import hrsScreenshotSrc from '@/assets/images/experience/hrs.png'
import seeappScreenshotSrc from '@/assets/images/experience/seeapp-ranao.png'
import kandoriScreenshotSrc from '@/assets/images/experience/kandori.png'

interface IExperienceImage {
  src: string
  alt: string
}

type IExperienceWithMedia = IExperience & {
  companyIsTranslationKey?: boolean
  companyLogo?: IExperienceImage
  projects?: Array<
    NonNullable<IExperience['projects']>[number] & {
      screenshot?: IExperienceImage
    }
  >
}

const itsmarawiLogo: IExperienceImage = {
  src: itsmarawiLogoSrc,
  alt: 'ITSMarawi company logo',
}

const dunkinLogo: IExperienceImage = {
  src: dunkinLogoSrc,
  alt: 'Dunkin company logo',
}

export const experiences: IExperienceWithMedia[] = [
  {
    id: 'itsmarawi-developer-2025',
    company: 'ITSMarawi',
    role: 'experience.entries.itsmarawi-developer-2025.role',
    startDate: 'Jul 2025',
    endDate: 'Feb 2026',
    location: 'experience.entries.itsmarawi-developer-2025.location',
    description:
      'experience.entries.itsmarawi-developer-2025.description',
    companyLogo: itsmarawiLogo,
    projects: [
      {
        id: 'eseqr-transportation',
        name: 'e-SeQR Transportation',
        description:
          'experience.entries.itsmarawi-developer-2025.projects.eseqr-transportation.description',
        status:
          'experience.entries.itsmarawi-developer-2025.projects.eseqr-transportation.status',
        contributions: [
          'experience.entries.itsmarawi-developer-2025.projects.eseqr-transportation.contributions.0',
          'experience.entries.itsmarawi-developer-2025.projects.eseqr-transportation.contributions.1',
          'experience.entries.itsmarawi-developer-2025.projects.eseqr-transportation.contributions.2',
          'experience.entries.itsmarawi-developer-2025.projects.eseqr-transportation.contributions.3',
          'experience.entries.itsmarawi-developer-2025.projects.eseqr-transportation.contributions.4',
          'experience.entries.itsmarawi-developer-2025.projects.eseqr-transportation.contributions.5',
          'experience.entries.itsmarawi-developer-2025.projects.eseqr-transportation.contributions.6',
        ],
        technologies: [
          'Vue.js',
          'Quasar',
          'TypeScript',
          'Pinia',
          'Git',
          'GitHub',
        ],
        url: 'https://eseqr-transpo.web.app/',
        screenshot: {
          src: eseqrScreenshotSrc,
          alt: 'e-SeQR Transportation landing page',
        },
      },
    ],
  },

  {
    id: 'dunkin-team-member',
    company: 'experience.entries.dunkin-team-member.companyName',
    companyIsTranslationKey: true,
    role: 'experience.entries.dunkin-team-member.role',
    startDate: 'Sep 2023',
    endDate: 'Nov 2024',
    location: 'experience.entries.dunkin-team-member.location',
    description:
      'experience.entries.dunkin-team-member.description',
    companyLogo: dunkinLogo,
    contributions: [
      'experience.entries.dunkin-team-member.contributions.0',
      'experience.entries.dunkin-team-member.contributions.1',
      'experience.entries.dunkin-team-member.contributions.2',
      'experience.entries.dunkin-team-member.contributions.3',
    ],
  },

  {
    id: 'itsmarawi-associate-engineer',
    company: 'ITSMarawi',
    role: 'experience.entries.itsmarawi-associate-engineer.role',
    startDate: 'Sep 2021',
    endDate: 'Jun 2023',
    location: 'experience.entries.itsmarawi-associate-engineer.location',
    description:
      'experience.entries.itsmarawi-associate-engineer.description',
    companyLogo: itsmarawiLogo,
    projects: [
      {
        id: 'human-resources-system',
        name: 'Human Resources System (HRS)',
        description:
          'experience.entries.itsmarawi-associate-engineer.projects.human-resources-system.description',
        status:
          'experience.entries.itsmarawi-associate-engineer.projects.human-resources-system.status',
        contributions: [
          'experience.entries.itsmarawi-associate-engineer.projects.human-resources-system.contributions.0',
          'experience.entries.itsmarawi-associate-engineer.projects.human-resources-system.contributions.1',
          'experience.entries.itsmarawi-associate-engineer.projects.human-resources-system.contributions.2',
          'experience.entries.itsmarawi-associate-engineer.projects.human-resources-system.contributions.3',
          'experience.entries.itsmarawi-associate-engineer.projects.human-resources-system.contributions.4',
        ],
        technologies: [
          'Vue.js',
          'Quasar',
          'TypeScript',
          'Vuex',
          'Cypress',
          'NestJS',
          'Git',
          'GitHub',
        ],
        screenshot: {
          src: hrsScreenshotSrc,
          alt: 'Human Resources System interface marked PRIVATE',
        },
      },
      {
        id: 'seeapp-ranao',
        name: 'SeeApp Ranao',
        description:
          'experience.entries.itsmarawi-associate-engineer.projects.seeapp-ranao.description',
        status:
          'experience.entries.itsmarawi-associate-engineer.projects.seeapp-ranao.status',
        contributions: [
          'experience.entries.itsmarawi-associate-engineer.projects.seeapp-ranao.contributions.0',
          'experience.entries.itsmarawi-associate-engineer.projects.seeapp-ranao.contributions.1',
          'experience.entries.itsmarawi-associate-engineer.projects.seeapp-ranao.contributions.2',
          'experience.entries.itsmarawi-associate-engineer.projects.seeapp-ranao.contributions.3',
          'experience.entries.itsmarawi-associate-engineer.projects.seeapp-ranao.contributions.4',
        ],
        technologies: [
          'Vue.js',
          'Quasar',
          'TypeScript',
          'Vuex',
          'NestJS',
          'OpenAPI',
          'Git',
          'GitHub',
        ],
        url: 'https://seeapp-vaccine.itsmarawi.com/',
        screenshot: {
          src: seeappScreenshotSrc,
          alt: 'SeeApp Ranao landing page',
        },
      },
    ],
  },

  {
    id: 'itsmarawi-intern',
    company: 'ITSMarawi',
    role: 'experience.entries.itsmarawi-intern.role',
    startDate: 'May 2021',
    endDate: 'Aug 2021',
    location: 'experience.entries.itsmarawi-intern.location',
    description:
      'experience.entries.itsmarawi-intern.description',
    companyLogo: itsmarawiLogo,
    projects: [
      {
        id: 'kandori',
        name: 'Kandori',
        description:
          'experience.entries.itsmarawi-intern.projects.kandori.description',
        contributions: [
          'experience.entries.itsmarawi-intern.projects.kandori.contributions.0',
          'experience.entries.itsmarawi-intern.projects.kandori.contributions.1',
          'experience.entries.itsmarawi-intern.projects.kandori.contributions.2',
          'experience.entries.itsmarawi-intern.projects.kandori.contributions.3',
          'experience.entries.itsmarawi-intern.projects.kandori.contributions.4',
        ],
        technologies: [
          'Vue.js',
          'Quasar',
          'TypeScript',
          'Vuex',
          'NestJS',
          'OpenAPI',
          'Git',
          'GitHub',
        ],
        url: 'https://kandori.itsmarawi.com/',
        screenshot: {
          src: kandoriScreenshotSrc,
          alt: 'Kandori landing page',
        },
      },
    ],
  },
]