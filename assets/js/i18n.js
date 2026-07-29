/**
 * Internationalization (i18n) Module
 * Supports Spanish (es) and English (en)
 */

const translations = {
  es: {
    // Navigation
    "nav.about": "Sobre mí",
    "nav.benchmark": "Rendimiento",
    "nav.skills": "Habilidades",
    "nav.experience": "Experiencia",
    "nav.projects": "Logros",
    "nav.education": "Educación",
    "nav.contact": "Contacto",
    "nav.cv": "Descargar CV",

    // Hero Section
    "hero.badge": "Disponible para proyectos y consultoría de alto impacto",
    "hero.role": "Ingeniero Full-Stack & Backend Senior",
    "hero.subtitle": "+8 Años construyendo arquitecturas resilientes, contenerización, APIs RESTful de baja latencia y soluciones de alto rendimiento con el ecosistema Laravel, Vue.js, Docker y Cloud.",
    "hero.cta_projects": "Ver Experiencia y Logros",
    "hero.cta_contact": "Contactar Ahora",
    "hero.badge_location": "Caracas, Venezuela",
    "hero.stat_exp": "Años de Experiencia",
    "hero.stat_users": "Usuarios en Producción",
    "hero.stat_speed": "Optimización SQL (Min a Seg)",

    // Metrics Bar
    "metric.years_title": "8+ Años de Trayectoria",
    "metric.years_desc": "Diseño de arquitectura backend, microservicios e infraestructura en la nube.",
    "metric.sql_title": "99.8% Menos Latencia",
    "metric.sql_desc": "Refactorización crítica pasando de minutos a submilisegundos (<1s).",
    "metric.corporate_title": "1,000+ Empleados",
    "metric.corporate_desc": "Plataforma empresarial activa en más de 31 ubicaciones nacionales.",
    "metric.cloud_title": "DevOps & Cloud",
    "metric.cloud_desc": "Despliegues contenerizados en Azure, Linux, Nginx y pipelines CI/CD.",

    // SQL Benchmark Showcase
    "benchmark.badge": "CASO DE ÉXITO DESTACADO",
    "benchmark.title": "Ingeniería de Rendimiento en Bases de Datos",
    "benchmark.subtitle": "Demostración interactiva de refactorización de consultas complejas y optimización de arquitectura backend implementada en KFC Venezuela.",
    "benchmark.before_label": "ANTES DE REFACTORIZAR",
    "benchmark.before_time": "04m 12s",
    "benchmark.before_desc": "Consultas N+1 sin índices, bloqueos de tabla en SQL Server y endpoints saturados.",
    "benchmark.after_label": "DESPUÉS DE OPTIMIZAR",
    "benchmark.after_time": "0.38s",
    "benchmark.after_desc": "Reescritura de queries, indexación avanzada, memoria cache en Redis y payload streaming.",
    "benchmark.sim_run": "Ejecutar Test de Carga",
    "benchmark.sim_running": "Ejecutando Benchmark...",
    "benchmark.sim_done": "¡Prueba finalizada con éxito!",
    "benchmark.query_title": "Optimización de Endpoint Crítico",
    "benchmark.speedup_badge": "1,100x Más Rápido",

    // Skills Section
    "skills.title": "Stack Tecnológico y Competencias",
    "skills.subtitle": "Herramientas, lenguajes y metodologías dominadas para soluciones empresariales escalables.",
    "skills.cat_all": "Todos",
    "skills.cat_backend": "Backend & APIs",
    "skills.cat_devops": "DevOps & Cloud",
    "skills.cat_databases": "Bases de Datos",
    "skills.cat_architecture": "Arquitectura & IA",
    "skills.cat_frontend": "Frontend",

    // Experience Section
    "exp.title": "Experiencia Profesional",
    "exp.subtitle": "Trayectoria técnica liderando desarrollo backend, optimizaciones complejas y gestión de servidores.",
    
    // KFC
    "exp.kfc_role": "Coordinador de Desarrollo de Software",
    "exp.kfc_company": "KFC Venezuela",
    "exp.kfc_period": "2018 - Presente",
    "exp.kfc_loc": "Caracas, Venezuela",
    "exp.kfc_desc1": "Lideré la refactorización de consultas complejas en SQL Server y endpoints backend, reduciendo tiempos de respuesta de varios minutos a menos de 1 segundo.",
    "exp.kfc_desc2": "Diseñé y lancé el Sistema de Evaluación de Desempeño de Empleados (SEDE), evaluando exitosamente a 1,000+ empleados corporativos en 31+ restaurantes.",
    "exp.kfc_desc3": "Co-desarrollé 'Max-Point' para KFC Ecuador: motor personalizado de facturación electrónica e integración con sistemas legados.",
    "exp.kfc_desc4": "Administración de infraestructura cloud en Azure/Linux con Docker, proxy inverso Nginx y tareas programadas en segundo plano (Cron Jobs).",

    // Vocem
    "exp.vocem_role": "Desarrollador Full-Stack Senior",
    "exp.vocem_company": "Vocem Venezuela",
    "exp.vocem_period": "2016 - 2018",
    "exp.vocem_loc": "Caracas, Venezuela",
    "exp.vocem_desc1": "Lideré el desarrollo integral de aplicaciones web y automatización de flujos de datos, reduciendo drásticamente la entrada manual.",
    "exp.vocem_desc2": "Diseñé arquitecturas backend en PHP/Laravel, esquemas DB optimizados e integré pasarelas de SMS y correo transaccional.",
    "exp.vocem_desc3": "Configuré servidores Nginx/Apache maximizando la disponibilidad y velocidad del sistema.",

    // Doku
    "exp.doku_role": "Desarrollador de Software Semi-Senior",
    "exp.doku_company": "Doku Soluciones",
    "exp.doku_period": "2012 - 2016",
    "exp.doku_loc": "Caracas, Venezuela",
    "exp.doku_desc1": "Desarrollé plataformas web full-stack y protocolos de comunicación a nivel de hardware para impresoras térmicas en red.",
    "exp.doku_desc2": "Optimicé consultas SQL e interfaces garantizando transmisión de datos sin latencia entre hardware físico y servidores.",

    // Projects / Accomplishments
    "projects.title": "Logros y Proyectos Destacados",
    "projects.subtitle": "Implementaciones de referencia, motores de API y soluciones empresariales.",
    
    "proj.ddd_title": "Starter Clean Architecture & TDD",
    "proj.ddd_tag": "Arquitectura / Laravel 10",
    "proj.ddd_desc": "Implementación de referencia aplicando Domain-Driven Design (DDD), patrones de arquitectura limpia, desacoplamiento y 100% cobertura de pruebas automatizadas.",
    
    "proj.jsonapi_title": "Motor de Especificación JSON:API",
    "proj.jsonapi_tag": "Backend RESTful",
    "proj.jsonapi_desc": "Motor de desarrollo RESTful cumpliendo estrictamente con el estándar JSON:API para integraciones de alto rendimiento con clientes web y móviles.",
    
    "proj.sede_title": "Sistema SEDE (Evaluación de Desempeño)",
    "proj.sede_tag": "Plataforma Corporativa",
    "proj.sede_desc": "Plataforma web escalable que digitalizó el proceso de evaluación anual para más de 1,000 empleados en 31+ ubicaciones nacionales en tiempo real.",
    
    "proj.maxpoint_title": "Max-Point (KFC Ecuador)",
    "proj.maxpoint_tag": "Facturación & Legados",
    "proj.maxpoint_desc": "Motor de facturación electrónica y reportes corporativos integrando arquitectura multicapa sobre múltiples sistemas legados.",

    // Education
    "edu.title": "Formación y Especialización",
    "edu.subtitle": "Fundamentos académicos y aprendizaje autodidacta continuo orientado a las últimas tecnologías.",
    "edu.degree_title": "Ingeniería de Sistemas",
    "edu.degree_inst": "Instituto Universitario Politécnico 'Santiago Mariño', Caracas",
    "edu.passions_title": "Especialización & Pasión Técnica",
    "edu.passions_desc": "Estudio autónomo continuo orientado a Flujos Avanzados de Cloud/DevOps, Seguridad en Aplicaciones Web & Hacking Ético, Arquitecturas de Microservicios e Integración de Herramientas de Desarrollo basadas en IA.",

    // Contact Footer
    "contact.title": "¿Tienes un proyecto desafiante en mente?",
    "contact.subtitle": "Estoy disponible para roles Senior Backend / Full-Stack, liderazgo técnico y consultorías de optimización de infraestructura o bases de datos.",
    "contact.email_btn": "Enviar Correo Electrónico",
    "contact.copy_email": "Copiar Email",
    "contact.copied": "¡Copiado!",
    "contact.phone": "Teléfono / WhatsApp",
    "contact.location": "Ubicación",
    "contact.footer_rights": "Rayyanir Rosales Rubio. Todos los derechos reservados. Diseñado para GitHub Pages.",
    "contact.view_github": "Ver GitHub",
    "contact.view_linkedin": "Ver LinkedIn"
  },

  en: {
    // Navigation
    "nav.about": "About Me",
    "nav.benchmark": "Performance",
    "nav.skills": "Skills",
    "nav.experience": "Experience",
    "nav.projects": "Achievements",
    "nav.education": "Education",
    "nav.contact": "Contact",
    "nav.cv": "Download CV",

    // Hero Section
    "hero.badge": "Available for high-impact projects & consulting",
    "hero.role": "Senior Full-Stack & Backend Engineer",
    "hero.subtitle": "+8 Years crafting resilient architecture, containerization, low-latency RESTful APIs, and high-performance web applications powered by Laravel, Vue.js, Docker & Cloud ecosystems.",
    "hero.cta_projects": "View Experience & Projects",
    "hero.cta_contact": "Get in Touch",
    "hero.badge_location": "Caracas, Venezuela",
    "hero.stat_exp": "Years of Experience",
    "hero.stat_users": "Production Users",
    "hero.stat_speed": "SQL Query Optimization",

    // Metrics Bar
    "metric.years_title": "8+ Years Track Record",
    "metric.years_desc": "Backend architecture design, microservices, and cloud infrastructure.",
    "metric.sql_title": "99.8% Latency Drop",
    "metric.sql_desc": "Critical query refactoring turning minutes into subseconds (<1s).",
    "metric.corporate_title": "1,000+ Employees",
    "metric.corporate_desc": "Active corporate platform deployed across 31+ nationwide branches.",
    "metric.cloud_title": "DevOps & Cloud",
    "metric.cloud_desc": "Containerized deployments on Azure, Linux, Nginx, and CI/CD pipelines.",

    // SQL Benchmark Showcase
    "benchmark.badge": "FEATURED SUCCESS CASE",
    "benchmark.title": "Database Performance Engineering",
    "benchmark.subtitle": "Interactive demonstration of complex query refactoring and backend optimization implemented at KFC Venezuela.",
    "benchmark.before_label": "BEFORE REFACTORING",
    "benchmark.before_time": "04m 12s",
    "benchmark.before_desc": "Unindexed N+1 queries, table locks on SQL Server, and bottlenecked endpoints.",
    "benchmark.after_label": "AFTER OPTIMIZATION",
    "benchmark.after_time": "0.38s",
    "benchmark.after_desc": "Query rewrites, composite indexing, Redis caching, and stream payload processing.",
    "benchmark.sim_run": "Run Benchmark Test",
    "benchmark.sim_running": "Running Benchmark...",
    "benchmark.sim_done": "Benchmark completed successfully!",
    "benchmark.query_title": "Critical Endpoint Optimization",
    "benchmark.speedup_badge": "1,100x Faster",

    // Skills Section
    "skills.title": "Tech Stack & Core Competencies",
    "skills.subtitle": "Tools, languages, and frameworks mastered to engineer high-scale corporate solutions.",
    "skills.cat_all": "All",
    "skills.cat_backend": "Backend & APIs",
    "skills.cat_devops": "DevOps & Cloud",
    "skills.cat_databases": "Databases",
    "skills.cat_architecture": "Architecture & AI",
    "skills.cat_frontend": "Frontend",

    // Experience Section
    "exp.title": "Work Experience",
    "exp.subtitle": "Proven technical leadership in backend development, complex refactoring, and server management.",
    
    // KFC
    "exp.kfc_role": "Software Development Coordinator",
    "exp.kfc_company": "KFC Venezuela",
    "exp.kfc_period": "2018 - Present",
    "exp.kfc_loc": "Caracas, Venezuela",
    "exp.kfc_desc1": "Spearheaded the refactoring of complex SQL Server queries and backend API endpoints, reducing response times from minutes to under 1 second.",
    "exp.kfc_desc2": "Architected and deployed Employee Performance Evaluation System (SEDE), evaluating 1,000+ corporate employees across 31+ branches.",
    "exp.kfc_desc3": "Co-developed 'Max-Point' for KFC Ecuador: custom electronic invoicing engine & legacy systems integration.",
    "exp.kfc_desc4": "Managed cloud infrastructure on Azure/Linux with Docker containerization, Nginx reverse proxy, and automated background jobs (Cron Jobs).",

    // Vocem
    "exp.vocem_role": "Senior Full-Stack Developer",
    "exp.vocem_company": "Vocem Venezuela",
    "exp.vocem_period": "2016 - 2018",
    "exp.vocem_loc": "Caracas, Venezuela",
    "exp.vocem_desc1": "Led end-to-end development of web applications & data flow automation, drastically eliminating manual entry workload.",
    "exp.vocem_desc2": "Engineered robust PHP/Laravel backends, optimized DB schemas, and integrated SMS gateways & transactional email services.",
    "exp.vocem_desc3": "Established Nginx/Apache deployment standards to maximize system uptime and response speed.",

    // Doku
    "exp.doku_role": "Semi-Senior Software Developer",
    "exp.doku_company": "Doku Soluciones",
    "exp.doku_period": "2012 - 2016",
    "exp.doku_loc": "Caracas, Venezuela",
    "exp.doku_desc1": "Built full-stack web platforms and hardware-level communication protocols linking mobile apps directly with networked thermal printers.",
    "exp.doku_desc2": "Optimized SQL queries and UI interfaces, guaranteeing zero-latency data transmission between physical hardware and servers.",

    // Projects / Accomplishments
    "projects.title": "Key Achievements & Projects",
    "projects.subtitle": "Reference implementations, API engines, and corporate solutions.",
    
    "proj.ddd_title": "Clean Architecture & TDD Starter",
    "proj.ddd_tag": "Architecture / Laravel 10",
    "proj.ddd_desc": "Reference implementation applying Domain-Driven Design (DDD), clean architecture patterns, decoupling, and 100% automated test coverage.",
    
    "proj.jsonapi_title": "JSON:API Specification Engine",
    "proj.jsonapi_tag": "RESTful Backend",
    "proj.jsonapi_desc": "High-performance RESTful API engine strictly adhering to the JSON:API specification for web & mobile clients.",
    
    "proj.sede_title": "SEDE System (Performance Evaluation)",
    "proj.sede_tag": "Corporate Platform",
    "proj.sede_desc": "Scalable web platform digitizing annual evaluation workflows for 1,000+ employees across 31+ locations nationwide in real time.",
    
    "proj.maxpoint_title": "Max-Point (KFC Ecuador)",
    "proj.maxpoint_tag": "Invoicing & Legacy Integrations",
    "proj.maxpoint_desc": "Electronic invoicing and reporting engine integrating multi-tier architecture over heterogeneous legacy systems.",

    // Education
    "edu.title": "Education & Continuous Learning",
    "edu.subtitle": "Academic foundations paired with self-directed continuous learning in modern tech.",
    "edu.degree_title": "Systems Engineering",
    "edu.degree_inst": "Polytechnic University Institute 'Santiago Mariño', Caracas",
    "edu.passions_title": "Specialization & Technical Focus",
    "edu.passions_desc": "Continuous self-study focused on Advanced Cloud/DevOps workflows, Web Security & Ethical Hacking, Microservices Architecture, and AI-assisted Development Tools.",

    // Contact Footer
    "contact.title": "Have a challenging project in mind?",
    "contact.subtitle": "Available for Senior Backend / Full-Stack roles, technical leadership, and infrastructure or database optimization consulting.",
    "contact.email_btn": "Send Email",
    "contact.copy_email": "Copy Email",
    "contact.copied": "Copied!",
    "contact.phone": "Phone / WhatsApp",
    "contact.location": "Location",
    "contact.footer_rights": "Rayyanir Rosales Rubio. All rights reserved. Designed for GitHub Pages.",
    "contact.view_github": "View GitHub",
    "contact.view_linkedin": "View LinkedIn"
  }
};

let currentLang = localStorage.getItem('app_lang') || 'es';

function setLanguage(lang) {
  if (!translations[lang]) return;
  currentLang = lang;
  localStorage.setItem('app_lang', lang);

  // Update text of elements with data-i18n attribute
  document.querySelectorAll('[data-i18n]').forEach(elem => {
    const key = elem.getAttribute('data-i18n');
    if (translations[lang][key]) {
      elem.innerHTML = translations[lang][key];
    }
  });

  // Update language switcher button text / active state
  const langToggleBtn = document.getElementById('lang-toggle-btn');
  if (langToggleBtn) {
    langToggleBtn.innerHTML = lang === 'es' ? '🇺🇸 EN' : '🇪🇸 ES';
  }

  // Update HTML lang attribute
  document.documentElement.lang = lang;
}

function toggleLanguage() {
  const newLang = currentLang === 'es' ? 'en' : 'es';
  setLanguage(newLang);
}

document.addEventListener('DOMContentLoaded', () => {
  setLanguage(currentLang);
});
