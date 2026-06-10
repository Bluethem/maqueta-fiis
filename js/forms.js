'use strict';

window.FormBuilder = (function () {
  var FIELD_CLASSES = 'w-full border border-border-subtle rounded-lg px-4 py-2.5 text-sm bg-white focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all';
  var LABEL_CLASSES = 'block text-sm font-semibold text-on-surface mb-1';
  var SELECT_EMPTY = '<option value="">Seleccionar...</option>';

  function tpl(html) { return html; }

  function renderField(field) {
    var label = field.label ? '<label class="' + LABEL_CLASSES + '" for="' + field.id + '">' + field.label + '</label>' : '';
    var requiredAttr = field.required ? ' required' : '';
    var html = '';

    if (field.type === 'select') {
      var options = SELECT_EMPTY + (field.options || []).map(function (o) {
        var sel = o === field.value ? ' selected' : '';
        return '<option value="' + o + '"' + sel + '>' + o + '</option>';
      }).join('');
      html = '<select id="' + field.id + '"' + requiredAttr + ' class="' + FIELD_CLASSES + '">' + options + '</select>';
    } else if (field.type === 'textarea') {
      html = '<textarea id="' + field.id + '" rows="' + (field.rows || 4) + '" placeholder="' + (field.placeholder || '') + '"' + requiredAttr + ' class="' + FIELD_CLASSES + '">' + (field.value || '') + '</textarea>';
    } else if (field.type === 'file') {
      html = '<div><input type="file" id="' + field.id + '" accept="' + (field.accept || '.pdf,.jpg,.jpeg,.png,.doc,.docx') + '" class="w-full text-sm text-text-secondary file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:text-sm file:font-semibold file:bg-primary/10 file:text-primary hover:file:bg-primary/20 transition-all cursor-pointer" /><p id="' + field.id + '-name" class="text-xs text-text-secondary mt-1 hidden"></p></div>';
    } else if (field.type === 'email') {
      html = '<input type="email" id="' + field.id + '" placeholder="' + (field.placeholder || '') + '"' + requiredAttr + ' class="' + FIELD_CLASSES + '" value="' + (field.value || '') + '" />';
    } else {
      html = '<input type="' + (field.type || 'text') + '" id="' + field.id + '" placeholder="' + (field.placeholder || '') + '"' + requiredAttr + ' class="' + FIELD_CLASSES + '" value="' + (field.value || '') + '" />';
    }

    return '<div class="' + (field.wrapperClass || '') + '">' + label + html + '</div>';
  }

  function renderForm(opts) {
    var fieldsHtml = '';

    fieldsHtml += renderField({ id: 'fb-nombre', label: 'Nombre completo', type: 'text', placeholder: 'Ingresa tu nombre', required: true });
    fieldsHtml += renderField({ id: 'fb-correo', label: 'Correo electrónico', type: 'email', placeholder: 'correo@ejemplo.com', required: true });

    if (opts.showPerfil !== false) {
      fieldsHtml += renderField({
        id: 'fb-perfil',
        label: 'Perfil',
        type: 'select',
        required: true,
        options: ['Estudiante', 'Docente', 'Egresado', 'Empresa', 'Visitante']
      });
    }

    fieldsHtml += renderField({
      id: 'fb-motivo',
      label: 'Motivo',
      type: 'select',
      required: true,
      options: opts.motivoOptions
    });

    var areaOptions = opts.areaOptions && opts.areaOptions.length
      ? (function () {
          var hasCustom = opts.areaDestino && opts.areaOptions.indexOf(opts.areaDestino) === -1;
          var all = hasCustom ? [opts.areaDestino].concat(opts.areaOptions) : opts.areaOptions;
          var idx = all.indexOf(opts.areaDestino);
          if (idx > 0) { all.splice(idx, 1); all.unshift(opts.areaDestino); }
          return all;
        })()
      : [opts.areaDestino || 'Secretaría Administrativa'];

    var hasOther = areaOptions.indexOf('Otro') === -1;
    if (hasOther) areaOptions.push('Otro');

    fieldsHtml += renderField({
      id: 'fb-area',
      label: 'Área destino',
      type: 'select',
      required: true,
      options: areaOptions,
      value: opts.areaDestino
    });

    fieldsHtml += renderField({ id: 'fb-mensaje', label: 'Mensaje', type: 'textarea', placeholder: 'Escribe tu mensaje o consulta...', required: true });

    if (opts.showArchivo !== false) {
      fieldsHtml += renderField({ id: 'fb-archivo', label: 'Archivo (opcional)', type: 'file' });
    }

    (opts.extraFields || []).forEach(function (f) {
      fieldsHtml += renderField(f);
    });

    return tpl('\
      <div class="bg-white rounded-xl border border-border-subtle p-6">\
        <h3 class="text-base font-bold text-on-surface mb-2 flex items-center gap-2">\
          <span class="material-symbols-outlined text-primary">send</span>\
          ' + opts.title + '\
        </h3>\
        ' + (opts.description ? '<p class="text-xs text-text-secondary mb-4">' + opts.description + '</p>' : '') + '\
        <div id="fb-success" class="hidden bg-success/10 border border-success/30 rounded-lg p-3 text-sm text-success mb-3">\
          <span class="material-symbols-outlined text-sm align-middle mr-1">check_circle</span>\
          ' + opts.successText + '\
        </div>\
        <form class="space-y-4" id="fb-form">\
          ' + fieldsHtml + '\
          <p id="fb-error" class="hidden text-danger text-xs">Completa todos los campos con un correo válido.</p>\
          <button type="submit" class="px-6 py-2.5 bg-primary text-on-primary text-sm font-semibold rounded-lg hover:bg-primary-container transition-all flex items-center gap-2">\
            <span class="material-symbols-outlined text-sm">send</span>\
            ' + opts.submitText + '\
          </button>\
        </form>\
      </div>\
    ');
  }

  function validate(form) {
    var email = form.querySelector('#fb-correo');
    var file = form.querySelector('#fb-archivo');
    var valid = true;

    if (email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.value.trim())) {
      valid = false;
    }

    if (file && file.files && file.files.length > 0) {
      if (file.files[0].size > 5 * 1024 * 1024) {
        valid = false;
      }
    }

    return valid;
  }

  function bindForm(container, opts) {
    var form = container.querySelector('#fb-form');
    var error = container.querySelector('#fb-error');
    var success = container.querySelector('#fb-success');

    if (!form) return;

    var session = null;
    try { session = Auth.getSession(); } catch (e) {}

    if (session) {
      var n = form.querySelector('#fb-nombre');
      var c = form.querySelector('#fb-correo');
      if (n) n.value = session.name;
      if (c) c.value = session.email;
    }

    form.addEventListener('submit', function (e) {
      e.preventDefault();
      error.classList.add('hidden');
      success.classList.add('hidden');

      if (!form.checkValidity() || !validate(form)) {
        error.classList.remove('hidden');
        return;
      }

      var fd = new FormData(form);
      var data = {
        id: 'SOL-' + Date.now(),
        nombre: (form.querySelector('#fb-nombre') || {}).value || '',
        correo: (form.querySelector('#fb-correo') || {}).value || '',
        perfil: (form.querySelector('#fb-perfil') || {}).value || '',
        motivo: (form.querySelector('#fb-motivo') || {}).value || '',
        area: (form.querySelector('#fb-area') || {}).value || '',
        mensaje: (form.querySelector('#fb-mensaje') || {}).value || '',
        archivoNombre: '',
        estado: 'pendiente',
        createdAt: new Date().toLocaleDateString('es-PE', { day: '2-digit', month: 'short', year: 'numeric', hour: '2-digit', minute: '2-digit' })
      };

      var fileInput = form.querySelector('#fb-archivo');
      if (fileInput && fileInput.files && fileInput.files[0]) {
        data.archivoNombre = fileInput.files[0].name;
      }

      (opts.extraFields || []).forEach(function (f) {
        var el = form.querySelector('#' + f.id);
        if (el) data[f.id] = el.value;
      });

      if (opts.persist !== false) {
        try { Store.addSolicitud(data); } catch (e) {}
      }

      success.classList.remove('hidden');
      form.reset();

      if (opts.onSuccess) opts.onSuccess(data);

      setTimeout(function () {
        success.classList.add('hidden');
      }, 5000);
    });
  }

  function create(containerId, config) {
    var container = document.getElementById(containerId);
    if (!container) return;

    var opts = {
      title: 'Formulario de contacto',
      description: '',
      submitText: 'Enviar mensaje',
      successText: 'Mensaje enviado correctamente.',
      areaDestino: '',
      areaOptions: [],
      showPerfil: true,
      showArchivo: true,
      motivoOptions: ['Consulta', 'Sugerencia', 'Reporte', 'Solicitud', 'Otro'],
      extraFields: [],
      onSuccess: null,
      persist: true,
    };

    if (config) {
      for (var k in config) {
        if (config.hasOwnProperty(k)) opts[k] = config[k];
      }
    }

    container.innerHTML = renderForm(opts);
    bindForm(container, opts);
  }

  function renderSolicitudesTab(containerId, options) {
    var container = document.getElementById(containerId);
    if (!container) return;

    var opts = {
      mode: 'user',
      title: 'Mis Solicitudes',
      areaFilter: null,
    };
    if (options) {
      for (var k in options) { if (options.hasOwnProperty(k)) opts[k] = options[k]; }
    }

    var session = null;
    try { session = Auth.getSession(); } catch (e) {}
    if (!session) { container.innerHTML = '<p class="text-sm text-text-secondary py-8 text-center">Inicia sesión para ver tus solicitudes.</p>'; return; }

    var solicitudes = [];
    try { solicitudes = Store.getSolicitudes(); } catch (e) {}

    var list = solicitudes.filter(function (s) {
      if (opts.mode === 'user') return s.correo === session.email;
      if (opts.areaFilter) return s.area === opts.areaFilter;
      return true;
    });

    function badge(estado) {
      var cls = 'bg-surface-container-low text-text-secondary';
      if (estado === 'pendiente') cls = 'bg-warning/10 text-warning';
      else if (estado === 'en revisi\u00f3n') cls = 'bg-primary/10 text-primary';
      else if (estado === 'respondido') cls = 'bg-success/10 text-success';
      return '<span class="px-2 py-1 rounded-full text-xs font-semibold ' + cls + '">' + estado.charAt(0).toUpperCase() + estado.slice(1) + '</span>';
    }

    function initials(name) {
      return name.split(' ').map(function (w) { return w.charAt(0); }).filter(function (c) { return c; }).join('').slice(0, 2).toUpperCase();
    }

    var filterKey = 'todas';
    var searchQuery = '';

    function filtered() {
      var f = list;
      if (filterKey !== 'todas') f = f.filter(function (s) { return s.estado === filterKey; });
      if (searchQuery) {
        var q = searchQuery.toLowerCase();
        f = f.filter(function (s) {
          return (s.motivo || '').toLowerCase().indexOf(q) !== -1
            || (s.area || '').toLowerCase().indexOf(q) !== -1
            || (s.nombre || '').toLowerCase().indexOf(q) !== -1
            || (s.correo || '').toLowerCase().indexOf(q) !== -1;
        });
      }
      return f;
    }

    function renderTable() {
      var tbody = container.querySelector('#sct-tbody');
      if (!tbody) return;
      var data = filtered();
      var countEl = container.querySelector('#sct-count');
      if (countEl) countEl.textContent = data.length + ' solicitudes';

      if (data.length === 0) {
        tbody.innerHTML = '<tr><td colspan="' + (opts.mode === 'bandeja' ? 8 : 5) + '" class="px-5 py-12 text-center text-text-secondary text-sm"><span class="material-symbols-outlined text-3xl block mb-2 text-border-subtle">mail</span>No hay solicitudes registradas.</td></tr>';
        return;
      }

      tbody.innerHTML = data.map(function (s) {
        if (opts.mode === 'bandeja') {
          return '<tr class="hover:bg-surface-container-low transition-colors">' +
            '<td class="px-5 py-4 text-sm text-text-secondary whitespace-nowrap">' + s.createdAt + '</td>' +
            '<td class="px-5 py-4"><div class="flex items-center gap-2"><div class="w-7 h-7 rounded-full bg-primary/10 text-primary flex items-center justify-center text-xs font-bold">' + initials(s.nombre) + '</div><span class="text-sm font-medium text-on-surface">' + s.nombre + '</span></div></td>' +
            '<td class="px-5 py-4 text-sm text-on-surface-variant">' + s.perfil + '</td>' +
            '<td class="px-5 py-4 text-sm text-on-surface-variant">' + s.motivo + '</td>' +
            '<td class="px-5 py-4 text-sm text-on-surface-variant">' + s.area + '</td>' +
            '<td class="px-5 py-4">' + badge(s.estado) + '</td>' +
            '<td class="px-5 py-4 text-right">' +
              '<button onclick="window.__sctVer(\'' + s.id + '\')" class="p-1.5 text-primary hover:bg-primary/10 rounded-lg transition-all" title="Ver detalle"><span class="material-symbols-outlined text-sm">visibility</span></button>' +
              (s.estado === 'pendiente'
                ? '<button onclick="window.__sctResp(\'' + s.id + '\')" class="p-1.5 text-success hover:bg-success/10 rounded-lg transition-all" title="Marcar respondido"><span class="material-symbols-outlined text-sm">check_circle</span></button>'
                : '') +
            '</td></tr>';
        }
        return '<tr class="hover:bg-surface-container-low transition-colors">' +
          '<td class="px-5 py-4 text-sm text-text-secondary whitespace-nowrap">' + s.createdAt + '</td>' +
          '<td class="px-5 py-4 text-sm text-on-surface-variant">' + s.area + '</td>' +
          '<td class="px-5 py-4 text-sm text-on-surface-variant">' + s.motivo + '</td>' +
          '<td class="px-5 py-4">' + badge(s.estado) + '</td>' +
          '<td class="px-5 py-4 text-right"><button onclick="window.__sctVer(\'' + s.id + '\')" class="p-1.5 text-primary hover:bg-primary/10 rounded-lg transition-all" title="Ver detalle"><span class="material-symbols-outlined text-sm">visibility</span></button></td></tr>';
      }).join('');
    }

    function showDetail(id) {
      var data = list.filter(function (s) { return s.id === id; });
      if (!data.length) return;
      var s = data[0];
      var modal = document.getElementById('sct-modal');
      if (!modal) return;
      modal.querySelector('#sct-modal-body').innerHTML =
        '<div class="grid grid-cols-2 gap-4"><div><p class="text-xs text-text-secondary font-semibold uppercase">Nombre</p><p class="text-on-surface">' + s.nombre + '</p></div>' +
        '<div><p class="text-xs text-text-secondary font-semibold uppercase">Correo</p><p class="text-on-surface"><a href="mailto:' + s.correo + '" class="text-primary hover:underline">' + s.correo + '</a></p></div>' +
        '<div><p class="text-xs text-text-secondary font-semibold uppercase">Perfil</p><p class="text-on-surface">' + s.perfil + '</p></div>' +
        '<div><p class="text-xs text-text-secondary font-semibold uppercase">Motivo</p><p class="text-on-surface">' + s.motivo + '</p></div>' +
        '<div class="col-span-2"><p class="text-xs text-text-secondary font-semibold uppercase">\u00c1rea destino</p><p class="text-on-surface">' + s.area + '</p></div>' +
        '<div class="col-span-2"><p class="text-xs text-text-secondary font-semibold uppercase">Mensaje</p><p class="text-on-surface bg-surface-container-low rounded-lg p-3 mt-1 leading-relaxed">' + s.mensaje + '</p></div></div>' +
        (s.archivoNombre ? '<div class="mt-3"><p class="text-xs text-text-secondary font-semibold uppercase">Archivo adjunto</p><p class="text-on-surface flex items-center gap-1 mt-1"><span class="material-symbols-outlined text-sm">attach_file</span>' + s.archivoNombre + '</p></div>' : '') +
        '<div class="border-t border-border-subtle pt-3 mt-4 flex items-center justify-between"><div><p class="text-xs text-text-secondary font-semibold uppercase">Estado</p>' + badge(s.estado) + '</div><p class="text-xs text-text-secondary">' + s.createdAt + '</p></div>';
      modal.classList.remove('hidden');
    }

    function respond(id) {
      try { Store.updateSolicitudEstado(id, 'respondido'); } catch (e) {}
      renderTable();
    }

    window.__sctVer = showDetail;
    window.__sctResp = respond;

    container.innerHTML =
      '<div class="space-y-4">' +
        '<div class="flex flex-col sm:flex-row sm:items-center justify-between gap-3">' +
          '<h3 class="text-lg font-bold text-on-surface flex items-center gap-2"><span class="material-symbols-outlined text-primary">' + (opts.mode === 'bandeja' ? 'inbox' : 'mail') + '</span>' + opts.title + '</h3>' +
          '<span class="text-xs text-text-secondary bg-surface-container-low px-3 py-1 rounded-full" id="sct-count">0 solicitudes</span>' +
        '</div>' +
        '<div class="flex flex-col sm:flex-row gap-3">' +
          '<div class="relative flex-1 max-w-xs">' +
            '<span class="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-text-secondary text-sm pointer-events-none">search</span>' +
            '<input type="text" id="sct-search" placeholder="Buscar por motivo, \u00e1rea, nombre..." class="w-full pl-9 pr-3 py-2 text-sm border border-border-subtle rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all" />' +
          '</div>' +
          '<div class="flex gap-2 flex-wrap" id="sct-filters">' +
            '<button class="px-4 py-1.5 rounded-full text-xs font-semibold bg-primary text-on-primary transition-all shadow-sm" data-filter="todas">Todas</button>' +
            '<button class="px-4 py-1.5 rounded-full text-xs font-semibold bg-white border border-border-subtle text-text-secondary hover:bg-primary/5 transition-all" data-filter="pendiente">Pendientes</button>' +
            '<button class="px-4 py-1.5 rounded-full text-xs font-semibold bg-white border border-border-subtle text-text-secondary hover:bg-primary/5 transition-all" data-filter="en revisi\u00f3n">En revisi\u00f3n</button>' +
            '<button class="px-4 py-1.5 rounded-full text-xs font-semibold bg-white border border-border-subtle text-text-secondary hover:bg-primary/5 transition-all" data-filter="respondido">Respondidas</button>' +
          '</div>' +
        '</div>' +
        '<div class="bg-white rounded-xl border border-border-subtle overflow-hidden">' +
          '<div class="overflow-x-auto">' +
            '<table class="w-full text-left">' +
              '<thead class="bg-surface-bg border-b border-border-subtle">' +
                '<tr>' +
                  '<th class="px-5 py-3 text-xs font-semibold text-text-secondary uppercase tracking-wider">Fecha</th>' +
                  (opts.mode === 'bandeja' ? '<th class="px-5 py-3 text-xs font-semibold text-text-secondary uppercase tracking-wider">Solicitante</th><th class="px-5 py-3 text-xs font-semibold text-text-secondary uppercase tracking-wider">Perfil</th>' : '') +
                  '<th class="px-5 py-3 text-xs font-semibold text-text-secondary uppercase tracking-wider">Motivo</th>' +
                  '<th class="px-5 py-3 text-xs font-semibold text-text-secondary uppercase tracking-wider">\u00c1rea</th>' +
                  '<th class="px-5 py-3 text-xs font-semibold text-text-secondary uppercase tracking-wider">Estado</th>' +
                  '<th class="px-5 py-3 text-xs font-semibold text-text-secondary uppercase tracking-wider text-right">Acci\u00f3n</th>' +
                '</tr>' +
              '</thead>' +
              '<tbody class="divide-y divide-border-subtle" id="sct-tbody">' +
                '<tr><td colspan="' + (opts.mode === 'bandeja' ? 8 : 5) + '" class="px-5 py-12 text-center text-text-secondary text-sm"><span class="material-symbols-outlined text-3xl block mb-2 text-border-subtle">mail</span>Cargando...</td></tr>' +
              '</tbody>' +
            '</table>' +
          '</div>' +
        '</div>' +
      '</div>' +
      '<div id="sct-modal" class="fixed inset-0 z-50 hidden">' +
        '<div class="absolute inset-0 bg-black/30" onclick="document.getElementById(\'sct-modal\').classList.add(\'hidden\')"></div>' +
        '<div class="absolute inset-0 flex items-center justify-center p-4">' +
          '<div class="bg-white rounded-xl border border-border-subtle shadow-xl max-w-lg w-full max-h-[80vh] overflow-y-auto">' +
            '<div class="p-6 border-b border-border-subtle flex items-center justify-between">' +
              '<h3 class="font-bold text-on-surface">Detalle de Solicitud</h3>' +
              '<button onclick="document.getElementById(\'sct-modal\').classList.add(\'hidden\')" class="p-1 hover:bg-surface-container-low rounded-lg transition-all"><span class="material-symbols-outlined text-text-secondary">close</span></button>' +
            '</div>' +
            '<div class="p-6 space-y-4 text-sm" id="sct-modal-body"></div>' +
            '<div class="p-6 border-t border-border-subtle flex justify-end gap-3" id="sct-modal-actions"></div>' +
          '</div>' +
        '</div>' +
      '</div>';

    var searchEl = container.querySelector('#sct-search');
    if (searchEl) {
      searchEl.addEventListener('input', function () {
        searchQuery = this.value;
        renderTable();
      });
    }

    container.querySelectorAll('#sct-filters button').forEach(function (btn) {
      btn.addEventListener('click', function () {
        container.querySelectorAll('#sct-filters button').forEach(function (b) {
          b.className = 'px-4 py-1.5 rounded-full text-xs font-semibold bg-white border border-border-subtle text-text-secondary hover:bg-primary/5 transition-all';
        });
        btn.className = 'px-4 py-1.5 rounded-full text-xs font-semibold bg-primary text-on-primary transition-all shadow-sm';
        filterKey = btn.getAttribute('data-filter');
        renderTable();
      });
    });

    renderTable();
  }

  return { create: create, renderSolicitudesTab: renderSolicitudesTab };
})();
