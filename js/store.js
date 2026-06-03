'use strict';
/**
 * Store — capa de datos en memoria para la maqueta FIIS.
 * Centraliza los modelos de Vacante y Evento para que las páginas
 * de empresa y del admin lean/escriban desde la misma fuente.
 * Preparado para ser reemplazado por llamadas a una API REST real.
 */
window.Store = (function () {

  /* ═══════════════════════════════════════════════════════════════════════
   * MODELO: Vacante
   * ───────────────────────────────────────────────────────────────────────
   * id          string   — generado automáticamente (VAC-<timestamp>)
   * cargo       string   — nombre del puesto
   * tipo        string   — 'practica' | 'empleo'
   * carreras    string[] — subconjunto de ['industrial','sistemas','software','ia']
   * modalidad   string   — 'presencial' | 'remoto' | 'hibrido'
   * requisitos  string   — descripción y perfil requerido
   * enlace      string   — URL de postulación o correo de contacto
   * fechaLimite string   — YYYY-MM-DD
   * publicacion string   — fecha formateada (generada al crear)
   * postulantes number   — contador (inicia en 0)
   * estado      string   — 'pendiente' | 'activa' | 'cerrando' | 'cerrada'
   * ═══════════════════════════════════════════════════════════════════════ */
  var _vacantes = [
    { id: 'VAC-2024-081', cargo: 'Analista de Planeamiento Industrial',  tipo: 'empleo',   carreras: ['industrial'],        modalidad: 'presencial', requisitos: '3 años de experiencia en planeamiento de operaciones, manejo de ERP SAP PP/MM.', enlace: 'empleos@acerosac.com',         fechaLimite: '2025-06-30', publicacion: '12 Oct, 2024', postulantes: 24, estado: 'activa'   },
    { id: 'VAC-2024-079', cargo: 'Practicante de Sistemas SAP',           tipo: 'practica', carreras: ['sistemas'],          modalidad: 'presencial', requisitos: 'Estudiante de 8vo ciclo en adelante, conocimiento básico de SAP y bases de datos.',     enlace: 'practicas@acerosac.com',       fechaLimite: '2025-06-28', publicacion: '05 Oct, 2024', postulantes: 18, estado: 'activa'   },
    { id: 'VAC-2024-075', cargo: 'Supervisor de Control de Calidad',      tipo: 'empleo',   carreras: ['industrial'],        modalidad: 'presencial', requisitos: 'Titulado, experiencia en ISO 9001, manejo de herramientas estadísticas.',             enlace: 'calidad@acerosac.com',         fechaLimite: '2025-06-10', publicacion: '28 Set, 2024', postulantes: 5,  estado: 'cerrando' },
    { id: 'VAC-2024-068', cargo: 'Data Analyst Junior',                   tipo: 'practica', carreras: ['software', 'ia'],    modalidad: 'remoto',     requisitos: 'Python/SQL, conocimientos de visualización con Power BI o Tableau.',                  enlace: 'https://jobs.acerosac.com/da', fechaLimite: '2025-05-01', publicacion: '10 Set, 2024', postulantes: 12, estado: 'cerrada'  },
  ];

  /* ═══════════════════════════════════════════════════════════════════════
   * MODELO: EventoPropuesto
   * ───────────────────────────────────────────────────────────────────────
   * id            string   — generado automáticamente (EVT-<timestamp>)
   * empresa       string   — nombre de la empresa (tomado de la sesión)
   * email         string   — correo de contacto del evento
   * titulo        string
   * tipo          string   — 'charla'|'taller'|'webinar'|'feria'|'conferencia'|'visita'
   * modalidad     string   — 'presencial' | 'virtual' | 'hibrido'
   * lugar         string   — dirección o plataforma
   * aforo         number
   * fechaInicio   string   — YYYY-MM-DD
   * fechaFin      string   — YYYY-MM-DD
   * descripcion   string
   * publico       string[] — subconjunto de ['estudiantes','egresados','docentes']
   * flyerDataUrl  string|null — base64 dataURL del archivo subido
   * flyerName     string|null — nombre original del archivo
   * estado        string   — 'pendiente' | 'aprobado' | 'rechazado'
   * fechaPropuesta string  — fecha formateada (generada al crear)
   * ═══════════════════════════════════════════════════════════════════════ */
  var _eventos = [
    { id: 'EVT-001', empresa: 'Komatsu',   email: 'rrhh@komatsu.com.pe',   titulo: 'Workshop de IA para mantenimiento predictivo',  tipo: 'taller',  modalidad: 'hibrido',    lugar: 'Lab. Cómputo 3 + streaming',   aforo: 60,  fechaInicio: '2025-07-03', fechaFin: '2025-07-03', descripcion: 'Casos reales de machine learning aplicado a flotas de equipos pesados en minería.', publico: ['estudiantes', 'egresados'], flyerDataUrl: null, flyerName: null, estado: 'pendiente', fechaPropuesta: '28 May, 2025' },
    { id: 'EVT-002', empresa: 'Interbank', email: 'eventos@interbank.pe',   titulo: 'Fintech & Sistemas de Pago Digitales',          tipo: 'webinar', modalidad: 'virtual',    lugar: 'Zoom (enlace al registrarte)',  aforo: 200, fechaInicio: '2025-06-25', fechaFin: '2025-06-25', descripcion: 'Arquitectura de sistemas financieros modernos y oportunidades en el sector bancario digital.', publico: ['estudiantes'], flyerDataUrl: null, flyerName: null, estado: 'pendiente', fechaPropuesta: '25 May, 2025' },
    { id: 'EVT-003', empresa: 'Alicorp',   email: 'eventos@alicorp.com.pe', titulo: 'Lean Six Sigma en la industria alimentaria',    tipo: 'charla',  modalidad: 'presencial', lugar: 'Auditorio FIIS, Pab. H',        aforo: 120, fechaInicio: '2025-06-18', fechaFin: '2025-06-18', descripcion: 'Aplicación de metodologías de mejora continua en líneas de producción de alto volumen.', publico: ['estudiantes', 'docentes'], flyerDataUrl: null, flyerName: null, estado: 'aprobado',  fechaPropuesta: '20 May, 2025' },
  ];

  /* ═══════════════════════════════════════════════════════════════════════
   * CONFIGURACIÓN (editable por admin)
   * maxDias  number — duración máxima de un evento en días (default 31)
   * ═══════════════════════════════════════════════════════════════════════ */
  var _config = { maxDias: 31 };

  return {

    // ── Vacantes ──────────────────────────────────────────────────────────
    getVacantes: function () { return _vacantes.slice(); },

    addVacante: function (data) {
      var now = new Date();
      _vacantes.unshift({
        id:          'VAC-' + now.getTime(),
        cargo:       data.cargo       || '',
        tipo:        data.tipo        || 'practica',
        carreras:    data.carreras    || [],
        modalidad:   data.modalidad   || 'presencial',
        requisitos:  data.requisitos  || '',
        enlace:      data.enlace      || '',
        fechaLimite: data.fechaLimite || '',
        publicacion: now.toLocaleDateString('es-PE', { day: '2-digit', month: 'short', year: 'numeric' }),
        postulantes: 0,
        estado:      'pendiente',
      });
    },

    // ── Eventos ───────────────────────────────────────────────────────────
    getEventos: function () { return _eventos.slice(); },

    addEvento: function (data) {
      var now = new Date();
      _eventos.unshift({
        id:            'EVT-' + now.getTime(),
        empresa:       data.empresa      || '',
        email:         data.email        || '',
        titulo:        data.titulo       || '',
        tipo:          data.tipo         || '',
        modalidad:     data.modalidad    || '',
        lugar:         data.lugar        || '',
        aforo:         Number(data.aforo) || 0,
        fechaInicio:   data.fechaInicio  || '',
        fechaFin:      data.fechaFin     || '',
        descripcion:   data.descripcion  || '',
        publico:       data.publico      || [],
        flyerDataUrl:  data.flyerDataUrl || null,
        flyerName:     data.flyerName    || null,
        estado:        'pendiente',
        fechaPropuesta: now.toLocaleDateString('es-PE', { day: '2-digit', month: 'short', year: 'numeric' }),
      });
    },

    updateEventoEstado: function (id, estado) {
      for (var i = 0; i < _eventos.length; i++) {
        if (_eventos[i].id === id) { _eventos[i].estado = estado; break; }
      }
    },

    // ── Config ────────────────────────────────────────────────────────────
    getConfig:  function ()    { return Object.assign({}, _config); },
    setConfig:  function (cfg) { Object.assign(_config, cfg); },
  };

}());
