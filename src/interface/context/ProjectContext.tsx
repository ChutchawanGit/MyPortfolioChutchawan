import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { Project } from '../../core/entities';
import { ProjectUseCases } from '../../application/useCases/projectUseCases';
import { projectRepository } from '../../infrastructure/supabase/repositories/projectRepository';

// Create use cases with the repository implementation
const projectUseCases = new ProjectUseCases(projectRepository);

interface ProjectContextType {
  projects: Project[];
  loading: boolean;
  error: string | null;
  fetchProjects: () => Promise<void>;
  getProjectById: (id: string) => Promise<Project | null>;
  searchProjects: (query: string) => Promise<void>;
  filterByTechnology: (technology: string) => Promise<void>;
}

const ProjectContext = createContext<ProjectContextType | undefined>(undefined);

export const useProjects = () => {
  const context = useContext(ProjectContext);
  if (!context) {
    throw new Error('useProjects must be used within a ProjectProvider');
  }
  return context;
};

interface ProjectProviderProps {
  children: ReactNode;
}

export const ProjectProvider: React.FC<ProjectProviderProps> = ({ children }) => {
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  const fetchProjects = async () => {
    setLoading(true);
    try {
      const projectsData = await projectUseCases.getAllProjects();
      setProjects(projectsData);
      setError(null);
    } catch (err) {
      setError('Failed to fetch projects');
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const getProjectById = async (id: string): Promise<Project | null> => {
    try {
      return await projectUseCases.getProjectById(id);
    } catch (err) {
      setError('Failed to fetch project');
      console.error(err);
      return null;
    }
  };

  const searchProjects = async (query: string) => {
    setLoading(true);
    try {
      const filteredProjects = await projectUseCases.searchProjects(query);
      setProjects(filteredProjects);
      setError(null);
    } catch (err) {
      setError('Failed to search projects');
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const filterByTechnology = async (technology: string) => {
    setLoading(true);
    try {
      const filteredProjects = await projectUseCases.getProjectsByTechnology(technology);
      setProjects(filteredProjects);
      setError(null);
    } catch (err) {
      setError('Failed to filter projects');
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProjects();
  }, []);

  const value = {
    projects,
    loading,
    error,
    fetchProjects,
    getProjectById,
    searchProjects,
    filterByTechnology
  };

  return <ProjectContext.Provider value={value}>{children}</ProjectContext.Provider>;
};