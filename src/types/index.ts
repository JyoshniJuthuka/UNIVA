export type ExperienceLevel = 'Beginner' | 'Intermediate' | 'Final Year / Fresh Graduate';

export type CareerDomain = 
  | 'Frontend Developer'
  | 'Data Analyst'
  | 'UI/UX Designer'
  | 'Backend Developer'
  | 'Cloud & DevOps Associate';

export interface CareerTrack {
  id: string;
  title: CareerDomain;
  shortDesc: string;
  interestCategory: string;
  requiredSkills: string[];
  recommendedFirstStep: string;
  averageBridgeMonths: string;
  roadmap: RoadmapStep[];
}

export interface RoadmapStep {
  id: string;
  title: string;
  status: 'completed' | 'current' | 'upcoming';
  duration: string;
  description: string;
  keyTopics: string[];
  suggestedProject: string;
  difficulty: 'Foundational' | 'Core' | 'Advanced' | 'Industry Ready';
}

export type OpportunityType = 'internship' | 'course' | 'project' | 'job';

export interface OpportunityItem {
  id: string;
  type: OpportunityType;
  title: string;
  organization: string;
  format: string; // e.g. "Remote / Stipend", "Self-paced", "Capstone"
  skills: string[];
  level: 'Beginner' | 'Intermediate' | '0–1 years';
  durationOrExp: string;
  description: string;
  matchScore?: number;
  highlightBadge?: string;
}

export interface DiscoveryFormState {
  interest: string;
  currentSkills: string[];
  careerGoal: CareerDomain;
  experience: ExperienceLevel;
}

export interface DiscoveryResult {
  career: CareerTrack;
  matchPercentage: number;
  possessedSkills: string[];
  skillsToImprove: string[];
  recommendedNextStep: string;
  roadmapPreview: RoadmapStep[];
}
