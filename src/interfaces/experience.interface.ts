export interface IExperienceImage {
  src: string
  alt: string
}

export interface IExperienceProject {
  id: string
  name: string
  description: string
  status?: string
  contributions?: string
  technologies?: string[]
  url?: string
  screenshot?: IExperienceImage
}

export interface IExperience {
  id: string
  company: string
  companyIsTranslationKey?: boolean
  companyLogo?: IExperienceImage
  role: string
  startDate: string
  endDate: string
  location: string
  description?: string
  contributions?: string
  projects?: IExperienceProject[]
}