import React from 'react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-[var(--line)] bg-[#072546] py-12 relative overflow-hidden font-mono-code">
      {/* Decorative Blueprint Top Bar */}
      <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[var(--cyan)] to-transparent opacity-60"></div>

      <div className="max-w-[1240px] mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start mb-8">
          <div className="md:col-span-6">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-7 h-7 border border-[var(--cyan)] bg-[var(--paper-2)] flex items-center justify-center font-bold text-xs text-[var(--cyan)]">
                CM
              </div>
              <span className="font-cond font-bold text-xl tracking-wider text-[var(--ink)] uppercase">
                CHUTCHAWAN MEESRIMATUPOJ
              </span>
            </div>
            <p className="text-xs text-[var(--ink-2)] max-w-md leading-relaxed m-0">
              Full-Stack &amp; Back-End Developer specializing in resilient background workers,
              multi-database synchronization pipelines, and AI workflow automations.
            </p>
          </div>

          <div className="md:col-span-3">
            <span className="text-[10px] text-[var(--ink-3)] uppercase tracking-widest block mb-3">
              {`// BLUEPRINT SHEETS`}
            </span>
            <ul className="space-y-1.5 text-xs text-[var(--ink-2)] list-none p-0 m-0">
              <li>
                <a href="#hero" className="hover:text-[var(--cyan)] transition">
                  [ 01 ] TITLE &amp; SPECIFICATION
                </a>
              </li>
              <li>
                <a href="#about" className="hover:text-[var(--cyan)] transition">
                  [ 02 ] TECHNICAL SKILLS ANATOMY
                </a>
              </li>
              <li>
                <a href="#experience" className="hover:text-[var(--cyan)] transition">
                  [ 03 ] REVISION CHRONOLOGY
                </a>
              </li>
              <li>
                <a href="#projects" className="hover:text-[var(--cyan)] transition">
                  [ 04 ] SYSTEM BLUEPRINTS
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-[var(--cyan)] transition">
                  [ 05 ] DISPATCH TRANSMISSION
                </a>
              </li>
            </ul>
          </div>

          <div className="md:col-span-3">
            <span className="text-[10px] text-[var(--ink-3)] uppercase tracking-widest block mb-3">
              {`// EXTERNAL LINKS`}
            </span>
            <div className="space-y-2 text-xs">
              <a
                href="https://github.com/ChutchawanGit"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-[var(--cyan)] hover:underline"
              >
                <i className="fab fa-github text-sm"></i>
                <span>GITHUB REPOSITORIES [↗]</span>
              </a>
              <a
                href="https://www.linkedin.com/in/chutchawan-meesrimatupoj-b6a452301/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-[var(--ink-2)] hover:text-[var(--cyan)] transition"
              >
                <i className="fab fa-linkedin text-sm"></i>
                <span>LINKEDIN NETWORK [↗]</span>
              </a>
              <a
                href="mailto:chutchawanmeesrimatupoj@gmail.com"
                className="flex items-center gap-2 text-[var(--amber)] hover:underline"
              >
                <i className="fas fa-envelope text-sm"></i>
                <span>DIRECT DISPATCH [↗]</span>
              </a>
            </div>
          </div>
        </div>

        {/* Engineering Drawing Meta Colophon */}
        <div className="pt-6 border-t border-[var(--ink-4)] flex flex-col sm:flex-row items-center justify-between gap-3 text-[10px] text-[var(--ink-3)]">
          <div>
            <span>HAS-PORTFOLIO · DWG SET NO. CM-SYS-2026 // REV. B</span>
            <span className="mx-2">·</span>
            <span>SCALE: 1:1 ACTIVE</span>
          </div>
          <div>
            <span>&copy; {currentYear} CHUTCHAWAN MEESRIMATUPOJ. ALL RIGHTS RESERVED.</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
