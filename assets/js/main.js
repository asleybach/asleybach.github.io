const translations = {
  es: {
    subtitle: "Desarrollador Python | DevOps | Seguridad Informática",
    download_cv: "Descargar CV",
    about_title: "Sobre mí",
    about_text: "Soy un profesional con experiencia en desarrollo de soluciones con Python, DevOps y análisis de seguridad. Me apasiona construir herramientas útiles, automatizar procesos y compartir conocimiento.",
    certs_title: "Certificaciones",
    certs_list: `
      <li class='list-group-item d-flex flex-column align-items-center'>
        <img src="assets/img/certs/cc-isc2.png" alt="ISC2 CC Badge" style="height:48px; margin-bottom:6px;" />
        <a href="https://www.credly.com/badges/9ce47f63-f39f-4ae9-9814-95d95a48d568/linked_in_profile" target="_blank" rel="noopener noreferrer">
          Certified in Cybersecurity (CC) – ISC2
        </a>
      </li>
      <li class='list-group-item d-flex flex-column align-items-center'>
        <img src="assets/img/certs/azure-fundamentals.svg" alt="Microsoft Certified Fundamentals Badge" style="height:48px; margin-bottom:6px;" />
        <a href="https://learn.microsoft.com/es-es/users/asleybachecharry-3307/credentials/1af684749fcd834c" target="_blank" rel="noopener noreferrer">
          Microsoft Azure AI Fundamentals
        </a>
      </li>
    `,
    projects_title: "Proyectos destacados",
    proj1_text: "App de finanzas personales con backend FastAPI y balance automático.",
    proj2_text: "Módulo que sincroniza pedidos entre Odoo y SAP con APIs REST.",
    proj3_text: "App Android para gestionar jugadores y entrenamientos con IA.",
    proj4_text: "Extensión para contratos de vehículos con integración de ventas.",
    proj5_text: "Evaluación de soft skills con agente personalizado y frontend web.",
    contact_title: "Contacto",
    footer_text: "© 2025 Asley Bach Echarry | Construido con Bootstrap & GitHub Pages"
  },
  en: {
    subtitle: "Python Developer | DevOps | Cybersecurity Analyst",
    download_cv: "Download CV",
    about_title: "About Me",
    about_text: "I'm a professional with experience in developing solutions with Python, DevOps, and security analysis. I am passionate about building useful tools, automating processes, and sharing knowledge.",
    certs_title: "Certifications",
    certs_list: `
      <li class='list-group-item d-flex flex-column align-items-center'>
        <img src="assets/img/certs/cc-isc2.png" alt="ISC2 CC Badge" style="height:48px; margin-bottom:6px;" />
        <a href="https://www.credly.com/badges/9ce47f63-f39f-4ae9-9814-95d95a48d568/linked_in_profile" target="_blank" rel="noopener noreferrer">
          Certified in Cybersecurity (CC) – ISC2
        </a>
      </li>
      <li class='list-group-item d-flex flex-column align-items-center'>
        <img src="assets/img/certs/azure-fundamentals.svg" alt="Microsoft Certified Fundamentals Badge" style="height:48px; margin-bottom:6px;" />
        <a href="https://learn.microsoft.com/es-es/users/asleybachecharry-3307/credentials/1af684749fcd834c" target="_blank" rel="noopener noreferrer">
          Microsoft Azure AI Fundamentals
        </a>
      </li>
    `,
    projects_title: "Featured Projects",
    proj1_text: "Personal finance app with FastAPI backend and automatic balance.",
    proj2_text: "Module to sync sales orders between Odoo and SAP using REST APIs.",
    proj3_text: "Android app to manage volleyball teams with AI features.",
    proj4_text: "Extension for vehicle contracts with sales integration in Odoo.",
    proj5_text: "Soft skills evaluation with a custom GPT agent and frontend.",
    contact_title: "Contact",
    footer_text: "© 2025 Asley Bach Echarry | Built with Bootstrap & GitHub Pages"
  },
  pt: {
    subtitle: "Desenvolvedor Python | DevOps | Segurança da Informação",
    download_cv: "Baixar CV",
    about_title: "Sobre mim",
    about_text: "Sou um profissional com experiência em desenvolvimento de soluções com Python, DevOps e análise de segurança. Sou apaixonado por construir ferramentas úteis, automatizar processos e compartilhar conhecimento.",
    certs_title: "Certificações",
    certs_list: `
      <li class='list-group-item d-flex flex-column align-items-center'>
        <img src="assets/img/certs/cc-isc2.png" alt="ISC2 CC Badge" style="height:48px; margin-bottom:6px;" />
        <a href="https://www.credly.com/badges/9ce47f63-f39f-4ae9-9814-95d95a48d568/linked_in_profile" target="_blank" rel="noopener noreferrer">
          Certified in Cybersecurity (CC) – ISC2
        </a>
      </li>
      <li class='list-group-item d-flex flex-column align-items-center'>
        <img src="assets/img/certs/azure-fundamentals.svg" alt="Microsoft Certified Fundamentals Badge" style="height:48px; margin-bottom:6px;" />
        <a href="https://learn.microsoft.com/es-es/users/asleybachecharry-3307/credentials/1af684749fcd834c" target="_blank" rel="noopener noreferrer">
          Microsoft Azure AI Fundamentals
        </a>
      </li>
    `,
    projects_title: "Projetos em destaque",
    proj1_text: "App de finanças pessoais com FastAPI e cálculo automático de saldo.",
    proj2_text: "Módulo que sincroniza pedidos entre Odoo e SAP via APIs REST.",
    proj3_text: "App Android para gerenciar jogadores e treinos com IA.",
    proj4_text: "Extensão para contratos de frota com integração de vendas no Odoo.",
    proj5_text: "Avaliação de soft skills com agente GPT personalizado.",
    contact_title: "Contato",
    footer_text: "© 2025 Asley Bach Echarry| Construído com Bootstrap & GitHub Pages"
  }
};

function setLang(lang) {
  const t = translations[lang];
  for (const key in t) {
    const el = document.getElementById(key);
    if (el) {
      // Para la lista de certificaciones, usar innerHTML
      if (key === 'certs_list') {
        el.innerHTML = t[key];
      } else {
        el.innerText = t[key];
      }
    }
  }
}
