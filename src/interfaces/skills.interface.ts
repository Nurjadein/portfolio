export interface ISkillCategory {
  title: string;
  skills: string[];
}

export interface ISkillsData {
  title: string;
  categories: ISkillCategory[];
}