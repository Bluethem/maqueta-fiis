'use strict';

window.FAQ = (function () {
  var DATA = [
    {
      module: 'Facultad',
      icon: 'account_balance',
      questions: [
        { q: '¿Cómo se compone el gobierno de la FIIS?', a: 'La FIIS está liderada por el Decano, acompañado del Vicedecano Académico, Vicedecano de Investigación, Directores de Escuela y Jefes de Departamento. El órgano máximo es el Consejo de Facultad.', link: '/autoridades', label: 'Ver autoridades' },
        { q: '¿Qué es la acreditación ABET?', a: 'ABET es una acreditación internacional que certifica la calidad de los programas de ingeniería. La FIIS cuenta con programas acreditados que garantizan estándares globales de formación.', link: '/acreditacion', label: 'Ver acreditación' },
        { q: '¿Dónde encuentro el organigrama de la facultad?', a: 'El organigrama completo está disponible en la sección de Organigrama, donde se detalla toda la estructura orgánica de la facultad.', link: '/organigrama', label: 'Ver organigrama' },
        { q: '¿Cómo me entero de las noticias de la FIIS?', a: 'Todas las noticias, comunicados y avisos oficiales se publican en la sección de Noticias FIIS.', link: '/noticias', label: 'Ver noticias' },
      ]
    },
    {
      module: 'Académico',
      icon: 'menu_book',
      questions: [
        { q: '¿Cuántas escuelas profesionales tiene la FIIS?', a: 'La FIIS cuenta con 4 Escuelas Profesionales: Ingeniería Industrial, Ingeniería de Sistemas, Ingeniería de Software e Ingeniería en Inteligencia Artificial.', link: '/escuelas', label: 'Ver escuelas' },
        { q: '¿Cómo puedo ver la malla curricular de mi carrera?', a: 'Cada escuela profesional tiene su malla curricular publicada en su página. Puedes acceder desde la sección de Escuelas Profesionales.', link: '/escuelas/industrial', label: 'Ver malla' },
        { q: '¿Dónde encuentro los cronogramas académicos?', a: 'Los cronogramas de actividades académicas, horarios y exámenes están disponibles en la sección de Cronogramas.', link: '/cronogramas', label: 'Ver cronogramas' },
        { q: '¿Qué departamentos académicos existen?', a: 'Los departamentos son: Ciencias Básicas, Gestión de la Producción, Humanidades, Sistemas y Telemática, y Tecnología de la Producción.', link: '/departamentos', label: 'Ver departamentos' },
      ]
    },
    {
      module: 'Posgrado',
      icon: 'school',
      questions: [
        { q: '¿Qué programas de posgrado ofrece la FIIS?', a: 'La FIIS ofrece 6 maestrías, 2 doctorados y diplomados en diversas especialidades de ingeniería y gestión.', link: '/posgrado', label: 'Ver posgrado' },
        { q: '¿Cuáles son los requisitos de admisión a una maestría?', a: 'Los requisitos incluyen grado de bachiller, aprobar el proceso de admisión y presentar la documentación solicitada por cada programa.', link: '/posgrado', label: 'Ver requisitos' },
        { q: '¿Los programas de posgrado tienen modalidad virtual?', a: 'Algunos programas ofrecen modalidad virtual o semipresencial. La información específica se encuentra en la ficha de cada programa.', link: '/posgrado', label: 'Ver programas' },
      ]
    },
    {
      module: 'Servicios',
      icon: 'support',
      questions: [
        { q: '¿Cómo tramito mi carné de biblioteca?', a: 'Debes acercarte a la Biblioteca Central con tu ficha de matrícula vigente y realizar el pago de S/ 10.00 soles. El trámite se realiza por única vez.', link: '/centro-informacion', label: 'Ir a Centro de Información' },
        { q: '¿Qué trámites puedo realizar en Mesa de Partes?', a: 'Puedes presentar FUT, solicitudes de convalidación, matrícula extraordinaria, expedientes de prácticas, recursos de apelación, entre otros.', link: '/servicios', label: 'Ver servicios' },
        { q: '¿Cómo accedo a la Tutoría FIIS?', a: 'La Tutoría FIIS atiende de lunes a viernes de 9:00 a 16:00. Puedes agendar una cita desde la página de Tutoría.', link: '/tutoria', label: 'Ir a Tutoría' },
        { q: '¿Cómo contacto con la UECPS para prácticas?', a: 'La UECPS gestiona las cartas de presentación y convenios de prácticas. Atiende de lunes a viernes de 9:00 a 18:00.', link: '/uecps', label: 'Ir a UECPS' },
      ]
    },
    {
      module: 'Comunidad',
      icon: 'groups',
      questions: [
        { q: '¿Cómo registro una agrupación estudiantil?', a: 'Debes presentar una solicitud con 10 miembros activos, un docente asesor y un estatuto. El trámite se realiza a través de Bienestar Estudiantil.', link: '/comunidad', label: 'Ir a Comunidad' },
        { q: '¿Cuáles son las agrupaciones tecnológicas de la FIIS?', a: 'Las agrupaciones tecnológicas incluyen UNICODE (desarrollo), CIBERSEC (ciberseguridad) y Núcleo (centro cultural).', link: '/comunidad', label: 'Ver agrupaciones' },
        { q: '¿Cómo contacto con el CEIIS?', a: 'El CEIIS es el Centro de Estudiantes de la FIIS. Puedes contactarlos a través de su página en la sección Comunidad.', link: '/comunidad/ceiis', label: 'Ir a CEIIS' },
      ]
    },
    {
      module: 'Investigación',
      icon: 'science',
      questions: [
        { q: '¿Cómo accedo al Laboratorio de IA?', a: 'Debes presentar una carta de presentación dirigida al jefe del laboratorio. Luego se coordina el horario de acceso según disponibilidad.', link: '/laboratorio-ia', label: 'Ir a Lab. IA' },
        { q: '¿Qué líneas de investigación existen?', a: 'Las líneas incluyen NLP, Computer Vision, Optimización, IoT, Data Analytics, Bioinformática, Seguridad, entre otras.', link: '/instituto-investigacion', label: 'Ver líneas' },
        { q: '¿Cómo postular a una convocatoria de investigación?', a: 'Las convocatorias se publican en la página del Instituto de Investigación con las bases y anexos correspondientes.', link: '/instituto-investigacion', label: 'Ver convocatorias' },
        { q: '¿Dónde encuentro las publicaciones del IIFIIS?', a: 'Las revistas, artículos y documentos de investigación están disponibles en la sección IIFIIS.', link: '/iifiis', label: 'Ir a IIFIIS' },
      ]
    },
    {
      module: 'Egresados',
      icon: 'school',
      questions: [
        { q: '¿Cómo accedo a la bolsa de trabajo?', a: 'La bolsa de trabajo publica vacantes de prácticas y empleo para egresados. Puedes filtrar por carrera y modalidad.', link: '/egresados', label: 'Ir a Egresados' },
        { q: '¿Cómo me registro en la Red Alumni?', a: 'La Red Alumni es una plataforma externa. Puedes acceder desde la sección de Egresados para conectar con otros egresados FIIS.', link: '/egresados', label: 'Ver Red Alumni' },
        { q: '¿Qué beneficios tengo como egresado FIIS?', a: 'Acceso a la bolsa de trabajo, mentoría, capacitaciones, uso de la biblioteca y participación en eventos de la red Alumni.', link: '/egresados', label: 'Ver beneficios' },
      ]
    },
    {
      module: 'Empresas',
      icon: 'work',
      questions: [
        { q: '¿Cómo publico una vacante en el portal?', a: 'Debes registrarte como empresa aliada y luego podrás publicar vacantes desde tu panel empresarial.', link: '/empresas', label: 'Ir a Empresas' },
        { q: '¿Qué requisitos debo cumplir para ser empresa aliada?', a: 'Las empresas deben tener presencia legal en Perú y estar vinculadas a las áreas de ingeniería de la FIIS.', link: '/empresas', label: 'Ver requisitos' },
        { q: '¿Cómo propongo un evento o taller?', a: 'Desde el panel empresarial puedes proponer eventos. Estos pasan por revisión del administrador antes de publicarse.', link: '/empresas', label: 'Ver más' },
        { q: '¿Cómo firmo un convenio de prácticas con la FIIS?', a: 'Debes contactar a la UECPS para la firma del convenio. El proceso incluye revisión de requisitos y firma de la Decana.', link: '/uecps', label: 'Ir a UECPS' },
      ]
    }
  ];

  function open() {
    var overlay = document.getElementById('faq-overlay');
    if (overlay) {
      overlay.classList.remove('hidden');
      document.body.style.overflow = 'hidden';
      renderModule(DATA[0].module);
    }
  }

  function close() {
    var overlay = document.getElementById('faq-overlay');
    if (overlay) {
      overlay.classList.add('hidden');
      document.body.style.overflow = '';
    }
  }

  function renderModule(moduleName) {
    var content = document.getElementById('faq-content');
    var tabs = document.getElementById('faq-tabs');
    if (!content) return;

    tabs.querySelectorAll('.faq-tab').forEach(function(t) {
      t.className = 'faq-tab px-4 py-2 text-sm font-medium text-text-secondary bg-surface-container-low hover:bg-surface-container hover:text-primary rounded-lg transition-all whitespace-nowrap';
      if (t.getAttribute('data-module') === moduleName) {
        t.className = 'faq-tab px-4 py-2 text-sm font-semibold bg-primary text-white rounded-lg transition-all shadow-sm';
      }
    });

    var module = DATA.find(function(m) { return m.module === moduleName; });
    if (!module) return;

    content.innerHTML = '<div class="p-1 space-y-2">' + module.questions.map(function(item, idx) {
      return '<div class="border border-border-subtle rounded-xl overflow-hidden">' +
        '<button class="faq-item-trigger w-full flex items-center justify-between p-4 text-left text-sm font-bold text-on-surface hover:bg-primary/5 transition-all" data-idx="' + idx + '">' +
          '<span>' + item.q + '</span>' +
          '<span class="material-symbols-outlined faq-item-icon transition-transform text-text-secondary">expand_more</span>' +
        '</button>' +
        '<div class="faq-item-content max-h-0 overflow-hidden transition-all duration-300">' +
          '<div class="p-4 pt-0 border-t border-border-subtle text-sm text-text-secondary leading-relaxed bg-surface-container-low space-y-3">' +
            '<p class="pt-3">' + item.a + '</p>' +
            '<a href="#' + item.link + '" class="inline-flex items-center gap-1 text-sm text-primary font-semibold hover:underline" onclick="FAQ.close()">' + item.label + ' <span class="material-symbols-outlined text-sm">arrow_forward</span></a>' +
          '</div>' +
        '</div>' +
      '</div>';
    }).join('') + '</div>';

    content.querySelectorAll('.faq-item-trigger').forEach(function(btn) {
      btn.addEventListener('click', function() {
        var idx = this.getAttribute('data-idx');
        var panel = this.nextElementSibling;
        var icon = this.querySelector('.faq-item-icon');
        var isOpen = panel.style.maxHeight && panel.style.maxHeight !== '0px';

        content.querySelectorAll('.faq-item-content').forEach(function(p) { p.style.maxHeight = '0px'; });
        content.querySelectorAll('.faq-item-icon').forEach(function(ic) { ic.style.transform = 'rotate(0deg)'; });

        if (!isOpen) {
          panel.style.maxHeight = panel.scrollHeight + 'px';
          if (icon) icon.style.transform = 'rotate(180deg)';
        }
      });
    });
  }

  function init() {
    var btn = document.getElementById('btn-faq');
    var overlay = document.getElementById('faq-overlay');
    var closeBtn = document.getElementById('faq-close');
    var backdrop = document.getElementById('faq-backdrop');

    if (btn) btn.addEventListener('click', open);
    if (closeBtn) closeBtn.addEventListener('click', close);
    if (backdrop) backdrop.addEventListener('click', close);

    var tabs = document.getElementById('faq-tabs');
    if (tabs) {
      tabs.querySelectorAll('.faq-tab').forEach(function(tab) {
        tab.addEventListener('click', function() {
          renderModule(this.getAttribute('data-module'));
        });
      });
    }

    document.addEventListener('keydown', function(e) {
      if (e.key === 'Escape') close();
    });
  }

  return { init: init, open: open, close: close };
})();
