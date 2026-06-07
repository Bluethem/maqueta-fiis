'use strict';

window.Store = (function () {
  var STORAGE_KEY = 'fiis-store-v1';

  var defaultVacantes = [
    { id: 'VAC-2024-083', empresa: 'Ferreyros S.A.', email: 'talento@ferreyros.com.pe', cargo: 'Practicante de Operaciones Digitales', tipo: 'practica', carreras: ['industrial', 'sistemas'], modalidad: 'hibrido', requisitos: 'Estudiante desde 7mo ciclo con interes en mejora de procesos, indicadores y herramientas digitales.', enlace: 'talento@ferreyros.com.pe', fechaLimite: '2026-06-30', publicacion: '03 Jun, 2026', postulantes: 0, estado: 'pendiente' },
    { id: 'VAC-2024-081', empresa: 'Industrias Acero SAC', email: 'rrhh@acerosac.com', cargo: 'Analista de Planeamiento Industrial', tipo: 'empleo', carreras: ['industrial'], modalidad: 'presencial', requisitos: '3 anos de experiencia en planeamiento de operaciones, manejo de ERP SAP PP/MM.', enlace: 'empleos@acerosac.com', fechaLimite: '2025-06-30', publicacion: '12 Oct, 2024', postulantes: 24, estado: 'activa' },
    { id: 'VAC-2024-079', empresa: 'Industrias Acero SAC', email: 'rrhh@acerosac.com', cargo: 'Practicante de Sistemas SAP', tipo: 'practica', carreras: ['sistemas'], modalidad: 'presencial', requisitos: 'Estudiante de 8vo ciclo en adelante, conocimiento basico de SAP y bases de datos.', enlace: 'practicas@acerosac.com', fechaLimite: '2025-06-28', publicacion: '05 Oct, 2024', postulantes: 18, estado: 'activa' },
    { id: 'VAC-2024-075', empresa: 'Industrias Acero SAC', email: 'rrhh@acerosac.com', cargo: 'Supervisor de Control de Calidad', tipo: 'empleo', carreras: ['industrial'], modalidad: 'presencial', requisitos: 'Titulado, experiencia en ISO 9001, manejo de herramientas estadisticas.', enlace: 'calidad@acerosac.com', fechaLimite: '2025-06-10', publicacion: '28 Set, 2024', postulantes: 5, estado: 'cerrando' },
    { id: 'VAC-2024-068', empresa: 'Industrias Acero SAC', email: 'rrhh@acerosac.com', cargo: 'Data Analyst Junior', tipo: 'practica', carreras: ['software', 'ia'], modalidad: 'remoto', requisitos: 'Python/SQL, conocimientos de visualizacion con Power BI o Tableau.', enlace: 'https://jobs.acerosac.com/da', fechaLimite: '2025-05-01', publicacion: '10 Set, 2024', postulantes: 12, estado: 'cerrada' },
  ];

  var defaultCatalogos = {
    tiposConvenio: ['Marco', 'Específico'],
    tiposEvento: [
      { value: 'charla',      label: 'Charla técnica'        },
      { value: 'taller',      label: 'Taller / Workshop'     },
      { value: 'webinar',     label: 'Webinar'               },
      { value: 'feria',       label: 'Feria de reclutamiento'},
      { value: 'conferencia', label: 'Conferencia'           },
      { value: 'visita',      label: 'Visita industrial'     },
    ],
    areasConocimiento: [
      'Ing. Industrial — Operaciones',
      'Ing. Industrial — Logística',
      'Ing. Sistemas — TI',
      'Ing. Software — Desarrollo',
      'Investigación Operativa',
      'Inteligencia Artificial',
      'Big Data / Analytics',
      'Automatización / IoT',
    ],
  };

  var defaultProyectos = [
    { id: 'PRY-2024-001', empresa: 'Industrias Acero SAC', emailEmpresa: 'rrhh@acerosac.com', nombre: 'Automatizacion del control de calidad con vision artificial', area: 'Ing. Industrial — Operaciones', duracion: '3 — 6 meses', descripcion: 'Reducir el porcentaje de defectos en la linea de laminado mediante un sistema de inspeccion visual automatizado.', objetivo: 'Implementar un prototipo de vision artificial que detecte anomalias dimensionales en planchas de acero en tiempo real.', alcance: 'Prototipo funcional instalado en la linea piloto, reporte de precision y manual de operacion.', requisitos: 'Camara industrial, servidor con GPU, estudiantes de Ing. de Sistemas o Software con conocimientos de CV.', restricciones: 'Acceso al area de produccion requiere EPP. Datos de produccion son confidenciales.', contactoNombre: 'Jorge Huanca', contactoEmail: 'jhuanca@acerosac.com', contactoTelefono: '+51 1 555 6789', contactoCargo: 'Gerente de Operaciones', estado: 'aprobado', observacion: '', fechaSolicitud: '10 Mar, 2024' },
    { id: 'PRY-2024-002', empresa: 'Industrias Acero SAC', emailEmpresa: 'rrhh@acerosac.com', nombre: 'Modelo predictivo de demanda para planeamiento de produccion', area: 'Ing. Industrial — Logística', duracion: '3 — 6 meses', descripcion: 'El area de planeamiento trabaja con hojas de calculo manuales. Se necesita un modelo de forecasting que integre datos historicos y variables externas.', objetivo: 'Desarrollar un modelo de series de tiempo que pronostique la demanda mensual por producto con un error menor al 10%.', alcance: 'Modelo entrenado, dashboard de visualizacion en Power BI y documentacion tecnica.', requisitos: 'Python, pandas, scikit-learn. Perfil: estudiantes de Ing. Industrial o IA desde 7mo ciclo.', restricciones: 'Los datos historicos son anonimizados antes de entregarse al equipo.', contactoNombre: 'Jorge Huanca', contactoEmail: 'jhuanca@acerosac.com', contactoTelefono: '+51 1 555 6789', contactoCargo: 'Gerente de Operaciones', estado: 'pendiente', observacion: '', fechaSolicitud: '02 Jun, 2026' },
    { id: 'PRY-2024-003', empresa: 'Alicorp', emailEmpresa: 'rrhh@alicorp.com.pe', nombre: 'Optimizacion de rutas de distribucion con algoritmos metaheuristicos', area: 'Ing. Industrial — Logística', duracion: '6 — 12 meses', descripcion: 'La red de distribucion de Lima tiene 120 puntos de entrega diarios. Se busca reducir costos de transporte mediante ruteo optimo.', objetivo: 'Desarrollar una solucion basada en algoritmos geneticos o colonias de hormigas que reduzca el kilometraje total en al menos 15%.', alcance: 'Software de ruteo, pruebas con datos reales y comparativa con el sistema actual.', requisitos: 'Python o Java, conocimiento de VRP. Perfil ideal: tesis de Ing. Industrial o Sistemas.', restricciones: 'Datos de clientes son anonimizados. El sistema actual es propietario.', contactoNombre: 'Luis Calderon', contactoEmail: 'lcalderon@alicorp.com.pe', contactoTelefono: '+51 1 630 0000', contactoCargo: 'Jefe de Logistica', estado: 'pendiente', observacion: '', fechaSolicitud: '28 May, 2024' },
  ];

  var defaultConvenios = [
    { id: 'CON-2024-001', empresa: 'Industrias Acero SAC', emailEmpresa: 'rrhh@acerosac.com', tipo: 'Marco', modalidades: ['practicas', 'empleos'], descripcion: 'Habilitacion de practicantes y egresados para areas de produccion, calidad y planeamiento. Incluye programa de mentoria con profesionales senior.', vigenciaDesde: '2024-01-10', vigenciaHasta: '2026-01-10', responsable: 'Jorge Huanca', cargo: 'Gerente de RRHH', estado: 'vigente', observacion: '', fechaSolicitud: '05 Ene, 2024' },
    { id: 'CON-2023-002', empresa: 'Industrias Acero SAC', emailEmpresa: 'rrhh@acerosac.com', tipo: 'Especifico', modalidades: ['empleos'], descripcion: 'Bolsa de empleo para egresados de Ing. Industrial enfocada en supervision de planta y control de calidad.', vigenciaDesde: '2023-11-20', vigenciaHasta: '2025-11-20', responsable: 'Jorge Huanca', cargo: 'Gerente de RRHH', estado: 'vigente', observacion: '', fechaSolicitud: '15 Nov, 2023' },
    { id: 'CON-2022-003', empresa: 'Industrias Acero SAC', emailEmpresa: 'rrhh@acerosac.com', tipo: 'Especifico', modalidades: ['practicas'], descripcion: 'Convenio inicial de practicas para Ing. Industrial, primer vinculo formal con FIIS-UNI.', vigenciaDesde: '2022-06-01', vigenciaHasta: '2024-06-01', responsable: 'Jorge Huanca', cargo: 'Gerente de RRHH', estado: 'vencido', observacion: '', fechaSolicitud: '20 May, 2022' },
    { id: 'CON-2024-004', empresa: 'Grana y Montero', emailEmpresa: 'rrhh@gym.pe', tipo: 'Marco', modalidades: ['practicas', 'proyectos'], descripcion: 'Vinculacion para proyectos de ingenieria e investigacion aplicada con equipos multidisciplinarios.', vigenciaDesde: '2024-03-01', vigenciaHasta: '2026-03-01', responsable: 'Ana Villanueva', cargo: 'Coordinadora de Talento', estado: 'vigente', observacion: '', fechaSolicitud: '22 Feb, 2024' },
    { id: 'CON-2024-005', empresa: 'Alicorp', emailEmpresa: 'rrhh@alicorp.com.pe', tipo: 'Marco', modalidades: ['practicas', 'empleos', 'eventos'], descripcion: 'Vinculacion ampliada para practicas, empleos y actividades de proyeccion estudiantil en planta.', vigenciaDesde: '2024-02-15', vigenciaHasta: '2026-02-15', responsable: 'Luis Calderon', cargo: 'Jefe de Cultura', estado: 'vigente', observacion: '', fechaSolicitud: '10 Feb, 2024' },
    { id: 'CON-2024-006', empresa: 'Ferreyros', emailEmpresa: 'talento@ferreyros.com.pe', tipo: 'Especifico', modalidades: ['practicas'], descripcion: 'Recepcion de practicantes de Ing. Industrial en el area de operaciones digitales y maquinaria pesada.', vigenciaDesde: '2024-05-01', vigenciaHasta: '2025-05-01', responsable: 'Carla Montes', cargo: 'Jefa de RRHH', estado: 'pendiente', observacion: '', fechaSolicitud: '28 Abr, 2024' },
  ];

  var defaultEventos = [
    { id: 'EVT-001', empresa: 'Komatsu', email: 'rrhh@komatsu.com.pe', titulo: 'Workshop de IA para mantenimiento predictivo', tipo: 'taller', modalidad: 'hibrido', lugar: 'Lab. Computo 3 + streaming', aforo: 60, fechaInicio: '2025-07-03', fechaFin: '2025-07-03', descripcion: 'Casos reales de machine learning aplicado a flotas de equipos pesados en mineria.', publico: ['estudiantes', 'egresados'], flyerDataUrl: null, flyerName: null, estado: 'pendiente', fechaPropuesta: '28 May, 2025' },
    { id: 'EVT-002', empresa: 'Interbank', email: 'eventos@interbank.pe', titulo: 'Fintech & Sistemas de Pago Digitales', tipo: 'webinar', modalidad: 'virtual', lugar: 'Zoom (enlace al registrarte)', aforo: 200, fechaInicio: '2025-06-25', fechaFin: '2025-06-25', descripcion: 'Arquitectura de sistemas financieros modernos y oportunidades en el sector bancario digital.', publico: ['estudiantes'], flyerDataUrl: null, flyerName: null, estado: 'pendiente', fechaPropuesta: '25 May, 2025' },
    { id: 'EVT-003', empresa: 'Alicorp', email: 'eventos@alicorp.com.pe', titulo: 'Lean Six Sigma en la industria alimentaria', tipo: 'charla', modalidad: 'presencial', lugar: 'Auditorio FIIS, Pab. H', aforo: 120, fechaInicio: '2025-06-18', fechaFin: '2025-06-18', descripcion: 'Aplicacion de metodologias de mejora continua en lineas de produccion de alto volumen.', publico: ['estudiantes', 'docentes'], flyerDataUrl: null, flyerName: null, estado: 'aprobado', fechaPropuesta: '20 May, 2025' },
  ];

  var defaultEmpresaProfiles = {
    'industrias-acero': {
      nombre: 'Industrias Acero SAC',
      ruc: '20567890123',
      rubro: 'Metalmecanica / Manufactura',
      ubicacion: 'Av. Industrial 420, Callao',
      telefono: '+51 1 555 6789',
      descripcion: 'Empresa lider en fabricacion de estructuras metalicas y componentes industriales con mas de 25 anos de experiencia en el mercado peruano. Aliada estrategica de FIIS desde 2018.',
      sitioWeb: 'https://www.industriasacero.pe',
      linkedin: 'https://linkedin.com/company/industrias-acero',
      redSocial: 'https://facebook.com/industriasacero',
    },
  };

  var _vacantes = defaultVacantes.slice();
  var _eventos = defaultEventos.slice();
  var _catalogos = clone(defaultCatalogos);
  var _proyectos = defaultProyectos.slice();
  var _convenios = defaultConvenios.slice();
  var _empresaProfiles = clone(defaultEmpresaProfiles);
  var _config = { maxDias: 31 };
  var _deletedIds = [];

  function clone(obj) {
    return JSON.parse(JSON.stringify(obj));
  }

  function saveState() {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify({
        vacantes: _vacantes,
        eventos: _eventos,
        catalogos: _catalogos,
        proyectos: _proyectos,
        convenios: _convenios,
        empresaProfiles: _empresaProfiles,
        config: _config,
        deletedIds: _deletedIds,
      }));
    } catch (e) {}
  }

  function loadState() {
    try {
      var raw = localStorage.getItem(STORAGE_KEY);
      if (!raw) return;
      var data = JSON.parse(raw);
      if (Array.isArray(data.vacantes)) _vacantes = data.vacantes;
      if (Array.isArray(data.eventos)) _eventos = data.eventos;
      if (data.catalogos) {
        _catalogos = {
          tiposConvenio:    Array.isArray(data.catalogos.tiposConvenio)    ? data.catalogos.tiposConvenio    : defaultCatalogos.tiposConvenio.slice(),
          tiposEvento:      Array.isArray(data.catalogos.tiposEvento)      ? data.catalogos.tiposEvento      : clone(defaultCatalogos.tiposEvento),
          areasConocimiento: Array.isArray(data.catalogos.areasConocimiento) ? data.catalogos.areasConocimiento : defaultCatalogos.areasConocimiento.slice(),
        };
      }
      if (Array.isArray(data.proyectos)) _proyectos = data.proyectos;
      if (Array.isArray(data.convenios)) _convenios = data.convenios;
      if (data.empresaProfiles) _empresaProfiles = Object.assign(clone(defaultEmpresaProfiles), data.empresaProfiles);
      if (data.config) _config = Object.assign(_config, data.config);
      if (Array.isArray(data.deletedIds)) _deletedIds = data.deletedIds;
      _vacantes.forEach(function (v) {
        if (v.id === 'VAC-2024-079' && v.estado === 'pendiente' && !v.observacion) {
          v.estado = 'activa';
        }
      });
      defaultVacantes.forEach(function (seed) {
        var isDeleted = _deletedIds.indexOf(seed.id) !== -1;
        var exists = _vacantes.some(function (v) { return v.id === seed.id; });
        if (!exists && !isDeleted) _vacantes.push(Object.assign({}, seed));
      });
      defaultProyectos.forEach(function (seed) {
        var exists = _proyectos.some(function (p) { return p.id === seed.id; });
        if (!exists) _proyectos.push(Object.assign({}, seed));
      });
      defaultConvenios.forEach(function (seed) {
        var exists = _convenios.some(function (c) { return c.id === seed.id; });
        if (!exists) _convenios.push(Object.assign({}, seed));
      });
    } catch (e) {}
  }

  function fmtToday() {
    return new Date().toLocaleDateString('es-PE', {
      day: '2-digit',
      month: 'short',
      year: 'numeric',
    });
  }

  function updateById(list, id, patch) {
    for (var i = 0; i < list.length; i++) {
      if (list[i].id === id) {
        Object.assign(list[i], patch);
        break;
      }
    }
    saveState();
  }

  loadState();

  return {
    getVacantes: function () {
      return clone(_vacantes);
    },

    getVacantesPublicas: function () {
      return clone(_vacantes.filter(function (v) {
        return v.estado === 'activa' || v.estado === 'cerrando' || v.estado === 'cerrada';
      }));
    },

    addVacante: function (data) {
      _vacantes.unshift({
        id: 'VAC-' + Date.now(),
        empresa: data.empresa || 'Empresa',
        email: data.email || '',
        cargo: data.cargo || '',
        tipo: data.tipo || 'practica',
        carreras: data.carreras || [],
        modalidad: data.modalidad || 'presencial',
        requisitos: data.requisitos || '',
        enlace: data.enlace || '',
        fechaLimite: data.fechaLimite || '',
        publicacion: fmtToday(),
        postulantes: 0,
        estado: 'pendiente',
        observacion: '',
      });
      saveState();
    },

    updateVacanteEstado: function (id, estado, observacion) {
      updateById(_vacantes, id, {
        estado: estado,
        observacion: observacion || '',
      });
    },

    deleteVacante: function (id) {
      var idx = -1;
      for (var i = 0; i < _vacantes.length; i++) {
        if (_vacantes[i].id === id) { idx = i; break; }
      }
      if (idx === -1) return false;
      _vacantes.splice(idx, 1);
      if (_deletedIds.indexOf(id) === -1) _deletedIds.push(id);
      saveState();
      return true;
    },

    getCatalogos: function () {
      return clone(_catalogos);
    },

    addCatalogoItem: function (catalogo, item) {
      if (!_catalogos[catalogo]) return false;
      if (catalogo === 'tiposEvento') {
        var exists = _catalogos.tiposEvento.some(function (t) { return t.value === item.value; });
        if (exists) return false;
        _catalogos.tiposEvento.push(item);
      } else {
        if (_catalogos[catalogo].indexOf(item) !== -1) return false;
        _catalogos[catalogo].push(item);
      }
      saveState();
      return true;
    },

    removeCatalogoItem: function (catalogo, identifier) {
      if (!_catalogos[catalogo]) return false;
      if (catalogo === 'tiposEvento') {
        _catalogos.tiposEvento = _catalogos.tiposEvento.filter(function (t) { return t.value !== identifier; });
      } else {
        _catalogos[catalogo] = _catalogos[catalogo].filter(function (i) { return i !== identifier; });
      }
      saveState();
      return true;
    },

    getProyectos: function () {
      return clone(_proyectos);
    },

    addProyecto: function (data) {
      _proyectos.unshift({
        id: 'PRY-' + Date.now(),
        empresa: data.empresa || '',
        emailEmpresa: data.emailEmpresa || '',
        nombre: data.nombre || '',
        area: data.area || '',
        duracion: data.duracion || '',
        descripcion: data.descripcion || '',
        objetivo: data.objetivo || '',
        alcance: data.alcance || '',
        requisitos: data.requisitos || '',
        restricciones: data.restricciones || '',
        contactoNombre: data.contactoNombre || '',
        contactoEmail: data.contactoEmail || '',
        contactoTelefono: data.contactoTelefono || '',
        contactoCargo: data.contactoCargo || '',
        estado: 'pendiente',
        observacion: '',
        fechaSolicitud: fmtToday(),
      });
      saveState();
    },

    updateProyectoEstado: function (id, estado, observacion) {
      updateById(_proyectos, id, { estado: estado, observacion: observacion || '' });
    },

    getConvenios: function () {
      return clone(_convenios);
    },

    addConvenio: function (data) {
      _convenios.unshift({
        id: 'CON-' + Date.now(),
        empresa: data.empresa || '',
        emailEmpresa: data.emailEmpresa || '',
        tipo: data.tipo || 'Marco',
        modalidades: data.modalidades || [],
        descripcion: data.descripcion || '',
        vigenciaDesde: data.vigenciaDesde || '',
        vigenciaHasta: data.vigenciaHasta || '',
        responsable: data.responsable || '',
        cargo: data.cargo || '',
        estado: 'pendiente',
        observacion: '',
        fechaSolicitud: fmtToday(),
      });
      saveState();
    },

    updateConvenioEstado: function (id, estado, observacion) {
      updateById(_convenios, id, { estado: estado, observacion: observacion || '' });
    },

    getEventos: function () {
      return clone(_eventos);
    },

    getEmpresaProfile: function (slug) {
      var profile = _empresaProfiles[slug] || defaultEmpresaProfiles[slug] || null;
      return profile ? clone(profile) : null;
    },

    updateEmpresaProfile: function (slug, data) {
      var current = _empresaProfiles[slug] || defaultEmpresaProfiles[slug] || {};
      _empresaProfiles[slug] = Object.assign({}, current, data);
      saveState();
      return clone(_empresaProfiles[slug]);
    },

    addEvento: function (data) {
      _eventos.unshift({
        id: 'EVT-' + Date.now(),
        empresa: data.empresa || '',
        email: data.email || '',
        titulo: data.titulo || '',
        tipo: data.tipo || '',
        modalidad: data.modalidad || '',
        lugar: data.lugar || '',
        aforo: Number(data.aforo) || 0,
        fechaInicio: data.fechaInicio || '',
        fechaFin: data.fechaFin || '',
        descripcion: data.descripcion || '',
        publico: data.publico || [],
        flyerDataUrl: data.flyerDataUrl || null,
        flyerName: data.flyerName || null,
        estado: 'pendiente',
        fechaPropuesta: fmtToday(),
      });
      saveState();
    },

    updateEventoEstado: function (id, estado, observacion) {
      updateById(_eventos, id, { estado: estado, observacion: observacion || '' });
    },

    getConfig: function () {
      return Object.assign({}, _config);
    },

    setConfig: function (cfg) {
      Object.assign(_config, cfg);
      saveState();
    },

    reset: function () {
      _vacantes = defaultVacantes.slice();
      _eventos = defaultEventos.slice();
      _catalogos = clone(defaultCatalogos);
      _proyectos = defaultProyectos.slice();
      _convenios = defaultConvenios.slice();
      _empresaProfiles = clone(defaultEmpresaProfiles);
      _config = { maxDias: 31 };
      saveState();
    },
  };
}());
