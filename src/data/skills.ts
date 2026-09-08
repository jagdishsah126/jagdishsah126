export interface Skill {
  name: string;
  icon: string;
  proficiency: number;
}

export interface SkillCategory {
  title: string;
  skills: Skill[];
}

export const skills: SkillCategory[] = [
  {
    title: 'Frontend Development',
    skills: [
      { name: '[Data to be Inserted: Skill 1]', icon: 'Layout', proficiency: 85 },
      { name: '[Data to be Inserted: Skill 2]', icon: 'Code', proficiency: 80 },
    ],
  },
  {
    title: 'Backend Development',
    skills: [
      { name: '[Data to be Inserted: Skill 3]', icon: 'Server', proficiency: 75 },
      { name: '[Data to be Inserted: Skill 4]', icon: 'Terminal', proficiency: 70 },
    ],
  },
];
