import { Project, Skill, ContactMessage, Experience, Education, Profile } from '../entities';

// These interfaces define the contract that any repository implementation must fulfill
// This allows us to swap out the data source without changing the application code

export interface ProjectRepository {
  getAll(): Promise<Project[]>;
  getById(id: string): Promise<Project | null>;
  create(project: Omit<Project, 'id'>): Promise<Project>;
  update(id: string, project: Partial<Project>): Promise<Project | null>;
  delete(id: string): Promise<boolean>;
}

export interface SkillRepository {
  getAll(): Promise<Skill[]>;
  getByCategory(category: string): Promise<Skill[]>;
  create(skill: Omit<Skill, 'id'>): Promise<Skill>;
  update(id: string, skill: Partial<Skill>): Promise<Skill | null>;
  delete(id: string): Promise<boolean>;
}

export interface ContactRepository {
  send(message: Omit<ContactMessage, 'id' | 'read' | 'createdAt'>): Promise<ContactMessage>;
  getAll(): Promise<ContactMessage[]>;
  markAsRead(id: string): Promise<boolean>;
  delete(id: string): Promise<boolean>;
}

export interface ExperienceRepository {
  getAll(): Promise<Experience[]>;
  create(experience: Omit<Experience, 'id'>): Promise<Experience>;
  update(id: string, experience: Partial<Experience>): Promise<Experience | null>;
  delete(id: string): Promise<boolean>;
}

export interface EducationRepository {
  getAll(): Promise<Education[]>;
  create(education: Omit<Education, 'id'>): Promise<Education>;
  update(id: string, education: Partial<Education>): Promise<Education | null>;
  delete(id: string): Promise<boolean>;
}

export interface ProfileRepository {
  get(): Promise<Profile | null>;
  update(profile: Partial<Profile>): Promise<Profile | null>;
}