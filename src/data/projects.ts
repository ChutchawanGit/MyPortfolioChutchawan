import { Project } from '../core/entities';

/**
 * ============================================================================
 * PORTFOLIO PROJECTS DATA (FACT-BASED & VERIFIED 100%)
 * ============================================================================
 * ข้อมูลโปรเจกต์จริงที่ผ่านการตรวจสอบจาก Codebase และประวัติการทำงานจริง:
 * 1. Database Migration & Compatibility (MariaDB -> SQL Server 2025)
 * 2. Multi-Channel Payment Gateway & PII Security (Omise / KTB / SHA-256)
 * 3. Enterprise Container Modernization & Oracle 12c Driver (PHP 8.4 / OCI8)
 * 4. Automated Marketplace Data Integration & Grafana Analytics
 * 5. Review Content Validation with OCR & Computer Vision (Tesseract & YOLO)
 * 6. International Conference CMS & Real-time Event System (ASPAC / INTEDIF 2026)
 * ============================================================================
 */
export const STATIC_PROJECTS: Project[] = [
  {
    id: 'neighborhouses-smart-home',
    title: 'Neighbor Houses – Luxury Smart Living Commercial Platform',
    description:
      'Engineered and launched a luxury smart home commercial web platform built with Next.js 15, TypeScript, Tailwind CSS, and Radix UI. Implemented full Static Site Generation (SSG) across 44 pages with dynamic route params, architectural luxury minimal design, interactive package selectors, and automated GitHub Pages CI/CD deployment.',
    technologies: ['Next.js 15', 'TypeScript', 'Tailwind CSS', 'Radix UI', 'Static Export (SSG)', 'GitHub Pages', 'Lucide Icons'],
    imageUrl: './assets/images/projects/neighborhouses-smarthome.jpg',
    githubUrl: 'https://github.com/ChutchawanGit/neighborhouses-website',
    liveUrl: 'https://chutchawangit.github.io/neighborhouses-website/'
  },
  {
    id: 'db-migration-sqlserver',
    title: 'Cross-Database Migration & Compatibility (MariaDB → SQL Server 2025)',
    description:
      'Migrated enterprise evaluation system (cpd-eff) from MariaDB to SQL Server 2025. Restructured missing IDENTITY(1,1) in ~40 tables, resolved strict GROUP BY syntax discrepancies, generated T-SQL migration scripts via Python, and debugged a critical SQLSRV driver memory buffer bug causing duplicate card hash generation.',
    technologies: ['PHP 8', 'CodeIgniter 4', 'SQL Server 2025', 'MariaDB', 'T-SQL', 'Python', 'DBeaver'],
    imageUrl: './assets/images/projects/fiscal-year-rollover.jpg',
    githubUrl: 'https://github.com/ChutchawanGit'
  },
  {
    id: 'payment-gateway-pii-security',
    title: 'Multi-Channel Payment Integration & PII Security (Omise & KTB)',
    description:
      'Engineered online payment systems integrating Opn Payments (Omise) and Krungthai Bank (KTB). Implemented 3D-Secure, asynchronous Webhooks/DataFeed handlers, and Tokenization API (zero raw card storage). Executed database encryption and SHA-256 hashing across 5,701 National ID personnel records in SQL Server for secure indexing.',
    technologies: ['CodeIgniter 4', 'Opn Payments (Omise)', 'KTB Gateway', 'SQL Server', 'SHA-256', 'Webhooks'],
    imageUrl: './assets/images/projects/marketplace-api-security.jpg',
    githubUrl: 'https://github.com/ChutchawanGit'
  },
  {
    id: 'php-docker-oracle-modernization',
    title: 'Container Modernization & Oracle 12c OCI8 Driver Bridge',
    description:
      'Upgraded containerized web environments from PHP 7.3.31 (Ubuntu 18.04) to PHP 8.4.27 on CentOS 7.9 host to resolve critical CVEs. Compiled and configured OCI8 and PDO_OCI native extensions alongside bcmath/gd/zip, maintaining seamless connectivity with legacy on-premise Oracle Database 12c (THKNEWBASE).',
    technologies: ['PHP 8.4', 'Docker', 'CentOS 7', 'Oracle Database 12c', 'OCI8', 'PDO_OCI', 'Apache 2.4'],
    imageUrl: './assets/images/projects/oracle-sqlserver-etl.jpg'
  },
  {
    id: 'marketplace-grafana-automation',
    title: 'Automated Marketplace Data Integration & Grafana Analytics',
    description:
      'Built automated background CLI pipelines synchronizing sales and product data from e-commerce marketplace APIs. Supported daily, scheduled, and condition-based execution with external reference data verification. Formulated business calculation formulas and integrated aggregated sales metrics directly into Grafana dashboards.',
    technologies: ['PHP CLI', 'CodeIgniter 4', 'REST API', 'cURL', 'Cron Jobs', 'Grafana', 'SQL'],
    imageUrl: './assets/images/projects/audit-analytics-dashboard.jpg'
  },
  {
    id: 'ai-ocr-yolo-validation',
    title: 'Review Screening with Tesseract OCR & YOLO Person Detection',
    description:
      'Developed automated image validation pipelines utilizing Tesseract OCR to detect fake screenshot submissions in product reviews. Integrated YOLO computer vision for person detection to flag privacy/PDPA compliance risks and evaluate product relevance. Prototyped semantic document search pipelines with Qdrant vector database and Firecrawl/Scrapling.',
    technologies: ['Tesseract OCR', 'YOLO', 'Computer Vision', 'Qdrant (Vector DB)', 'Firecrawl', 'Python'],
    imageUrl: './assets/images/projects/ai-n8n-ocr-automation.jpg'
  },
  {
    id: 'conference-cms-sse-testing',
    title: 'Conference Registration CMS, Real-Time SSE & Automated Testing',
    description:
      'Developed web registration and block-based CMS with polymorphic page_contents for international conferences (ASPAC 2026 & INTEDIF 2026 for NSM Thailand). Built real-time check-in via Server-Sent Events (SSE) using CI4 cache, automated multilingual PDF generation via Dompdf, and achieved 100% PHPUnit test pass rate on fahs-clinic.',
    technologies: ['CodeIgniter 4', 'PHPUnit', 'Server-Sent Events (SSE)', 'Dompdf', 'Bootstrap', 'OAuth 2.0'],
    imageUrl: './assets/images/projects/async-assessment-engine.jpg',
    githubUrl: 'https://github.com/ChutchawanGit'
  }
];
