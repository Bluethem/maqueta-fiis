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
        { label: 'Biblioteca KOHA', route: '/centro-informacion', icon: 'library_books' },
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
        const regex = new RegExp('^' + pattern.replace(/:\w+/g, '([\\w-]+)') + '$');
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
    const icon = item.icon || 'link';
    if (!hasChildren && item.route) {
      return `<a class="flex items-center gap-3 px-3 py-2.5 text-sm font-medium text-on-surface-variant hover:bg-surface-container-low rounded-lg transition-colors" href="#${item.route}">
        <span class="material-symbols-outlined text-primary text-lg">${icon}</span>${item.label}
      </a>`;
    }
    if (hasChildren) {
      const links = item.children.flatMap(c => (c.items || []).map(sub => {
        const href = sub.external ? sub.route : '#' + sub.route;
        return `<a class="flex items-center gap-3 px-3 py-2 text-sm text-on-surface-variant hover:bg-surface-container-low rounded-lg transition-colors" href="${href}"${sub.external ? ' target="_blank" rel="noopener"' : ''}>
          <span class="material-symbols-outlined text-primary text-base">${sub.icon}</span>${sub.label}
        </a>`;
      })).join('');
      return `<div class="mobile-accordion-item">
        <button class="mobile-accordion-trigger flex items-center justify-between w-full px-3 py-2.5 text-sm font-semibold text-on-surface hover:bg-surface-container-low rounded-lg transition-colors" type="button">
          <span class="flex items-center gap-3">
            <span class="material-symbols-outlined text-primary text-lg">${icon}</span>${item.label}
          </span>
          <span class="material-symbols-outlined text-on-surface-variant transition-transform duration-200 mobile-chevron">chevron_right</span>
        </button>
        <div class="mobile-accordion-content overflow-hidden transition-all duration-200 max-h-0">
          <div class="pb-2 pl-4 flex flex-col gap-0.5">${links}</div>
        </div>
      </div>`;
    }
    return '';
  }).join('');
  return `
    <nav class="bg-surface border-b border-border-subtle sticky top-0 z-50">
      <div class="flex justify-between items-center w-full px-6 max-w-[1200px] mx-auto h-16">
        <div class="flex items-center gap-2 lg:gap-6">
          <a href="#/" class="flex items-center gap-2 shrink-0">
            <img src="assets/Uni-logo_transparente_granate.png" alt="UNI" class="h-7 w-auto">
            <span class="hidden sm:block w-px h-5 bg-border-subtle"></span>
            <img src="assets/logo-fiis.png" alt="FIIS" class="hidden sm:block h-7 w-auto">
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
      <div class="lg:hidden hidden border-t border-border-subtle px-4 py-3 bg-white max-h-[80vh] overflow-y-auto" id="mobile-nav">
        <div class="flex flex-col gap-0.5">${mobileItems}</div>
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
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 mb-16">
          <div>
            <span class="flex items-center gap-3 mb-6">
              <img src="assets/Uni-logo_transparente_granate.png" alt="UNI" class="h-10 w-auto">
              <span class="w-px h-8 bg-border-subtle"></span>
              <img src="assets/logo-fiis.png" alt="FIIS" class="h-10 w-auto">
            </span>
            <p class="text-on-surface-variant text-sm leading-relaxed mb-6">Facultad de Ingeniería Industrial y de Sistemas — Universidad Nacional de Ingeniería.</p>
            <div class="flex gap-3">
              <a class="w-10 h-10 rounded-full bg-primary flex items-center justify-center text-white hover:bg-primary-container transition-colors" href="https://www.facebook.com/fiisunioficial" target="_blank" rel="noopener noreferrer" title="Facebook">
                <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
              </a>
              <a class="w-10 h-10 rounded-full bg-primary flex items-center justify-center text-white hover:bg-primary-container transition-colors" href="#" title="YouTube">
                <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>
              </a>
              <a class="w-10 h-10 rounded-full bg-primary flex items-center justify-center text-white hover:bg-primary-container transition-colors" href="#" title="LinkedIn">
                <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
              </a>
              <a class="w-10 h-10 rounded-full bg-primary flex items-center justify-center text-white hover:bg-primary-container transition-colors" href="#" title="Instagram">
                <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0C8.74 0 8.333.015 7.053.072 5.775.132 4.905.333 4.14.63c-.789.306-1.459.717-2.126 1.384S.935 3.35.63 4.14C.333 4.905.131 5.775.072 7.053.012 8.333 0 8.74 0 12s.015 3.667.072 4.947c.06 1.277.261 2.148.558 2.913.306.788.717 1.459 1.384 2.126.667.666 1.336 1.079 2.126 1.384.766.296 1.636.499 2.913.558C8.333 23.988 8.74 24 12 24s3.667-.015 4.947-.072c1.277-.06 2.148-.262 2.913-.558.788-.306 1.459-.718 2.126-1.384.666-.667 1.079-1.335 1.384-2.126.296-.765.499-1.636.558-2.913.06-1.28.072-1.687.072-4.947s-.015-3.667-.072-4.947c-.06-1.277-.262-2.149-.558-2.913-.306-.789-.718-1.459-1.384-2.126C21.319 1.347 20.651.935 19.86.63c-.765-.297-1.636-.499-2.913-.558C15.667.012 15.26 0 12 0zm0 2.16c3.203 0 3.585.016 4.85.071 1.17.055 1.805.249 2.227.415.562.217.96.477 1.382.896.419.42.679.819.896 1.381.164.422.36 1.057.413 2.227.057 1.266.07 1.646.07 4.85s-.015 3.585-.074 4.85c-.061 1.17-.256 1.805-.421 2.227-.224.562-.479.96-.899 1.382-.419.419-.824.679-1.38.896-.42.164-1.065.36-2.235.413-1.274.057-1.649.07-4.859.07-3.211 0-3.586-.015-4.859-.074-1.171-.061-1.816-.256-2.236-.421-.569-.224-.96-.479-1.379-.899-.421-.419-.69-.824-.9-1.38-.165-.42-.359-1.065-.42-2.235-.045-1.26-.061-1.649-.061-4.844 0-3.196.016-3.586.061-4.861.061-1.17.255-1.814.42-2.234.21-.57.479-.96.9-1.381.419-.419.81-.689 1.379-.898.42-.166 1.051-.361 2.221-.421 1.275-.045 1.65-.06 4.859-.06l.045.03zm0 3.678c-3.405 0-6.162 2.76-6.162 6.162 0 3.405 2.76 6.162 6.162 6.162 3.405 0 6.162-2.76 6.162-6.162 0-3.405-2.76-6.162-6.162-6.162zM12 16c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm7.846-10.405c0 .795-.646 1.44-1.44 1.44-.795 0-1.44-.646-1.44-1.44 0-.794.646-1.439 1.44-1.439.793-.001 1.44.645 1.44 1.439z"/></svg>
              </a>
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
          <p class="text-text-secondary text-xs">© 2026 Facultad de Ingeniería Industrial y de Sistemas — Universidad Nacional de Ingeniería.</p>
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
    const closeMobileNav = () => {
      mobileNav.classList.add('hidden');
      document.body.style.overflow = '';
    };
    const openMobileNav = () => {
      mobileNav.classList.remove('hidden');
      document.body.style.overflow = 'hidden';
    };
    toggle.addEventListener('click', (e) => {
      e.stopPropagation();
      if (mobileNav.classList.contains('hidden')) openMobileNav();
      else closeMobileNav();
    });
    mobileNav.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', closeMobileNav);
    });
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && !mobileNav.classList.contains('hidden')) closeMobileNav();
    });
    document.addEventListener('click', (e) => {
      if (!mobileNav.classList.contains('hidden') && !mobileNav.contains(e.target) && e.target !== toggle) closeMobileNav();
    });
  }
  bindMobileAccordion();
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

function bindMobileAccordion() {
  document.querySelectorAll('.mobile-accordion-trigger').forEach(btn => {
    btn.removeEventListener('click', accordionHandler);
    btn.addEventListener('click', accordionHandler);
  });
}

function accordionHandler(e) {
  const trigger = e.currentTarget;
  const item = trigger.closest('.mobile-accordion-item');
  if (!item) return;
  const content = item.querySelector('.mobile-accordion-content');
  const chevron = trigger.querySelector('.mobile-chevron');
  if (!content) return;
  const isOpen = content.classList.contains('open');
  content.classList.toggle('open');
  if (chevron) chevron.style.transform = isOpen ? '' : 'rotate(90deg)';
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
