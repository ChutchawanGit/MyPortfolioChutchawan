import { Project } from '../../../core/entities';
import { ProjectRepository } from '../../../core/repositories';
import supabaseClient from '../client';

export class SupabaseProjectRepository implements ProjectRepository {
  async getAll(): Promise<Project[]> {
    const { data, error } = await supabaseClient
      .from('projects')
      .select('*')
      .order('created_at', { ascending: false });

    if (error) {
      console.error('Error fetching projects:', error);
      throw new Error('Failed to fetch projects');
    }

    return data.map(item => ({
      id: item.id,
      title: item.title,
      description: item.description,
      technologies: item.technologies,
      imageUrl: item.image_url,
      githubUrl: item.github_url || undefined,
      liveUrl: item.live_url || undefined
    }));
  }

  async getById(id: string): Promise<Project | null> {
    const { data, error } = await supabaseClient
      .from('projects')
      .select('*')
      .eq('id', id)
      .single();

    if (error) {
      console.error(`Error fetching project with id ${id}:`, error);
      return null;
    }

    return {
      id: data.id,
      title: data.title,
      description: data.description,
      technologies: data.technologies,
      imageUrl: data.image_url,
      githubUrl: data.github_url || undefined,
      liveUrl: data.live_url || undefined
    };
  }

  async create(project: Omit<Project, 'id'>): Promise<Project> {
    const { data, error } = await supabaseClient
      .from('projects')
      .insert({
        title: project.title,
        description: project.description,
        technologies: project.technologies,
        image_url: project.imageUrl,
        github_url: project.githubUrl,
        live_url: project.liveUrl
      })
      .select()
      .single();

    if (error) {
      console.error('Error creating project:', error);
      throw new Error('Failed to create project');
    }

    return {
      id: data.id,
      title: data.title,
      description: data.description,
      technologies: data.technologies,
      imageUrl: data.image_url,
      githubUrl: data.github_url || undefined,
      liveUrl: data.live_url || undefined
    };
  }

  async update(id: string, project: Partial<Project>): Promise<Project | null> {
    const updateData: any = {};
    
    if (project.title !== undefined) updateData.title = project.title;
    if (project.description !== undefined) updateData.description = project.description;
    if (project.technologies !== undefined) updateData.technologies = project.technologies;
    if (project.imageUrl !== undefined) updateData.image_url = project.imageUrl;
    if (project.githubUrl !== undefined) updateData.github_url = project.githubUrl;
    if (project.liveUrl !== undefined) updateData.live_url = project.liveUrl;

    const { data, error } = await supabaseClient
      .from('projects')
      .update(updateData)
      .eq('id', id)
      .select()
      .single();

    if (error) {
      console.error(`Error updating project with id ${id}:`, error);
      return null;
    }

    return {
      id: data.id,
      title: data.title,
      description: data.description,
      technologies: data.technologies,
      imageUrl: data.image_url,
      githubUrl: data.github_url || undefined,
      liveUrl: data.live_url || undefined
    };
  }

  async delete(id: string): Promise<boolean> {
    const { error } = await supabaseClient
      .from('projects')
      .delete()
      .eq('id', id);

    if (error) {
      console.error(`Error deleting project with id ${id}:`, error);
      return false;
    }

    return true;
  }
}

// Export a singleton instance
export const projectRepository = new SupabaseProjectRepository();