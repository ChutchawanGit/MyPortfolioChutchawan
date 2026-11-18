import React from 'react';

const Experience: React.FC = () => {
  const experiences = [
    {
      rev: 'REV B',
      period: 'JAN 2023 – PRESENT',
      company: 'Ducklab Co., Ltd.',
      position: 'Backend / Full-Stack Developer',
      status: 'ACTIVE RUNTIME',
      statusColor: 'var(--cyan)',
      description:
        'Full-stack backend engineering, enterprise database migrations, payment gateway architectures, and high-security compliance for government and institution web applications.',
      achievements: [
        {
          tag: 'DB MIGRATION',
          title: 'Cross-Database Migration (MariaDB → SQL Server 2025)',
          detail:
            'Migrated the cpd-eff evaluation system from MariaDB to SQL Server 2025. Restored missing IDENTITY(1,1) across ~40 tables, converted non-compliant GROUP BY queries to strict T-SQL standards, created Python migration scripts, and debugged a critical SQLSRV memory buffer bug causing duplicate hashes in MigrateCardNo controller.'
        },
        {
          tag: 'PAYMENT & SEC',
          title: 'Multi-Channel Payment Integration & PII Security',
          detail:
            'Engineered payment integrations with Opn Payments (Omise) and Krungthai Bank (KTB) supporting 3D-Secure, asynchronous Webhooks, and Tokenization APIs (zero raw card storage). Executed database encryption and SHA-256 hashing across 5,701 National ID personnel records in SQL Server for secure indexing.'
        },
        {
          tag: 'CONTAINER & OCI8',
          title: 'PHP 8.4 Modernization & Oracle 12c Driver Bridge',
          detail:
            'Upgraded Docker web containers from legacy PHP 7.3.31 (Ubuntu 18.04) to PHP 8.4.27 on CentOS 7.9 host to resolve critical CVEs. Successfully compiled and configured native OCI8 and PDO_OCI drivers, maintaining continuous connectivity with on-premise Oracle Database 12c (THKNEWBASE).'
        },
        {
          tag: 'EVENT CMS & SSE',
          title: 'International Conference CMS & Real-Time SSE (ASPAC / INTEDIF 2026)',
          detail:
            'Engineered block-based CMS with polymorphic page_contents tables for NSM Thailand international conferences. Built real-time check-in via Server-Sent Events (SSE) utilizing CI4 cache as a lightweight signal bus, and automated multilingual PDF invitation generation via Dompdf.'
        },
        {
          tag: 'AUTOMATED QA',
          title: 'Automated PHPUnit Testing & Layout Stabilization',
          detail:
            'Developed comprehensive PHPUnit test suites covering controllers, layouts, and feature flows for fahs-clinic with 100% pass rates. Resolved complex responsive CSS/HTML breaking issues and navbar overflows caused by long Thai display names.'
        }
      ],
      technologies: [
        'PHP 8.4',
        'CodeIgniter 4',
        'Microsoft SQL Server 2025',
        'Oracle Database 12c (OCI8)',
        'MariaDB',
        'PHPUnit',
        'Dompdf',
        'Docker',
        'Python',
        'GitLab',
        'CentOS 7'
      ]
    },
    {
      rev: 'REV A',
      period: '',
      company: 'Software Solutions & Services / Technical Automation',
      position: 'Backend & Automation Engineer',
      status: 'VERIFIED COMPLETE',
      statusColor: 'var(--amber)',
      description:
        'Engineered automated background data synchronization, Computer Vision review screening pipelines, and analytical sales dashboards.',
      achievements: [
        {
          tag: 'DATA SYNC',
          title: 'Automated Marketplace API Sync & Cron Automation',
          detail:
            'Built scheduled CLI background processing synchronizing sales and product data from e-commerce marketplace APIs on daily, time-based, and condition-based intervals with external reference validation.'
        },
        {
          tag: 'SALES ANALYTICS',
          title: 'Marketplace Sales Analytics & Grafana Integration',
          detail:
            'Developed data aggregation pipelines applying business calculation formulas to raw marketplace sales metrics before streaming processed datasets into databases powering Grafana dashboards.'
        },
        {
          tag: 'OCR VALIDATION',
          title: 'Screenshot Review Fraud Detection via Tesseract OCR',
          detail:
            'Built an OCR verification pipeline using Tesseract to extract text from submitted review images, successfully filtering out irrelevant screenshots and fraudulent submission attempts.'
        },
        {
          tag: 'COMPUTER VISION',
          title: 'YOLO Person Detection & Privacy-Oriented Screening',
          detail:
            'Integrated YOLO computer vision models to detect human figures in uploaded review photos for privacy/PDPA risk screening and verify product relevance before publishing.'
        },
        {
          tag: 'AI PROTOTYPE',
          title: 'RAG Semantic Search Prototype (Qdrant & Firecrawl)',
          detail:
            'Prototyped a Retrieval-Augmented Generation (RAG) pipeline scraping dynamic web content via Firecrawl and Scrapling into clean Markdown, embedded into Qdrant vector database for semantic search across official Thai documents.'
        }
      ],
      technologies: [
        'Python',
        'Tesseract OCR',
        'YOLO (Computer Vision)',
        'Qdrant (Vector DB)',
        'PHP CLI',
        'Grafana',
        'REST APIs',
        'Firecrawl',
        'Linux',
        'Git'
      ]
    }
  ];

  return (
    <section id="experience" className="py-8">
      <div className="max-w-[1240px] mx-auto px-4 sm:px-6">
        <div className="bp-sheet">
          {/* Top Title Strip */}
          <div className="bp-strip">
            <span className="font-bold text-[var(--amber)]">[ 03 ]</span>
            <span className="bp-strip-title">PRODUCTION CHRONOLOGY &amp; DEPLOYMENT REVISION LOG</span>
            <span className="hidden sm:inline text-[var(--ink-3)]">HAS-PORTFOLIO · SHEET 03 / 05</span>
          </div>
          <div className="bp-ruler"></div>
          <div className="bp-crosshair"></div>

          {/* Section Kicker */}
          <div className="mb-8 pt-2">
            <div className="flex items-center gap-2 font-mono-code text-xs text-[var(--amber)] uppercase tracking-[0.18em]">
              <span className="w-1.5 h-1.5 bg-[var(--amber)]"></span>
              <span>ENGINEERING SERVICE RECORD &amp; VERIFIED IMPACT LOG</span>
            </div>
            <h2 className="font-cond font-bold text-3xl sm:text-5xl uppercase tracking-tight text-[var(--ink)] mt-1">
              PROFESSIONAL EXPERIENCE
            </h2>
          </div>

          {/* Timeline Revisions */}
          <div className="space-y-10">
            {experiences.map((exp) => (
              <div
                key={exp.rev}
                className="border border-[var(--ink-4)] bg-[rgba(12,58,106,0.3)] p-6 sm:p-8 relative"
              >
                {/* Header Strip of the Experience Block */}
                <div className="flex flex-wrap items-center justify-between gap-3 border-b border-[var(--ink-4)] pb-4 mb-6">
                  <div>
                    <div className="flex items-center gap-3">
                      <span className="font-mono-code text-xs font-bold px-2 py-0.5 bg-[rgba(127,220,255,0.15)] text-[var(--cyan)] border border-[var(--cyan)]">
                        {exp.rev}
                      </span>
                      <h3 className="font-cond font-bold text-2xl uppercase tracking-wider text-[var(--ink)] m-0">
                        {exp.company}
                      </h3>
                    </div>
                    <div className="font-mono-code text-xs text-[var(--amber)] mt-1">
                      {exp.position} · <span className="text-[var(--ink-2)]">{exp.period}</span>
                    </div>
                  </div>

                  <div className="font-mono-code text-xs flex items-center gap-2 border border-[var(--ink-4)] px-3 py-1 bg-[var(--paper-deep)]">
                    <span
                      className="w-2 h-2 rounded-full"
                      style={{ backgroundColor: exp.statusColor }}
                    ></span>
                    <span style={{ color: exp.statusColor }}>{exp.status}</span>
                  </div>
                </div>

                <p className="text-sm text-[var(--ink-2)] leading-relaxed mb-6 font-mono-code">
                  {`// ${exp.description}`}
                </p>

                {/* Engineering Achievements Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                  {exp.achievements.map((item, idx) => (
                    <div
                      key={idx}
                      className="border border-[var(--ink-4)] bg-[rgba(7,37,70,0.5)] p-4 relative"
                    >
                      <div className="flex items-center gap-2 font-mono-code text-[10px] text-[var(--cyan)] mb-1 uppercase tracking-wider">
                        <span className="text-[var(--amber)]">Δ</span>
                        <span>{item.tag}</span>
                      </div>
                      <h4 className="font-cond font-bold text-base text-[var(--ink)] mb-2 uppercase">
                        {item.title}
                      </h4>
                      <p className="text-xs text-[var(--ink-2)] leading-relaxed m-0 font-sans">
                        {item.detail}
                      </p>
                    </div>
                  ))}
                </div>

                {/* Technology Stack Footer */}
                <div className="pt-4 border-t border-[var(--ink-4)] flex flex-wrap items-center gap-2">
                  <span className="font-mono-code text-[11px] text-[var(--ink-3)] uppercase tracking-wider mr-2">
                    DEPLOYED STACK:
                  </span>
                  {exp.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="font-mono-code text-[11px] px-2 py-0.5 bg-[rgba(127,220,255,0.06)] border border-[rgba(127,220,255,0.2)] text-[var(--cyan)] rounded-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
