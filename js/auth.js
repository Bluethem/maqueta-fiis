const ROLES = {
  estudiante: {
    label: 'Estudiante',
    badge: 'bg-teal-100 text-teal-700',
    sidebar: [
      { icon: 'dashboard', label: 'Dashboard', route: '/dashboard/estudiante' },
      { icon: 'description', label: 'Mis Trámites', route: '/dashboard/estudiante/tramites' },
      { icon: 'campaign', label: 'Convocatorias', route: '/dashboard/estudiante/convocatorias' },
      { icon: 'school', label: 'Tutoría', route: '/dashboard/estudiante/tutoria' },
      { icon: 'folder', label: 'Recursos Académicos', route: '/dashboard/estudiante/recursos' },
      { icon: 'event', label: 'Mis Eventos', route: '/dashboard/estudiante/eventos' },
      { icon: 'settings', label: 'Mi Perfil', route: '/dashboard/estudiante/perfil' },
    ]
  },
  administrativo: {
    label: 'Administrativo',
    badge: 'bg-purple-100 text-purple-700',
    sidebar: [
      { icon: 'dashboard', label: 'Dashboard', route: '/dashboard/administrativo' },
      { icon: 'description', label: 'Bandeja de Trámites', route: '/dashboard/administrativo/tramites' },
      { icon: 'gavel', label: 'Resoluciones', route: '/dashboard/administrativo/resoluciones' },
      { icon: 'calendar_month', label: 'Horarios y Mallas', route: '/dashboard/administrativo/horarios' },
      { icon: 'newspaper', label: 'Gestión de Noticias', route: '/news' },
      { icon: 'event', label: 'Gestión de Calendario', route: '/calendar' },
      { icon: 'content_paste', label: 'Gestión de Contenido', route: '/content' },
      { icon: 'analytics', label: 'Reportes', route: '/dashboard/administrativo/reportes' },
    ]
  },
  docente: {
    label: 'Docente',
    badge: 'bg-blue-100 text-blue-700',
    sidebar: [
      { icon: 'dashboard', label: 'Dashboard', route: '/dashboard/docente' },
      { icon: 'person', label: 'Perfil Académico', route: '/dashboard/docente/perfil' },
      { icon: 'group', label: 'Mis Asesorías', route: '/dashboard/docente/asesorias' },
      { icon: 'folder', label: 'Mis Recursos', route: '/dashboard/docente/recursos' },
      { icon: 'event', label: 'Mis Eventos', route: '/dashboard/docente/eventos' },
      { icon: 'settings', label: 'Configuración', route: '/dashboard/docente/configuracion' },
    ]
  },
  centro: {
    label: 'Centro Estudiantil',
    badge: 'bg-amber-100 text-amber-700',
    sidebar: [
      { icon: 'dashboard', label: 'Dashboard', route: '/dashboard/centro' },
      { icon: 'web', label: 'Mi Página', route: '/dashboard/centro/pagina' },
      { icon: 'calendar_month', label: 'Mis Eventos', route: '/dashboard/centro/eventos' },
      { icon: 'campaign', label: 'Convocatorias', route: '/dashboard/centro/convocatorias' },
      { icon: 'folder', label: 'Repositorio', route: '/dashboard/centro/repositorio' },
      { icon: 'content_paste', label: 'Gestión de Contenido', route: '/content' },
    ]
  },
  egresado: {
    label: 'Egresado',
    badge: 'bg-green-100 text-green-700',
    sidebar: [
      { icon: 'dashboard', label: 'Dashboard', route: '/dashboard/egresado' },
      { icon: 'person', label: 'Mi Perfil', route: '/dashboard/egresado/perfil' },
      { icon: 'work', label: 'Bolsa de Trabajo', route: '/dashboard/egresado/bolsa' },
      { icon: 'assignment_turned_in', label: 'Mis Postulaciones', route: '/dashboard/egresado/postulaciones' },
      { icon: 'groups', label: 'Red Alumni', route: '/dashboard/egresado/alumni' },
      { icon: 'psychology', label: 'Mentoría', route: '/dashboard/egresado/mentoria' },
    ]
  },
  empresa: {
    label: 'Empresa',
    badge: 'bg-orange-100 text-orange-700',
    sidebar: [
      { icon: 'dashboard', label: 'Dashboard', route: '/dashboard/empresa' },
      { icon: 'business', label: 'Perfil Empresarial', route: '/dashboard/empresa/perfil' },
      { icon: 'work', label: 'Mis Vacantes', route: '/dashboard/empresa/vacantes' },
      { icon: 'event_note', label: 'Proponer Evento', route: '/dashboard/empresa/evento' },
      { icon: 'assignment', label: 'Solicitar Proyecto', route: '/dashboard/empresa/proyecto' },
      { icon: 'notifications', label: 'Notificaciones', route: '/dashboard/empresa/notificaciones' },
    ]
  },
  laboratorio: {
    label: 'Institución / Lab',
    badge: 'bg-indigo-100 text-indigo-700',
    sidebar: [
      { icon: 'dashboard', label: 'Dashboard', route: '/dashboard/laboratorio' },
      { icon: 'web', label: 'Mi Página', route: '/dashboard/laboratorio/pagina' },
      { icon: 'design_services', label: 'Mis Servicios', route: '/dashboard/laboratorio/servicios' },
      { icon: 'newspaper', label: 'Mis Noticias', route: '/news' },
      { icon: 'content_paste', label: 'Gestión de Contenido', route: '/content' },
    ]
  },
  admin: {
    label: 'Admin Web',
    badge: 'bg-gray-700 text-white',
    sidebar: [
      { icon: 'dashboard', label: 'Dashboard', route: '/dashboard/admin-web' },
      { icon: 'group', label: 'Gestión de Usuarios', route: '/users' },
      { icon: 'description', label: 'Solicitudes', route: '/content' },
      { icon: 'newspaper', label: 'Gestión de Noticias', route: '/news' },
      { icon: 'event', label: 'Gestión de Calendario', route: '/calendar' },
      { icon: 'work', label: 'Moderación de Vacantes', route: '/dashboard/admin/vacantes' },
      { icon: 'analytics', label: 'Reportes Globales', route: '/dashboard/admin/reportes' },
      { icon: 'settings', label: 'Configuración', route: '/dashboard/admin/configuracion' },
    ]
  }
};

const USERS = {
  estudiante: { name: 'Carlos Quispe', email: 'carlos.quispe@uni.edu.pe', initials: 'CQ' },
  administrativo: { name: 'María Torres', email: 'maria.torres@uni.edu.pe', initials: 'MT' },
  docente: { name: 'Dr. Miguel Rodríguez', email: 'mrodriguez@uni.edu.pe', initials: 'MR' },
  centro: { name: 'Luis Paredes', email: 'lparedes@unicode.uni.edu.pe', initials: 'LP' },
  egresado: { name: 'Ana Flores', email: 'ana.flores@alumni.uni.edu.pe', initials: 'AF' },
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
