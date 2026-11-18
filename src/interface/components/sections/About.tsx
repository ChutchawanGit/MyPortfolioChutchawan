import React from 'react';

interface SkillModule {
  code: string;
  category: string;
  accent: 'cyan' | 'amber' | 'red';
  items: string[];
}

const skillModules: SkillModule[] = [
  {
    code: 'MOD-01',
    category: 'LANGUAGES & RUNTIMES',
    accent: 'cyan',
    items: [
      'PHP (7.3 – 8.4)',
      'Go (Golang)',
      'Java (Java 8)',
      'Python',
      'JavaScript (ES6+)',
      'SQL (T-SQL, PL/SQL)',
      'C++'
    ]
  },
  {
    code: 'MOD-02',
    category: 'FRAMEWORKS & LIBRARIES',
    accent: 'cyan',
    items: [
      'CodeIgniter 4',
      'PHPUnit (Automated Testing)',
      'Node.js',
      'Dompdf (Automated PDF)',
      'Chart.js',
      'Bootstrap',
      'Tailwind CSS',
      'jQuery'
    ]
  },
  {
    code: 'MOD-03',
    category: 'DATABASES & STORAGE ENGINES',
    accent: 'amber',
    items: [
      'Microsoft SQL Server (2025)',
      'Oracle Database 12c (OCI8)',
      'MariaDB / MySQL',
      'Qdrant (Vector Database)',
      'Google BigQuery',
      'DBeaver'
    ]
  },
  {
    code: 'MOD-04',
    category: 'PAYMENT GATEWAYS & SECURITY',
    accent: 'amber',
    items: [
      'Opn Payments (Omise API)',
      'KTB Gateway (DataFeed)',
      '3D-Secure Authorization',
      'Tokenization API (PCI-DSS)',
      'OAuth 2.0 (Google & LINE)',
      'SHA-256 PII Hashing'
    ]
  },
  {
    code: 'MOD-05',
    category: 'DEVOPS, LINUX & TOOLING',
    accent: 'red',
    items: [
      'Docker & Containerization',
      'OrbStack',
      'Linux (CentOS 7, Ubuntu)',
      'Apache 2.4',
      'Git / GitLab / GitHub',
      'Laragon',
      'VS Code / AI Workflows'
    ]
  },
  {
    code: 'MOD-06',
    category: 'AUTOMATION & COMPUTER VISION',
    accent: 'red',
    items: [
      'Tesseract OCR (Text Extraction)',
      'YOLO (Person Detection)',
      'PHP CLI & Cron Jobs',
      'Grafana Dashboard Analytics',
      'Firecrawl & Scrapling',
      'RAG Pipelines (Prototypes)'
    ]
  }
];

const About: React.FC = () => {
  return (
    <section id="about" className="py-8">
      <div className="max-w-[1240px] mx-auto px-4 sm:px-6">
        <div className="bp-sheet">
          {/* Top Title Strip */}
          <div className="bp-strip">
            <span className="font-bold text-[var(--amber)]">[ 02 ]</span>
            <span className="bp-strip-title">SYSTEM SPECIFICATIONS, ANATOMY &amp; VERIFIED SKILLS</span>
            <span className="hidden sm:inline text-[var(--ink-3)]">HAS-PORTFOLIO · SHEET 02 / 05</span>
          </div>
          <div className="bp-ruler"></div>
          <div className="bp-crosshair"></div>

          {/* Section Kicker */}
          <div className="mb-6 pt-2">
            <div className="flex items-center gap-2 font-mono-code text-xs text-[var(--cyan)] uppercase tracking-[0.18em]">
              <span className="w-1.5 h-1.5 bg-[var(--cyan)]"></span>
              <span>ANATOMY &amp; VERIFIED CORE ARCHITECTURAL COMPETENCIES</span>
            </div>
            <h2 className="font-cond font-bold text-3xl sm:text-5xl uppercase tracking-tight text-[var(--ink)] mt-1">
              ENGINEERING FOUNDATIONS
            </h2>
          </div>

          {/* 3 Anatomy Cards (Fact-Based) */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-10">
            <div className="border border-[var(--ink-4)] border-t-[3px] border-t-[var(--cyan)] bg-[rgba(12,58,106,0.3)] p-5 relative">
              <div className="font-mono-code text-xs text-[var(--cyan)] font-bold tracking-wider mb-2">
                [ 01 · ANCHOR ] DATABASE MIGRATION &amp; DRIVERS
              </div>
              <h3 className="font-cond text-xl font-bold uppercase text-[var(--ink)] mb-2">
                Cross-Database Engineering
              </h3>
              <p className="text-sm text-[var(--ink-2)] leading-relaxed m-0 font-sans">
                Hands-on migration of complex systems from MariaDB to SQL Server 2025, solving missing
                IDENTITY constraints across ~40 tables, adapting strict T-SQL queries, and resolving deep
                driver memory buffer bugs in PHP SQLSRV.
              </p>
            </div>

            <div className="border border-[var(--ink-4)] border-t-[3px] border-t-[var(--amber)] bg-[rgba(12,58,106,0.3)] p-5 relative">
              <div className="font-mono-code text-xs text-[var(--amber)] font-bold tracking-wider mb-2">
                [ 02 · CONDITION ] PAYMENT GATEWAYS &amp; PII
              </div>
              <h3 className="font-cond text-xl font-bold uppercase text-[var(--ink)] mb-2">
                Security &amp; Webhook Reliability
              </h3>
              <p className="text-sm text-[var(--ink-2)] leading-relaxed m-0 font-sans">
                Production integrations with Opn Payments (Omise) &amp; KTB Gateway with 3D-Secure,
                asynchronous Webhooks, and Tokenization APIs (zero raw card storage). Executed database encryption
                and SHA-256 hashing across 5,701 National ID records.
              </p>
            </div>

            <div className="border border-[var(--ink-4)] border-t-[3px] border-t-[var(--red)] bg-[rgba(12,58,106,0.3)] p-5 relative">
              <div className="font-mono-code text-xs text-[var(--red)] font-bold tracking-wider mb-2">
                [ 03 · TARGET ] AUTOMATION &amp; VISION
              </div>
              <h3 className="font-cond text-xl font-bold uppercase text-[var(--ink)] mb-2">
                OCR, Computer Vision &amp; Testing
              </h3>
              <p className="text-sm text-[var(--ink-2)] leading-relaxed m-0 font-sans">
                Deploying Tesseract OCR to detect screenshot fraud in product reviews, YOLO person detection
                for privacy/PDPA risk filtering, background CLI processing, and maintaining 100% PHPUnit test pass
                rates across critical features.
              </p>
            </div>
          </div>

          {/* Technical Skills Modules Grid */}
          <div className="mb-8">
            <div className="flex items-center justify-between border-b border-[var(--ink-4)] pb-2 mb-6">
              <h3 className="font-cond font-bold text-2xl uppercase tracking-wider text-[var(--ink)] m-0">
                PROVEN TECHNICAL SKILLS MATRIX (6 MODULES)
              </h3>
              <span className="font-mono-code text-xs text-[var(--cyan)]">EVIDENCE-BASED · 2026</span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
              {skillModules.map((mod) => {
                const borderAccent =
                  mod.accent === 'cyan'
                    ? 'border-l-[var(--cyan)]'
                    : mod.accent === 'amber'
                    ? 'border-l-[var(--amber)]'
                    : 'border-l-[var(--red)]';

                const badgeStyle =
                  mod.accent === 'cyan'
                    ? 'text-[var(--cyan)] border-[rgba(127,220,255,0.3)] bg-[rgba(127,220,255,0.06)]'
                    : mod.accent === 'amber'
                    ? 'text-[var(--amber)] border-[rgba(255,193,99,0.3)] bg-[rgba(255,193,99,0.06)]'
                    : 'text-[var(--red)] border-[rgba(255,125,125,0.3)] bg-[rgba(255,125,125,0.06)]';

                return (
                  <div
                    key={mod.code}
                    className={`border border-[var(--ink-4)] border-l-[3px] ${borderAccent} bg-[rgba(12,58,106,0.25)] p-5 flex flex-col`}
                  >
                    <div className="flex items-center justify-between mb-3 font-mono-code text-xs">
                      <span className="font-bold text-[var(--ink-3)]">{mod.code}</span>
                      <span className="text-[10px] uppercase tracking-widest text-[var(--ink-2)]">
                        {mod.category}
                      </span>
                    </div>

                    <div className="flex flex-wrap gap-2 mt-auto pt-2">
                      {mod.items.map((skill) => (
                        <span
                          key={skill}
                          className={`font-mono-code text-xs px-2.5 py-1 border rounded-sm font-medium ${badgeStyle}`}
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Education & Meta Specifications */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 pt-4 border-t border-[var(--ink-4)]">
            <div className="bp-callout">
              <span className="bp-callout-tag">ACADEMIC CREDENTIALS</span>
              <h4 className="font-cond font-bold text-xl uppercase text-[var(--ink)] mb-1">
                Bachelor of Science in Computer Science
              </h4>
              <p className="font-mono-code text-xs text-[var(--cyan)] mb-2">
                Rajabhat Suan Sunandha University (Apr 2020 – Apr 2024)
              </p>
              <p className="text-xs text-[var(--ink-2)] leading-relaxed m-0 font-sans">
                Core Foundations: Algorithms, Relational Database Modeling, Operating Systems, Computer Networks &amp; Image Processing.
              </p>
            </div>

            <div className="bp-callout bp-callout-amber">
              <span className="bp-callout-tag">ENGINEERING COMPETENCIES</span>
              <div className="grid grid-cols-2 gap-3 font-mono-code text-xs mt-1">
                <div>
                  <span className="text-[var(--ink-3)] block uppercase text-[10px]">DIAGNOSTICS</span>
                  <span className="text-[var(--ink)] font-semibold block">Root-Cause Debugging</span>
                  <span className="text-[var(--ink-2)] block">Memory Buffer Profiling</span>
                </div>
                <div>
                  <span className="text-[var(--ink-3)] block uppercase text-[10px]">INTEGRATION</span>
                  <span className="text-[var(--amber)] font-semibold block">PCI-DSS Tokenization</span>
                  <span className="text-[var(--ink-2)] block">OCI8 / SQLSRV Drivers</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
