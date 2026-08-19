import type { IAboutData } from "@/interfaces/about.interface";

export const aboutData:IAboutData = {
  title: 'About Me',

  description: `
        Software developer with nearly 3 years of experience building web applications using Vue, TypeScript, NestJS, and MySQL.

        Graduated with a BS in Information Technology major in Database Systems from Mindanao State University Main Campus, Marawi City, Philippines. Experienced in developing maintainable frontend and backend solutions, API integration, state management, and database-driven applications.

        Focused on building scalable, production-ready systems using industry-standard practices, with a strong focus on clean architecture, maintainability, and long-term growth.
        `,

  highlights: [
    {
      label: 'Experience',
      value: '~3 Years',
    },
    {
      label: 'Degree',
      value: 'BSIT (Database Systems)',
    },
    {
      label: 'Primary Stack',
      value: 'Vue + TypeScript',
    },
    {
      label: 'Backend',
      value: 'NestJS + MySQL',
    },
  ],
};