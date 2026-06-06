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

  var defaultEventos = [
    { id: 'EVT-001', empresa: 'Komatsu', email: 'rrhh@komatsu.com.pe', titulo: 'Workshop de IA para mantenimiento predictivo', tipo: 'taller', modalidad: 'hibrido', lugar: 'Lab. Computo 3 + streaming', aforo: 60, fechaInicio: '2025-07-03', fechaFin: '2025-07-03', descripcion: 'Casos reales de machine learning aplicado a flotas de equipos pesados en mineria.', publico: ['estudiantes', 'egresados'], flyerDataUrl: null, flyerName: null, estado: 'pendiente', fechaPropuesta: '28 May, 2025' },
    { id: 'EVT-002', empresa: 'Interbank', email: 'eventos@interbank.pe', titulo: 'Fintech & Sistemas de Pago Digitales', tipo: 'webinar', modalidad: 'virtual', lugar: 'Zoom (enlace al registrarte)', aforo: 200, fechaInicio: '2025-06-25', fechaFin: '2025-06-25', descripcion: 'Arquitectura de sistemas financieros modernos y oportunidades en el sector bancario digital.', publico: ['estudiantes'], flyerDataUrl: null, flyerName: null, estado: 'pendiente', fechaPropuesta: '25 May, 2025' },
    { id: 'EVT-003', empresa: 'Alicorp', email: 'eventos@alicorp.com.pe', titulo: 'Lean Six Sigma en la industria alimentaria', tipo: 'charla', modalidad: 'presencial', lugar: 'Auditorio FIIS, Pab. H', aforo: 120, fechaInicio: '2025-06-18', fechaFin: '2025-06-18', descripcion: 'Aplicacion de metodologias de mejora continua en lineas de produccion de alto volumen.', publico: ['estudiantes', 'docentes'], flyerDataUrl: null, flyerName: null, estado: 'aprobado', fechaPropuesta: '20 May, 2025' },
  ];

  var _vacantes = defaultVacantes.slice();
  var _eventos = defaultEventos.slice();
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

    getEventos: function () {
      return clone(_eventos);
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
      _config = { maxDias: 31 };
      saveState();
    },
  };
}());
