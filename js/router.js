const MEGA_MENU = [
  {
    label: 'Facultad', icon: 'account_balance', route: '/facultad',
    children: [
      { col: 0, title: 'La Facultad', items: [
        { label: 'Nuestra Facultad', route: '/facultad', icon: 'school' },
        { label: 'Autoridades', route: '/autoridades', icon: 'group' },
        { label: 'Organigrama', route: '/organigrama', icon: 'account_tree' },
      ]},
      { col: 1, title: 'Gestión', items: [
        { label: 'Oficina de Acreditación', route: '/acreditacion', icon: 'verified' },
        { label: 'Portal de Transparencia', route: '/transparencia', icon: 'visibility' },
        { label: 'Noticias FIIS', route: '/noticias', icon: 'newspaper' },
        { label: 'Directorio Docentes', route: '/directorio-docentes', icon: 'badge' },
      ]}
    ]
  },
  {
    label: 'Académico', icon: 'menu_book', route: '/academico',
    children: [
      { col: 0, title: 'Escuelas Profesionales', items: [
        { label: 'Ing. Industrial', route: '/escuelas/industrial', icon: 'precision_manufacturing' },
        { label: 'Ing. de Sistemas', route: '/escuelas/sistemas', icon: 'computer' },
        { label: 'Ing. de Software', route: '/escuelas/software', icon: 'terminal' },
        { label: 'Ing. en Inteligencia Artificial', route: '/escuelas/inteligencia-artificial', icon: 'psychology' },
      ]},
      { col: 1, title: 'Departamentos', items: [
        { label: 'Ciencias Básicas', route: '/departamentos/ciencias-basicas', icon: 'functions' },
        { label: 'Gestión de la Producción', route: '/departamentos/gestion-produccion', icon: 'precision_manufacturing' },
        { label: 'Humanidades', route: '/departamentos/humanidades', icon: 'psychology' },
        { label: 'Sistemas y Telemática', route: '/departamentos/sistemas-telematica', icon: 'router' },
        { label: 'Tecnología de la Producción', route: '/departamentos/tecnologia-produccion', icon: 'biotech' },
      ]},
      { col: 0, title: 'Recursos', items: [
        { label: 'Cronogramas', route: '/cronogramas', icon: 'calendar_month' },
      ]}
    ]
  },
  {
    label: 'Posgrado', icon: 'school', route: '/posgrado',
    children: [
      { col: 0, title: 'Maestrías', items: [
        { label: 'Ingeniería Industrial', route: '/posgrado/maestria-industrial', icon: 'precision_manufacturing' },
        { label: 'Ingeniería de Sistemas', route: '/posgrado/maestria-sistemas', icon: 'computer' },
        { label: 'Inteligencia Artificial', route: '/posgrado/maestria-ia', icon: 'psychology' },
        { label: 'Supply Chain Management', route: '/posgrado/maestria-supply-chain', icon: 'local_shipping' },
        { label: 'Business Analytics e IA Aplicada', route: '/posgrado/maestria-business-analytics', icon: 'analytics' },
        { label: 'Gestión de Operaciones', route: '/posgrado/maestria-gestion-operaciones', icon: 'settings' },
      ]},
      { col: 1, title: 'Doctorados', items: [
        { label: 'Doctorado en Ingeniería Industrial', route: '/posgrado/doctorado-industrial', icon: 'auto_stories' },
        { label: 'Doctorado en Ingeniería de Sistemas', route: '/posgrado/doctorado-sistemas', icon: 'auto_stories' },
      ]},
      { col: 1, title: 'Otros Programas', items: [
        { label: 'Diplomados', route: '/posgrado/diplomados', icon: 'workshop' },
        { label: 'Información General', route: '/posgrado', icon: 'info' },
      ]}
    ]
  },
  {
    label: 'Servicios', icon: 'support', route: '/servicios',
    children: [
      { col: 0, title: 'Plataformas', items: [
        { label: 'Aula Virtual', route: '#', icon: 'computer' },
        { label: 'Correo UNI', route: '#', icon: 'mail' },
        { label: 'Yachay (Intranet Docente)', route: 'https://docentes.uni.edu.pe/login', icon: 'school', external: true },
        { label: 'Biblioteca KOHA', route: '#', icon: 'library_books' },
        { label: 'Mesa de Partes', route: '#', icon: 'mail' },
      ]},
      { col: 1, title: 'Atención', items: [
        { label: 'Tutoría FIIS', route: '/tutoria', icon: 'support' },
        { label: 'UECPS', route: '/uecps', icon: 'public' },
        { label: 'Centro de Información', route: '/centro-informacion', icon: 'library_books' },
        { label: 'Repositorio Central', route: '/repositorio', icon: 'folder_open' },
        { label: 'Guía y Procedimientos', route: '/guias-procedimientos', icon: 'description' },
      ]},
      { col: 2, title: 'Extensión', items: [
        { label: 'Sistemas UNI', route: '#', icon: 'computer' },
        { label: 'Consult FIIS', route: '/consult-fiis', icon: 'handshake' },
        { label: 'CEE', route: '/cee', icon: 'school' },
      ]}
    ]
  },
  {
    label: 'Calendario', icon: 'calendar_month',
    route: '/calendario'
  },
  {
    label: 'Comunidad', icon: 'groups', route: '/comunidad',
    children: [
      { col: 0, title: 'Organismos de la Facultad', items: [
        { label: 'CEIIS', route: '/comunidad/ceiis', icon: 'group' },
        { label: 'TEFIIS', route: '/comunidad/tefiis', icon: 'how_to_vote' },
        { label: 'Delegaturas', route: '/comunidad/delegatura-industrial', icon: 'diversity_3' },
      ]},
      { col: 1, title: 'Agrupaciones Estudiantiles', items: [
        { label: 'UNICODE', route: '/comunidad/unicode', icon: 'code' },
        { label: 'CIBERSEC', route: '/comunidad/cibersec', icon: 'shield' },
        { label: 'Núcleo', route: '/comunidad/nucleo', icon: 'data_object' },
        { label: 'CCAT', route: '/comunidad/ccat', icon: 'palette' },
        { label: 'Directorio Completo', route: '/comunidad', icon: 'groups' },
      ]}
    ]
  },
  {
    label: 'Investigación', icon: 'science', route: '/investigacion',
    children: [
      { col: 0, title: 'Laboratorios', items: [
        { label: 'Laboratorio de IA', route: '/laboratorio-ia', icon: 'psychology' },
        { label: 'Laboratorio de Química', route: '/laboratorio-quimica', icon: 'biotech' },
        { label: 'Laboratorio Académico y Red FIIS', route: '/laboratorio-academico', icon: 'router' },
      ]},
      { col: 1, title: 'Centros e Instituto', items: [
        { label: 'Instituto de Investigación', route: '/instituto-investigacion', icon: 'science' },
        { label: 'Centro de Automatización Industrial', route: '/centro-automatizacion', icon: 'precision_manufacturing' },
      ]},
      { col: 1, title: 'Recursos', items: [
        { label: 'IIFIIS', route: '/iifiis', icon: 'auto_stories' },
        { label: 'Proyectos Destacados', route: '/proyectos-destacados', icon: 'star' },
      ]}
    ]
  },
  {
    label: 'Egresados', icon: 'school', route: '/egresados'
  },
  {
    label: 'Empresas', icon: 'work', route: '/empresas'
  },
];

const Router = {
  routes: {},
  currentPath: null,

  add(path, handler) {
    this.routes[path] = handler;
  },

  async navigate(path) {
    window.location.hash = '#' + path;
  },

  async resolve() {
    const hash = window.location.hash.slice(1) || '/';
    if (hash === this.currentPath) return;
    this.currentPath = hash;

    const app = document.getElementById('app');
    app.classList.remove('page-enter');

    let handler = this.routes[hash];
    if (!handler) {
      for (const [pattern, fn] of Object.entries(this.routes)) {
        const regex = new RegExp('^' + pattern.replace(/:\w+/g, '(\\w+)') + '$');
        if (regex.test(hash)) {
          const match = hash.match(regex);
          handler = () => fn(...match.slice(1));
          break;
        }
      }
    }
    if (!handler) handler = this.routes['404'] || (() => app.innerHTML = '<h1>404</h1>');

    await handler();
    app.classList.add('page-enter');
    window.scrollTo(0, 0);
  },

  init() {
    window.addEventListener('hashchange', () => this.resolve());
    this.resolve();
  }
};

async function loadPage(path) {
  try {
    if (path.startsWith('/')) path = path.slice(1);
    if (!path.endsWith('.html')) path += '.html';
    const cb = typeof loadPageCacheBuster !== 'undefined' ? loadPageCacheBuster : Date.now();
    const res = await fetch(`pages/${path}?v=${cb}`, { cache: 'no-cache' });
    if (!res.ok) throw new Error('Not found');
    return await res.text();
  } catch {
    return '<div class="p-8 text-center"><h2 class="text-headline-lg text-primary">Página no encontrada</h2></div>';
  }
}

function navbar(active) {
    const items = MEGA_MENU.map(item => {
    const hasChildren = item.children && item.children.length > 0;
    const isSimpleLink = item.route && !hasChildren;
    if (isSimpleLink) {
      const isPortal = item.route === '/login';
      const cls = isPortal
        ? 'text-sm bg-brand-cream text-primary font-bold px-4 py-1.5 rounded-lg hover:brightness-95 transition-all'
        : `text-sm ${item.route === active ? 'text-primary font-bold' : 'text-on-surface-variant hover:text-primary'} transition-colors`;
      return `<a class="${cls}" href="#${item.route}">${item.label}</a>`;
    }
    if (hasChildren) {
      const cols = item.children || [];
      const maxCol = Math.max(...cols.map(c => c.col + 1), 1);
      const gridCols = Math.min(maxCol, 3);
      const sizeClass = gridCols <= 1 ? 'mega-dropdown-sm' : gridCols <= 2 ? 'mega-dropdown-md' : '';
      const sortedCols = [];
      cols.forEach(c => { if (!sortedCols[c.col]) sortedCols[c.col] = []; sortedCols[c.col].push(c); });
      const colHtml = sortedCols.map(colItems => {
        return `<div class="mega-col">${colItems.map(c => `
          ${c.title ? `<span class="mega-col-title">${c.title}</span>` : ''}
          ${c.items.map(sub => {
            const href = sub.external ? sub.route : '#' + sub.route;
            return `<a class="mega-link" href="${href}"${sub.external ? ' target="_blank" rel="noopener"' : ''}>
              <span class="material-symbols-outlined">${sub.icon}</span>${sub.label}
            </a>`;
          }).join('')}
        `).join('')}</div>`;
      }).join('');
      const trigger = item.route
        ? `<a class="mega-trigger text-sm text-on-surface-variant hover:text-primary transition-colors flex items-center gap-1" href="#${item.route}">${item.label} <span class="material-symbols-outlined text-sm">expand_more</span></a>`
        : `<span class="mega-trigger text-sm text-on-surface-variant hover:text-primary transition-colors flex items-center gap-1">${item.label} <span class="material-symbols-outlined text-sm">expand_more</span></span>`;
      return `<div class="mega-nav">${trigger}<div class="mega-dropdown ${sizeClass}"><div class="mega-grid" style="grid-template-columns:repeat(${gridCols},1fr)">${colHtml}</div></div></div>`;
    }
    return '';
  }).join('');
  const mobileItems = MEGA_MENU.map(item => {
    const hasChildren = item.children && item.children.length > 0;
    if (!hasChildren && item.route) return `<a class="text-sm text-on-surface-variant transition-colors py-1" href="#${item.route}">${item.label}</a>`;
    if (hasChildren) {
      const links = item.children.flatMap(c => (c.items || []).map(sub => {
        const href = sub.external ? sub.route : '#' + sub.route;
        return `<a class="text-sm text-on-surface-variant transition-colors py-1 pl-4" href="${href}"${sub.external ? ' target="_blank"' : ''}><span class="material-symbols-outlined text-sm align-middle mr-1">${sub.icon}</span>${sub.label}</a>`;
      })).join('');
      const label = item.route
        ? `<a class="text-sm font-bold text-primary hover:text-primary transition-colors" href="#${item.route}">${item.label}</a>`
        : `<span class="text-sm font-bold text-primary">${item.label}</span>`;
      return `<div class="py-1">${label}${links}</div>`;
    }
    return '';
  }).join('');
  return `
    <nav class="bg-surface border-b border-border-subtle sticky top-0 z-50">
      <div class="flex justify-between items-center w-full px-6 max-w-[1200px] mx-auto h-16">
        <div class="flex items-center gap-2 lg:gap-6">
          <a href="#/" class="text-xl font-extrabold text-primary flex items-center gap-2 shrink-0">
            <span class="material-symbols-outlined text-primary" style="font-variation-settings:'FILL'1;">architecture</span>
            <span class="hidden sm:inline">FIIS UNI</span>
          </a>
          <div class="hidden lg:flex items-center gap-4 xl:gap-5 text-sm font-medium">${items}</div>
        </div>
        <div class="flex items-center gap-1">
          <a href="#/login" class="p-2 hover:bg-surface-container-low rounded-full transition-all" title="Iniciar sesión">
            <span class="material-symbols-outlined text-on-surface-variant">login</span>
          </a>
          <button class="p-2 hover:bg-surface-container-low rounded-full transition-all" id="btn-search" title="Buscar">
            <span class="material-symbols-outlined text-on-surface-variant">search</span>
          </button>
          <button class="lg:hidden p-2 hover:bg-surface-container-low rounded-full" id="nav-menu-toggle">
            <span class="material-symbols-outlined text-on-surface-variant">menu</span>
          </button>
        </div>
      </div>
      <div class="lg:hidden hidden border-t border-border-subtle px-6 py-4 bg-white max-h-[70vh] overflow-y-auto" id="mobile-nav">
        <div class="flex flex-col gap-2">${mobileItems}</div>
      </div>
    </nav>

    <!-- Search Overlay -->
    <div id="search-overlay" class="hidden fixed inset-0 z-[60]">
      <div class="absolute inset-0 bg-black/40 backdrop-blur-sm" id="search-backdrop"></div>
      <div class="relative z-10 max-w-[700px] mx-auto px-4 pt-[15vh]">
        <div class="bg-white rounded-2xl shadow-2xl border border-border-subtle overflow-hidden">
          <div class="flex items-center gap-3 px-5 py-4 border-b border-border-subtle">
            <span class="material-symbols-outlined text-text-secondary">search</span>
            <input type="text" id="search-input" class="flex-1 text-base text-on-surface bg-transparent border-none outline-none placeholder:text-text-secondary" placeholder="Buscar páginas, docentes, laboratorios, servicios..." autocomplete="off" />
            <button class="p-1 hover:bg-surface-container-low rounded-full transition-all" id="btn-search-close">
              <span class="material-symbols-outlined text-text-secondary">close</span>
            </button>
          </div>
          <div class="px-5 py-3 border-b border-border-subtle flex flex-wrap gap-2" id="search-filters">
            <button class="search-filter px-3 py-1 rounded-full text-xs font-semibold bg-primary text-white transition-all" data-type="todos">Todos</button>
          </div>
          <div id="search-results" class="max-h-[50vh] overflow-y-auto p-2">
            <div class="text-center py-10 text-text-secondary">
              <span class="material-symbols-outlined text-4xl">search</span>
              <p class="text-sm mt-2">Escribe al menos 2 caracteres para buscar</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  `;
}

function publicFooter() {
  return `
    <footer class="bg-surface-container-high border-t border-border-subtle pt-16 pb-8">
      <div class="max-w-[1200px] mx-auto px-6">
        <div class="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div>
            <span class="text-xl font-extrabold text-primary flex items-center gap-2 mb-6">
              <span class="material-symbols-outlined text-primary" style="font-variation-settings:'FILL'1;">architecture</span>
              FIIS UNI
            </span>
            <p class="text-on-surface-variant text-sm leading-relaxed mb-6">Facultad de Ingeniería Industrial y de Sistemas — Universidad Nacional de Ingeniería.</p>
            <div class="flex gap-4">
              <a class="w-10 h-10 rounded-full bg-primary flex items-center justify-center text-white hover:bg-primary-container transition-colors" href="https://www.facebook.com/fiisunioficial" target="_blank" rel="noopener noreferrer" title="Facebook"><span class="material-symbols-outlined">groups</span></a>
              <a class="w-10 h-10 rounded-full bg-primary flex items-center justify-center text-white hover:bg-primary-container transition-colors" href="#" title="YouTube"><span class="material-symbols-outlined">play_circle</span></a>
              <a class="w-10 h-10 rounded-full bg-primary flex items-center justify-center text-white hover:bg-primary-container transition-colors" href="#" title="LinkedIn"><span class="material-symbols-outlined">work</span></a>
              <a class="w-10 h-10 rounded-full bg-primary flex items-center justify-center text-white hover:bg-primary-container transition-colors" href="#" title="Instagram"><span class="material-symbols-outlined">photo_camera</span></a>
            </div>
          </div>
          <div class="flex flex-col gap-4">
            <h5 class="text-sm font-bold text-primary uppercase mb-2">Contacto</h5>
            <a href="#/contacto" class="flex items-center gap-2 text-on-surface-variant text-sm hover:text-primary"><span class="material-symbols-outlined text-primary text-base">location_on</span> Av. Túpac Amaru 210, Rímac</a>
            <a href="#/contacto" class="flex items-center gap-2 text-on-surface-variant text-sm hover:text-primary"><span class="material-symbols-outlined text-primary text-base">phone</span> (01) 481-1070</a>
            <a href="mailto:informes@fiis.uni.edu.pe" class="flex items-center gap-2 text-on-surface-variant text-sm hover:text-primary"><span class="material-symbols-outlined text-primary text-base">mail</span> informes@fiis.uni.edu.pe</a>
            <a href="#/contacto" class="text-primary font-semibold text-sm hover:underline mt-1">Ver contacto completo →</a>
          </div>
          <div class="flex flex-col gap-2">
            <h5 class="text-sm font-bold text-primary uppercase mb-2">Enlaces de Interés</h5>
            <a class="text-on-surface-variant text-sm hover:text-primary" href="#/directorio-docentes">Directorio Docentes</a>
            <a class="text-on-surface-variant text-sm hover:text-primary" href="#/escuelas">Escuelas Profesionales</a>
            <a class="text-on-surface-variant text-sm hover:text-primary" href="#/empresas">Bolsa de Trabajo</a>
            <a class="text-on-surface-variant text-sm hover:text-primary" href="#/cronogramas">Cronogramas</a>
          </div>
          <div class="flex flex-col gap-2">
            <h5 class="text-sm font-bold text-primary uppercase mb-2">Plataformas</h5>
            <a class="text-on-surface-variant text-sm hover:text-primary" href="#">Aula Virtual</a>
            <a class="text-on-surface-variant text-sm hover:text-primary" href="https://docentes.uni.edu.pe/login" target="_blank">Yachay Docentes</a>
            <a class="text-on-surface-variant text-sm hover:text-primary" href="#">Correo UNI</a>
            <a class="text-on-surface-variant text-sm hover:text-primary" href="#/transparencia">Portal de Transparencia</a>
          </div>
        </div>
        <div class="border-t border-border-subtle pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p class="text-text-secondary text-xs">© 2024 Facultad de Ingeniería Industrial y de Sistemas — Universidad Nacional de Ingeniería.</p>
          <div class="flex gap-6">
            <a class="text-text-secondary text-xs hover:text-primary" href="#/contacto">Contacto</a>
            <a class="text-text-secondary text-xs hover:text-primary" href="#">Mapa del Sitio</a>
            <a class="text-text-secondary text-xs hover:text-primary" href="#">Política de Privacidad</a>
          </div>
        </div>
      </div>
    </footer>

    <!-- FAQ Button -->
    <button id="btn-faq" class="fixed bottom-6 right-6 w-12 h-12 rounded-full bg-primary text-white flex items-center justify-center shadow-lg hover:bg-primary-container transition-all z-50 hover:scale-110 active:scale-95" title="Preguntas frecuentes">
      <span class="material-symbols-outlined text-2xl" style="font-variation-settings:'FILL'1;">help</span>
    </button>

    <!-- FAQ Overlay -->
    <div id="faq-overlay" class="hidden fixed inset-0 z-[70]">
      <div class="absolute inset-0 bg-black/40 backdrop-blur-sm" id="faq-backdrop"></div>
      <div class="relative z-10 max-w-[700px] mx-auto px-4 pt-[10vh] pb-8">
        <div class="bg-white rounded-2xl shadow-2xl border border-border-subtle overflow-hidden max-h-[75vh] flex flex-col">
          <div class="flex items-center justify-between px-6 py-4 border-b border-border-subtle shrink-0">
            <div class="flex items-center gap-3">
              <span class="w-9 h-9 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                <span class="material-symbols-outlined" style="font-variation-settings:'FILL'1;">help</span>
              </span>
              <div>
                <h2 class="text-base font-bold text-on-surface">Preguntas Frecuentes</h2>
                <p class="text-xs text-text-secondary">Selecciona un módulo para ver sus preguntas</p>
              </div>
            </div>
            <button class="p-1.5 hover:bg-surface-container-low rounded-full transition-all" id="faq-close">
              <span class="material-symbols-outlined text-text-secondary">close</span>
            </button>
          </div>
          <div class="px-6 py-4 border-b border-border-subtle overflow-x-auto shrink-0">
            <div class="flex gap-2" id="faq-tabs">
              <button class="faq-tab px-4 py-2 text-sm font-semibold bg-primary text-white rounded-lg transition-all shadow-sm" data-module="Facultad">Facultad</button>
              <button class="faq-tab px-4 py-2 text-sm font-medium text-text-secondary bg-surface-container-low hover:bg-surface-container hover:text-primary rounded-lg transition-all whitespace-nowrap" data-module="Académico">Académico</button>
              <button class="faq-tab px-4 py-2 text-sm font-medium text-text-secondary bg-surface-container-low hover:bg-surface-container hover:text-primary rounded-lg transition-all whitespace-nowrap" data-module="Posgrado">Posgrado</button>
              <button class="faq-tab px-4 py-2 text-sm font-medium text-text-secondary bg-surface-container-low hover:bg-surface-container hover:text-primary rounded-lg transition-all whitespace-nowrap" data-module="Servicios">Servicios</button>
              <button class="faq-tab px-4 py-2 text-sm font-medium text-text-secondary bg-surface-container-low hover:bg-surface-container hover:text-primary rounded-lg transition-all whitespace-nowrap" data-module="Comunidad">Comunidad</button>
              <button class="faq-tab px-4 py-2 text-sm font-medium text-text-secondary bg-surface-container-low hover:bg-surface-container hover:text-primary rounded-lg transition-all whitespace-nowrap" data-module="Investigación">Investigación</button>
              <button class="faq-tab px-4 py-2 text-sm font-medium text-text-secondary bg-surface-container-low hover:bg-surface-container hover:text-primary rounded-lg transition-all whitespace-nowrap" data-module="Egresados">Egresados</button>
              <button class="faq-tab px-4 py-2 text-sm font-medium text-text-secondary bg-surface-container-low hover:bg-surface-container hover:text-primary rounded-lg transition-all whitespace-nowrap" data-module="Empresas">Empresas</button>
            </div>
          </div>
          <div class="flex-1 overflow-y-auto p-4" id="faq-content"></div>
        </div>
      </div>
    </div>
  `;
}

function renderPublicLayout(content, activeSection) {
  const html = navbar(activeSection) + content + publicFooter();
  const scripts = extractScripts(html);
  document.getElementById('app').innerHTML = html;
  executeScripts(scripts);
  bindDynamicHandlers();
  initSearch();
  if (typeof FAQ !== 'undefined') FAQ.init();
  const toggle = document.getElementById('nav-menu-toggle');
  const mobileNav = document.getElementById('mobile-nav');
  if (toggle && mobileNav) {
    toggle.addEventListener('click', () => {
      mobileNav.classList.toggle('hidden');
    });
  }
}

function renderPublicPage(html) {
  const scripts = extractScripts(html);
  document.getElementById('app').innerHTML = html;
  executeScripts(scripts);
  bindDynamicHandlers();
  initSearch();
  if (typeof FAQ !== 'undefined') FAQ.init();
}

async function renderDashboard(role, html) {
  const session = Auth.getSession();
  Components.render(session, html);
}

function extractScripts(html) {
  const scripts = [];
  const regex = /<script>([\s\S]*?)<\/script>/g;
  let match;
  while ((match = regex.exec(html)) !== null) {
    scripts.push(match[1]);
  }
  return scripts;
}

function executeScripts(scripts) {
  scripts.forEach(code => {
    if (!code.trim()) return;
    try {
      const el = document.createElement('script');
      el.textContent = code;
      document.body.appendChild(el);
      document.body.removeChild(el);
    } catch (e) {
      console.warn('Script exec error:', e);
    }
  });
}

function bindDynamicHandlers() {
  const app = document.getElementById('app');
  if (!app) return;

  app.querySelectorAll('.cat-btn').forEach(btn => {
    btn.removeEventListener('click', toggleTreeHandler);
    btn.addEventListener('click', toggleTreeHandler);
  });

  app.querySelectorAll('[data-tab]').forEach(btn => {
    btn.removeEventListener('click', tabHandler);
    btn.addEventListener('click', tabHandler);
  });
}

function initSearch() {
  if (document.getElementById('btn-search')) {
    document.getElementById('btn-search').removeEventListener('click', searchToggleHandler);
    document.getElementById('btn-search').addEventListener('click', searchToggleHandler);
  }
  if (document.getElementById('btn-search-close')) {
    document.getElementById('btn-search-close').removeEventListener('click', searchCloseHandler);
    document.getElementById('btn-search-close').addEventListener('click', searchCloseHandler);
  }
  if (document.getElementById('search-backdrop')) {
    document.getElementById('search-backdrop').removeEventListener('click', searchCloseHandler);
    document.getElementById('search-backdrop').addEventListener('click', searchCloseHandler);
  }
  if (document.getElementById('search-input')) {
    document.getElementById('search-input').removeEventListener('input', searchInputHandler);
    document.getElementById('search-input').addEventListener('input', searchInputHandler);
    document.getElementById('search-input').removeEventListener('keydown', searchKeyHandler);
    document.getElementById('search-input').addEventListener('keydown', searchKeyHandler);
  }
  buildSearchFilters();
}

function buildSearchFilters() {
  var container = document.getElementById('search-filters');
  if (!container || typeof SearchEngine === 'undefined') return;
  var types = SearchEngine.getTypes();
  var html = '<button class="search-filter px-3 py-1 rounded-full text-xs font-semibold bg-primary text-white transition-all" data-type="todos">Todos</button>';
  types.forEach(function(t) {
    html += '<button class="search-filter px-3 py-1 rounded-full text-xs font-semibold bg-white border border-border-subtle text-text-secondary hover:bg-primary/5 transition-all" data-type="' + t + '">' + t + '</button>';
  });
  container.innerHTML = html;
  container.querySelectorAll('.search-filter').forEach(function(btn) {
    btn.removeEventListener('click', searchFilterHandler);
    btn.addEventListener('click', searchFilterHandler);
  });
}

var _searchFilter = 'todos';
var _searchTimer = null;

function searchFilterHandler(e) {
  var container = document.getElementById('search-filters');
  container.querySelectorAll('.search-filter').forEach(function(b) {
    b.className = 'search-filter px-3 py-1 rounded-full text-xs font-semibold bg-white border border-border-subtle text-text-secondary hover:bg-primary/5 transition-all';
  });
  e.currentTarget.className = 'search-filter px-3 py-1 rounded-full text-xs font-semibold bg-primary text-white transition-all';
  _searchFilter = e.currentTarget.getAttribute('data-type');
  doSearch();
}

function searchToggleHandler() {
  var overlay = document.getElementById('search-overlay');
  var input = document.getElementById('search-input');
  if (overlay) overlay.classList.remove('hidden');
  if (input) { setTimeout(function() { input.focus(); }, 100); }
  document.body.style.overflow = 'hidden';
  doSearch();
}

function searchCloseHandler() {
  var overlay = document.getElementById('search-overlay');
  if (overlay) overlay.classList.add('hidden');
  document.body.style.overflow = '';
}

function searchInputHandler() {
  if (_searchTimer) clearTimeout(_searchTimer);
  _searchTimer = setTimeout(doSearch, 200);
}

function searchKeyHandler(e) {
  if (e.key === 'Escape') searchCloseHandler();
}

function doSearch() {
  var input = document.getElementById('search-input');
  var results = document.getElementById('search-results');
  if (!input || !results || typeof SearchEngine === 'undefined') return;
  var q = input.value.trim();
  if (q.length < 2) {
    results.innerHTML = '<div class="text-center py-10 text-text-secondary"><span class="material-symbols-outlined text-4xl">search</span><p class="text-sm mt-2">Escribe al menos 2 caracteres para buscar</p></div>';
    return;
  }
  var items = SearchEngine.search(q, _searchFilter);
  if (items.length === 0) {
    results.innerHTML = '<div class="text-center py-10 text-text-secondary"><span class="material-symbols-outlined text-4xl">sentiment_dissatisfied</span><p class="text-sm mt-2">No se encontraron resultados para "' + q + '"</p></div>';
    return;
  }

  var grouped = {};
  items.forEach(function(item) {
    if (!grouped[item.type]) grouped[item.type] = [];
    if (grouped[item.type].length < 6) grouped[item.type].push(item);
  });

  var html = '';
  Object.keys(grouped).forEach(function(type) {
    html += '<div class="px-3 pt-4 pb-2"><span class="text-[10px] font-bold text-text-secondary uppercase tracking-widest">' + type + '</span></div>';
    grouped[type].forEach(function(item) {
      var icon = SearchEngine.getIcon(item.type);
      html += '<a href="#' + item.route + '" class="flex items-start gap-3 px-4 py-3 rounded-xl hover:bg-surface-container-low transition-all group" onclick="searchCloseHandler()">';
      html += '<span class="material-symbols-outlined text-primary text-sm mt-0.5">' + icon + '</span>';
      html += '<div class="flex-1 min-w-0"><p class="text-sm font-bold text-on-surface group-hover:text-primary transition-colors truncate">' + item.title + '</p>';
      html += '<p class="text-xs text-text-secondary truncate">' + item.desc + '</p></div>';
      html += '<span class="material-symbols-outlined text-text-secondary text-sm opacity-0 group-hover:opacity-100 transition-opacity">arrow_forward</span>';
      html += '</a>';
    });
  });
  results.innerHTML = html;
}

function toggleTreeHandler(e) {
  const btn = e.currentTarget;
  const parent = btn.parentElement;
  const children = parent.querySelector('.cat-children');
  const chevron = btn.querySelector('.cat-chevron');
  if (!children) return;
  const expanded = children.classList.toggle('expanded');
  if (chevron) chevron.style.transform = expanded ? 'rotate(90deg)' : '';
  btn.setAttribute('aria-expanded', expanded || false);
}

function tabHandler(e) {
  const btn = e.currentTarget;
  const tabName = btn.dataset.tab;
  const container = btn.closest('.max-w-\\[1200px\\]') || document;
  container.querySelectorAll('[data-tab]').forEach(b => {
    b.className = b.className.replace('text-primary border-b-2 border-primary bg-primary/5', 'text-text-secondary font-medium');
    b.classList.add('text-text-secondary', 'font-medium');
  });
  btn.className = 'px-6 py-4 text-sm font-semibold text-primary border-b-2 border-primary bg-primary/5 transition-colors whitespace-nowrap';
  container.querySelectorAll('.tab-content').forEach(t => t.classList.add('hidden'));
  const target = container.querySelector('#tab-' + tabName);
  if (target) target.classList.remove('hidden');
}
