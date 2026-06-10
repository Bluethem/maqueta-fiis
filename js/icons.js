/**
 * icons.js — Reemplazo global de Material Symbols → Lucide SVG inline
 * Se aplica en toda la app (landing, dashboards, páginas públicas, etc.)
 */
(function () {
  // ── Mapa completo: nombre Material Symbol → SVG path(s) de Lucide ──────────
  const ICON_MAP = {
    // Navegación y acciones generales
    arrow_forward:      '<path d="M5 12h14"/><path d="m12 5 7 7-7 7"/>',
    arrow_back:         '<path d="M19 12H5"/><path d="m12 19-7-7 7-7"/>',
    arrow_outward:      '<path d="M7 7h10v10"/><path d="M7 17 17 7"/>',
    chevron_left:       '<path d="m15 18-6-6 6-6"/>',
    chevron_right:      '<path d="m9 18 6-6-6-6"/>',
    expand_more:        '<path d="m6 9 6 6 6-6"/>',
    close:              '<path d="M18 6 6 18"/><path d="m6 6 12 12"/>',
    menu:               '<line x1="4" x2="20" y1="12" y2="12"/><line x1="4" x2="20" y1="6" y2="6"/><line x1="4" x2="20" y1="18" y2="18"/>',
    add:                '<path d="M5 12h14"/><path d="M12 5v14"/>',
    search:             '<circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/>',
    search_off:         '<path d="m13.5 8.5-5 5"/><path d="M8.5 8.5l5 5"/><circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/>',
    login:              '<path d="M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4"/><polyline points="10 17 15 12 10 7"/><line x1="15" x2="3" y1="12" y2="12"/>',
    logout:             '<path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"/><polyline points="16 17 21 12 16 7"/><line x1="21" x2="9" y1="12" y2="12"/>',
    open_in_new:        '<path d="M15 3h6v6"/><path d="M10 14 21 3"/><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/>',
    settings:           '<path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z"/><circle cx="12" cy="12" r="3"/>',
    settings_applications: '<path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z"/><circle cx="12" cy="12" r="3"/>',
    edit:               '<path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"/><path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"/>',
    edit_note:          '<path d="M12 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"/><path d="M18.375 2.625a2.121 2.121 0 1 1 3 3L12 15l-4 1 1-4z"/>',
    visibility:         '<path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z"/><circle cx="12" cy="12" r="3"/>',
    download:           '<path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" x2="12" y1="15" y2="3"/>',
    download_done:      '<polyline points="20 6 9 17 4 12"/><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>',
    upload:             '<path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="17 8 12 3 7 8"/><line x1="12" x2="12" y1="3" y2="15"/>',
    upload_file:        '<path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"/><polyline points="14 2 14 8 20 8"/><path d="M12 12v6"/><path d="m15 15-3-3-3 3"/>',
    share:              '<circle cx="18" cy="5" r="3"/><circle cx="6" cy="12" r="3"/><circle cx="18" cy="19" r="3"/><line x1="8.59" x2="15.42" y1="13.51" y2="17.49"/><line x1="15.41" x2="8.59" y1="6.51" y2="10.49"/>',
    send:               '<line x1="22" x2="11" y1="2" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/>',
    link:               '<path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"/><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"/>',
    block:              '<circle cx="12" cy="12" r="10"/><path d="m4.9 4.9 14.2 14.2"/>',
    check:              '<polyline points="20 6 9 17 4 12"/>',
    check_circle:       '<path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/>',
    error:              '<circle cx="12" cy="12" r="10"/><line x1="12" x2="12" y1="8" y2="12"/><line x1="12" x2="12.01" y1="16" y2="16"/>',
    warning:            '<path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z"/><line x1="12" x2="12.01" y1="9" y2="13"/><line x1="12" x2="12.01" y1="17" y2="17"/>',
    info:               '<circle cx="12" cy="12" r="10"/><line x1="12" x2="12" y1="8" y2="8"/><line x1="12" x2="12" y1="12" y2="16"/>',
    help:               '<circle cx="12" cy="12" r="10"/><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"/><line x1="12" x2="12.01" y1="17" y2="17"/>',
    priority_high:      '<path d="M12 5v7"/><circle cx="12" cy="16" r="1"/>',
    notifications:      '<path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9"/><path d="M10.3 21a1.94 1.94 0 0 0 3.4 0"/>',
    notifications_active: '<path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9"/><path d="M10.3 21a1.94 1.94 0 0 0 3.4 0"/><path d="M4 2C2.8 3.7 2 5.7 2 8"/><path d="M22 8c0-2.3-.8-4.3-2-6"/>',
    // Personas y roles
    person:             '<circle cx="12" cy="8" r="4"/><path d="M20 21a8 8 0 1 0-16 0"/>',
    person_add:         '<path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><line x1="19" x2="19" y1="8" y2="14"/><line x1="22" x2="16" y1="11" y2="11"/>',
    person_off:         '<path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><line x1="22" x2="16" y1="2" y2="8"/><line x1="16" x2="22" y1="2" y2="8"/>',
    person_search:      '<circle cx="10" cy="7" r="4"/><path d="M10.3 15H7a4 4 0 0 0-4 4v2"/><circle cx="17" cy="17" r="3"/><path d="m21 21-1.9-1.9"/>',
    group:              '<path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/>',
    groups:             '<path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/>',
    account_circle:     '<circle cx="12" cy="12" r="10"/><circle cx="12" cy="10" r="3"/><path d="M7 20.662V19a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v1.662"/>',
    badge:              '<rect width="18" height="14" x="3" y="5"/><circle cx="9" cy="10" r="2"/><path d="M6 14c0-1.1.9-2 2-2h2a2 2 0 0 1 2 2"/><path d="M15 8h2"/><path d="M15 11h2"/>',
    how_to_reg:         '<path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><polyline points="16 11 18 13 22 9"/>',
    how_to_vote:        '<path d="m9 12 2 2 4-4"/><path d="M5 7c0-1.1.9-2 2-2h10a2 2 0 0 1 2 2v12H5V7z"/><path d="M22 19H2"/>',
    shield_person:      '<path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><circle cx="12" cy="10" r="2"/><path d="M9 15c0-1.1.9-2 2-2h2a2 2 0 0 1 2 2"/>',
    support_agent:      '<circle cx="12" cy="12" r="4"/><path d="M16 8v5a3 3 0 0 0 6 0v-1a10 10 0 1 0-3.92 7.94"/><circle cx="12" cy="12" r="1"/>',
    volunteer_activism: '<path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>',
    favorite:           '<path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>',
    rate_review:        '<path d="M17.5 10H20a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2v-8a2 2 0 0 1 2-2h2.5"/><path d="M15 2H9a1 1 0 0 0-1 1v5a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V3a1 1 0 0 0-1-1z"/><path d="M12 12v4"/><path d="M10 14h4"/>',
    thumb_up:           '<path d="M7 10v12"/><path d="M15 5.88 14 10h5.83a2 2 0 0 1 1.92 2.56l-2.33 8A2 2 0 0 1 17.5 22H4a2 2 0 0 1-2-2v-8a2 2 0 0 1 2-2h2.76a2 2 0 0 0 1.79-1.11L12 2a3.13 3.13 0 0 1 3 3.88Z"/>',
    handshake:          '<path d="m11 17 2 2a1 1 0 1 0 3-3"/><path d="m14 14 2.5 2.5a1 1 0 1 0 3-3l-3.88-3.88a3 3 0 0 0-4.24 0l-.88.88a1 1 0 1 1-3-3l2.81-2.81a5.79 5.79 0 0 1 7.06-.87l.47.28a2 2 0 0 0 1.42.25L21 4"/><path d="m21 3 1 11h-2"/><path d="M3 3 2 14l6.5 6.5a1 1 0 1 0 3-3"/><path d="M3 4h8"/>',
    partner_exchange:   '<path d="m16 3 4 4-4 4"/><path d="M20 7H4"/><path d="m8 21-4-4 4-4"/><path d="M4 17h16"/>',
    // Educación y académico
    school:             '<path d="M22 10v6M2 10l10-5 10 5-10 5z"/><path d="M6 12v5c3 3 9 3 12 0v-5"/>',
    book:               '<path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20"/>',
    menu_book:          '<path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20"/><path d="M8 7h6"/><path d="M8 11h8"/>',
    local_library:      '<path d="M12 20V10"/><path d="M18 20V4"/><path d="M6 20v-6"/>',
    auto_stories:       '<path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/>',
    library_books:      '<rect width="7" height="9" x="3" y="3"/><rect width="7" height="5" x="14" y="3"/><rect width="7" height="9" x="14" y="12"/><rect width="7" height="5" x="3" y="16"/>',
    calculate:          '<rect width="16" height="20" x="4" y="2"/><line x1="8" x2="16" y1="6" y2="6"/><line x1="16" x2="16" y1="14" y2="18"/><path d="M8 14h.01"/><path d="M12 14h.01"/><path d="M8 18h.01"/><path d="M12 18h.01"/>',
    functions:          '<path d="M6 12H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2"/><path d="M6 12L12 21l6-9"/>',
    integral:           '<path d="M8 19a4 4 0 0 0 8 0V5a4 4 0 0 1 8 0"/>',
    assignment:         '<rect width="8" height="4" x="8" y="2"/><path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"/><path d="M12 11h4"/><path d="M12 16h4"/><path d="M8 11h.01"/><path d="M8 16h.01"/>',
    assignment_turned_in: '<path d="M9 11l3 3L22 4"/><path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"/>',
    description:        '<path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"/><polyline points="14 2 14 8 20 8"/><line x1="16" x2="8" y1="13" y2="13"/><line x1="16" x2="8" y1="17" y2="17"/><line x1="10" x2="8" y1="9" y2="9"/>',
    find_in_page:       '<path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"/><polyline points="14 2 14 8 20 8"/><circle cx="11.5" cy="14.5" r="2.5"/><path d="M13.25 16.25 15 18"/>',
    checklist:          '<path d="M10 7l1 1 3-3"/><path d="M10 13l1 1 3-3"/><path d="M10 19l1 1 3-3"/><path d="M4 7h2"/><path d="M4 13h2"/><path d="M4 19h2"/>',
    published_with_changes: '<path d="M9 11l3 3 8-8"/><path d="M20 12v6a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h9"/>',
    workspace_premium:  '<circle cx="12" cy="8" r="6"/><path d="M15.477 12.89 17 22l-5-3-5 3 1.523-9.11"/>',
    // Ciencia e investigación
    science:            '<path d="M10 2v7.527a2 2 0 0 1-.211.896L4.72 20.55a1 1 0 0 0 .9 1.45h12.76a1 1 0 0 0 .9-1.45l-5.069-10.127A2 2 0 0 1 14 9.527V2"/><path d="M8.5 2h7"/><path d="M7 16h10"/>',
    biotech:            '<path d="M6 18h8"/><path d="M3 22h18"/><path d="M14 22a7 7 0 1 0 0-14h-1"/><path d="M9 14h.01"/><path d="M9 3v11"/>',
    psychology:         '<circle cx="12" cy="12" r="10"/><path d="M9.5 10a2.5 2.5 0 0 1 5 0v1a2.5 2.5 0 0 1-5 0"/><path d="M12 16v.5"/>',
    analytics:          '<path d="M3 3v18h18"/><path d="m19 9-5 5-4-4-3 3"/>',
    monitoring:         '<path d="M22 12h-4l-3 9L9 3l-3 9H2"/>',
    bar_chart:          '<line x1="12" x2="12" y1="20" y2="10"/><line x1="18" x2="18" y1="20" y2="4"/><line x1="6" x2="6" y1="20" y2="16"/>',
    trending_up:        '<polyline points="22 7 13.5 15.5 8.5 10.5 2 17"/><polyline points="16 7 22 7 22 13"/>',
    model_training:     '<path d="m9 12 2 2 4-4"/><path d="M5 7c0-1.1.9-2 2-2h10a2 2 0 0 1 2 2v12H5V7z"/>',
    data_object:        '<path d="M8 3H7a2 2 0 0 0-2 2v5a2 2 0 0 1-2 2 2 2 0 0 1 2 2v5c0 1.1.9 2 2 2h1"/><path d="M16 21h1a2 2 0 0 0 2-2v-5c0-1.1.9-2 2-2a2 2 0 0 1-2-2V5a2 2 0 0 0-2-2h-1"/>',
    schema:             '<rect width="5" height="5" x="3" y="3"/><rect width="5" height="5" x="16" y="3"/><rect width="5" height="5" x="10" y="16"/><path d="M5.5 8v3.5H12v-3m3.5 0v3.5H12"/>',
    // Tecnología
    computer:           '<rect width="14" height="8" x="5" y="2"/><rect width="20" height="4" x="2" y="14"/><line x1="6" x2="6" y1="18" y2="22"/><line x1="18" x2="18" y1="18" y2="22"/>',
    code:               '<polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/>',
    terminal:           '<polyline points="4 17 10 11 4 5"/><line x1="12" x2="20" y1="19" y2="19"/>',
    memory:             '<rect width="18" height="18" x="3" y="3"/><rect width="8" height="8" x="8" y="8"/><path d="M12 3v5"/><path d="M12 16v5"/><path d="M3 12h5"/><path d="M16 12h5"/>',
    storage:            '<ellipse cx="12" cy="5" rx="9" ry="3"/><path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"/><path d="M3 12c0 1.66 4 3 9 3s9-1.34 9-3"/>',
    database:           '<ellipse cx="12" cy="5" rx="9" ry="3"/><path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"/><path d="M3 12c0 1.66 4 3 9 3s9-1.34 9-3"/>',
    dns:                '<rect width="20" height="8" x="2" y="2"/><rect width="20" height="8" x="2" y="14"/><line x1="6" x2="6.01" y1="6" y2="6"/><line x1="6" x2="6.01" y1="18" y2="18"/>',
    sensors:            '<path d="M2 12h1"/><path d="M5.2 5.2 5.9 5.9"/><path d="M12 2v1"/><path d="M18.8 5.2l-.7.7"/><path d="M22 12h-1"/><path d="M12 22v-1"/><path d="M5.2 18.8l.7-.7"/><path d="M18.8 18.8l-.7-.7"/><circle cx="12" cy="12" r="4"/>',
    smart_toy:          '<path d="M12 9a4 4 0 0 0-4 4v1h8v-1a4 4 0 0 0-4-4z"/><path d="M12 5v4"/><circle cx="12" cy="12" r="1"/><path d="M5 20a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2v-1a2 2 0 0 0-2-2H7a2 2 0 0 0-2 2v1z"/><path d="M3 11v3"/><path d="M21 11v3"/>',
    smart_display:      '<rect width="20" height="14" x="2" y="3"/><path d="M10 17l.5 4"/><path d="M14 17l-.5 4"/><path d="M8 21h8"/>',
    smartphone:         '<rect width="14" height="20" x="5" y="2"/><path d="M12 18h.01"/>',
    router:             '<rect width="20" height="8" x="2" y="8"/><line x1="6" x2="6.01" y1="12" y2="12"/><line x1="10" x2="10.01" y1="12" y2="12"/><line x1="12" x2="12" y1="8" y2="4"/><line x1="12" x2="12" y1="4" y2="2"/><line x1="9" x2="15" y1="4" y2="4"/>',
    wifi:               '<path d="M5 12.55a11 11 0 0 1 14.08 0"/><path d="M1.42 9a16 16 0 0 1 21.16 0"/><path d="M8.53 16.11a6 6 0 0 1 6.95 0"/><line x1="12" x2="12.01" y1="20" y2="20"/>',
    cloud:              '<path d="M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z"/>',
    keyboard:           '<rect width="20" height="16" x="2" y="4"/><path d="M6 8h.01"/><path d="M10 8h.01"/><path d="M14 8h.01"/><path d="M18 8h.01"/><path d="M8 12h.01"/><path d="M12 12h.01"/><path d="M16 12h.01"/><path d="M7 16h10"/><path d="M6 12h.01"/>',
    rocket_launch:      '<path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z"/><path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z"/><path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0"/><path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5"/>',
    bolt:               '<path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/>',
    speed:              '<path d="m12 14 4-4"/><path d="M3.34 19a10 10 0 1 1 17.32 0"/>',
    // Comunicación
    mail:               '<rect width="20" height="16" x="2" y="4"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>',
    contact_mail:       '<rect width="18" height="14" x="3" y="5"/><path d="M3 7l9 6 9-6"/><path d="M3 19h18"/>',
    contact_support:    '<circle cx="12" cy="12" r="10"/><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"/><line x1="12" x2="12.01" y1="17" y2="17"/>',
    phone:              '<path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.15 13a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8 9a16 16 0 0 0 6 6l.36-.36a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>',
    chat:               '<path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>',
    forum:              '<path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/><path d="M3 9h14"/>',
    campaign:           '<path d="M3 11l18-5v12L3 14v-3z"/><path d="M11.6 16.8a3 3 0 1 1-5.8-1.6"/>',
    newspaper:          '<path d="M4 22h16a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H8a2 2 0 0 0-2 2v16a2 2 0 0 1-2 2Zm0 0a2 2 0 0 1-2-2v-9c0-1.1.9-2 2-2h2"/><path d="M18 14h-8"/><path d="M15 18h-5"/><path d="M10 6h8v4h-8V6Z"/>',
    // Calendario y tiempo
    calendar_today:     '<rect width="18" height="18" x="3" y="4"/><line x1="16" x2="16" y1="2" y2="6"/><line x1="8" x2="8" y1="2" y2="6"/><line x1="3" x2="21" y1="10" y2="10"/>',
    calendar_month:     '<rect width="18" height="18" x="3" y="4"/><line x1="16" x2="16" y1="2" y2="6"/><line x1="8" x2="8" y1="2" y2="6"/><line x1="3" x2="21" y1="10" y2="10"/><path d="M8 14h.01"/><path d="M12 14h.01"/><path d="M16 14h.01"/><path d="M8 18h.01"/><path d="M12 18h.01"/>',
    calendar_add_on:    '<rect width="18" height="18" x="3" y="4"/><line x1="16" x2="16" y1="2" y2="6"/><line x1="8" x2="8" y1="2" y2="6"/><line x1="3" x2="21" y1="10" y2="10"/><line x1="12" x2="12" y1="15" y2="19"/><line x1="10" x2="14" y1="17" y2="17"/>',
    event:              '<rect width="18" height="18" x="3" y="4"/><line x1="16" x2="16" y1="2" y2="6"/><line x1="8" x2="8" y1="2" y2="6"/><line x1="3" x2="21" y1="10" y2="10"/>',
    event_available:    '<path d="M9 11l3 3 8-8"/><rect width="18" height="18" x="3" y="4"/><line x1="16" x2="16" y1="2" y2="6"/><line x1="8" x2="8" y1="2" y2="6"/><line x1="3" x2="21" y1="10" y2="10"/>',
    event_busy:         '<line x1="9.5" x2="14.5" y1="11.5" y2="16.5"/><line x1="14.5" x2="9.5" y1="11.5" y2="16.5"/><rect width="18" height="18" x="3" y="4"/><line x1="16" x2="16" y1="2" y2="6"/><line x1="8" x2="8" y1="2" y2="6"/><line x1="3" x2="21" y1="10" y2="10"/>',
    event_note:         '<rect width="18" height="18" x="3" y="4"/><line x1="16" x2="16" y1="2" y2="6"/><line x1="8" x2="8" y1="2" y2="6"/><line x1="3" x2="21" y1="10" y2="10"/><path d="M9 16h6"/><path d="M9 13h3"/>',
    schedule:           '<circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/>',
    update:             '<path d="M21 12a9 9 0 0 0-9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"/><path d="M3 3v5h5"/><path d="M3 12a9 9 0 0 0 9 9 9.75 9.75 0 0 0 6.74-2.74L21 16"/><path d="M16 21h5v-5"/>',
    history:            '<path d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"/><path d="M3 3v5h5"/><path d="M12 7v5l4 2"/>',
    // Lugares y navegación
    location_on:        '<path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/>',
    map:                '<polygon points="3 6 9 3 15 6 21 3 21 18 15 21 9 18 3 21"/><line x1="9" x2="9" y1="3" y2="18"/><line x1="15" x2="15" y1="6" y2="21"/>',
    travel_explore:     '<path d="M12 2a10 10 0 1 0 10 10"/><path d="M12 2a10 10 0 0 1 10 10"/><path d="M2 12h20"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>',
    route:              '<circle cx="6" cy="19" r="3"/><path d="M9 19h8.5a3.5 3.5 0 0 0 0-7h-11a3.5 3.5 0 0 1 0-7H15"/><circle cx="18" cy="5" r="3"/>',
    public:             '<circle cx="12" cy="12" r="10"/><line x1="2" x2="22" y1="12" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>',
    beach_access:       '<path d="M17.45 6.55A6 6 0 0 0 6.55 17.45 6 6 0 0 0 17.45 6.55z"/><path d="M6.64 6.64c-.8 5.02 1.3 9.77 5.36 12.33"/><path d="M17.36 17.36c.8-5.02-1.3-9.77-5.36-12.33"/><path d="M5 12h14"/>',
    restaurant:         '<path d="M3 2v7c0 1.1.9 2 2 2h4a2 2 0 0 0 2-2V2"/><path d="M7 2v20"/><path d="M21 15V2a5 5 0 0 0-5 5v6c0 1.1.9 2 2 2h3Zm0 0v7"/>',
    // Edificios e instituciones
    business:           '<path d="M16 20V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/><rect width="20" height="4" x="2" y="16"/><path d="M6 12h4"/><path d="M14 12h4"/><path d="M6 8h4"/><path d="M14 8h4"/>',
    apartment:          '<path d="M16 20V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/><rect width="20" height="4" x="2" y="16"/><path d="M6 12h4"/><path d="M14 12h4"/><path d="M6 8h4"/><path d="M14 8h4"/>',
    account_balance:    '<line x1="3" x2="21" y1="22" y2="22"/><line x1="6" x2="6" y1="18" y2="11"/><line x1="10" x2="10" y1="18" y2="11"/><line x1="14" x2="14" y1="18" y2="11"/><line x1="18" x2="18" y1="18" y2="11"/><polygon points="12 2 20 7 4 7"/>',
    corporate_fare:     '<path d="M2 20V8l10-6 10 6v12"/><path d="M6 20v-6h3v6"/><path d="M15 20v-6h3v6"/><path d="M2 20h20"/>',
    factory:            '<path d="M2 20a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8l-7 5V8l-7 5V4a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2Z"/><path d="M17 18h1"/><path d="M12 18h1"/><path d="M7 18h1"/>',
    precision_manufacturing: '<circle cx="12" cy="10" r="4"/><path d="M12 14v7"/><path d="M7 17h10"/><path d="M12 2v3"/><path d="M4.22 4.22l2.12 2.12"/><path d="M2 10h3"/><path d="M17.66 6.34l2.12-2.12"/><path d="M19 10h3"/>',
    meeting_room:       '<path d="M3 7v10a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V7"/><rect width="18" height="4" x="3" y="3"/><path d="M10 15v-3"/><path d="M14 15v-3"/>',
    engineering:        '<path d="M2 20a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2"/><circle cx="12" cy="10" r="4"/><path d="M12 4V2"/><path d="m6.8 6.8-1.4-1.4"/><path d="m17.2 6.8 1.4-1.4"/>',
    // Documentos y archivos
    folder:             '<path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"/>',
    archive:            '<rect width="20" height="5" x="2" y="3"/><path d="M4 8v11a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8"/><path d="M10 12h4"/>',
    photo:              '<rect width="18" height="18" x="3" y="3"/><circle cx="8.5" cy="8.5" r="1.5"/><polyline points="21 15 16 10 5 21"/>',
    photo_library:      '<rect width="18" height="18" x="3" y="3"/><circle cx="8.5" cy="8.5" r="1.5"/><polyline points="21 15 16 10 5 21"/><path d="M21 3v18H3"/>',
    add_photo_alternate: '<rect width="18" height="18" x="3" y="3"/><path d="M12 7v10"/><path d="M7 12h10"/>',
    category:           '<rect width="7" height="7" x="3" y="3"/><rect width="7" height="7" x="14" y="3"/><rect width="7" height="7" x="3" y="14"/><circle cx="17.5" cy="17.5" r="3.5"/>',
    format_list_bulleted: '<line x1="8" x2="21" y1="6" y2="6"/><line x1="8" x2="21" y1="12" y2="12"/><line x1="8" x2="21" y1="18" y2="18"/><line x1="3" x2="3.01" y1="6" y2="6"/><line x1="3" x2="3.01" y1="12" y2="12"/><line x1="3" x2="3.01" y1="18" y2="18"/>',
    format_list_numbered: '<line x1="10" x2="21" y1="6" y2="6"/><line x1="10" x2="21" y1="12" y2="12"/><line x1="10" x2="21" y1="18" y2="18"/><path d="M4 6h1v4"/><path d="M4 10h2"/><path d="M6 18H4c0-1 2-2 2-3s-1-1.5-2-1"/>',
    format_bold:        '<path d="M14 12a4 4 0 0 0 0-8H6v8"/><path d="M15 20a4 4 0 0 0 0-8H6v8z"/>',
    format_italic:      '<line x1="19" x2="10" y1="4" y2="4"/><line x1="14" x2="5" y1="20" y2="20"/><line x1="15" x2="9" y1="4" y2="20"/>',
    // Premios y logros
    emoji_events:       '<path d="M8 21h8"/><path d="M12 17v4"/><path d="M7 4H4a2 2 0 0 0-2 2v2"/><path d="M17 4h3a2 2 0 0 1 2 2v2"/><path d="M12 17a5 5 0 0 0 5-5V4H7v8a5 5 0 0 0 5 5z"/>',
    military_tech:      '<path d="M12 8V2l3.5 3.5L19 2v6"/><path d="M19 6H5"/><path d="m12 19-3 3-1-5-5-1 3-3-1-5 5 1 2 5 2-5 5-1-1 5 3 3-5 1z"/>',
    star:               '<polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>',
    flag:               '<path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z"/><line x1="4" x2="4" y1="22" y2="15"/>',
    emoji_objects:      '<path d="M12 2C6.48 2 2 6.48 2 12c0 3.64 1.95 6.86 4.87 8.6L8 22h8l1.13-1.4A10 10 0 0 0 22 12c0-5.52-4.48-10-10-10z"/><path d="M9 17h6"/><path d="M12 11v6"/>',
    // Seguridad
    security:           '<path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>',
    shield:             '<path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>',
    verified:           '<path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><path d="m9 12 2 2 4-4"/>',
    lock:               '<rect width="18" height="11" x="3" y="11"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/>',
    admin_panel_settings: '<path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><circle cx="12" cy="11" r="3"/>',
    health_and_safety:  '<path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><path d="M9 12h6"/><path d="M12 9v6"/>',
    gavel:              '<path d="m14 13-8.5 8.5c-.83.83-2.17.83-3 0 0 0 0 0 0 0a2.12 2.12 0 0 1 0-3L11 10"/><path d="m16 16 6-6"/><path d="m8 8 6-6"/><path d="m9 7 8 8"/>',
    balance:            '<path d="m16 16 3-8 3 8c-.87.65-1.92 1-3 1s-2.13-.35-3-1Z"/><path d="m2 16 3-8 3 8c-.87.65-1.92 1-3 1s-2.13-.35-3-1Z"/><path d="M7 21h10"/><path d="M12 3v18"/><path d="M3 7h2c2 0 5-1 7-2 2 1 5 2 7 2h2"/>',
    rule:               '<path d="M16 3h5v5"/><path d="M8 3H3v5"/><path d="m21 3-7.5 7.5"/><path d="M3 3l7.5 7.5"/><path d="M16 21h5v-5"/><path d="M8 21H3v-5"/><path d="m21 21-7.5-7.5"/><path d="M3 21l7.5-7.5"/>',
    // Industria
    local_shipping:     '<path d="M5 17H3a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11a2 2 0 0 1 2 2v3"/><rect width="7" height="7" x="14" y="10" rx="0"/><path d="M5 17v2a2 2 0 0 0 2 2h2"/><circle cx="7" cy="21" r="1"/><circle cx="16" cy="21" r="1"/><path d="M14 14H21"/>',
    linear_scale:       '<circle cx="4" cy="12" r="2"/><circle cx="12" cy="12" r="2"/><circle cx="20" cy="12" r="2"/><path d="M6 12h4"/><path d="M14 12h4"/>',
    compare_arrows:     '<path d="m17 4 4 4-4 4"/><path d="M3 8h18"/><path d="m7 20-4-4 4-4"/><path d="M21 16H3"/>',
    account_tree:       '<path d="M22 17a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V9.5C2 7 4 5 6.5 5H18c2.2 0 4 1.8 4 4v8Z"/><polyline points="15 9 18 9 18 11"/><path d="M6.5 5C9 5 11 7 11 9.5V17a2 2 0 0 1-2 2v0"/><line x1="6" x2="7" y1="10" y2="10"/>',
    payments:           '<rect width="20" height="14" x="2" y="5"/><line x1="2" x2="22" y1="10" y2="10"/>',
    work:               '<rect width="20" height="14" x="2" y="7"/><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/>',
    work_off:           '<path d="m2 2 20 20"/><rect width="20" height="14" x="2" y="7"/><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v3"/>',
    workshop:           '<path d="M3 7v3a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V7"/><path d="M5 7V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v2"/><path d="M3 12v7a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"/><path d="M12 7v5"/><path d="M9 12h6"/>',
    local_fire_department: '<path d="M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 0 0 2.5 2.5z"/>',
    eco:                '<path d="M2 22c1.25-1.25 2.5-1.25 3.75-2.5s2.5-1.25 3.75 0 2.5 1.25 3.75 2.5"/><path d="M22 12c0 5.52-4.48 10-10 10S2 17.52 2 12 6.48 2 12 2s10 4.48 10 10z"/><path d="M12 2c-2.5 2.5-3.75 5-3.75 7.5S9.5 14.5 12 17c2.5-2.5 3.75-5 3.75-7.5S14.5 4.5 12 2z"/>',
    water_drop:         '<path d="M12 22a7 7 0 0 0 7-7c0-2-1-3.9-3-5.5s-3.5-4-4-6.5c-.5 2.5-2 4.9-4 6.5C6 11.1 5 13 5 15a7 7 0 0 0 7 7z"/>',
    potted_plant:       '<path d="M2 21h8v-4a4 4 0 1 1 4 0v4h6"/><path d="M12 17V3"/>',
    // Medios
    play_circle:        '<circle cx="12" cy="12" r="10"/><polygon points="10 8 16 12 10 16 10 8"/>',
    palette:            '<circle cx="13.5" cy="6.5" r=".5"/><circle cx="17.5" cy="10.5" r=".5"/><circle cx="8.5" cy="7.5" r=".5"/><circle cx="6.5" cy="12.5" r=".5"/><path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c.926 0 1.648-.746 1.648-1.688 0-.437-.18-.835-.437-1.125-.29-.289-.438-.652-.438-1.125a1.64 1.64 0 0 1 1.668-1.668h1.996c3.051 0 5.555-2.503 5.555-5.554C21.965 6.012 17.461 2 12 2z"/>',
    theater_comedy:     '<path d="M10 11h.01"/><path d="M14 11h.01"/><path d="M10 15a3.5 3.5 0 0 0 4 0"/><path d="M22 8c0 7-5.5 12-10 12S2 15 2 8s4.5-5 10-5 10-2 10 5z"/>',
    sentiment_dissatisfied: '<circle cx="12" cy="12" r="10"/><path d="M16 16s-1.5-2-4-2-4 2-4 2"/><line x1="9" x2="9.01" y1="9" y2="9"/><line x1="15" x2="15.01" y1="9" y2="9"/>',
    lightbulb:          '<path d="M9 18h6"/><path d="M10 22h4"/><path d="M15.09 14c.18-.98.65-1.74 1.41-2.5A4.65 4.65 0 0 0 18 8 6 6 0 0 0 6 8c0 1 .23 2.23 1.5 3.5C8.26 12.26 8.73 13.02 8.91 14"/>',
    // Iconos faltantes añadidos
    architecture:       '<path d="M3 21h18"/><path d="M7 21V7a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v14"/><path d="M12 3v4"/>',
    construction:       '<rect width="20" height="8" x="2" y="6"/><path d="M10 14v8"/><path d="M14 14v8"/><path d="M6 14v4"/><path d="M18 14v4"/>',
    diversity_2:        '<path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/>',
    diversity_3:        '<path d="M17 20v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 20v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/>',
    history_edu:        '<path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20"/>',
    inventory_2:        '<path d="M16.5 9.4 7.55 4.24"/><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/><polyline points="3.27 6.96 12 12.01 20.73 6.96"/><line x1="12" x2="12" y1="22.08" y2="12"/>',
    more_vert:          '<circle cx="12" cy="5" r="1"/><circle cx="12" cy="12" r="1"/><circle cx="12" cy="19" r="1"/>',
    pending_actions:    '<rect width="18" height="18" x="3" y="4"/><line x1="16" x2="16" y1="2" y2="6"/><line x1="8" x2="8" y1="2" y2="6"/><line x1="3" x2="21" y1="10" y2="10"/><circle cx="18" cy="18" r="3"/><path d="m18 16v2l1 1"/>',
    people:             '<path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/>',
    progress_activity:  '<path d="M12 2a10 10 0 1 1-1 19.97"/><path d="M12 6v6l4 2"/>',
    verified_user:      '<path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><path d="m9 12 2 2 4-4"/>',
    work_outline:       '<rect width="20" height="14" x="2" y="7"/><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/>',
    dashboard:          '<rect x="3" y="3" width="7" height="9"/><rect x="14" y="3" width="7" height="5"/><rect x="14" y="12" width="7" height="9"/><rect x="3" y="16" width="7" height="5"/>',
    cloud_upload:       '<path d="M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z"/><path d="M12 12v6"/><path d="m15 15-3-3-3 3"/>',
    web:                '<rect width="18" height="14" x="3" y="5"/><line x1="3" x2="21" y1="12" y2="12"/><path d="M12 5v14"/><path d="M3 10h18"/><path d="M3 16h18"/>',
    add_circle:         '<circle cx="12" cy="12" r="10"/><path d="M8 12h8"/><path d="M12 8v8"/>',
    location_city:      '<path d="M6 22V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v18Z"/><path d="M6 12H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h2"/><path d="M18 9h2a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2h-2"/><path d="M10 6h4"/><path d="M10 10h4"/><path d="M10 14h4"/><path d="M10 18h4"/>',
    videocam:           '<path d="M22 8l-6 4 6 4V8Z"/><rect width="14" height="12" x="2" y="6"/>',
    hologram:           '<path d="M3 7V5a2 2 0 0 1 2-2h2"/><path d="M17 3h2a2 2 0 0 1 2 2v2"/><path d="M21 17v2a2 2 0 0 1-2 2h-2"/><path d="M7 21H5a2 2 0 0 1-2-2v-2"/><path d="M8 14s1.5 2 4 2 4-2 4-2"/><path d="M9 9h.01"/><path d="M15 9h.01"/>',
    cancel:             '<circle cx="12" cy="12" r="10"/><path d="m15 9-6 6"/><path d="m9 9 6 6"/>',
    image:              '<rect width="18" height="18" x="3" y="3"/><circle cx="8.5" cy="8.5" r="1.5"/><path d="M21 15l-5-5L5 21"/>',
    person_check:       '<path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><polyline points="16 11 18 13 22 9"/>',
    save:               '<path d="M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11l5 5v11a2 2 0 0 1-2 2z"/><polyline points="17 21 17 13 7 13 7 21"/><polyline points="7 3 7 8 15 8"/>',
    folder_open:        '<path d="m6 14 1.45-2.9A2 2 0 0 1 9.24 10H20a2 2 0 0 1 1.94 2.5l-1.55 6a2 2 0 0 1-1.94 1.5H4a2 2 0 0 1-2-2V5c0-1.1.9-2 2-2h3.93a2 2 0 0 1 1.66.9l.82 1.2a2 2 0 0 0 1.66.9H18a2 2 0 0 1 2 2v2"/>',
    build:              '<path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/>',
  };

  // ── Función que convierte un span en SVG ────────────────────────────────────
  function buildSVG(iconName, cls, style) {
    const paths = ICON_MAP[iconName];
    if (!paths) return null;

    // Determinar tamaño desde clases de Tailwind (text-sm, text-base, text-xl, etc.)
    let size = 18;
    if (/text-xs|text-\[10px\]|text-\[11px\]|text-\[12px\]/.test(cls)) size = 12;
    else if (/text-sm/.test(cls)) size = 14;
    else if (/text-base/.test(cls)) size = 16;
    else if (/text-lg/.test(cls)) size = 20;
    else if (/text-xl/.test(cls)) size = 22;
    else if (/text-2xl/.test(cls)) size = 26;
    else if (/text-3xl/.test(cls)) size = 30;
    else if (/text-4xl/.test(cls)) size = 36;
    else if (/text-5xl/.test(cls)) size = 48;
    else if (/text-6xl/.test(cls)) size = 60;
    // Tamaño inline via style (font-size:56px, etc.)
    if (style) {
      const m = style.match(/font-size\s*:\s*([\d.]+)px/);
      if (m) size = parseInt(m[1]);
    }

    // Clases a traspasar al SVG (excluir material-symbols-outlined y variantes de font)
    const svgCls = cls
      .replace(/material-symbols-outlined/g, '')
      .replace(/text-(xs|sm|base|lg|xl|2xl|3xl|4xl|5xl|6xl|\[[\d.]+px\])/g, '')
      .replace(/font-variation-settings[^\s]*/g, '')
      .trim();

    return `<svg xmlns="http://www.w3.org/2000/svg" width="${size}" height="${size}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="${svgCls}" aria-hidden="true">${paths}</svg>`;
  }

  // ── Reemplaza todos los spans Material Symbols en un nodo raíz ─────────────
  function replaceIcons(root) {
    const spans = (root || document).querySelectorAll('span.material-symbols-outlined');
    spans.forEach(function (span) {
      const iconName = (span.textContent || '').trim();
      if (!iconName) return;
      const svg = buildSVG(iconName, span.className || '', span.getAttribute('style') || '');
      if (!svg) return;
      const wrapper = document.createElement('span');
      wrapper.innerHTML = svg;
      const svgEl = wrapper.firstChild;
      // Copiar estilos que no sean font-size (ya están en size)
      if (span.getAttribute('style')) {
        const s = span.getAttribute('style').replace(/font-size\s*:[^;]+;?/g, '');
        if (s.trim()) svgEl.setAttribute('style', s);
      }
      span.parentNode.replaceChild(svgEl, span);
    });
  }

  // ── Correr al cargar y observar mutaciones (SPA) ───────────────────────────
  function init() {
    replaceIcons(document);
    const observer = new MutationObserver(function (mutations) {
      mutations.forEach(function (m) {
        m.addedNodes.forEach(function (node) {
          if (node.nodeType === 1) {
            if (node.classList && node.classList.contains('material-symbols-outlined')) {
              replaceIcons(node.parentElement);
            } else {
              replaceIcons(node);
            }
          }
        });
      });
    });
    observer.observe(document.body, { childList: true, subtree: true });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
