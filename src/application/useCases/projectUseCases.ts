import { Project } from '../../core/entities';
import { ProjectRepository } from '../../core/repositories';

// Use cases encapsulate all application business logic
// They are independent of the UI and infrastructure

export class ProjectUseCases {
  private projectRepository: ProjectRepository;

  constructor(projectRepository: ProjectRepository) {
    this.projectRepository = projectRepository;
  }

  async getAllProjects(): Promise<Project[]> {
    return this.projectRepository.getAll();
  }

  async getProjectById(id: string): Promise<Project | null> {
    return this.projectRepository.getById(id);
  }

  async createProject(project: Omit<Project, 'id'>): Promise<Project> {
    // Here we could add validation, business rules, etc.
    return this.projectRepository.create(project);
  }

  async updateProject(id: string, project: Partial<Project>): Promise<Project | null> {
    return this.projectRepository.update(id, project);
  }

  async deleteProject(id: string): Promise<boolean> {
    return this.projectRepository.delete(id);
  }

  async searchProjects(query: string): Promise<Project[]> {
    const projects = await this.projectRepository.getAll();
    
    return projects.filter(project => 
      project.title.toLowerCase().includes(query.toLowerCase()) ||
      project.description.toLowerCase().includes(query.toLowerCase()) ||
      project.technologies.some(tech => 
        tech.toLowerCase().includes(query.toLowerCase())
      )
    );
  }

  async getProjectsByTechnology(technology: string): Promise<Project[]> {
    const projects = await this.projectRepository.getAll();
    
    return projects.filter(project =>
      project.technologies.some(tech => 
        tech.toLowerCase() === technology.toLowerCase()
      )
    );
  }
}