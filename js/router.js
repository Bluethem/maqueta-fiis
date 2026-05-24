const NAV_ITEMS = [
  { label: 'Noticias', route: '/noticias' },
  { label: 'Empresas', route: '/empresas' },
  { label: 'Egresados', route: '/egresados' },
  { label: 'Vida Estudiantil', route: '/vida-estudiantil' },
  { label: 'Directorio', route: '/directorio' },
  { label: 'Eventos', route: '/calendario' },
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
  const items = NAV_ITEMS.map(item => `
    <a class="text-sm ${item.route === active ? 'text-primary font-bold border-b-2 border-primary' : 'text-on-surface-variant hover:text-primary'} transition-colors pb-1" href="#${item.route}">${item.label}</a>
  `).join('');
  return `
    <nav class="bg-surface border-b border-border-subtle sticky top-0 z-50">
      <div class="flex justify-between items-center w-full px-6 max-w-[1200px] mx-auto h-16">
        <div class="flex items-center gap-8">
          <a href="#/" class="text-xl font-extrabold text-primary flex items-center gap-2">
            <span class="material-symbols-outlined text-primary" style="font-variation-settings:'FILL'1;">architecture</span>
            FIIS UNI
          </a>
          <div class="hidden lg:flex items-center gap-6">${items}</div>
        </div>
        <div class="flex items-center gap-4">
          <a href="#/login" class="bg-primary text-on-primary px-6 py-2 rounded-lg text-sm font-medium hover:opacity-90 transition-transform active:scale-95">Portal Académico</a>
          <button class="lg:hidden p-2 hover:bg-surface-container-low rounded-full" id="nav-menu-toggle">
            <span class="material-symbols-outlined text-on-surface-variant">menu</span>
          </button>
        </div>
      </div>
      <div class="lg:hidden hidden border-t border-border-subtle px-6 py-4 bg-white" id="mobile-nav">
        <div class="flex flex-col gap-3">${NAV_ITEMS.map(item => `
          <a class="text-sm ${item.route === active ? 'text-primary font-bold' : 'text-on-surface-variant'} transition-colors" href="#${item.route}">${item.label}</a>
        `).join('')}</div>
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
            <p class="text-on-surface-variant text-sm leading-relaxed mb-6">Líderes en formación de ingeniería con visión global y compromiso social.</p>
            <div class="flex gap-4">
              <a class="w-10 h-10 rounded-full bg-primary flex items-center justify-center text-white hover:bg-primary-container transition-colors" href="#"><span class="material-symbols-outlined">public</span></a>
              <a class="w-10 h-10 rounded-full bg-primary flex items-center justify-center text-white hover:bg-primary-container transition-colors" href="#"><span class="material-symbols-outlined">share</span></a>
              <a class="w-10 h-10 rounded-full bg-primary flex items-center justify-center text-white hover:bg-primary-container transition-colors" href="#"><span class="material-symbols-outlined">contact_support</span></a>
            </div>
          </div>
          <div class="flex flex-col gap-4">
            <h5 class="text-sm font-bold text-primary uppercase mb-2">Contacto</h5>
            <p class="flex items-center gap-2 text-on-surface-variant text-sm"><span class="material-symbols-outlined text-primary">location_on</span> Av. Túpac Amaru 210, Rímac</p>
            <p class="flex items-center gap-2 text-on-surface-variant text-sm"><span class="material-symbols-outlined text-primary">phone</span> (01) 481-1070</p>
            <p class="flex items-center gap-2 text-on-surface-variant text-sm"><span class="material-symbols-outlined text-primary">mail</span> informes@fiis.uni.edu.pe</p>
          </div>
          <div class="flex flex-col gap-2">
            <h5 class="text-sm font-bold text-primary uppercase mb-2">Enlaces de Interés</h5>
            <a class="text-on-surface-variant text-sm hover:text-primary" href="#">Directorio Académico</a>
            <a class="text-on-surface-variant text-sm hover:text-primary" href="#">Biblioteca Central</a>
            <a class="text-on-surface-variant text-sm hover:text-primary" href="#">Bolsa de Trabajo</a>
            <a class="text-on-surface-variant text-sm hover:text-primary" href="#">Investigación</a>
          </div>
          <div class="flex flex-col gap-2">
            <h5 class="text-sm font-bold text-primary uppercase mb-2">Transparencia</h5>
            <a class="text-on-surface-variant text-sm hover:text-primary" href="#">Estatutos</a>
            <a class="text-on-surface-variant text-sm hover:text-primary" href="#">Reglamentos</a>
            <a class="text-on-surface-variant text-sm hover:text-primary" href="#">Presupuesto</a>
            <a class="text-on-surface-variant text-sm hover:text-primary" href="#">Memoria Anual</a>
          </div>
        </div>
        <div class="border-t border-border-subtle pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p class="text-text-secondary text-xs">© 2024 Facultad de Ingeniería Industrial y de Sistemas - Universidad Nacional de Ingeniería.</p>
          <div class="flex gap-6">
            <a class="text-text-secondary text-xs hover:text-primary" href="#">Mapa del Sitio</a>
            <a class="text-text-secondary text-xs hover:text-primary" href="#">Política de Privacidad</a>
          </div>
        </div>
      </div>
    </footer>
  `;
}

function renderPublicLayout(content, activeSection) {
  document.getElementById('app').innerHTML = navbar(activeSection) + content + publicFooter();
  const toggle = document.getElementById('nav-menu-toggle');
  const mobileNav = document.getElementById('mobile-nav');
  if (toggle && mobileNav) {
    toggle.addEventListener('click', () => {
      mobileNav.classList.toggle('hidden');
    });
  }
}

function renderPublicPage(html) {
  document.getElementById('app').innerHTML = html;
}

async function renderDashboard(role, html) {
  const session = Auth.getSession();
  Components.render(session, html);
}
