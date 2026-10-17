
export interface IExperienceProject {
  id: string
  name: string
  description: string
  status?: string
  contributions?: string[]
  technologies?: string[]
  url?: string
}

export interface IExperience {
  id: string
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
