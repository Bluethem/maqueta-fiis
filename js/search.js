'use strict';

window.SearchEngine = (function () {
  var INDEX = [
    // Facultad
    { title: 'Nuestra Facultad', desc: 'Historia, misión, visión y organización de la FIIS', type: 'Página', route: '/facultad', keywords: ['historia','facultad','misión','visión','decano'] },
    { title: 'Autoridades', desc: 'Decano, vicedecanos, directores y autoridades de la FIIS', type: 'Página', route: '/autoridades', keywords: ['decano','director','autoridad','consejo'] },
    { title: 'Organigrama', desc: 'Estructura orgánica completa de la Facultad', type: 'Página', route: '/organigrama', keywords: ['organigrama','estructura','departamentos','escuelas'] },
    { title: 'Acreditación', desc: 'Oficina de Acreditación y calidad educativa', type: 'Página', route: '/acreditacion', keywords: ['acreditación','calidad','abet','iso'] },
    { title: 'Directorio Docentes', desc: 'Directorio de docentes por escuela y departamento', type: 'Página', route: '/directorio-docentes', keywords: ['docentes','profesores','directorio','orcid'] },

    // Escuelas
    { title: 'Ingeniería Industrial', desc: 'Escuela Profesional de Ingeniería Industrial', type: 'Escuela', route: '/escuelas/industrial', keywords: ['industrial','carrera','optimización','procesos','producción'] },
    { title: 'Ingeniería de Sistemas', desc: 'Escuela Profesional de Ingeniería de Sistemas', type: 'Escuela', route: '/escuelas/sistemas', keywords: ['sistemas','carrera','software','redes','informática'] },
    { title: 'Ingeniería de Software', desc: 'Escuela Profesional de Ingeniería de Software', type: 'Escuela', route: '/escuelas/software', keywords: ['software','carrera','desarrollo','programación'] },
    { title: 'Ingeniería en Inteligencia Artificial', desc: 'Escuela Profesional de Ingeniería en Inteligencia Artificial', type: 'Escuela', route: '/escuelas/inteligencia-artificial', keywords: ['ia','inteligencia artificial','machine learning','carrera'] },

    // Departamentos
    { title: 'Ciencias Básicas', desc: 'Departamento Académico de Ciencias Básicas', type: 'Página', route: '/departamentos/ciencias-basicas', keywords: ['matemática','física','química','ciencias'] },
    { title: 'Gestión de la Producción', desc: 'Departamento de Gestión de la Producción', type: 'Página', route: '/departamentos/gestion-produccion', keywords: ['producción','gestión','operaciones'] },
    { title: 'Humanidades', desc: 'Departamento de Humanidades y Ciencias Sociales', type: 'Página', route: '/departamentos/humanidades', keywords: ['humanidades','sociales','letras'] },
    { title: 'Sistemas y Telemática', desc: 'Departamento de Sistemas y Telemática', type: 'Página', route: '/departamentos/sistemas-telematica', keywords: ['sistemas','telemática','redes','telecomunicaciones'] },
    { title: 'Tecnología de la Producción', desc: 'Departamento de Tecnología de la Producción', type: 'Página', route: '/departamentos/tecnologia-produccion', keywords: ['tecnología','producción','automatización'] },

    // Posgrado
    { title: 'Posgrado FIIS', desc: 'Información general de programas de posgrado', type: 'Página', route: '/posgrado', keywords: ['posgrado','maestría','doctorado','diplomado'] },
    { title: 'Maestría en Ingeniería Industrial', desc: 'Maestría en Ingeniería Industrial', type: 'Posgrado', route: '/posgrado/maestria-industrial', keywords: ['maestría','industrial','posgrado'] },
    { title: 'Maestría en Ingeniería de Sistemas', desc: 'Maestría en Ingeniería de Sistemas', type: 'Posgrado', route: '/posgrado/maestria-sistemas', keywords: ['maestría','sistemas','posgrado'] },
    { title: 'Maestría en Inteligencia Artificial', desc: 'Maestría en Inteligencia Artificial', type: 'Posgrado', route: '/posgrado/maestria-ia', keywords: ['maestría','ia','inteligencia artificial','posgrado'] },
    { title: 'Maestría en Supply Chain Management', desc: 'Maestría en Supply Chain Management', type: 'Posgrado', route: '/posgrado/maestria-supply-chain', keywords: ['maestría','supply chain','logística','posgrado'] },
    { title: 'Maestría en Business Analytics e IA', desc: 'Maestría en Business Analytics e IA Aplicada', type: 'Posgrado', route: '/posgrado/maestria-business-analytics', keywords: ['maestría','business analytics','datos','ia','posgrado'] },
    { title: 'Maestría en Gestión de Operaciones', desc: 'Maestría en Gestión de Operaciones', type: 'Posgrado', route: '/posgrado/maestria-gestion-operaciones', keywords: ['maestría','gestión','operaciones','posgrado'] },
    { title: 'Doctorado en Ingeniería Industrial', desc: 'Doctorado en Ingeniería Industrial', type: 'Posgrado', route: '/posgrado/doctorado-industrial', keywords: ['doctorado','industrial','posgrado'] },
    { title: 'Doctorado en Ingeniería de Sistemas', desc: 'Doctorado en Ingeniería de Sistemas', type: 'Posgrado', route: '/posgrado/doctorado-sistemas', keywords: ['doctorado','sistemas','posgrado'] },
    { title: 'Diplomado en Project Management', desc: 'Diplomado en Project Management aplicando IA', type: 'Posgrado', route: '/posgrado/diplomados', keywords: ['diplomado','project management','ia'] },

    // Servicios
    { title: 'Servicios e Instalaciones', desc: 'Todos los servicios, áreas y unidades de apoyo', type: 'Página', route: '/servicios', keywords: ['servicios','biblioteca','mesa de partes','bienestar'] },
    { title: 'Centro de Información FIIS', desc: 'Biblioteca, catálogo KOHA, sala de lectura', type: 'Servicio', route: '/centro-informacion', keywords: ['biblioteca','koha','libros','tesis','lectura'] },
    { title: 'UECPS', desc: 'Unidad de Extensión Cultural y Proyección Social', type: 'Servicio', route: '/uecps', keywords: ['uecps','prácticas','convenio','extensión','cultural'] },
    { title: 'Tutoría FIIS', desc: 'Programa de acompañamiento académico y psicológico', type: 'Servicio', route: '/tutoria', keywords: ['tutoría','riesgo académico','psicológico','acompañamiento'] },
    { title: 'Mesa de Partes', desc: 'Recepción y trámite de documentos', type: 'Servicio', route: '/servicios', keywords: ['mesa de partes','trámites','documentos','fut'] },
    { title: 'Bienestar Universitario', desc: 'Apoyo psicológico, tutoría, becas', type: 'Servicio', route: '/servicios', keywords: ['bienestar','psicológico','becas','tutoría','salud'] },

    // Comunidad
    { title: 'Comunidad FIIS', desc: 'Agrupaciones, centros culturales y organismos estudiantiles', type: 'Página', route: '/comunidad', keywords: ['comunidad','agrupaciones','centros','estudiantil'] },
    { title: 'UNICODE', desc: 'Centro de Informática y Desarrollo', type: 'Agrupación', route: '/comunidad/unicode', keywords: ['unicode','informática','desarrollo','programación'] },
    { title: 'CIBERSEC', desc: 'Comunidad de Ciberseguridad', type: 'Agrupación', route: '/comunidad/cibersec', keywords: ['cibersec','ciberseguridad','hacking','seguridad'] },
    { title: 'Núcleo', desc: 'Centro Cultural Núcleo', type: 'Agrupación', route: '/comunidad/nucleo', keywords: ['núcleo','centro cultural','liderazgo'] },
    { title: 'CEIIS', desc: 'Centro de Estudiantes FIIS', type: 'Agrupación', route: '/comunidad/ceiis', keywords: ['ceiis','centro de estudiantes','gremial'] },
    { title: 'TEFIIS', desc: 'Tercio Estudiantil FIIS', type: 'Agrupación', route: '/comunidad/tefiis', keywords: ['tefiis','tercio estudiantil','consejo','representación'] },
    { title: 'CCAT', desc: 'Centro Cultural Avanzada Tecnológica', type: 'Agrupación', route: '/comunidad/ccat', keywords: ['ccat','centro cultural','tecnológica'] },
    { title: 'Delegatura de Industrial', desc: 'Delegatura de Ingeniería Industrial', type: 'Agrupación', route: '/comunidad/delegatura-industrial', keywords: ['delegatura','industrial','representación'] },

    // Investigación
    { title: 'Investigación FIIS', desc: 'Laboratorios, centros e institutos de investigación', type: 'Página', route: '/investigacion', keywords: ['investigación','laboratorios','institutos','ciencia'] },
    { title: 'Instituto de Investigación', desc: 'IIFIIS — Investigación y proyectos', type: 'Laboratorio', route: '/instituto-investigacion', keywords: ['investigación','iifiis','proyectos','convocatorias'] },
    { title: 'Laboratorio de IA', desc: 'Inteligencia Artificial y Robótica', type: 'Laboratorio', route: '/laboratorio-ia', keywords: ['ia','inteligencia artificial','robotica','machine learning'] },
    { title: 'Laboratorio de Química', desc: 'Análisis fisicoquímicos y servicios analíticos', type: 'Laboratorio', route: '/laboratorio-quimica', keywords: ['química','laboratorio','análisis','reactivos'] },
    { title: 'Laboratorio Académico y Red FIIS', desc: 'Infraestructura informática y conectividad', type: 'Laboratorio', route: '/laboratorio-academico', keywords: ['laboratorio','red','wifi','computadoras','soporte'] },
    { title: 'Centro de Automatización Industrial', desc: 'Formación en automatización industrial', type: 'Laboratorio', route: '/centro-automatizacion', keywords: ['automatización','industrial','plc','scada','robótica'] },
    { title: 'CEE', desc: 'Centro de Especialización Ejecutiva', type: 'Servicio', route: '/cee', keywords: ['cee','especialización','diplomados','capacitación'] },
    { title: 'Consult FIIS', desc: 'Consultoría y servicios profesionales', type: 'Servicio', route: '/consult-fiis', keywords: ['consultoría','consultor','gestión','empresarial'] },
    { title: 'IIFIIS - Publicaciones', desc: 'Revistas, artículos y documentos de investigación', type: 'Página', route: '/iifiis', keywords: ['iifiis','revista','tecnia','publicaciones','artículos'] },
    { title: 'Proyectos Destacados', desc: 'Proyectos emblemáticos de la FIIS', type: 'Página', route: '/proyectos-destacados', keywords: ['proyectos','destacados','investigación','consultoría'] },

    // Noticias y eventos
    { title: 'Noticias FIIS', desc: 'Noticias y comunicados de la facultad', type: 'Noticia', route: '/noticias', keywords: ['noticias','comunicados','avisos'] },
    { title: 'Calendario', desc: 'Calendario de eventos académicos y culturales', type: 'Página', route: '/calendario', keywords: ['calendario','eventos','actividades'] },
    { title: 'Gestión de Noticias', desc: 'Panel de administración de noticias', type: 'Página', route: '/news', keywords: ['noticias','gestión','publicar','editor'] },
    { title: 'Gestión de Calendario', desc: 'Panel de administración de eventos', type: 'Página', route: '/calendar', keywords: ['calendario','eventos','gestión'] },

    // Académico
    { title: 'Oferta Académica', desc: 'Escuelas, departamentos y recursos académicos', type: 'Página', route: '/academico', keywords: ['académico','escuelas','departamentos','cursos'] },
    { title: 'Cronogramas', desc: 'Calendario académico, horarios y exámenes', type: 'Página', route: '/cronogramas', keywords: ['cronogramas','horarios','exámenes','calendario académico'] },
    { title: 'Guías Académicas', desc: 'Manuales, guías de estudio y procedimientos', type: 'Página', route: '/guias-academicas', keywords: ['guías','manuales','estudio','procedimientos'] },
    { title: 'Avisos Académicos', desc: 'Comunicados oficiales y resoluciones', type: 'Página', route: '/avisos-academicos', keywords: ['avisos','comunicados','resoluciones','oficial'] },
    { title: 'Escuelas Profesionales', desc: 'Directorios de escuelas', type: 'Página', route: '/escuelas', keywords: ['escuelas','profesionales','carreras','industrial','sistemas','software'] },
    { title: 'Departamentos Académicos', desc: 'Directorios de departamentos', type: 'Página', route: '/departamentos', keywords: ['departamentos','académicos','ciencias'] },

    // Otros
    { title: 'Transparencia', desc: 'Portal de transparencia institucional', type: 'Página', route: '/transparencia', keywords: ['transparencia','información','pública','gobierno'] },
    { title: 'Contacto', desc: 'Información de contacto de la facultad', type: 'Página', route: '/contacto', keywords: ['contacto','dirección','teléfono','correo'] },
    { title: 'Egresados', desc: 'Comunidad de egresados y bolsa de trabajo', type: 'Página', route: '/egresados', keywords: ['egresados','alumni','bolsa de trabajo','empleo'] },
    { title: 'Empresas', desc: 'Empresas aliadas y bolsa de trabajo', type: 'Página', route: '/empresas', keywords: ['empresas','aliadas','bolsa de trabajo','prácticas'] },
    { title: 'Laboratorios FIIS', desc: 'Directorio completo de laboratorios', type: 'Página', route: '/laboratorios', keywords: ['laboratorios','directorio','equipamiento'] },
    { title: 'Login', desc: 'Inicio de sesión del portal', type: 'Página', route: '/login', keywords: ['login','ingresar','acceder'] },
  ];

  var SEARCH_ICONS = {
    'Página': 'description',
    'Escuela': 'school',
    'Posgrado': 'auto_stories',
    'Servicio': 'support',
    'Agrupación': 'groups',
    'Laboratorio': 'biotech',
    'Noticia': 'newspaper',
    'Vacante': 'work',
    'Evento': 'event',
  };

  function normalize(str) {
    return str.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '');
  }

  function score(item, q) {
    var s = 0;
    var nq = normalize(q);
    var nt = normalize(item.title);
    var nd = normalize(item.desc);
    var nk = item.keywords.map(normalize);
    if (nt === nq) s += 100;
    if (nt.startsWith(nq)) s += 50;
    if (nt.includes(nq)) s += 30;
    if (nd.includes(nq)) s += 15;
    nk.forEach(function(k) { if (k.includes(nq)) s += 10; });
    return s;
  }

  function search(query, filterType) {
    if (!query || query.trim().length < 2) return [];
    var q = query.trim();

    var allItems = INDEX.slice();

    var vacantes = (typeof Store !== 'undefined') ? Store.getVacantesPublicas() : [];
    vacantes.forEach(function(v) {
      allItems.push({
        title: v.cargo,
        desc: v.empresa + ' - ' + v.modalidad,
        type: 'Vacante',
        route: '/dashboard/empresa/vacantes',
        keywords: [v.cargo, v.empresa, v.modalidad].concat(v.carreras || []),
        _vacante: v
      });
    });

    var eventos = (typeof Store !== 'undefined') ? Store.getEventos() : [];
    eventos.forEach(function(e) {
      if (e.estado === 'aprobado') {
        allItems.push({
          title: e.titulo,
          desc: e.empresa + ' - ' + e.modalidad + ' - ' + e.fechaInicio,
          type: 'Evento',
          route: '/calendar',
          keywords: [e.titulo, e.empresa, e.tipo, e.modalidad],
          _evento: e
        });
      }
    });

    var scored = allItems.map(function(item) {
      return { item: item, score: score(item, q) };
    }).filter(function(s) { return s.score > 0; });

    if (filterType && filterType !== 'todos') {
      scored = scored.filter(function(s) { return s.item.type === filterType; });
    }

    scored.sort(function(a, b) { return b.score - a.score; });
    return scored.map(function(s) { return s.item; });
  }

  function getTypes() {
    var types = {};
    INDEX.forEach(function(i) { types[i.type] = true; });
    return Object.keys(types).sort();
  }

  function getIcon(type) {
    return SEARCH_ICONS[type] || 'description';
  }

  return {
    search: search,
    getTypes: getTypes,
    getIcon: getIcon,
  };
})();
