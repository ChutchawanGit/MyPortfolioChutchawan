import React, { useState, useMemo } from 'react';
import { useProjects } from '../../context/ProjectContext';

const Projects: React.FC = () => {
  const { projects, loading, error, searchProjects, filterByTechnology, fetchProjects } =
    useProjects();
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedTech, setSelectedTech] = useState<string | null>(null);

  const allTechnologies = useMemo(
    () => Array.from(new Set(projects.flatMap((project) => project.technologies))).sort(),
    [projects]
  );

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    setSelectedTech(null);
    searchProjects(searchQuery);
  };

  const handleTechnologyClick = (technology: string) => {
    if (selectedTech === technology) {
      handleClearFilters();
      return;
    }
    setSelectedTech(technology);
    filterByTechnology(technology);
  };

  const handleClearFilters = () => {
    setSearchQuery('');
    setSelectedTech(null);
    fetchProjects();
  };

  return (
    <section id="projects" className="py-8">
      <div className="max-w-[1240px] mx-auto px-4 sm:px-6">
        <div className="bp-sheet">
          {/* Top Title Strip */}
          <div className="bp-strip">
            <span className="font-bold text-[var(--amber)]">[ 04 ]</span>
            <span className="bp-strip-title">SYSTEM BLUEPRINTS &amp; ARCHITECTURAL IMPLEMENTATIONS</span>
            <span className="hidden sm:inline text-[var(--ink-3)]">HAS-PORTFOLIO · SHEET 04 / 05</span>
          </div>
          <div className="bp-ruler"></div>
          <div className="bp-crosshair"></div>

          {/* Section Kicker */}
          <div className="mb-6 pt-2">
            <div className="flex items-center gap-2 font-mono-code text-xs text-[var(--cyan)] uppercase tracking-[0.18em]">
              <span className="w-1.5 h-1.5 bg-[var(--cyan)]"></span>
              <span>PRODUCTION SYSTEMS &amp; ARCHITECTURAL SPECIFICATIONS</span>
            </div>
            <h2 className="font-cond font-bold text-3xl sm:text-5xl uppercase tracking-tight text-[var(--ink)] mt-1">
              ENGINEERED BLUEPRINTS
            </h2>
          </div>

          {/* CAD Control Panel (Search & Filters) */}
          <div className="border border-[var(--ink-4)] bg-[rgba(12,58,106,0.3)] p-4 sm:p-5 mb-8">
            <div className="flex flex-col md:flex-row gap-4 items-stretch md:items-center justify-between mb-4">
              <form onSubmit={handleSearch} className="flex-grow flex max-w-lg">
                <div className="relative flex-grow">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-[var(--cyan)]">
                    <i className="fas fa-search text-xs"></i>
                  </div>
                  <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="SEARCH BLUEPRINT / KEYWORD..."
                    className="w-full pl-9 pr-4 py-2 bg-[var(--paper-deep)] border border-[var(--ink-3)] text-[var(--ink)] font-mono-code text-xs placeholder-[var(--ink-3)] focus:border-[var(--cyan)] focus:outline-none"
                  />
                </div>
                <button type="submit" className="bp-btn bp-btn-solid text-xs py-2 px-4 rounded-none">
                  FILTER
                </button>
              </form>

              <div className="font-mono-code text-xs text-[var(--ink-3)] flex items-center gap-2">
                <span>ITEMS:</span>
                <span className="text-[var(--cyan)] font-bold">{projects.length} SYSTEMS</span>
              </div>
            </div>

            {/* Scenario Filter Badges */}
            <div className="flex flex-wrap items-center gap-1.5 pt-2 border-t border-[var(--ink-4)]">
              <span className="font-mono-code text-[10px] text-[var(--ink-3)] uppercase tracking-wider mr-2">
                TECH FILTER:
              </span>
              {allTechnologies.map((tech) => (
                <button
                  key={tech}
                  onClick={() => handleTechnologyClick(tech)}
                  className={`font-mono-code text-xs px-2.5 py-1 border transition uppercase ${
                    selectedTech === tech
                      ? 'bg-[var(--amber)] text-[var(--paper-deep)] border-[var(--amber)] font-bold shadow-[0_0_12px_rgba(255,193,99,0.5)]'
                      : 'bg-[rgba(12,58,106,0.5)] text-[var(--ink-2)] border-[var(--ink-4)] hover:border-[var(--cyan)] hover:text-[var(--cyan)]'
                  }`}
                >
                  {tech}
                </button>
              ))}
              {(searchQuery || selectedTech) && (
                <button
                  onClick={handleClearFilters}
                  className="font-mono-code text-xs px-2.5 py-1 bg-[rgba(255,125,125,0.15)] text-[var(--red)] border border-[var(--red)] hover:bg-[var(--red)] hover:text-[var(--paper-deep)] transition ml-2 uppercase"
                >
                  RESET [ ✕ ]
                </button>
              )}
            </div>
          </div>

          {/* Loading / Error States */}
          {loading && (
            <div className="py-16 text-center font-mono-code text-[var(--cyan)] text-sm">
              <i className="fas fa-circle-notch fa-spin mr-2"></i>
              <span>RETRIEVING BLUEPRINT SCHEMATICS...</span>
            </div>
          )}

          {error && (
            <div className="py-8 font-mono-code text-[var(--red)] text-center text-sm">
              ERROR: FAILED TO FETCH BLUEPRINTS. REVERTING TO LOCAL SPEC DATA.
            </div>
          )}

          {/* Blueprint Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, idx) => (
              <div
                key={project.id}
                className="border border-[var(--ink-4)] bg-[rgba(12,58,106,0.25)] hover:border-[var(--cyan)] transition duration-200 flex flex-col group relative"
              >
                {/* Card Top Strip */}
                <div className="flex items-center justify-between px-3 py-1.5 border-b border-[var(--ink-4)] bg-[rgba(7,37,70,0.7)] font-mono-code text-[10px] text-[var(--ink-3)]">
                  <span className="text-[var(--amber)]">FIG 0{idx + 1} {'//'} SYS-SPEC</span>
                  <span className="group-hover:text-[var(--cyan)] transition">DWG: ACTIVE</span>
                </div>

                {/* Blueprint Architectural Preview Image */}
                <div className="relative aspect-[16/9] overflow-hidden border-b border-[var(--ink-4)] bg-[var(--paper-deep)]">
                  {project.imageUrl ? (
                    <img
                      src={project.imageUrl}
                      alt={project.title}
                      className="w-full h-full object-cover grayscale-[15%] group-hover:grayscale-0 group-hover:scale-105 transition duration-300"
                    />
                  ) : (
                    <div className="w-full h-full flex flex-col items-center justify-center font-mono-code text-xs text-[var(--cyan)] bp-hatch-cyan">
                      <i className="fas fa-server text-2xl mb-1 opacity-70"></i>
                      <span>ARCHITECTURAL DRAWING #{idx + 1}</span>
                    </div>
                  )}
                  {/* Subtle Blueprint Grid Lines Overlay on Card Image */}
                  <div className="absolute inset-0 pointer-events-none border border-[rgba(127,220,255,0.15)]"></div>
                </div>

                {/* Blueprint Card Content */}
                <div className="p-5 flex flex-col flex-grow">
                  <h3 className="font-cond font-bold text-xl uppercase tracking-wider text-[var(--ink)] mb-2 group-hover:text-[var(--cyan)] transition">
                    {project.title}
                  </h3>
                  <p className="text-xs text-[var(--ink-2)] leading-relaxed mb-4 flex-grow font-sans">
                    {project.description}
                  </p>

                  {/* Technology Tags */}
                  <div className="flex flex-wrap gap-1.5 mb-5">
                    {project.technologies.map((tech) => (
                      <span
                        key={`${project.id}-${tech}`}
                        className="font-mono-code text-[10px] px-2 py-0.5 bg-[rgba(127,220,255,0.06)] border border-[rgba(127,220,255,0.24)] text-[var(--cyan)] rounded-sm"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Action Link Buttons */}
                  <div className="pt-3 border-t border-[var(--ink-4)] flex items-center justify-between font-mono-code text-xs">
                    {project.githubUrl ? (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[var(--cyan)] hover:text-white flex items-center gap-1.5"
                      >
                        <i className="fab fa-github"></i>
                        <span>REPOSITORY [↗]</span>
                      </a>
                    ) : (
                      <span className="text-[var(--ink-3)] text-[11px]">PROPRIETARY SYS</span>
                    )}

                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[var(--amber)] hover:text-white flex items-center gap-1.5"
                      >
                        <i className="fas fa-external-link-alt"></i>
                        <span>LIVE DEMO [↗]</span>
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {projects.length === 0 && !loading && (
            <div className="border border-dashed border-[var(--ink-3)] p-8 text-center font-mono-code text-xs text-[var(--ink-2)] my-8">
              NO MATCHING ARCHITECTURAL SPECIFICATIONS FOUND FOR CURRENT FILTER.
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Projects;
