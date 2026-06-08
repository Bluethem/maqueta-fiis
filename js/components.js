const Components = {
  render(session, contentHtml) {
    const app = document.getElementById('app');
    const scripts = (typeof extractScripts === 'function') ? extractScripts(contentHtml) : [];
    app.innerHTML = this.layout(session, contentHtml);
    this.bindSidebarEvents(session.role);
    this.bindLogout();
    if (typeof executeScripts === 'function') executeScripts(scripts);
  },

  layout(session, content) {
    return `
      <div class="flex min-h-screen relative">
        <div class="fixed inset-0 bg-black/30 z-40 hidden lg:hidden" id="sidebar-overlay"></div>
        ${this.sidebar(session)}
        <div class="flex-1 ml-0 lg:ml-[240px] flex flex-col min-h-screen" id="main-area">
          ${this.topbar(session)}
          <main class="flex-1 p-4 md:p-6 lg:p-8 max-w-[1200px] w-full mx-auto">
            ${content}
          </main>
          ${this.footer()}
        </div>
      </div>
    `;
  },

  sidebar(session) {
    const role = session.role;
    const roleConfig = ROLES[role];
    const currentHash = window.location.hash.slice(1) || '/';
    const items = roleConfig.sidebar.map(item => {
      const active = item.route === currentHash || (currentHash.startsWith('/dashboard') && item.route === currentHash);
      return `
        <a class="flex items-center gap-3 px-4 py-2.5 rounded-lg transition-all duration-200 ${active ? 'sidebar-active' : 'text-on-surface-variant hover:bg-surface-container-low'}" href="#${item.route}">
          <span class="material-symbols-outlined">${item.icon}</span>
          <span class="text-sm font-medium">${item.label}</span>
        </a>
      `;
    }).join('');

    return `
      <aside class="fixed left-0 top-0 h-full w-[240px] bg-white border-r border-border-subtle flex flex-col z-50 -translate-x-full lg:translate-x-0 transition-transform duration-300 ease-in-out" id="sidebar">
        <div class="px-6 py-6">
          <div class="flex items-center gap-2">
            <img src="assets/Uni-logo_transparente_granate.png" alt="UNI" class="h-7 w-auto">
            <div>
              <h1 class="text-sm font-bold text-primary">Portal FIIS</h1>
              <p class="text-[10px] text-text-secondary uppercase tracking-wider font-medium">${roleConfig.label}</p>
            </div>
          </div>
        </div>
        <nav class="flex-1 px-3 space-y-1 overflow-y-auto custom-scrollbar">
          ${items}
          <div class="border-t border-border-subtle my-3"></div>
          <a class="flex items-center gap-3 px-4 py-2.5 rounded-lg text-on-surface-variant hover:bg-surface-container-low transition-all duration-200" href="#/">
            <span class="material-symbols-outlined">public</span>
            <span class="text-sm font-medium">Ver portal público</span>
          </a>
        </nav>
        <div class="px-3 py-4 border-t border-border-subtle">
          <div class="flex items-center gap-3 px-3 py-2 mb-2">
            <div class="w-9 h-9 rounded-full bg-primary flex items-center justify-center text-white font-bold text-xs">${session.initials}</div>
            <div class="flex-1 min-w-0">
              <p class="text-sm font-bold text-on-surface truncate">${session.name}</p>
              <p class="text-[10px] text-text-secondary truncate">${session.email}</p>
            </div>
          </div>
          <button class="w-full flex items-center justify-center gap-2 py-2 px-4 text-danger hover:bg-red-50 rounded-lg transition-colors text-sm font-medium" id="btn-logout">
            <span class="material-symbols-outlined text-sm">logout</span>
            Cerrar Sesión
          </button>
        </div>
      </aside>
    `;
  },

  topbar(session) {
    const roleConfig = ROLES[session.role];
    return `
      <header class="h-16 flex items-center justify-between px-6 bg-white border-b border-border-subtle sticky top-0 z-40">
        <div class="flex items-center gap-4">
          <button class="p-2 hover:bg-surface-container-low rounded-full transition-all active:scale-95 lg:hidden" id="btn-menu-toggle">
            <span class="material-symbols-outlined text-on-surface-variant">menu</span>
          </button>
          <h2 class="text-lg font-bold text-on-surface hidden sm:block">${roleConfig.label}</h2>
        </div>
        <div class="flex items-center gap-4">
          <span class="px-3 py-1 rounded-full text-xs font-semibold ${roleConfig.badge}">${roleConfig.label}</span>
          <button class="p-2 hover:bg-surface-container-low rounded-full transition-all relative">
            <span class="material-symbols-outlined text-on-surface-variant">notifications</span>
            <span class="absolute top-1.5 right-1.5 w-2 h-2 bg-danger rounded-full border-2 border-white"></span>
          </button>
        </div>
      </header>
    `;
  },

  footer() {
    return `
      <footer class="w-full py-6 px-6 bg-surface-container-high border-t border-border-subtle">
        <div class="max-w-[1200px] mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
          <div class="flex items-center gap-3">
            <img src="assets/logo-fiis.png" alt="FIIS" class="h-6 w-auto">
            <span class="w-px h-4 bg-border-subtle"></span>
            <span class="text-text-secondary text-xs">© 2026 Facultad de Ingeniería Industrial y de Sistemas</span>
          </div>
          <div class="flex gap-6">
            <a class="text-xs text-on-surface-variant hover:text-primary transition-colors" href="#">Contacto</a>
            <a class="text-xs text-on-surface-variant hover:text-primary transition-colors" href="#">Mapa de Sitio</a>
            <a class="text-xs text-on-surface-variant hover:text-primary transition-colors" href="#">Privacidad</a>
          </div>
        </div>
      </footer>
    `;
  },

  bindSidebarEvents(role) {
    const toggle = document.getElementById('btn-menu-toggle');
    const sidebar = document.getElementById('sidebar');
    const overlay = document.getElementById('sidebar-overlay');
    function closeSidebar() {
      sidebar?.classList.add('-translate-x-full');
      if (overlay) overlay.style.display = 'none';
    }
    function openSidebar() {
      sidebar?.classList.remove('-translate-x-full');
      if (overlay) overlay.style.display = 'block';
    }
    if (toggle && sidebar) {
      toggle.addEventListener('click', () => {
        const isOpen = !sidebar.classList.contains('-translate-x-full');
        if (isOpen) closeSidebar(); else openSidebar();
      });
    }
    if (overlay) {
      overlay.addEventListener('click', closeSidebar);
    }
    sidebar?.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        if (window.innerWidth < 1024) closeSidebar();
      });
    });
  },

  bindLogout() {
    const btn = document.getElementById('btn-logout');
    if (btn) btn.addEventListener('click', () => Auth.logout());
  }
};
