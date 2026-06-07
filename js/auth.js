const ROLES = {
  docente: {
    label: 'Docente',
    badge: 'bg-blue-100 text-blue-700',
    sidebar: [
      { icon: 'dashboard', label: 'Dashboard', route: '/dashboard/docente' },
      { icon: 'person', label: 'Perfil Académico', route: '/dashboard/docente/perfil' },
      { icon: 'school', label: 'Capacitaciones', route: '/dashboard/docente/capacitaciones' },
      { icon: 'folder', label: 'Mis Recursos', route: '/dashboard/docente/recursos' },
    ]
  },
  administrativo: {
    label: 'Administrativo',
    badge: 'bg-purple-100 text-purple-700',
    sidebar: [
      { icon: 'dashboard', label: 'Dashboard', route: '/dashboard/administrativo' },
      { icon: 'description', label: 'Bandeja de Trámites', route: '/dashboard/administrativo/tramites' },
      { icon: 'gavel', label: 'Transparencia', route: '/dashboard/administrativo/resoluciones' },
      { icon: 'calendar_month', label: 'Horarios y Mallas', route: '/dashboard/administrativo/horarios' },
      { icon: 'newspaper', label: 'Gestión de Noticias', route: '/news' },
      { icon: 'event', label: 'Gestión de Calendario', route: '/calendar' },
      { icon: 'content_paste', label: 'Solicitudes de Contenido', route: '/content' },
    ]
  },
  centro: {
    label: 'Centro Estudiantil',
    badge: 'bg-amber-100 text-amber-700',
    sidebar: [
      { icon: 'dashboard', label: 'Dashboard', route: '/dashboard/centro' },
      { icon: 'web', label: 'Mi Página', route: '/dashboard/centro/pagina' },
      { icon: 'campaign', label: 'Convocatorias', route: '/dashboard/centro/convocatorias' },
      { icon: 'add_circle', label: 'Solicitar publicación', route: '/dashboard/centro/solicitar' },
    ]
  },
  empresa: {
    label: 'Empresa',
    badge: 'bg-orange-100 text-orange-700',
    sidebar: [
      { icon: 'dashboard', label: 'Dashboard', route: '/dashboard/empresa' },
      { icon: 'business', label: 'Perfil', route: '/dashboard/empresa/perfil' },
      { icon: 'work', label: 'Mis Vacantes', route: '/dashboard/empresa/vacantes' },
      { icon: 'add_circle', label: 'Solicitar publicación', route: '/dashboard/empresa/solicitar' },
    ]
  },
  laboratorio: {
    label: 'Institución / Lab',
    badge: 'bg-indigo-100 text-indigo-700',
    sidebar: [
      { icon: 'dashboard', label: 'Dashboard', route: '/dashboard/laboratorio' },
      { icon: 'web', label: 'Mi Página', route: '/dashboard/laboratorio/pagina' },
      { icon: 'add_circle', label: 'Solicitar publicación', route: '/dashboard/laboratorio/solicitar' },
    ]
  },
  admin: {
    label: 'Admin Web',
    badge: 'bg-gray-700 text-white',
    sidebar: [
      { icon: 'dashboard', label: 'Dashboard', route: '/dashboard/admin-web' },
      { icon: 'group', label: 'Gestión de Usuarios', route: '/users' },
      { icon: 'description', label: 'Solicitudes Pendientes', route: '/content' },
      { icon: 'newspaper', label: 'Gestión de Noticias', route: '/news' },
      { icon: 'event', label: 'Gestión de Calendario', route: '/calendar' },
      { icon: 'work', label: 'Moderación de Vacantes', route: '/dashboard/admin/vacantes' },
      { icon: 'folder_open', label: 'Repositorio Central', route: '/dashboard/admin/repositorio' },
      { icon: 'settings', label: 'Configuración', route: '/dashboard/admin/configuracion' },
    ]
  }
};

const USERS = {
  docente: { name: 'Dr. Miguel Rodríguez', email: 'mrodriguez@uni.edu.pe', initials: 'MR' },
  administrativo: { name: 'María Torres', email: 'maria.torres@uni.edu.pe', initials: 'MT' },
  centro: { name: 'Luis Paredes', email: 'lparedes@unicode.uni.edu.pe', initials: 'LP' },
  empresa: { name: 'Industrias Acero SAC', email: 'rrhh@acerosac.com', initials: 'IA' },
  laboratorio: { name: 'Lab. IA FIIS', email: 'labia@fiis.uni.edu.pe', initials: 'LI' },
  admin: { name: 'Admin Portal', email: 'admin@fiis.uni.edu.pe', initials: 'AP' },
};

const Auth = {
  login(role) {
    const user = USERS[role];
    const session = { role, loggedIn: true, ...user };
    sessionStorage.setItem('auth', JSON.stringify(session));
    return session;
  },
  logout() {
    sessionStorage.removeItem('auth');
    window.location.hash = '#/';
  },
  getSession() {
    try { return JSON.parse(sessionStorage.getItem('auth')); }
    catch { return null; }
  },
  isLoggedIn() { return !!this.getSession(); },
  getRole() { return this.getSession()?.role || null; },
};
