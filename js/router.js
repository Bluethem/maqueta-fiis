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
        { label: 'Directorio Docentes', route: '/directorio-docentes', icon: 'badge' },
        { label: 'Noticias FIIS', route: '/noticias', icon: 'newspaper' },
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
        { label: 'FAQ', route: '#', icon: 'help' },
      ]},
      { col: 2, title: 'Extensión', items: [
        { label: 'Sistemas UNI', route: '#', icon: 'computer' },
        { label: 'Consult FIIS', route: '/consult-fiis', icon: 'handshake' },
        { label: 'CEE', route: '/cee', icon: 'school' },
      ]}
    ]
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
    label: 'Transparencia', icon: 'visibility',
    route: '/transparencia'
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
    label: 'Egresados', icon: 'school',
    children: [
      { col: 0, items: [
        { label: 'Comunidad de Egresados', route: '/egresados', icon: 'groups' },
        { label: 'Bolsa de Trabajo', route: '/egresados', icon: 'work' },
        { label: 'Red Alumni', route: '/egresados', icon: 'link' },
        { label: 'Mentoría', route: '/egresados', icon: 'psychology' },
        { label: 'Capacitaciones', route: '/egresados', icon: 'school' },
      ]}
    ]
  },
  {
    label: 'Empresas', icon: 'work',
    children: [
      { col: 0, items: [
        { label: 'Empresas Aliadas', route: '/empresas', icon: 'handshake' },
        { label: 'Bolsa de Trabajo', route: '/empresas', icon: 'work' },
        { label: 'Prácticas Preprofesionales', route: '/empresas', icon: 'school' },
        { label: 'Convenios Vigentes', route: '/empresas', icon: 'description' },
        { label: 'Ser Empresa Aliada', route: '/empresas', icon: 'partner_exchange' },
      ]}
    ]
  },
  { label: 'Portal Académico', route: '/login', icon: 'login' },
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
    const res = await fetch(`pages/${path}`);
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
        <div class="flex items-center gap-3">
          <button class="lg:hidden p-2 hover:bg-surface-container-low rounded-full" id="nav-menu-toggle">
            <span class="material-symbols-outlined text-on-surface-variant">menu</span>
          </button>
        </div>
      </div>
      <div class="lg:hidden hidden border-t border-border-subtle px-6 py-4 bg-white max-h-[70vh] overflow-y-auto" id="mobile-nav">
        <div class="flex flex-col gap-2">${mobileItems}</div>
      </div>
    </nav>
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
  `;
}

function renderPublicLayout(content, activeSection) {
  const html = navbar(activeSection) + content + publicFooter();
  const scripts = extractScripts(html);
  document.getElementById('app').innerHTML = html;
  executeScripts(scripts);
  bindDynamicHandlers();
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
