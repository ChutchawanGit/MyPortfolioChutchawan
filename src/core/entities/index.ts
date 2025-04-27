// Define the core entities (domain models) here
// These are independent of any framework or database

export interface Project {
    id: string;
    title: string;
    description: string;
    technologies: string[];
    imageUrl: string;
    githubUrl?: string;
    liveUrl?: string;
  }
  
  export interface Skill {
    id: string;
    name: string;
    category: string;
    proficiency: number; // 1-5 scale
  }
  
  export interface ContactMessage {
    id: string;
    name: string;
    email: string;
    message: string;
    read: boolean;
    createdAt: Date;
  }
  
  export interface Experience {
    id: string;
    company: string;
    position: string;
    startDate: Date;
    endDate?: Date;
    description: string;
    technologies: string[];
  }
  
  export interface Education {
    id: string;
    institution: string;
    degree: string;
    field: string;
    startDate: Date;
    endDate?: Date;
  }
  
  export interface Profile {
    name: string;
    title: string;
    summary: string;
    location: string;
    email: string;
    phone?: string;
    github?: string;
    linkedin?: string;
    website?: string;
    avatar?: string;
  }