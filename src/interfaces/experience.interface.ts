export interface IExperienceProject {
  name: string
  description: string
  status?: string
  contributions?: string[]
  technologies?: string[]
  url?: string
}
export interface IExperience {
  company: string
  role: string
  startDate: string
  endDate: string
  location: string
  description?: string
  contributions?: string[]
  projects?: IExperienceProject[]
  technologies?: string[]
}
