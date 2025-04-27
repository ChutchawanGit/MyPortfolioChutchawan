import React, { useState } from 'react';
import { useProjects } from '../../context/ProjectContext';

const Projects: React.FC = () => {
  const { projects, loading, error, searchProjects, filterByTechnology } = useProjects();
  const [searchQuery, setSearchQuery] = useState('');
  
  // Extract unique technologies from all projects
  const allTechnologies = Array.from(
    new Set(
      projects.flatMap(project => project.technologies)
    )
  ).sort();

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    searchProjects(searchQuery);
  };

  const handleTechnologyClick = (technology: string) => {
    filterByTechnology(technology);
  };

  const handleClearFilters = () => {
    // Reset to show all projects
    searchProjects('');
    setSearchQuery('');
  };

  if (loading) {
    return (
      <section id="projects" className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">My Projects</h2>
          <div className="flex justify-center">
            <div className="animate-pulse flex space-x-4">
              <div className="rounded-full bg-slate-200 h-10 w-10"></div>
              <div className="flex-1 space-y-6 py-1">
                <div className="h-2 bg-slate-200 rounded"></div>
                <div className="space-y-3">
                  <div className="grid grid-cols-3 gap-4">
                    <div className="h-2 bg-slate-200 rounded col-span-2"></div>
                    <div className="h-2 bg-slate-200 rounded col-span-1"></div>
                  </div>
                  <div className="h-2 bg-slate-200 rounded"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }

  if (error) {
    return (
      <section id="projects" className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">My Projects</h2>
          <div className="text-center text-red-500">
            <p>Error loading projects. Please try again later.</p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="projects" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center">My Projects</h2>
        
        {/* Search and filter */}
        <div className="mb-8">
          <form onSubmit={handleSearch} className="flex mb-4">
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search projects..."
              className="px-4 py-2 border border-gray-300 rounded-l flex-grow focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button 
              type="submit"
              className="bg-blue-600 text-white px-4 py-2 rounded-r hover:bg-blue-700 transition"
            >
              Search
            </button>
          </form>
          
          <div className="flex flex-wrap gap-2 mb-4">
            <span className="font-medium">Filter by technology:</span>
            {allTechnologies.map(tech => (
              <button
                key={tech}
                onClick={() => handleTechnologyClick(tech)}
                className="px-3 py-1 bg-gray-200 rounded-full text-sm hover:bg-gray-300 transition"
              >
                {tech}
              </button>
            ))}
            {(searchQuery || projects.length !== allTechnologies.length) && (
              <button 
                onClick={handleClearFilters}
                className="px-3 py-1 bg-red-100 text-red-700 rounded-full text-sm hover:bg-red-200 transition"
              >
                Clear filters
              </button>
            )}
          </div>
        </div>
        
        {/* Projects grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map(project => (
            <div 
              key={project.id} 
              className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition"
            >
              <div className="h-48 overflow-hidden">
                <img 
                  src={project.imageUrl} 
                  alt={project.title}
                  className="w-full h-full object-cover object-center"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                <p className="text-gray-600 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map(tech => (
                    <span 
                      key={`${project.id}-${tech}`}
                      className="px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex space-x-3">
                  {project.githubUrl && (
                    <a 
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-700 hover:text-gray-900"
                    >
                      <i className="fab fa-github mr-1"></i> GitHub
                    </a>
                  )}
                  {project.liveUrl && (
                    <a 
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 hover:text-blue-800"
                    >
                      <i className="fas fa-external-link-alt mr-1"></i> Live Demo
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {projects.length === 0 && (
          <div className="text-center py-8">
            <p className="text-gray-500">No projects found matching your criteria.</p>
          </div>
        )}
      </div>
    </section>
  );
};

export default Projects;