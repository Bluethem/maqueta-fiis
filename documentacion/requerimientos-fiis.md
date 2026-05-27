# Requerimientos - WEB FIIS-UNI

Los requerimientos se clasifican en tres grupos: requerimientos web, requerimientos de gestión y posibles sistemas adicionales. Esta separación permite diferenciar lo que puede implementarse directamente en la página web, lo que requiere procesos internos y lo que podría convertirse en software o fase posterior.

## Requerimientos 1 - Bloque de empresas

### Requerimientos web

| NÚMERO | Requerimiento web | Usuario beneficiado | Input / entrada | Output / salida | Comportamiento esperado | Prioridad | Fase |
|--------|-------------------|----------------------|-------------------|-------------------|---------------------------|-----------|------|
| 1 | Visualizar un módulo Empresas desde la página principal de la FIIS. | Empresa, estudiante, egresado, docente, autoridad. | Nombre del módulo, enlace, texto introductorio y accesos principales. | Módulo visible en portada o menú principal. | El usuario ingresa desde la web FIIS y encuentra una sección ordenada para empresas y empleabilidad. | Alta | MVP |
| 2 | Diferenciar la navegación entre estudiante/egresado y empresa. | Estudiante, egresado, empresa. | Selección de perfil: Soy estudiante/egresado o Soy empresa. | Rutas diferenciadas con opciones según necesidad. | El sistema muestra opciones distintas: oportunidades para estudiantes/egresados y publicación/vinculación para empresas. | Alta | MVP |
| 3 | Mostrar un directorio de empresas aliadas clasificable por rubro y tipo de vínculo. | Empresa, estudiante, egresado, autoridad. | Nombre de empresa, rubro, vínculo, estado y filtros. | Directorio navegable y filtrable. | El usuario filtra empresas por rubro, tipo de vínculo, estado o actividad relacionada. | Alta | MVP |
| 4 | Permitir que cada empresa cuente con un perfil institucional. | Empresa, estudiante, egresado. | Datos institucionales de la empresa. | Ficha pública de empresa aliada. | Cada empresa tiene una página o ficha con información validada por FIIS. | Alta | MVP |
| 5 | Mostrar en el perfil de empresa logo, rubro, descripción, ubicación, redes, contacto y oportunidades vigentes. | Empresa, estudiante, egresado. | Logo, descripción, ubicación, redes, correo, oportunidades. | Perfil empresarial completo y visible. | El perfil muestra información útil y vigente; las oportunidades vencidas se ocultan o pasan a estado cerrado. | Alta | MVP |
| 6 | Publicar ofertas de prácticas preprofesionales. | Empresa, estudiante. | Empresa, cargo, carrera, requisitos, modalidad, fecha límite, enlace/correo. | Oferta visible en oportunidades de prácticas. | La empresa o responsable registra la práctica; el administrador valida; si cumple criterios, se publica. | Alta | MVP |
| 7 | Publicar ofertas laborales para estudiantes y egresados. | Empresa, estudiante, egresado. | Cargo, perfil, requisitos, experiencia, modalidad, fecha límite, enlace/correo. | Oferta laboral visible en la sección de empleabilidad. | El sistema organiza ofertas por tipo y estado; al vencer, pasan a cerrado. | Alta | MVP |
| 8 | Clasificar convocatorias por carrera o perfil: Industrial, Sistemas, Software u otros. | Estudiante, egresado, empresa. | Carrera dirigida, perfil requerido y habilidades. | Convocatoria segmentada por perfil. | El usuario puede encontrar oportunidades alineadas a su carrera o especialidad. | Alta | MVP |
| 9 | Filtrar oportunidades por rubro, modalidad, estado y tipo de convocatoria. | Estudiante, egresado. | Filtros de rubro, modalidad, estado, tipo y carrera. | Listado filtrado de oportunidades. | El sistema actualiza resultados según filtros seleccionados. | Media | Fase 2 |
| 10 | Registrar charlas, talleres, webinars y workshops propuestos por empresas. | Empresa, estudiante, egresado, docente. | Título, empresa, fecha, modalidad, público objetivo y descripción. | Actividad publicada en agenda o sección empresarial. | La empresa propone una actividad; FIIS valida y publica con datos claros. | Alta | MVP |
| 11 | Registrar visitas técnicas como actividad coordinable. | Empresa, estudiante, docente. | Empresa, fecha tentativa, cupos, lugar, requisitos. | Visita técnica visible o registrada para coordinación. | El sistema permite proponer visitas y mostrarlas cuando estén confirmadas. | Media | Fase 2 |
| 12 | Permitir que empresas propongan proyectos, retos reales, tesis o investigaciones aplicadas. | Empresa, docente, estudiante, investigador. | Problema, objetivo, área, alcance, contacto y restricciones. | Propuesta de reto/proyecto enviada a revisión. | La empresa envía una propuesta; FIIS deriva a docentes/investigadores o responsables. | Alta | Fase 2 |
| 13 | Mostrar convenios vigentes con empresa, fecha, tipo de convenio y estado. | Empresa, autoridad, estudiante, egresado. | Empresa, tipo de convenio, fecha, vigencia, estado. | Tabla o sección de convenios visibles. | El usuario puede consultar convenios activos, vencidos o en proceso según validación institucional. | Alta | MVP |
| 14 | Mostrar casos de éxito de egresados, estudiantes o proyectos empresa-FIIS. | Empresa, postulante, estudiante, egresado. | Historia, actor, empresa, logro, imagen/testimonio. | Caso de éxito publicado. | La web comunica resultados y prestigio mediante historias verificadas. | Media | Fase 2 |
| 15 | Mostrar una propuesta de valor para empresas: por qué vincularse con la FIIS. | Empresa, autoridad. | Beneficios, perfiles profesionales, modalidades de vinculación. | Página de propuesta de valor empresarial. | La empresa entiende por qué le conviene participar, contratar talento o proponer proyectos. | Alta | MVP |
| 16 | Permitir contacto directo con la empresa respetando privacidad. | Estudiante, egresado, empresa. | Formulario o datos autorizados de contacto. | Solicitud enviada o información de contacto visible. | El sistema solo muestra datos autorizados y puede redirigir a un formulario controlado. | Alta | MVP |
| 17 | Permitir que la empresa solicite actualización o validación de su información. | Empresa, administrador FIIS. | Datos modificados, documentos o solicitud de cambio. | Solicitud de actualización pendiente de revisión. | El administrador revisa cambios antes de publicarlos. | Alta | Fase 2 |
| 18 | Permitir que un administrador FIIS revise y apruebe información antes de publicarla. | Administrador FIIS, empresa. | Contenido enviado por empresa o equipo FIIS. | Contenido aprobado, observado o rechazado. | Todo contenido empresarial pasa por validación antes de ser público. | Alta | MVP |
| 19 | Mostrar noticias empresariales sin mezclarlas en un feed general. | Estudiante, empresa, egresado. | Noticia, categoría, fecha, empresa o tema. | Feed empresarial separado. | Las noticias de empresas se agrupan por categoría sin saturar portada general. | Media | Fase 2 |
| 21 | Mostrar agenda de eventos empresariales, ferias, charlas y actividades de empleabilidad. | Estudiante, egresado, empresa. | Evento, fecha, hora, modalidad, organizador, enlace. | Calendario o agenda visible. | El usuario puede consultar próximas actividades y acceder a inscripción o contacto. | Media | Fase 2 |
| 22 | Publicar materiales de orientación para empresas: manual, preguntas frecuentes y proceso de vinculación. | Empresa, reclutador, área técnica. | Documentos, guías, FAQs y rutas de contacto. | Repositorio o sección de orientación empresarial. | La empresa encuentra pasos claros para publicar, contactar, proponer o firmar convenios. | Media | Fase 2 |
| 23 | Permitir consultar indicadores básicos: empresas registradas, vacantes publicadas, convenios y eventos. | Autoridad, equipo de empleabilidad, administrador. | Registros del módulo, publicaciones y estados. | Panel o reporte básico de indicadores. | Responsables visualizan métricas para seguimiento y toma de decisiones. | Media | Fase 2 |
| 24 | Separar contenido de empleabilidad, convenios, proyectos y servicios empresariales. | Empresa, estudiante, egresado, docente. | Categorías de contenido y etiquetas. | Secciones diferenciadas y ordenadas. | El usuario no se pierde en noticias generales; encuentra cada tipo de contenido en su espacio. | Alta | MVP |
| 25 | Mostrar una sección de contacto institucional para empresas interesadas en iniciar vínculo con la facultad. | Empresa, autoridad, equipo FIIS. | Formulario, correo, asunto, tipo de interés. | Solicitud institucional recibida. | La empresa puede iniciar relación formal con FIIS por una ruta clara y verificable. | Alta | MVP |

### Requerimientos de gestión

| NÚMERO | Requerimiento de gestión | Responsable sugerido | Motivo | Relación con la web | Prioridad | Recomendación |
|--------|----------------------------|----------------------|--------|----------------------|-----------|---------------|
| 1 | Definir responsable de validación de empresas y vacantes. | Equipo de empleabilidad / relaciones empresariales / administrador FIIS. | Evitar publicaciones falsas, vencidas, incompletas o no autorizadas. | El módulo Empresas necesita aprobación previa antes de publicar perfiles, vacantes o actividades. | Alta | MVP |
| 2 | Establecer flujo editorial para publicación, actualización y cierre de oportunidades. | Administrador funcional y responsables del bloque Empresas. | Mantener información vigente y confiable. | Las ofertas deben pasar por estados: recibida, observada, aprobada, publicada, vencida/cerrada. | Alta | MVP |
| 3 | Definir criterios mínimos para registrar empresas aliadas. | Autoridad FIIS / equipo de relaciones empresariales. | Evitar perfiles incompletos o empresas sin vínculo verificable. | El directorio requiere reglas para mostrar logo, rubro, descripción, contacto y tipo de vínculo. | Alta | MVP |
| 4 | Definir roles diferenciados de empresa, reclutador, administrador FIIS, docente/investigador y autoridad. | OTI / administrador web / área responsable. | Ordenar permisos y responsabilidades de uso. | La web debe diferenciar quién publica, quién revisa, quién consulta y quién aprueba. | Alta | MVP |
| 5 | Establecer protocolo de privacidad para contacto directo con empresas. | Administrador FIIS / asesoría legal o responsable institucional. | Proteger datos empresariales y personales. | El módulo solo debe mostrar datos autorizados o usar formularios intermediados. | Alta | Fase 2 |
| 6 | Mantener taxonomía de contenidos empresariales. | Administrador de contenido / comunicaciones FIIS. | Evitar que todo se publique como noticia general. | La web requiere categorías: oportunidades, eventos, convenios, proyectos, empresas aliadas y comunicados. | Alta | MVP |
| 7 | Definir periodicidad de actualización de perfiles empresariales y convenios. | Equipo de relaciones empresariales. | Reducir información desactualizada o vencida. | Cada perfil, convenio y oportunidad debe revisarse periódicamente. | Alta | Fase 2 |
| 9 | Definir procedimiento para recibir proyectos, retos, tesis o investigaciones aplicadas. | Docentes, investigadores, equipo de relaciones empresariales. | Aprovechar el interés empresarial en colaboración académica. | Las propuestas empresariales deben derivarse a docentes, cursos, tesis o investigación. | Media | Fase 2 |
| 10 | Designar responsables para agenda de charlas, talleres, webinars y visitas técnicas. | Coordinación académica / centros culturales / relaciones empresariales. | Organizar actividades empresariales y evitar cruces o falta de seguimiento. | La agenda web necesita responsables que confirmen fechas, cupos y difusión. | Media | Fase 2 |
| 11 | Crear lineamientos de comunicación de propuesta de valor empresarial. | Comunicaciones FIIS / dirección del proyecto. | Comunicar por qué una empresa debe vincularse con la FIIS. | La sección empresas debe tener mensajes claros sobre talento, prestigio, proyectos y convenios. | Alta | MVP |
| 12 | Definir responsable de seguimiento de indicadores del módulo Empresas. | Autoridad / equipo de relaciones empresariales / administrador funcional. | Medir resultados y orientar decisiones. | Los indicadores de empresas registradas, vacantes, convenios y eventos deben revisarse periódicamente. | Media | Fase 2 |
| 13 | Establecer manuales o guías breves para empresas y administradores. | Administrador FIIS / equipo web. | Reducir errores de publicación y dudas de uso. | La web debe incluir o respaldarse en guías para publicar, actualizar y validar información. | Media | Fase 2 |
| 14 | Garantizar coherencia con identidad visual UNI/FIIS. | Comunicaciones / diseñador UX/UI / equipo web. | Mantener imagen institucional seria y consistente. | El módulo Empresas debe respetar colores, tipografía, jerarquía visual y estilo institucional. | Alta | MVP |
| 15 | Definir mantenimiento editorial sin depender siempre de programación. | Administrador web / OTI / responsables de contenido. | Facilitar actualización rápida del portal. | El módulo debe poder actualizar textos, eventos, oportunidades y perfiles desde responsables autorizados. | Media | Fase 2 |
| 16 | Establecer trazabilidad de cambios relevantes. | Administrador técnico / administrador funcional. | Conocer quién publicó, editó, aprobó o cerró información. | El módulo debe registrar cambios en perfiles, oportunidades, convenios y eventos. | Media | Fase 2 |

### Posibles sistemas adicionales / requerimientos de software

| Número | Sistema o funcionalidad adicional | Necesidad que atiende | Usuarios | Complejidad estimada | Recomendación |
|--------|----------------------------------|------------------------|-----------|----------------------|---------------|
| 1 | Base de CV filtrable de talento FIIS. | Permitir que empresas busquen estudiantes y egresados por carrera, ciclo, habilidades, experiencia y disponibilidad. | Empresas, estudiantes, egresados, administrador. | Alta | Fase 3 |
| 2 | Sistema de postulación y seguimiento de candidatos. | Gestionar postulaciones, estados, comunicaciones y resultados de convocatorias. | Empresa, estudiante, egresado, administrador. | Alta | Proyecto aparte |
| 3 | CRM de relaciones empresariales FIIS. | Registrar historial de contactos, reuniones, convenios, actividades y oportunidades por empresa. | Equipo de relaciones empresariales, autoridad, administrador. | Alta | Proyecto aparte |
| 4 | Panel avanzado de indicadores y reportes. | Medir empresas registradas, vacantes, postulaciones, convenios, eventos, participación y resultados. | Autoridades, equipo de empleabilidad, administrador. | Media | Fase 3 |
| 5 | Sistema de gestión de convenios. | Controlar creación, aprobación, vigencia, renovación y cierre de convenios institucionales. | Autoridades, empresas, responsables legales/administrativos. | Alta | Proyecto aparte |
| 6 | Módulo de retos empresariales e investigación aplicada. | Gestionar propuestas de empresas, asignación a docentes, seguimiento de proyectos, entregables y resultados. | Empresas, docentes, estudiantes, investigadores. | Alta | Fase 3 |
| 7 | Sistema de agenda con inscripción y control de cupos. | Gestionar charlas, talleres, webinars, ferias, visitas técnicas, cupos y asistencia. | Estudiantes, egresados, empresas, administradores. | Media | Fase 2 |
| 8 | Integración con autenticación institucional o perfiles privados. | Permitir accesos diferenciados por estudiante, egresado, docente, empresa y administrador. | Todos los actores del módulo. | Alta | Fase 3 |
| 9 | CMS editorial con roles y flujo de aprobación. | Actualizar contenidos, noticias empresariales, perfiles, oportunidades y convenios con permisos diferenciados. | Administradores, comunicaciones, relaciones empresariales. | Media | Fase 2 |
| 10 | Integración técnica con la bolsa central UNI. | Sincronizar oportunidades, enlaces o filtros relevantes para FIIS sin duplicar sistemas existentes. | Estudiantes, egresados, empresas, administradores. | Alta | Fase 2 |
| 11 | Sistema de formularios y seguimiento de solicitudes empresariales. | Dar trazabilidad a solicitudes de contacto, publicación, charlas, proyectos y convenios. | Empresa, administrador FIIS, autoridad. | Media | Fase 2 |
| 12 | Repositorio de casos de éxito y testimonios. | Gestionar evidencia de egresados, proyectos, empresas aliadas y resultados de empleabilidad. | Comunicaciones, empresas, egresados, estudiantes. | Media | Fase 3 |

---

## Requerimientos 2 - Bloque altos cargos (secretaria administrativa, academica y decanato)

### Requerimientos web

#### SECRETARÍA ACADÉMICA

| NÚMERO | Requerimiento web | Usuario beneficiado | Input / entrada | Output / salida | Comportamiento esperado | Prioridad | Fase |
|--------|-------------------|----------------------|-------------------|-------------------|---------------------------|-----------|------|
| 1 | Publicar resoluciones, reglamentos y cronogramas académicos. | Estudiante, docente, autoridad. | Documentos académicos y administrativos autorizados. | Sección organizada de documentos oficiales. | El usuario accede rápidamente a información académica vigente. | Alta | MVP |
| 2 | Mostrar horarios y mallas curriculares de las carreras. | Estudiante, autoridad. | Información académica de cursos y planes de estudio. | Visualización clara de horarios y mallas curriculares. | El usuario consulta la secuencia y organización académica de la carrera. | Alta | MVP |
| 4 | Implementar guías y procedimientos académicos paso a paso. | Estudiante, egresado. | Reglamentos, procedimientos y procesos académicos. | Guías visuales e informativas. | El usuario comprende correctamente procesos como prácticas e intercambios. | Alta | MVP |
| 5 | Crear espacio de difusión de resoluciones y avisos importantes. | Estudiante. | Avisos, resoluciones y comunicados académicos. | Publicaciones visibles dentro de la web. | El estudiante puede acceder directamente a información relevante. | Alta | MVP |
| 6 | Incorporar formularios de retroalimentación estudiantil. | Estudiante, autoridad. | Opiniones, dificultades académicas y necesidades estudiantiles. | Registro de respuestas y comentarios. | El sistema recopila información para apoyar. | Media | Fase 2 |

#### SECRETARÍA ADMINISTRATIVA

| NÚMERO | Requerimiento web | Usuario beneficiado | Input / entrada | Output / salida | Comportamiento esperado | Prioridad | Fase |
|--------|-------------------|----------------------|-------------------|-------------------|---------------------------|-----------|------|
| 1 | Implementar sección de noticias y comunicados institucionales. | Estudiante, docente, administrativo. | Noticias, actividades y comunicados institucionales, mejoras institucionales y contenidos de reconocimiento al personal administrativo. | Publicaciones visibles y organizadas. | La comunidad FIIS accede a información actualizada de gestión y actividades. | Alta | MVP |
| 2 | Crear intranet o acceso restringido para personal administrativo. | Personal administrativo. | Usuario, contraseña y contenido interno. | Panel privado con información interna. | Solo usuarios autorizados acceden a información interna. | Alta | Fase 2 |
| 3 | Incorporar indicadores con visualización restringida. | Autoridad, personal administrativo. | Indicadores y reportes administrativos. | Visualización de métricas y seguimiento interno. | El sistema muestra información según permisos asignados. | Media | Fase 3 |
| 4 | Centralizar información de servicios y áreas de la facultad. | Estudiante | Información de biblioteca, mesa de partes, proyección social y otras áreas. | Directorio y descripción de servicios. | El usuario comprende las funciones y acceso de cada servicio. | Alta | MVP |
| 5 | Crear secciones informativas de laboratorios FIIS. | Estudiante | Información y funciones de laboratorios. | Fichas informativas de laboratorios. | El usuario conoce actividades y objetivos de cada laboratorio. | Media | MVP |
| 6 | Implementar espacio dinámico para avisos y publicaciones diarias. | Comunidad FIIS. | Cronogramas, listas, avisos y actividades. | Publicaciones rápidas y visibles. | El sistema permite difundir información operativa de manera continua. | Alta | MVP |

---

### Requerimientos de gestión

#### SECRETARÍA ACADÉMICA

| NÚMERO | Requerimiento de gestión | Responsable sugerido | Motivo | Relación con la web | Prioridad | Recomendación |
|--------|----------------------------|----------------------|--------|----------------------|-----------|---------------|
| 1 | Definir responsables para la publicación y actualización de resoluciones, reglamentos y cronogramas. | Secretaría Académica | Evitar información desactualizada o duplicada. | La web mostrará documentos académicos oficiales. | Alta | MVP |
| 3 | Definir un flujo de actualización periódica de horarios y mallas curriculares. | Coordinación académica | Mantener información vigente para estudiantes y postulantes. | La web dependerá de datos académicos actualizados. | Alta | MVP |
| 4 | Estandarizar la difusión de procedimientos académicos y reglamentos. | Secretaría Académica | Reducir errores y confusiones en trámites académicos. | La web mostrará guías y procedimientos paso a paso. | Alta | MVP |
| 5 | Establecer lineamientos para la publicación de avisos y resoluciones estudiantiles. | Secretaría Académica | Garantizar correcta difusión de información relevante. | La web funcionará como canal alternativo de comunicación. | Media | MVP |
| 6 | Definir mecanismos de revisión y análisis de retroalimentación estudiantil. | Bienestar FIIS | Obtener información útil sobre dificultades académicas de los estudiantes. | La web recopilará opiniones y necesidades estudiantiles. | Media | Fase 2 |

#### SECRETARÍA ADMINISTRATIVA

| NÚMERO | Requerimiento de gestión | Responsable sugerido | Motivo | Relación con la web | Prioridad | Recomendación |
|--------|----------------------------|----------------------|--------|----------------------|-----------|---------------|
| 1 | Definir responsables de publicación de noticias y comunicados institucionales. | Secretaría Administrativa / Imagen institucional | Mantener información institucional actualizada y validada. | La web difundirá noticias y actividades institucionales. | Alta | MVP |
| 3 | Definir políticas de acceso y visualización de indicadores administrativos. | Secretaría Administrativa | Evitar acceso no autorizado a información sensible. | Los paneles administrativos requerirán control de permisos. | Alta | Fase 3 |
| 4 | Asignar responsables para actualizar información de servicios y áreas FIIS. | Responsables de cada área institucional | Mantener información clara y vigente para estudiantes. | La web centralizará servicios institucionales. | Alta | MVP |
| 5 | Establecer lineamientos para la publicación de información de laboratorios. | Coordinadores de laboratorio | Garantizar contenido uniforme y actualizado. | La web mostrará información de laboratorios FIIS. | Media | MVP |
| 6 | Definir flujo de publicación para avisos, listas y cronogramas diarios. | ORCE | Mejorar organización y continuidad de publicaciones. | La web difundirá información operativa y avisos frecuentes. | Alta | MVP |

---

### Posibles sistemas adicionales / requerimientos de software

| Número | Sistema o funcionalidad adicional | Necesidad que atiende | Usuarios | Complejidad estimada | Recomendación |
|--------|----------------------------------|------------------------|-----------|----------------------|---------------|
| 1 | Asistente virtual académico con IA. | Resolver dudas frecuentes sobre reglamentos, matrícula y procesos académicos. | Estudiantes | Alta | Fase 3 |
| 2 | Plataforma de recorridos virtuales FIIS. | Mostrar laboratorios, ambientes y oficinas de manera interactiva. | Postulantes, visitantes, estudiantes. | Media | Fase 3 |
| 3 | Sistema de alertas y recordatorios automáticos | Informar vencimientos, eventos y procesos importantes. | Estudiantes, docentes | Media | Fase 2 |
| 4 | Sistema de matching para prácticas y proyectos | Relacionar estudiantes con oportunidades según perfil académico. | Estudiantes, empresas | Alta | Fase 3 |
| 5 | Sistema de trazabilidad de trámites | Permitir seguimiento del estado de solicitudes y documentos. | Estudiantes, administrativos | Alta | Fase 3 |
| 6 | Sistema de citas virtuales con áreas FIIS | Facilitar reuniones con secretaría, coordinación o docentes. | Estudiantes, administrativos, docentes | Media | Fase 3 |

## Requerimientos 3 - Bloque de docentes, escuelas y departamentos

### Requerimientos web

| NÚMERO | Requerimiento web | Usuario beneficiado | Input / entrada | Output / salida | Comportamiento esperado | Prioridad | Fase |
|--------|-------------------|----------------------|-------------------|-------------------|---------------------------|-----------|------|
| 1 | Organigrama institucional interactivo FIIS | Docentes, administrativos y estudiantes | Información de áreas, responsables y cargos | Visualización del organigrama | Navegar jerárquicamente entre áreas de la FIIS | Alta | MVP |
| 2 | Página institucional por Escuela Profesional | Estudiantes y docentes | Información académica y administrativa | Página institucional de Escuela | Mostrar información académica y administrativa de cada Escuela | Alta | MVP |
| 3 | Página institucional por Departamento Académico | Docentes e investigadores | Información del departamento | Perfil institucional del Departamento | Mostrar docentes, cursos y líneas de investigación | Alta | MVP |
| 5 | Integración con ORCID y CTI Vitae | Docentes e investigadores | ORCID, CTI Vitae y publicaciones | Perfil académico sincronizado | Sincronizar publicaciones e investigación docente | Alta | Fase 2 |
| 6 | Publicación de cronogramas académicos | Docentes y estudiantes | Cronogramas de PCs y exámenes | Calendario académico | Consultar y descargar cronogramas actualizados | Alta | MVP |
| 7 | Portal de recursos académicos docentes | Docentes | Manuales, reglamentos, enlaces y recursos | Biblioteca digital docente | Centralizar recursos y herramientas académicas | Media | Fase 2 |
| 9 | Publicación de talleres y capacitaciones docentes | Docentes | Información de talleres y eventos | Calendario de capacitaciones | Difundir talleres y actividades académicas | Media | Fase 2 |
| 10 | Portal responsive institucional | Todos los usuarios | Resolución del dispositivo | Interfaz adaptada | Adaptar la interfaz a cualquier dispositivo | Alta | MVP |

### Requerimientos de gestión

| NÚMERO | Requerimiento de gestión | Responsable sugerido | Motivo | Relación con la web | Prioridad | Recomendación |
|--------|----------------------------|----------------------|--------|----------------------|-----------|---------------|
| 1 | Definir administradores de contenido por Escuela y Departamento | Coordinaciones académicas | Mantener información actualizada | Gestión de páginas institucionales | Alta | MVP |
| 2 | Validar publicaciones académicas y científicas | Área de investigación FIIS | Garantizar calidad y autenticidad | Repositorios y perfiles docentes | Alta | Fase 2 |
| 3 | Gestionar permisos y roles institucionales | Área TI | Restringir accesos administrativos | Módulos internos y edición de contenido | Alta | MVP |
| 4 | Establecer flujo de actualización de cronogramas académicos | Departamentos académicos | Evitar información desactualizada | Publicación de evaluaciones y horarios | Alta | MVP |
| 6 | Definir estándares de perfiles docentes | Decanato y Dirección académica | Uniformizar información institucional | Directorio y perfiles académicos | Media | Fase 2 |

### Posibles sistemas adicionales / requerimientos de software

| Número | Sistema o funcionalidad adicional | Necesidad que atiende | Usuarios | Complejidad estimada | Recomendación |
|--------|----------------------------------|------------------------|-----------|----------------------|---------------|
| 1 | Sistema integral de asesorías académicas | Automatizar tutorías y seguimiento de tesis | Docentes y estudiantes | Alta | Fase 2 |
| 2 | Dashboard de indicadores académicos | Visualizar métricas docentes y académicas | Directores y coordinadores | Alta | Proyecto aparte |
| 3 | Repositorio interno docente | Compartir sílabos y materiales académicos | Docentes | Media | Fase 3 |
| 4 | Integración con repositorios de tesis UNI | Centralizar investigaciones institucionales | Investigadores y tesistas | Alta | Fase 2 |
| 5 | Sistema digital de evaluación docente | Gestionar encuestas y reportes académicos | Estudiantes y coordinadores | Alta | Proyecto aparte |

## Requerimientos 4 - Bloque administrativo

### Requerimientos web

| NÚMERO | Requerimiento web | Usuario beneficiado | Input / entrada | Output / salida | Comportamiento esperado | Prioridad | Fase |
|--------|-------------------|----------------------|-------------------|-------------------|---------------------------|-----------|------|
| 12 | Encuestas virtuales de satisfacción | Estudiantes y egresados | Respuestas a formularios digitales | Resultados estadísticos y reportes | El sistema recopila y procesa automáticamente la información | Media | Fase 2 |
| 13 | Chatbot institucional | Estudiantes y usuarios externos | Consultas frecuentes escritas | Respuestas automáticas e información rápida | El chatbot responde consultas básicas y deriva casos complejos | Media | MVP |
| 15 | Portal de transparencia institucional | Comunidad universitaria | Información presupuestal y documentos oficiales | Publicación de reportes y documentos | El sistema mantiene visible información institucional actualizada | Media | MVP |
| 16 | Panel de control para actualización web | Responsables de cada área | Noticias, documentos y contenido institucional | Información actualizada en la web | Cada área puede modificar contenido sin depender de terceros | Alta | MVP |
| 17 | Sistema seguro de validación documental | Administrativos y usuarios | Documentos digitales y códigos de verificación | Validación de autenticidad | El sistema verifica documentos y evita falsificaciones | Alta | Fase 2 |

### Requerimientos de gestión

| NÚMERO | Requerimiento de gestión | Responsable sugerido | Motivo | Relación con la web | Prioridad | Recomendación |
|--------|----------------------------|----------------------|--------|----------------------|-----------|---------------|
| 1 | Designar responsables de actualización por cada área administrativa | Jefes de oficina y administrador web FIIS | Mantener información vigente y evitar desactualización | Cada módulo web requiere mantenimiento constante | Alta | MVP |
| 2 | Establecer políticas de validación de documentos digitales | Secretaría y Mesa de Partes | Evitar falsificación y garantizar autenticidad | Los trámites virtuales requieren validación segura | Alta | MVP |
| 5 | Establecer protocolos de seguridad informática | Área de TI y administración FIIS | Proteger información institucional y datos personales | La plataforma manejará información sensible | Alta | Fase 2 |
| 6 | Crear políticas de respaldo y recuperación de información | Área de TI | Evitar pérdida de documentos y registros digitales | La web almacenará bases de datos y archivos importantes | Alta | MVP |
| 9 | Coordinar mantenimiento periódico de la plataforma web | Área de TI y soporte técnico | Evitar fallas técnicas y caídas del sistema | La continuidad operativa depende del mantenimiento | Media | Fase 2 |
| 10 | Definir responsables del repositorio documental | Oficina de Archivo | Organizar y controlar documentación digitalizada | El repositorio web necesita control de accesos y clasificación | Media | Fase 2 |
| 11 | Crear lineamientos para publicación de información institucional | Decanato y responsables de áreas | Garantizar información oficial y confiable | La web será un canal institucional público | Alta | MVP |
| 14 | Definir permisos y niveles de acceso al sistema | Área de TI y administración | Restringir acceso según funciones del usuario | La plataforma tendrá diferentes perfiles de usuario | Alta | MVP |
| 18 | Implementar evaluación periódica del funcionamiento web | Decanato y área TI | Detectar fallas y oportunidades de mejora | La web debe optimizarse continuamente | Media | Fase 2 |
| 19 | Gestionar presupuesto para modernización tecnológica | Oficina de Planificación y Presupuesto | Garantizar sostenibilidad del proyecto digital | La implementación web requiere recursos tecnológicos | Alta | MVP |

### Posibles sistemas adicionales / requerimientos de software

| Número | Sistema o funcionalidad adicional | Necesidad que atiende | Usuarios | Complejidad estimada | Recomendación |
|--------|----------------------------------|------------------------|-----------|----------------------|---------------|
| 1 | Sistema integral de Recursos Humanos | Gestionar asistencia, contratos, vacaciones, licencias y legajos digitales | Personal administrativo y RR.HH. | Alta | Fase 3 |
| 2 | Sistema de Mesa de Partes virtual avanzada | Automatizar completamente el flujo documentario y seguimiento de trámites | Estudiantes, docentes y administrativos | Alta | Proyecto aparte |
| 3 | Sistema de gestión documental y archivo digital | Digitalizar, clasificar y consultar documentos institucionales | Archivo, administrativos y autoridades | Alta | Proyecto aparte |
| 4 | Sistema de gestión de acreditación y calidad | Centralizar evidencias, indicadores y planes de mejora | Oficina de Calidad y Acreditación | Alta | Fase 3 |
| 5 | Plataforma de reservas inteligentes de ambientes y equipos | Gestionar disponibilidad y evitar conflictos de reservas | Docentes y administrativos | Media | Proyecto aparte |
| 6 | Sistema de incidencias y mantenimiento institucional | Registrar, asignar y monitorear fallas o requerimientos | Servicios Generales y comunidad FIIS | Media | Fase 3 |
| 7 | Chatbot institucional con inteligencia artificial | Resolver consultas frecuentes automáticamente | Estudiantes y usuarios externos | Media | Fase 2 |
| 8 | Sistema de validación de documentos con códigos QR | Verificar autenticidad de documentos digitales | Administrativos y usuarios | Media | Fase 3 |
| 9 | Plataforma de transparencia y rendición de cuentas | Publicar presupuestos, reportes y documentos oficiales | Comunidad universitaria | Media | Fase 2 |
| 10 | Sistema de encuestas y análisis de satisfacción | Recopilar opiniones y generar reportes automáticos | Estudiantes, egresados y docentes | Media | Fase 2 |
| 11 | Aplicación móvil FIIS | Facilitar acceso rápido a trámites y notificaciones | Toda la comunidad FIIS | Alta | Fase 2 |
| 12 | Sistema de control de acceso y vigilancia digital | Registrar incidencias y monitorear seguridad institucional | Área de Vigilancia | Alta | Fase 3 |
| 13 | Plataforma de repositorio multimedia institucional | Almacenar videos, clases grabadas y contenido audiovisual | Docentes y estudiantes | Media | - |
| 14 | Sistema de firma digital y aprobación electrónica | Reducir el uso de documentos físicos y agilizar aprobaciones | Administrativos y autoridades | Alta | Proyecto aparte |
| 15 | Plataforma de capacitación virtual para personal administrativo | Capacitar en procesos y uso de sistemas digitales | Personal administrativo | Media | Fase 2 |
| 16 | Sistema automatizado de notificaciones y alertas | Informar estados de trámites, vencimientos y actividades | Toda la comunidad FIIS | Media | Fase 2 |
| 17 | Sistema de analítica web y comportamiento de usuarios | Evaluar uso de la plataforma y mejorar experiencia | Área TI y administración | Baja | Fase 3 |
| 18 | Integración con sistemas externos universitarios | Conectar la web FIIS con DIRCE u otros sistemas UNI | Administrativos y estudiantes | Alta | Proyecto aparte |

## Requerimientos 5 - Bloque de instituciones y laboratorios

### CENTRO DE INFORMACIÓN FIIS

#### Requerimientos web

| NÚMERO | Requerimiento web | Usuario beneficiado | Input / entrada | Output / salida | Comportamiento esperado | Prioridad | Fase |
|--------|-------------------|----------------------|-------------------|-------------------|---------------------------|-----------|------|
| 1 | Sección de normas de convivencia de la biblioteca. | Estudiantes, docentes, visitantes. | Contenido proporcionado por la biblioteca. | Página web con normas visibles. | El usuario accede a la sección y visualiza las normas en formato legible. | Alta | MVP |
| 2 | Sección de procesos de uso (préstamos, uso en sala, devoluciones). | Estudiantes, docentes. | Información de procesos del área. | Guía o flujograma de procesos. | Usuario navega y visualiza los pasos de cada proceso. | Alta | MVP |
| 3 | Tabla de penalidades por retraso en devolución. | Estudiantes. | Reglamento de la biblioteca. | Información clara de multas/penalidades. | Se muestra tabla con días de retraso y consecuencias. | Media | MVP |
| 4 | Enlace directo al catálogo digital KOHA. | Estudiantes, docentes. | URL del sistema KOHA. | Redirección al catálogo externo. | Botón/enlace que abre el catálogo en nueva pestaña. | Alta | MVP |
| 5 | Sección de preguntas frecuentes (FAQ) sobre la biblioteca. | Estudiantes, docentes. | Preguntas comunes recopiladas por el área. | Acordeón de preguntas y respuestas. | Usuario selecciona pregunta y ve la respuesta desplegada. | Media | MVP |
| 6 | Visualización de horarios de atención. | Estudiantes, docentes, visitantes. | Horarios definidos por el área. | Horarios publicados con días y horas. | Muestra horario semanal actualizable por el administrador. | Alta | MVP |
| 7 | Indicador de horarios de alta demanda (horas pico). | Estudiantes. | Datos de afluencia de la biblioteca. | Indicador visual de horas pico. | Gráfico o texto indicando los momentos de mayor demanda. | Baja | Fase 2 |
| 8 | Videos informativos y/o recorrido virtual de la biblioteca. | Estudiantes, docentes, público general. | Videos/fotos proporcionadas por el área. | Sección multimedia embebida en la web. | Reproduce video o galería de imágenes de la biblioteca. | Media | Fase 2 |

#### Requerimientos de gestión

| NÚMERO | Requerimiento de gestión | Responsable sugerido | Motivo | Relación con la web | Prioridad | Recomendación |
|--------|----------------------------|----------------------|--------|----------------------|-----------|---------------|
| 1 | Definir responsable de actualización de horarios y normas en la web. | Auxiliar/Jefe de biblioteca. | Garantizar información vigente. | El módulo de biblioteca requiere actualizaciones periódicas. | Alta | MVP |

#### Posibles sistemas adicionales / requerimientos de software

| Número | Sistema o funcionalidad adicional | Necesidad que atiende | Usuarios | Complejidad estimada | Recomendación |
|--------|----------------------------------|------------------------|-----------|----------------------|---------------|
| 1 | Sistema de recordatorios automáticos de devolución (correo/SMS). | Evitar retrasos y penalidades al usuario. | Estudiantes con préstamos activos. | Media | Fase 2 |

---

### UNIDAD DE EXTENSIÓN CULTURAL Y PROYECCIÓN SOCIAL (UECPS)

#### Requerimientos web

| NÚMERO | Requerimiento web | Usuario beneficiado | Input / entrada | Output / salida | Comportamiento esperado | Prioridad | Fase |
|--------|-------------------|----------------------|-------------------|-------------------|---------------------------|-----------|------|
| 1 | Sección descriptiva de funciones de la UECPS. | Alumnos, empresas, público general. | Contenido redactado por la UECPS. | Página con funciones y servicios visibles. | El usuario accede y visualiza claramente qué servicios brinda la UECPS. | Alta | MVP |
| 2 | Publicación de requisitos mínimos del convenio de prácticas. | Alumnos. | Reglamento de prácticas. | Lista de requisitos visibles en la web. | Muestra los requisitos obligatorios del convenio (período, horario, subvención, seguro). | Alta | MVP |
| 3 | Formulario digital para trámite de convenio. | Alumnos. | Datos del alumno, empresa, periodo. | Formulario enviado al sistema de gestión. | El alumno completa el formulario y los datos se envían automáticamente. | Alta | MVP |
| 4 | Flujograma del proceso de convenio (ISO 9001). | Alumnos. | Procedimiento estándar del área. | Diagrama de flujo navegable. | Muestra etapas del trámite de inicio a firma de la decana. | Alta | MVP |
| 5 | Galería o sección de videos cortos explicativos del proceso. | Alumnos. | Videos producidos por el área. | Videos embebidos en la sección. | El usuario reproduce videos explicativos del proceso. | Media | Fase 2 |
| 6 | Integración con fanpage de UECPS (jalador de noticias). | Alumnos, público general. | Publicaciones del fanpage. | Noticias y avisos visibles en la web FIIS. | Las publicaciones del fanpage se muestran automáticamente en la sección UECPS. | Media | Fase 2 |

#### Requerimientos de gestión

| NÚMERO | Requerimiento de gestión | Responsable sugerido | Motivo | Relación con la web | Prioridad | Recomendación |
|--------|----------------------------|----------------------|--------|----------------------|-----------|---------------|
| 1 | Definir responsable de actualizar el formulario y el flujograma. | Personal de UECPS. | Mantener proceso vigente en la web. | El formulario y flujograma deben actualizarse ante cambios de procedimiento. | Alta | MVP |

#### Posibles sistemas adicionales / requerimientos de software

| Número | Sistema o funcionalidad adicional | Necesidad que atiende | Usuarios | Complejidad estimada | Recomendación |
|--------|----------------------------------|------------------------|-----------|----------------------|---------------|
| 1 | Integración automática con fanpage de Facebook (API de noticias). | Mantener noticias actualizadas sin intervención manual. | Alumnos, público general. | Media | Fase 2 |

---

### TUTORIA FIIS

#### Requerimientos web

| NÚMERO | Requerimiento web | Usuario beneficiado | Input / entrada | Output / salida | Comportamiento esperado | Prioridad | Fase |
|--------|-------------------|----------------------|-------------------|-------------------|---------------------------|-----------|------|
| 1 | Sección descriptiva del programa de Tutoría (psicológica y académica). | Alumnos de la FIIS. | Información del programa. | Página con estructura y responsables. | Muestra descripción, servicios y nombre de profesionales responsables. | Alta | MVP |
| 2 | Publicación del reglamento/resolución rectoral en formato visual. | Alumnos. | Reglamento del programa. | Diagrama o video explicativo. | El usuario accede al reglamento en formato accesible. | Media | MVP |
| 3 | Guía visual de los 3 pasos para matrícula de alumnos en riesgo. | Alumnos en riesgo académico. | Procedimiento definido por el área. | Infografía/guía visual de pasos. | Muestra los 3 pasos obligatorios de forma clara y atractiva. | Alta | MVP |
| 4 | Contenido motivacional y visual para alumnos en riesgo. | Alumnos en riesgo. | Material visual y textos motivacionales. | Mensajes y elementos visuales en la sección. | Muestra banners o mensajes que invitan a buscar apoyo. | Media | MVP |
| 5 | Horarios de atención con opción de agendar citas en línea. | Alumnos. | Horarios del área y sistema de agenda. | Calendario de disponibilidad con reserva de cita. | El alumno selecciona horario disponible y agenda cita. | Alta | MVP |
| 6 | Botón de acceso directo a WhatsApp. | Alumnos. | Número de WhatsApp del área. | Botón de contacto rápido. | Abre WhatsApp con mensaje predefinido al hacer clic. | Alta | MVP |
| 7 | Calendario de talleres de Tutoría. | Alumnos. | Fechas de talleres del área. | Calendario visual con eventos. | Muestra talleres programados con fecha, hora y descripción. | Media | Fase 2 |
| 8 | Galería fotográfica y/o video del ambiente de Tutoría. | Alumnos. | Fotos y video del área. | Galería o video embebido. | Muestra el ambiente de la oficina y módulos de atención. | Baja | Fase 2 |

#### Requerimientos de gestión

| NÚMERO | Requerimiento de gestión | Responsable sugerido | Motivo | Relación con la web | Prioridad | Recomendación |
|--------|----------------------------|----------------------|--------|----------------------|-----------|---------------|
| 1 | Definir responsable de actualización de horarios y talleres. | Coordinador de Tutoría. | Mantener información vigente. | Los horarios y calendario requieren actualización frecuente. | Alta | MVP |
| 2 | Coordinar publicación del calendario con el Tercio Estudiantil. | Coordinador de Tutoría + Tercio. | Difusión efectiva de talleres. | El calendario web debe sincronizarse con los canales del Tercio. | Media | Fase 2 |

#### Posibles sistemas adicionales / requerimientos de software

| Número | Sistema o funcionalidad adicional | Necesidad que atiende | Usuarios | Complejidad estimada | Recomendación |
|--------|----------------------------------|------------------------|-----------|----------------------|---------------|
| 1 | Chatbot de consultas rápidas sobre Tutoría. | Responder consultas frecuentes de alumnos sin intervención humana. | Alumnos de la FIIS. | Media | Fase 2 o Fase 3 |
| 2 | Sistema de agenda en línea para citas con tutores. | Automatizar la reserva de citas. | Alumnos, tutores académicos y psicólogos. | Media | Fase 2 |

---

### CENTRO DE AUTOMATIZACION INDUSTRIAL

#### Requerimientos web

| NÚMERO | Requerimiento web | Usuario beneficiado | Input / entrada | Output / salida | Comportamiento esperado | Prioridad | Fase |
|--------|-------------------|----------------------|-------------------|-------------------|---------------------------|-----------|------|
| 1 | Sección con descripción de los dos programas (Integral y Especialización). | Estudiantes, público general. | Contenido del área. | Fichas de cada programa visibles. | Muestra los dos programas con acceso a información detallada de cada uno. | Alta | MVP |
| 2 | Fichas de cursos con nombre, duración, distribución y docente. | Estudiantes, público general. | Información de cursos del área. | Fichas individuales por curso. | El usuario selecciona un curso y visualiza su ficha completa. | Alta | MVP |
| 3 | Indicación de certificados a nombre de la nación. | Estudiantes, público general. | Información de certificación. | Texto destacado en la sección. | Muestra de forma visible que los cursos emiten certificados nacionales. | Media | MVP |
| 4 | Sección de próximas inscripciones con disponibilidad. | Estudiantes, público general. | Estado de inscripciones del área. | Sección/ventana emergente de inscripciones. | Indica si hay cursos disponibles; si es así, muestra cursos, horarios y contacto. | Alta | MVP |
| 5 | Indicación de público objetivo (pregrado, público general, posgrado). | Público general, posgrado. | Descripción del área. | Texto informativo en la sección. | Muestra claramente a quién van dirigidos los cursos. | Media | MVP |
| 6 | Publicación de horarios de atención del centro. | Todos los usuarios. | Horarios del área. | Tabla de horarios semanal. | Muestra horario de L-J y sábado claramente. | Alta | MVP |
| 7 | Sección de contacto: anexo, correo y redes sociales. | Todos los usuarios. | Datos de contacto del área. | Sección de contacto con enlaces. | Muestra anexo 5242, correo y botones a redes sociales. | Alta | MVP |
| 8 | Galería de fotos de laboratorios y equipos. | Estudiantes, público general. | Fotos existentes del área. | Galería fotográfica. | Muestra imágenes del laboratorio y equipamiento disponible. | Media | Fase 2 |

#### Requerimientos de gestión

| NÚMERO | Requerimiento de gestión | Responsable sugerido | Motivo | Relación con la web | Prioridad | Recomendación |
|--------|----------------------------|----------------------|--------|----------------------|-----------|---------------|
| 1 | Definir responsable de actualizar inscripciones y disponibilidad de cursos. | Soporte técnico / Coordinador del centro. | Mantener información de inscripciones vigente. | La sección de inscripciones requiere actualización permanente. | Alta | MVP |
| 2 | Coordinar con el área la selección de fotos aptas. | Soporte técnico. | Asegurar calidad del material fotográfico. | La galería requiere selección previa de imágenes. | Media | MVP |

---

### CENTRO DE ESPECIALIZACIÓN EJECUTIVA

#### Requerimientos web

| NÚMERO | Requerimiento web | Usuario beneficiado | Input / entrada | Output / salida | Comportamiento esperado | Prioridad | Fase |
|--------|-------------------|----------------------|-------------------|-------------------|---------------------------|-----------|------|
| 1 | Catálogo de programas del CEE (mes actual y siguientes). | Profesionales, egresados, público general. | Listado de programas del área. | Catálogo de programas visible. | Muestra programas disponibles con filtro por mes. | Alta | MVP |
| 2 | Ficha completa de cada programa (precio, duración, modalidad, sílabo). | Interesados en inscribirse. | Datos del programa. | Ficha detallada por programa. | Al seleccionar un programa, se despliega su información completa. | Alta | MVP |
| 3 | Carga automática de datos al seleccionar un programa. | Usuarios. | Datos del área. | Información cargada dinámicamente. | Los datos (fechas, inversión, docentes) se actualizan al elegir el programa. | Alta | MVP |
| 4 | Perfiles de docentes participantes. | Interesados en los programas. | Información de docentes del área. | Perfiles visibles por programa. | Muestra foto, nombre, grado y experiencia del docente. | Media | MVP |
| 5 | Sección de testimonios de alumnos. | Interesados en los programas. | Testimonios recopilados. | Carrusel o sección de testimonios. | Muestra opiniones y experiencias de ex-alumnos del CEE. | Media | Fase 2 |
| 6 | Botón de WhatsApp para consultas rápidas. | Todos los usuarios. | Número de WhatsApp del CEE. | Botón de contacto directo. | Abre WhatsApp con mensaje predefinido. | Alta | MVP |
| 7 | Módulo de noticias del CEE (listas, cronogramas). | Alumnos inscritos. | Contenido publicado por el área. | Noticias y avisos del ciclo. | Muestra noticias actualizadas del CEE. | Media | MVP |
| 8 | Sección dedicada y destacada del CEE en la web FIIS. | Todos los usuarios. | Diseño y estructura web. | Sección visible desde la página principal. | El CEE aparece en el menú principal con acceso directo. | Alta | MVP |

#### Requerimientos de gestión

| NÚMERO | Requerimiento de gestión | Responsable sugerido | Motivo | Relación con la web | Prioridad | Recomendación |
|--------|----------------------------|----------------------|--------|----------------------|-----------|---------------|
| 1 | Definir responsable de actualizar catálogo de programas y fechas. | Director del CEE. | Mantener catálogo vigente. | El catálogo requiere actualización mensual. | Alta | MVP |
| 2 | Establecer proceso de recopilación y validación de testimonios. | Coordinador del CEE. | Garantizar autenticidad de testimonios. | La sección de testimonios requiere aprobación previa. | Media | Fase 2 |

#### Posibles sistemas adicionales / requerimientos de software

| Número | Sistema o funcionalidad adicional | Necesidad que atiende | Usuarios | Complejidad estimada | Recomendación |
|--------|----------------------------------|------------------------|-----------|----------------------|---------------|
| 1 | Sistema de login para alumnos del CEE. | Acceso a información exclusiva de programas. | Alumnos inscritos en el CEE. | Alta | Fase 2 o Fase 3 |
| 2 | Integración con plataforma de pagos en línea. | Facilitar el proceso de inscripción y pago. | Interesados en los programas. | Alta | Fase 3 o Proyecto aparte |

---

### INSTITUTO DE INVESTIGACIÓN

#### Requerimientos web

| NÚMERO | Requerimiento web | Usuario beneficiado | Input / entrada | Output / salida | Comportamiento esperado | Prioridad | Fase |
|--------|-------------------|----------------------|-------------------|-------------------|---------------------------|-----------|------|
| 1 | Sección descriptiva del Instituto (misión, rol de actores, beneficios). | Docentes, alumnos. | Información del área. | Página descriptiva completa. | Muestra misión, estructura y beneficios de participar. | Alta | MVP |
| 2 | Listado de líneas de investigación vigentes. | Docentes, alumnos. | Listado actualizado del área. | Líneas publicadas y consultables. | El usuario visualiza las líneas de investigación activas. | Alta | MVP |
| 3 | Historial de proyectos aprobados con filtro por año. | Docentes, alumnos, evaluadores. | Datos de proyectos del área. | Lista filtrable de proyectos. | El usuario filtra por año/periodo y ve título, responsable y estado. | Media | MVP |
| 4 | Publicación de ganadores y proyectos seleccionados de concursos. | Docentes, alumnos, comunidad académica. | Resultados de cada concurso. | Sección con ganadores publicados. | Muestra listado de ganadores una vez concluido el proceso. | Media | MVP |
| 5 | Sección de convocatorias con bases y aviso de estado. | Docentes, alumnos. | Bases de convocatoria o aviso de no convocatoria. | Sección de convocatorias actualizable. | Muestra bases cuando hay convocatoria; aviso claro cuando no. | Alta | MVP |
| 6 | Publicación de la revista del Instituto con sus ediciones. | Docentes, alumnos, investigadores. | Archivos de la revista. | Revista accesible y descargable. | Muestra ediciones de la revista con acceso a la más reciente. | Media | Fase 2 |
| 7 | Enlace al fanpage oficial del Instituto en Facebook. | Todos los usuarios. | URL del fanpage. | Ícono/botón de acceso al fanpage. | Abre el fanpage en nueva pestaña. | Media | MVP |
| 8 | Datos de contacto visibles (correo y anexo). | Todos los usuarios. | Datos del área. | Sección de contacto destacada. | Muestra correo y número de anexo de forma visible. | Alta | MVP |

#### Requerimientos de gestión

| NÚMERO | Requerimiento de gestión | Responsable sugerido | Motivo | Relación con la web | Prioridad | Recomendación |
|--------|----------------------------|----------------------|--------|----------------------|-----------|---------------|
| 1 | Definir responsable de actualizar convocatorias y resultados. | Secretaria / director del Instituto. | Mantener convocatorias vigentes. | La sección de convocatorias requiere actualización oportuna. | Alta | MVP |

#### Posibles sistemas adicionales / requerimientos de software

| Número | Sistema o funcionalidad adicional | Necesidad que atiende | Usuarios | Complejidad estimada | Recomendación |
|--------|----------------------------------|------------------------|-----------|----------------------|---------------|
| 1 | Chatbot de consultas frecuentes sobre el Instituto. | Responder preguntas sobre líneas, procesos y contactos sin intervención humana. | Docentes, alumnos, investigadores. | Media | Fase 2 o Fase 3 |

---

### LABORATORIO DE QUÍMICA

#### Requerimientos web

| NÚMERO | Requerimiento web | Usuario beneficiado | Input / entrada | Output / salida | Comportamiento esperado | Prioridad | Fase |
|--------|-------------------|----------------------|-------------------|-------------------|---------------------------|-----------|------|
| 1 | Ficha general del laboratorio (tipo, servicios, horarios, responsables, contacto). | Estudiantes, docentes. | Información del área. | Página con ficha completa. | El usuario accede y visualiza toda la información básica del laboratorio. | Alta | MVP |
| 2 | Sección de servicios disponibles con detalle de cada uno. | Estudiantes, docentes. | Descripción de servicios del área. | Lista de servicios con detalle. | El usuario selecciona un servicio y ve su descripción completa. | Alta | MVP |
| 3 | Listado de materiales disponibles en el laboratorio. | Estudiantes, docentes. | Inventario del área. | Lista de materiales consultable. | Muestra materiales disponibles en el laboratorio. | Media | MVP |
| 4 | Prácticas realizadas asociadas a cursos. | Estudiantes. | Información de prácticas del área. | Lista de prácticas con enlace a cursos. | Muestra prácticas disponibles y su relación con cada curso. | Media | MVP |
| 5 | Descarga de guías de prácticas. | Estudiantes. | Archivos de guías del área. | Botón de descarga por guía. | El usuario descarga la guía de práctica correspondiente. | Alta | MVP |
| 6 | Normas de uso del laboratorio y normas de seguridad. | Estudiantes, docentes, visitantes. | Reglamento del área. | Sección de normas legible. | Muestra normas de uso y seguridad de forma clara. | Alta | MVP |
| 7 | Protocolos de manejo de residuos químicos y buenas prácticas ambientales. | Estudiantes, docentes. | Protocolos del área. | Sección de protocolos ambientales. | Muestra procedimientos de eliminación de desechos y buenas prácticas. | Alta | MVP |
| 8 | Videos informativos y/o recorrido virtual del laboratorio. | Estudiantes, docentes, público. | Videos/fotos del área. | Sección multimedia. | Reproduce video o galería visual del laboratorio. | Media | Fase 2 |

#### Requerimientos de gestión

| NÚMERO | Requerimiento de gestión | Responsable sugerido | Motivo | Relación con la web | Prioridad | Recomendación |
|--------|----------------------------|----------------------|--------|----------------------|-----------|---------------|
| 1 | Definir responsable de actualización de guías y listado de materiales. | Jefa del laboratorio. | Garantizar información vigente. | Las guías y materiales requieren actualización periódica. | Alta | MVP |
| 2 | Establecer protocolo de revisión y publicación de normas de seguridad. | Jefa del laboratorio + Decanato. | Garantizar cumplimiento de normas de seguridad. | Las normas deben ser validadas antes de publicarse. | Media | MVP |

---

### LABORATORIO ACADÉMICO Y RED FIIS

#### Requerimientos web

| NÚMERO | Requerimiento web | Usuario beneficiado | Input / entrada | Output / salida | Comportamiento esperado | Prioridad | Fase |
|--------|-------------------|----------------------|-------------------|-------------------|---------------------------|-----------|------|
| 1 | Sección de infraestructura de laboratorios con capacidades técnicas. | Estudiantes, docentes. | Información del área. | Página con fichas de laboratorios. | Muestra descripción de aulas e infraestructura con capacidades técnicas. | Alta | MVP |
| 2 | Calendario de eventos y capacitaciones en los laboratorios. | Estudiantes, docentes. | Fechas del área. | Calendario visual. | Muestra eventos y capacitaciones programadas, especialmente fuera del ciclo. | Media | MVP |
| 3 | Módulo de consulta de disponibilidad de laboratorios. | Estudiantes de las cuatro escuelas. | Solicitud del alumno. | Información de disponibilidad. | El alumno consulta si el laboratorio está disponible para su actividad. | Alta | MVP |
| 4 | Módulo de inscripción a actividades desde la web. | Estudiantes. | Datos del alumno y actividad. | Confirmación de inscripción. | El alumno se inscribe a una actividad directamente desde la web. | Alta | MVP |
| 5 | Enlace de contacto para consultas de disponibilidad (correo). | Estudiantes, docentes. | Datos de correo institucional. | Botón/enlace de correo. | Abre cliente de correo con destinatario preconfigurado. | Media | MVP |
| 6 | Información de red Wi-Fi: mapa de cobertura, puntos de acceso y redes. | Estudiantes, docentes, visitantes. | Datos de red del área. | Mapa o sección informativa de Wi-Fi. | Muestra ubicación de AP, área de cobertura y tipo de red por sector. | Media | MVP |
| 7 | Contraseñas Wi-Fi actualizadas por perfil de usuario. | Profesores, estudiantes, visitantes. | Contraseñas del área de TI. | Sección con contraseñas por perfil. | Muestra contraseñas vigentes diferenciadas por tipo de usuario. | Media | MVP |

#### Requerimientos de gestión

| NÚMERO | Requerimiento de gestión | Responsable sugerido | Motivo | Relación con la web | Prioridad | Recomendación |
|--------|----------------------------|----------------------|--------|----------------------|-----------|---------------|
| 1 | Definir responsable de actualización de contraseñas Wi-Fi y soporte. | Jefe de Red FIIS. | Mantener información de red vigente. | Las contraseñas y contactos de soporte requieren actualización periódica. | Alta | MVP |
| 2 | Establecer proceso de validación de disponibilidad de laboratorios. | Jefe de laboratorio. | Garantizar información de disponibilidad correcta. | El módulo de disponibilidad requiere datos actualizados del área. | Alta | MVP |
| 3 | Recopilar y mantener actualizado el listado de soporte técnico por sector (S1, S4, etc.). | Jefe de Red FIIS / Responsables de sector. | Garantizar que los usuarios puedan identificar al personal de soporte de su área. | El directorio de soporte debe estar vigente para que los usuarios reporten fallas correctamente. | Alta | MVP |

#### Posibles sistemas adicionales / requerimientos de software

| Número | Sistema o funcionalidad adicional | Necesidad que atiende | Usuarios | Complejidad estimada | Recomendación |
|--------|----------------------------------|------------------------|-----------|----------------------|---------------|
| 1 | Sistema de reserva en línea de laboratorios. | Gestionar el uso de laboratorios para cursos y capacitaciones. | Estudiantes, docentes, organizadores. | Alta | Fase 2 o Fase 3 |

---

### LABORATORIO DE INTELIGENCIA ARTIFICIAL (IA)

#### Requerimientos web

| NÚMERO | Requerimiento web | Usuario beneficiado | Input / entrada | Output / salida | Comportamiento esperado | Prioridad | Fase |
|--------|-------------------|----------------------|-------------------|-------------------|---------------------------|-----------|------|
| 1 | Actualización de contenido existente (misión, visión, personal). | Estudiantes, docentes, investigadores. | Información actualizada del área. | Sección con información correcta y vigente. | El usuario accede y visualiza información actualizada. | Alta | MVP |
| 2 | Sección de líneas de investigación y proyectos en curso. | Estudiantes, docentes. | Información de proyectos del área. | Sección de investigación con proyectos. | Muestra líneas de investigación y proyectos con descripción y avances. | Alta | MVP |
| 3 | Inventario de recursos y equipos disponibles. | Estudiantes, investigadores. | Inventario del área. | Lista de equipos con descripción. | El usuario consulta qué equipos tiene el laboratorio antes de acercarse. | Alta | MVP |
| 4 | Guía del proceso de acceso al laboratorio. | Estudiantes. | Proceso de acceso del área. | Guía paso a paso. | Muestra los pasos: carta de presentación, verificación y coordinación de horario. | Alta | MVP |
| 5 | Horario de atención visible. | Todos los usuarios. | Horarios del área. | Horario publicado. | Muestra horario actualizado de atención del laboratorio. | Alta | MVP |
| 6 | Enlace directo al Facebook oficial del laboratorio. | Todos los usuarios. | URL del Facebook del área. | Botón/ícono de acceso. | Abre el Facebook del laboratorio en nueva pestaña. | Media | MVP |
| 7 | Estructura en subpáginas navegables (investigación, equipos, acceso, contacto). | Todos los usuarios. | Contenido del área. | Menú de subpáginas. | El usuario navega entre secciones sin necesidad de hacer scroll extenso. | Alta | MVP |
| 8 | Video funcional del laboratorio. | Estudiantes, docentes, público. | Video del área. | Video embebido funcional. | Reproduce un video funcional del laboratorio. | Media | MVP |

#### Requerimientos de gestión

| NÚMERO | Requerimiento de gestión | Responsable sugerido | Motivo | Relación con la web | Prioridad | Recomendación |
|--------|----------------------------|----------------------|--------|----------------------|-----------|---------------|
| 1 | Definir responsable de actualización periódica de contenido. | Jefe del Laboratorio de IA. | Mantener información vigente. | El contenido requiere revisión periódica. | Alta | MVP |
| 2 | Coordinar subida de video funcional con apoyo del área. | Jefe del Laboratorio + asistentes. | Reemplazar el video roto. | La sección multimedia requiere enlace funcional. | Media | MVP |

---

### CONSULT FIIS

#### Requerimientos web

| NÚMERO | Requerimiento web | Usuario beneficiado | Input / entrada | Output / salida | Comportamiento esperado | Prioridad | Fase |
|--------|-------------------|----------------------|-------------------|-------------------|---------------------------|-----------|------|
| 1 | Catálogo de servicios y productos por línea estratégica. | Empresas, instituciones, público general. | Contenido de servicios del área. | Página con catálogo visible y organizado. | El usuario accede y visualiza los servicios clasificados por línea (industrial, sistemas, software, IA). | Alta | MVP |
| 2 | Sección de plana de consultores con perfil de cada uno. | Clientes potenciales, empresas. | Información de consultores del área. | Fichas de consultores publicadas. | Muestra nombre, especialidad y perfil de cada consultor disponible. | Alta | MVP |
| 3 | Sección de proyectos estratégicos destacados. | Clientes potenciales, empresas. | Información de proyectos ejecutados. | Fichas de proyectos con descripción, impacto y resultado. | El usuario visualiza proyectos que demuestran el valor del servicio. | Alta | MVP |
| 4 | Listado de clientes atendidos. | Clientes potenciales, empresas. | Listado de clientes del área. | Lista de clientes publicada. | Muestra empresas e instituciones atendidas como respaldo de experiencia. | Media | MVP |
| 5 | Guía paso a paso del proceso de contratación. | Clientes potenciales. | Procedimiento de contratación del área. | Guía visual de pasos del proceso. | Muestra las etapas desde el primer contacto hasta el inicio del servicio. | Alta | MVP |
| 6 | Folletos descargables por línea de servicio. | Clientes potenciales, empresas. | Archivos de folletos del área. | Botón de descarga por folleto. | El usuario descarga el folleto de la línea de servicio de su interés. | Alta | MVP |
| 7 | Datos de contacto visibles (correo, anexo) y botón de WhatsApp. | Todos los usuarios. | Datos de contacto del área. | Sección de contacto con botón de WhatsApp. | Muestra correo, anexo institucional y botón de WhatsApp como# CENTRO DE INFORMACIÓN FIIS

#### Requerimientos de gestión

| NÚMERO | Requerimiento de gestión | Responsable sugerido | Motivo | Relación con la web | Prioridad | Recomendación |
|--------|----------------------------|----------------------|--------|----------------------|-----------|---------------|
| 1 | Definir responsable de actualización del catálogo de servicios y folletos. | Director / Secretaría de Consult FIIS. | Mantener catálogo y folletos vigentes. | El catálogo y los folletos deben actualizarse ante cambios en la oferta de servicios. | Alta | MVP |
| 2 | Establecer proceso de validación y publicación de proyectos destacados. | Director de Consult FIIS. | Garantizar calidad y confidencialidad de la información de proyectos. | Los proyectos publicados deben contar con autorización del cliente y del director. | Alta | MVP |
| 3 | Definir protocolo para publicación del listado de clientes. | Director / Secretaría de Consult FIIS. | Mantener respaldo de experiencia institucional vigente. | El listado requiere autorización de cada cliente antes de su publicación. | Media | MVP |

#### Posibles sistemas adicionales / requerimientos de software

| Número | Sistema o funcionalidad adicional | Necesidad que atiende | Usuarios | Complejidad estimada | Recomendación |
|--------|----------------------------------|------------------------|-----------|----------------------|---------------|
| 1 | Chatbot especializado en servicios de Consult FIIS. | Informar sobre servicios, responder preguntas frecuentes, agendar reuniones con la secretaría y compartir folletos automáticamente según interés del usuario. | Empresas, instituciones y público general. | Alta | Fase 2 o Fase 3 |
| 2 | Sistema de agendamiento de reuniones con la secretaría. | Automatizar la coordinación de primera reunión entre el cliente potencial y el equipo de Consult FIIS. | Clientes potenciales, secretaría de Consult FIIS. | Media | Fase 2 |

## Requerimientos 6 - Bloque de egresados

### Requerimientos web

| NÚMERO | Requerimiento web | Usuario beneficiado | Input / entrada | Output / salida | Comportamiento esperado | Prioridad | Fase |
|--------|-------------------|----------------------|-------------------|-------------------|---------------------------|-----------|------|
| 2 | Directorio y Perfiles Profesionales | Egresado, Estudiante | LinkedIn URL, promoción, empresa actual, sector de especialidad. | Perfil público dentro de la comunidad digital FIIS. | Permite buscar egresados por empresa o sector para networking. Sincroniza datos básicos de LinkedIn. | Alta | MVP |
| 3 | Alertas de Empleabilidad por Correo | Egresado | Preferencias de búsqueda, áreas de interés, correo electrónico. | Notificaciones push y correos personalizados. | El sistema envía una alerta automática cuando una nueva oferta coincide con el perfil del egresado. | Media | MVP |
| 4 | Calendario de Eventos y Webinars | Egresado, Estudiante | Datos del evento, fecha, link de registro, ponente. | Calendario interactivo y formulario de inscripción. | Centraliza ferias laborales, charlas de tendencias y eventos de networking con recordatorios. | Media | Fase 2 |

### Requerimientos de gestión

| NÚMERO | Requerimiento de gestión | Responsable sugerido | Motivo | Relación con la web | Prioridad | Recomendación |
|--------|----------------------------|----------------------|--------|----------------------|-----------|---------------|
| 1 | Definir responsable de validación de empresas y vacantes. | Coordinación empresarial / administrador FIIS. | Evitar publicaciones falsas, vencidas o incompletas. | El módulo Empresas necesita aprobación antes de publicar. | Alta | Fase 2 o fase 3 |
| 6 | Integración de enlaces con Sistemas UNI/CEPS. | Coordinación de Centros Especializados. | Mantener actualizados los links de cursos (SAP, Python) y códigos de descuento. | Contenido del Módulo de Capacitación. | Baja | Fase 2 |

### Posibles sistemas adicionales / requerimientos de software

| Número | Sistema o funcionalidad adicional | Necesidad que atiende | Usuarios | Complejidad estimada | Recomendación |
|--------|----------------------------------|------------------------|-----------|----------------------|---------------|
| 1 | Integración Profunda con LinkedIn API | Evita que el egresado tenga que llenar su perfil manualmente; mantiene la base de datos de cargos y empresas actualizada automáticamente. | Egresados | Alta | Fase 2 |
| 2 | Analizador de CV con Inteligencia Artificial | Brinda retroalimentación inmediata sobre la estructura y palabras clave del CV antes de que pase a la revisión humana (Asesoría de Empleabilidad). | Egresados, Estudiantes | Alta | Fase 3 |
| 3 | Dashboard de Business Intelligence para Decanato | Transforma los datos de empleabilidad en gráficos y reportes automáticos para cumplir con los criterios de acreditación ABET. | Administrador FIIS, Decanato | Media | Fase 2 |

## Requerimientos 7 - Bloque de centros culturales, organizaciones estudiantiles, agrupaciones académicas y delegaturas

### Requerimientos web

| NÚMERO | Requerimiento web | Usuario beneficiado | Input / entrada | Output / salida | Comportamiento esperado | Prioridad | Fase |
|--------|-------------------|----------------------|-------------------|-------------------|---------------------------|-----------|------|
| 1 | Crear un módulo de Vida Estudiantil dentro del portal FIIS. | Estudiantes, postulantes, agrupaciones y autoridades. | Nombre del módulo, descripción y accesos principales. | Módulo visible en menú o portada. | El usuario accede a un espacio central para organizaciones, eventos, recursos y convocatorias. | Alta | MVP |
| 2 | Mostrar un directorio de centros culturales, agrupaciones y delegaturas. | Estudiantes, postulantes y visitantes. | Nombre, tipo de organización, descripción, logo y estado. | Directorio navegable y filtrable. | El usuario identifica las agrupaciones activas y accede a su ficha o subpágina. | Alta | MVP |
| 3 | Crear subpáginas por agrupación con identidad propia. | Agrupaciones, estudiantes y postulantes. | Logo, banner, misión, visión, historia y contactos. | Página pública por agrupación. | Cada organización comunica su identidad bajo un formato institucional uniforme. | Alta | MVP |
| 4 | Mostrar organigrama o directiva vigente de cada agrupación. | Estudiantes, autoridades y agrupaciones. | Cargos, responsables, comités y periodo. | Directiva visible y actualizada. | El usuario identifica responsables y canales de coordinación. | Alta | MVP |
| 5 | Publicar eventos, talleres, conferencias y actividades por agrupación. | Estudiantes y agrupaciones. | Título, fecha, lugar, modalidad, organizador y enlace. | Actividad publicada en agenda. | La actividad aparece en la subpágina y puede integrarse al calendario general. | Alta | MVP |
| 6 | Implementar calendario interagrupaciones con filtros. | Estudiantes, agrupaciones y autoridades. | Fecha, tipo de actividad, organizador, público objetivo. | Calendario filtrable. | El usuario consulta actividades por categoría: académico, cultural, tecnológico o gremial. | Alta | MVP |
| 7 | Mostrar convocatorias abiertas de agrupaciones. | Estudiantes y agrupaciones. | Descripción, requisitos, fechas y enlace/postulación. | Convocatoria publicada. | El estudiante encuentra convocatorias vigentes sin depender solo de redes sociales. | Alta | MVP |
| 8 | Integrar galerías multimedia optimizadas por agrupación. | Postulantes, estudiantes y agrupaciones. | Imágenes, videos, descripciones y fecha. | Galería visible y ligera. | La web muestra actividades ejecutadas sin afectar el rendimiento. | Media | Fase 2 |
| 9 | Permitir enlaces controlados a redes sociales oficiales. | Estudiantes, visitantes y agrupaciones. | Links de Instagram, Facebook, LinkedIn, GitHub u otros. | Accesos externos visibles. | El usuario accede a redes validadas desde la ficha de cada agrupación. | Alta | MVP |
| 11 | Clasificar documentos por tipo, curso, ciclo, año y agrupación. | Estudiantes y delegaturas. | Metadatos del documento. | Lista filtrada de recursos. | El sistema evita carpetas desordenadas y facilita búsqueda de recursos académicos. | Media | Fase 2 |
| 12 | Publicar proyectos destacados de centros culturales y agrupaciones. | Postulantes, estudiantes, empresas y visitantes. | Nombre, resumen, integrantes, evidencia y enlace. | Ficha de proyecto destacado. | La web visibiliza producción estudiantil, innovación y participación. | Media | Fase 2 |
| 13 | Mostrar testimonios o casos de participación estudiantil. | Postulantes y estudiantes. | Testimonio, imagen, agrupación y fecha. | Caso visible en web. | La web comunica valor de pertenecer a organizaciones FIIS. | Media | Fase 2 |
| 14 | Incluir sección de preguntas frecuentes por agrupación o Vida Estudiantil. | Estudiantes y postulantes. | Pregunta, respuesta y enlace relacionado. | FAQ visible. | El usuario resuelve dudas sobre participación, convocatorias y contacto. | Media | Fase 2 |
| 15 | Permitir contacto institucional con cada agrupación. | Estudiantes, postulantes y agrupaciones. | Correo, formulario, responsable o red oficial. | Canal de contacto visible. | El usuario puede comunicarse sin depender de intermediarios informales. | Alta | MVP |
| 16 | Separar noticias, eventos, convocatorias, recursos y proyectos. | Todos los usuarios. | Tipo de contenido y categoría. | Contenido ordenado por naturaleza. | La información no se mezcla en un único feed de noticias. | Alta | MVP |
| 17 | Mostrar enlaces a repositorios de código o proyectos tecnológicos. | Agrupaciones tecnológicas, estudiantes y visitantes. | URL de GitHub, descripción y proyecto. | Acceso a repositorio validado. | La web exhibe trabajos técnicos de UNICODE, CIBERSEC, Núcleo u otros. | Media | Fase 2 |
| 18 | Permitir vista responsive del módulo de Vida Estudiantil. | Usuarios móviles y de escritorio. | Acceso desde cualquier dispositivo. | Interfaz adaptada. | El usuario navega directorios, calendario y convocatorias desde celular sin pérdida de legibilidad. | Alta | MVP |
| 19 | Mostrar accesos rápidos a aula virtual, biblioteca e intranet desde contexto estudiantil. | Estudiantes. | Links y descripciones breves. | Accesos visibles. | El módulo conecta la vida estudiantil con servicios frecuentes de la facultad. | Media | MVP |
| 20 | Publicar información de soporte, ubicación y canales oficiales. | Estudiantes, visitantes y agrupaciones. | Horario, ubicación, correo y responsable. | Ficha de contacto. | El usuario ubica responsables y canales válidos de atención. | Alta | MVP |

### Requerimientos de gestión

| NÚMERO | Requerimiento de gestión | Responsable sugerido | Motivo | Relación con la web | Prioridad | Recomendación |
|--------|----------------------------|----------------------|--------|----------------------|-----------|---------------|
| 1 | Definir responsables de actualización por agrupación. | Juntas directivas / secretarios de comunicaciones. | Mantener información vigente. | Cada subpágina requiere responsables autorizados. | Alta | MVP |
| 2 | Establecer flujo de publicación y validación de contenidos estudiantiles. | Administrador FIIS / responsables de Vida Estudiantil. | Evitar publicaciones incompletas, duplicadas o no autorizadas. | Eventos, convocatorias y recursos deben pasar por revisión básica. | Alta | MVP |
| 3 | Crear criterios mínimos para registrar una agrupación en la web. | Autoridades / equipo de proyecto. | Ordenar qué organizaciones aparecen oficialmente. | El directorio requiere datos mínimos, estado y responsables. | Alta | MVP |
| 4 | Definir periodicidad de actualización de directivas y contactos. | Agrupaciones / administrador funcional. | Evitar datos desactualizados tras cambios de gestión. | Las fichas deben actualizarse por ciclo o periodo directivo. | Alta | MVP |
| 5 | Asignar permisos diferenciados para administradores y superusuarios de agrupación. | OTI / equipo web / responsables de agrupación. | Controlar quién publica, edita o aprueba contenido. | La web necesita roles para actualización sostenible. | Alta | Fase 2 |
| 6 | Estandarizar formatos de identidad por agrupación. | Comunicaciones / equipo UX/UI. | Mantener coherencia institucional sin eliminar identidad propia. | Las subpáginas deben respetar estructura, colores y jerarquía visual. | Media | MVP |
| 8 | Establecer protocolo para calendario interagrupaciones. | Agrupaciones / coordinación de espacios. | Evitar cruces de horarios y actividades. | El calendario debe validar fecha, lugar, modalidad y responsable. | Media | Fase 2 |
| 9 | Definir mantenimiento editorial sin depender siempre de programación. | Administrador web / responsables de contenido. | Facilitar actualizaciones frecuentes. | La web debe actualizar contenido desde CMS o panel sencillo. | Media | Fase 2 |
| 10 | Capacitar a responsables de agrupaciones en uso del sistema. | Equipo web / Vida Estudiantil. | Reducir errores de publicación y mejorar sostenibilidad. | Cada agrupación debe saber actualizar su información básica. | Media | Fase 2 |

### Posibles sistemas adicionales / requerimientos de software

| Número | Sistema o funcionalidad adicional | Necesidad que atiende | Usuarios | Complejidad estimada | Recomendación |
|--------|----------------------------------|------------------------|-----------|----------------------|---------------|
| 1 | Sistema de reclutamiento y postulación para agrupaciones. | Gestionar convocatorias, perfiles, CV, entrevistas y estados de postulantes. | Estudiantes, agrupaciones y administradores. | Alta | Fase 3 |
| 2 | CMS con roles por agrupación. | Permitir que responsables actualicen contenido sin tocar código. | Agrupaciones, administrador FIIS y comunicaciones. | Media | Fase 2 |
| 3 | Repositorio avanzado de recursos académicos. | Almacenar, clasificar y buscar PDF, guías, bancos de exámenes y materiales. | Estudiantes, delegaturas y docentes asesores. | Alta | Fase 2 |
| 4 | Calendario con prevención de cruces y control de espacios. | Detectar solapamientos de actividades y gestionar auditorios o plataformas. | Agrupaciones, autoridades y estudiantes. | Media | Fase 3 |
| 5 | Integración con autenticación institucional UNI. | Permitir ingreso con correo institucional y perfiles diferenciados. | Estudiantes, agrupaciones y administradores. | Alta | Fase 3 |
| 6 | Chatbot o asistente de preguntas frecuentes. | Responder dudas frecuentes sobre agrupaciones, eventos y procesos estudiantiles. | Estudiantes y postulantes. | Media | Fase 3 |
| 7 | PWA o versión instalable del portal estudiantil. | Permitir acceso rápido desde celular y consulta de información frecuente. | Estudiantes. | Media | Fase 3 |
| 8 | Integración con GitHub para proyectos tecnológicos. | Mostrar proyectos, repositorios y producción técnica de agrupaciones. | Agrupaciones tecnológicas y visitantes. | Media | Fase 3 |


# Requerimientos no tomados

## Bloque 1 - Empresas

1. Decisión: No implementar en MVP ni Fase 2 inmediata.
2. Justificación:

    La "capa editorial FIIS sobre la bolsa central UNI" (req #20) implica una integración técnica con un sistema externo del cual no se tiene control ni certeza de disponibilidad técnica. Depende de:

    - Que la Bolsa Central UNI exponga una API pública o gestionable.
    - Coordinación con OTI UNI y responsables de la bolsa central.
    - Mantenimiento continuo ante cambios del lado externo.

Dado que el módulo Empresas propio de la FIIS (requerimientos 1-25 del bloque principal) cubre las necesidades inmediatas (publicación de prácticas, ofertas, convenios, eventos y perfil de empresas) sin depender de terceros, se opta por descartar la integración con la bolsa central UNI en esta etapa.
Si en una fase posterior la Bolsa Central UNI habilita una interfaz de programación de aplicaciones API documentada y estable, se podrá evaluar técnicamente la integración para sincronizar oportunidades, enlaces o filtros relevantes para la FIIS. Hasta entonces, el módulo Empresas FIIS opera de forma independiente y autónoma.

### Requerimientos web

| NÚMERO | Requerimiento web | Usuario beneficiado | Input / entrada | Output / salida | Comportamiento esperado | Prioridad | Fase |
|--------|-------------------|----------------------|-------------------|-------------------|---------------------------|-----------|------|
| 20 | Generar una capa editorial FIIS sobre la bolsa central UNI, sin duplicar infraestructura. | Estudiante, egresado, empresa, administrador. | Enlaces, filtros, curaduría y oportunidades destacadas. | Sección FIIS de oportunidades conectada a bolsa UNI. | La FIIS ordena y comunica oportunidades relevantes sin crear una plataforma duplicada innecesaria. | Alta | MVP |

---

### Requerimientos de gestión

| NÚMERO | Requerimiento de gestión | Responsable sugerido | Motivo | Relación con la web | Prioridad | Recomendación |
|--------|----------------------------|----------------------|--------|----------------------|-----------|---------------|
| 8 | Coordinar integración con la bolsa central UNI. | FIIS, UNI, OTI y responsables de empleabilidad. | Evitar duplicidad de infraestructura y aprovechar sistemas existentes. | La sección FIIS debe enlazar, ordenar o curar oportunidades sin competir con la bolsa central. | Alta | MVP |

## Bloque 2 - Altos cargos (secretaria administrativa, academica y decanato)

### Requerimientos web

**Secretaria academica**

1. Decisión: No implementar.
2. Justificación: 

    Este requerimiento depende de una fuente de datos externa (notas, aprobados/desaprobados, cursos críticos) que actualmente no está disponible ni integrada en el sistema. Para generar estos gráficos se requeriría:
    - Acceso a los sistemas académicos institucionales (matrícula, actas de notas).
    - Carga periódica de datos externos con procesos de validación.
    - Definición previa de qué métricas y con qué permisos se visualizan.

El alcance del portal web no incluye la gestión académica ni la centralización de datos de rendimiento. Por tanto, se descarta este requerimiento. Si en una fase posterior se dispone de una fuente de datos estructurada y accesible, podría evaluarse como un módulo de reporting independiente.

| NÚMERO | Requerimiento web | Usuario beneficiado | Input / entrada | Output / salida | Comportamiento esperado | Prioridad | Fase |
|--------|-------------------|----------------------|-------------------|-------------------|---------------------------|-----------|------|
| 3 | Incorporar gráficos o paneles de análisis académico. | Estudiantes, autoridad. | Datos de aprobados, desaprobados y cursos críticos. | Paneles estadísticos y gráficos académicos. | El sistema permite visualizar el análisis académico autorizado. | Media | Fase 2 |

---

### Requerimientos de gestión

**Secretaria academica**

| NÚMERO | Requerimiento de gestión | Responsable sugerido | Motivo | Relación con la web | Prioridad | Recomendación |
|--------|----------------------------|----------------------|--------|----------------------|-----------|---------------|
| 2 | Establecer validación previa para publicar información académica y estadísticas estudiantiles. | Decanato | Saber cómo está la salud de la FIIS. | Los paneles y gráficos académicos requieren aprobación previa. | Alta | Fase 2 |

## Bloque 3 - Docentes, escuelas y departamentos

**Req 4 — Directorio institucional de docentes**
1. Decisión: No implementar.
2. Justificación: 

    Los datos docentes (nombres, cursos a cargo, horarios) ya son publicados por los sistemas institucionales existentes en el proceso de matrícula — específicamente en la carga horaria donde los alumnos seleccionan sus cursos y profesores por ciclo. Implementar un directorio independiente implicaría duplicar información que ya está disponible en los canales oficiales de la UNI, sin agregar valor real al usuario. Se descarta.

**Req 8 — Sistema de reserva de asesorías académicas**
1. Decisión: No implementar.
2. Justificación: 

    La reserva de asesorías requiere coordinación administrativa y logística fuera del alcance del portal web: disponibilidad de ambientes físicos (salones, oficinas), asignación de horarios docentes, gestión de permisos y flujos de aprobación. Esta funcionalidad corresponde a un sistema de gestión interna de procesos administrativos que se está considerando como un proyecto aparte, donde se centralicen reservas, incidencias y demás operaciones que requieren intervención administrativa. Se descarta del portal web.

### Requerimientos web

| NÚMERO | Requerimiento web | Usuario beneficiado | Input / entrada | Output / salida | Comportamiento esperado | Prioridad | Fase |
|--------|-------------------|----------------------|-------------------|-------------------|---------------------------|-----------|------|
| 4 | Directorio institucional de docentes | Estudiantes, docentes e investigadores | Datos académicos del docente | Perfil docente público | Buscar docentes por categoría o especialidad | Alta | Fase 2 |
| 8 | Sistema de reserva de asesorías académicas | Docentes y estudiantes | Fecha, hora y motivo | Reserva confirmada | Solicitar y gestionar asesorías académicas | Media | Fase 2 |

## Bloque 4 - Administrativo

**Requerimientos 1–11 y 14 del Bloque 4 — Sistemas administrativos internos**
1. Decisión: No implementar en el portal web. Se agrupan en un sistema aparte de gestión administrativa interna.
2. Justificación:

    Todos estos requerimientos corresponden a procesos operativos y administrativos que manejan información sensible, datos personales de personal administrativo y flujos internos de la facultad (asistencia, vacaciones, incidencias, presupuesto, trámites documentarios, reservas). Mezclarlos con el portal web público implicaría:
    - Exponer datos sensibles en una plataforma de acceso abierto.
    - Duplicar funcionalidades que ya existen en sistemas institucionales (asistencia por huella digital, control de personal presencial).
    - Mezclar responsabilidades: el portal web tiene un perfil institucional-informativo y de empleabilidad, no de gestión interna.

Estos requerimientos se consolidan en un Sistema de Gestión Administrativa Interna FIIS, independiente del portal web, con su propia base de datos, control de acceso restringido por roles administrativos y flujos de aprobación. Esto mantiene la separación de concerns y protege la información sensible.

### Requerimientos web

| NÚMERO | Requerimiento web | Usuario beneficiado | Input / entrada | Output / salida | Comportamiento esperado | Prioridad | Fase |
|--------|-------------------|----------------------|-------------------|-------------------|---------------------------|-----------|------|
| 1 | Mesa de Partes virtual | Estudiantes, docentes y administrativos | Datos personales, tipo de trámite, documentos adjuntos y solicitud | Registro digital del trámite con código de seguimiento | El usuario registra su trámite, el sistema genera un código y permite consultar el estado en línea | Alta | MVP |
| 2 | Sistema de seguimiento de trámites | Estudiantes y administrativos | Código de trámite o DNI | Estado actualizado del trámite | El sistema muestra automáticamente el estado y avance del documento | Alta | MVP |
| 3 | Módulo de gestión de asistencia | Personal administrativo y RR.HH. | Registro de ingreso, permisos y tardanzas | Historial de asistencia y reportes | El sistema registra y actualiza automáticamente la asistencia del personal | Alta | MVP |
| 4 | Solicitud digital de vacaciones y licencias | Personal administrativo | Formulario de solicitud y fechas requeridas | Solicitud enviada y notificación de aprobación o rechazo | El sistema deriva automáticamente la solicitud al responsable correspondiente | Media | MVP |
| 5 | Dashboard de planificación y presupuesto | Autoridades y Oficina OPP | Datos presupuestales y metas institucionales | Indicadores y gráficos en tiempo real | El sistema actualiza automáticamente indicadores y reportes financieros | Alta | MVP |
| 6 | Sistema de incidencias y mantenimiento | Estudiantes, docentes y administrativos | Reporte de falla con descripción y evidencia | Ticket de atención y seguimiento | El sistema asigna la incidencia y muestra su estado de atención | Alta | MVP |
| 7 | Calendario de reserva de espacios | Docentes y administrativos | Fecha, hora y ambiente solicitado | Confirmación de reserva | El sistema evita cruces y muestra disponibilidad en tiempo real | Media | MVP |
| 8 | Sistema de reserva de equipos audiovisuales | Docentes y administrativos | Tipo de equipo, fecha y actividad | Confirmación de préstamo o reserva | El sistema verifica disponibilidad y registra el préstamo | Media | MVP |
| 9 | Repositorio audiovisual institucional | Comunidad universitaria | Videos, grabaciones y material multimedia | Acceso al contenido audiovisual | El sistema almacena y organiza el material para consulta en línea | Baja | Fase 2 |
| 10 | Repositorio digital de documentos | Administrativos y autoridades | Documentos escaneados y clasificados | Consulta y descarga de archivos | El sistema permite búsquedas rápidas y acceso seguro a documentos | Alta | MVP |
| 11 | Sistema de gestión de evidencias de acreditación | Oficina de Calidad y Acreditación | Evidencias, indicadores y reportes | Panel de seguimiento y almacenamiento digital | El sistema organiza información y facilita auditorías | Alta | Fase 2 |
| 14 | Sistema de notificaciones automáticas | Toda la comunidad FIIS | Correos, estados de trámites y alertas | Mensajes automáticos enviados al usuario | El sistema informa cambios y recordatorios en tiempo real | Alta | Fase 2 |

---

### Requerimientos de gestión

| NÚMERO | Requerimiento de gestión | Responsable sugerido | Motivo | Relación con la web | Prioridad | Recomendación |
|--------|----------------------------|----------------------|--------|----------------------|-----------|---------------|
| 3 | Definir responsables de supervisión de trámites virtuales | Mesa de Partes y áreas administrativas | Garantizar seguimiento y respuesta oportuna | El sistema de trámites necesita monitoreo permanente | Alta | MVP |
| 4 | Implementar capacitaciones para el uso de la plataforma web | Oficina de Recursos Humanos y Soporte TI | Facilitar adaptación tecnológica del personal | El correcto uso de la web depende de usuarios capacitados | Alta | MVP |
| 7 | Definir flujos de aprobación de solicitudes y trámites | Oficinas administrativas | Reducir retrasos y desorden operativo | Los módulos digitales requieren validaciones automáticas | Alta | Fase 2 |
| 8 | Asignar responsables del control de inventarios digitales | Oficina de Abastecimiento | Mantener información precisa sobre stock y bienes | El sistema logístico depende de datos actualizados | Alta | MVP |
| 12 | Establecer políticas de atención y respuesta virtual | Mesa de Partes y atención administrativa | Mejorar experiencia del usuario y tiempos de respuesta | Los usuarios interactuarán mediante canales digitales | Media | Fase 2 |
| 13 | Designar responsables del sistema de acreditación y calidad | Oficina de Calidad y Acreditación | Garantizar actualización de indicadores y evidencias | Los dashboards y reportes requieren monitoreo constante | Media | Fase 2 |
| 15 | Coordinar digitalización progresiva de documentos físicos | Oficina de Archivo y autoridades FIIS | Reducir dependencia del archivo físico | La plataforma necesita contenido documental digital | Media | Fase 2 |
| 16 | Establecer responsables de monitoreo de incidencias | Servicios Generales y Vigilancia | Mejorar tiempos de atención y control de problemas | Los módulos de incidencias requieren supervisión constante | Media | Fase 2 |
| 17 | Crear protocolos de uso de equipos audiovisuales | Oficina de Medios Audiovisuales | Evitar pérdidas y conflictos de reserva | El sistema de préstamos requiere reglas claras | Media | Fase 2 |

## Bloque 6 - Egresados

1. Decisión: Implementación parcial. Lo que se solapa con el bloque Empresas se cubre desde el portal web. Las funcionalidades exclusivas de egresados se delegan a un Sistema de Egresados FIIS independiente.
2. Justificación:

    Del bloque de egresados, las funcionalidades de bolsa de empleabilidad, calendario de eventos y casos de éxito ya están contempladas en los requerimientos 6, 7, 10, 14 y 21 del bloque Empresas, por lo que se gestionan desde el portal web sin duplicar esfuerzos.
    Las funcionalidades restantes —directorio de egresados con networking, alertas personalizadas, asesoría de empleabilidad, mentoría, foro comunitario, donaciones, capacitación especializada y reserva de instalaciones— son componentes altamente especializados con lógica de negocio, moderación y datos propios que no corresponden al perfil del portal web. Estas se agrupan en un Sistema de Egresados FIIS como plataforma independiente, conectable al portal mediante enlaces y autenticación compartida.

### Requerimientos web

| NÚMERO | Requerimiento web | Usuario beneficiado | Input / entrada | Output / salida | Comportamiento esperado | Prioridad | Fase |
|--------|-------------------|----------------------|-------------------|-------------------|---------------------------|-----------|------|
| 1 | Bolsa de Empleabilidad Integrada | Egresado, Empresa | Datos de la oferta, perfil solicitado, modalidad, enlace de postulación. | Lista de vacantes filtradas por carrera (Industrial/Sistemas). | Las empresas registran ofertas; el egresado postula directamente. Incluye métricas de éxito para el Decanato. | Alta | MVP |
| 5 | Agendamiento de Asesoría de Empleabilidad | Egresado | Selección de horario, carga de CV para revisión. | Cita confirmada en calendario y notificación al orientador. | Permite reservar sesiones con psicólogos para simulacros de entrevista y mejora de perfil profesional. | Alta | Fase 2 |
| 6 | Módulo de Mentoría Senior-Junior | Egresado (Senior/Junior) | Perfil del mentor, áreas de asesoría, solicitud del mentee. | Conexión directa entre ambos perfiles. | Facilita que egresados con experiencia orienten a los recién egresados en su desarrollo de carrera. | Media | Fase 2 |
| 7 | Enlace a Capacitación Especializada | Egresado, Estudiante | Clic en curso de interés (SAP, Python, Power BI). | Redirección a interfaces de Sistemas UNI u otros centros. | Conecta la web con los centros de capacitación de la facultad para ofrecer descuentos exclusivos. | Baja | Fase 2 |
| 8 | Módulo de Gestión de Donaciones | Egresado, Facultad | Monto de donación, proyecto elegido (becas, laboratorios). | Comprobante de donación y reporte de impacto. | Permite a los egresados contribuir económicamente al financiamiento de proyectos de la FIIS. | Baja | Fase 3 |
| 9 | Foro de Comunidad e Intercambio | Egresado | Publicación de consultas, experiencias o noticias. | Hilo de discusión visible para miembros registrados. | Espacio interno para fortalecer el vínculo y resolver dudas técnicas o laborales entre colegas. | Media | Fase 3 |
| 10 | Reserva de Instalaciones y Beneficios | Egresado | Fecha de reserva, tipo de instalación (Biblioteca/Deportes). | Ticket de acceso o confirmación de reserva. | Gestiona el acceso físico a la facultad y el uso de servicios como el gimnasio o centro médico UNI. | Baja | Fase 3 |

---

### Requerimientos de gestión

| NÚMERO | Requerimiento de gestión | Responsable sugerido | Motivo | Relación con la web | Prioridad | Recomendación |
|--------|----------------------------|----------------------|--------|----------------------|-----------|---------------|
| 2 | Gestión de convenios empresariales exclusivos. | Oficina de Egresados / Decanato FIIS. | Formalizar alianzas con empresas donde laboran alumnos FIIS para ofertas exclusivas. | Alimenta la base de datos de la Bolsa de Trabajo. | Alta | MVP |
| 3 | Asignación de personal para Asesoría de Empleabilidad. | Oficina de Bienestar / Psicólogos de la facultad. | Las citas reservadas en la web requieren personal humano que las atienda. | Soporte operativo del Módulo de Calendario/Citas. | Alta | Fase 2 |
| 4 | Protocolo de seguimiento e impacto (Métricas). | Unidad de Acreditación (ABET/Sunedu). | Justificar la inversión ante el Decanato mediante el conteo de egresados colocados. | Reportes automáticos del Dashboard administrativo. | Alta | MVP |
| 5 | Moderación y reglas de comunidad digital. | Comité Alumni / Administrador Web. | Evitar spam y mantener la red profesional (estilo LinkedIn) con perfiles reales. | Control del Foro y Red de Contactos. | Media | Fase 2 |
| 7 | Marco legal y financiero para Donaciones. | Patronato FIIS / Tesorería. | Garantizar la transparencia y el destino de los fondos para becas o laboratorios. | Proceso de pago del Módulo de Apoyo Institucional. | Media | Fase 3 |
| 8 | Coordinación de reserva de instalaciones físicas. | Administración de Local / Oficina de Deportes CEIIS. | Fecha de reserva, tipo de instalación (Auditorio/Biblioteca/Deportes). | Ticket de acceso o confirmación de reserva. | Baja | Fase 3 |
| 9 | Captación de Inversionistas para Proyectos. | Unidad de Investigación / Emprendimiento. | Vincular grandes proyectos de alumnos con egresados senior o empresas top. | Gestión de la sección Feria Laboral y Proyectos. | Media | Fase 3 |

## Bloque 7 - Centros culturales, organizaciones estudiantiles, agrupaciones académicas y delegaturas

1. Decisión: No implementar.
2. Justificación:

    Las agrupaciones estudiantiles y delegaturas ya gestionan sus propios canales de distribución de materiales académicos (Google Drive, plataformas propias, grupos cerrados). Implementar un repositorio oficial dentro del portal web implicaría:
    - Un proceso de validación y moderación constante para evitar duplicados, material no autorizado o desactualizado.
    - Responsabilidad institucional sobre el contenido subido (exámenes, guías, material de cursos), lo que expone a la FIIS a riesgos legales y de propiedad intelectual.
    - Carga operativa sin un responsable definido que revise, clasifique y mantenga el repositorio actualizado.

Dado que las soluciones existentes cubren esta necesidad sin intervención institucional, se descarta del portal web.

### Requerimientos web

| NÚMERO | Requerimiento web | Usuario beneficiado | Input / entrada | Output / salida | Comportamiento esperado | Prioridad | Fase |
|--------|-------------------|----------------------|-------------------|-------------------|---------------------------|-----------|------|
| 10 | Crear repositorio de recursos académicos y materiales autorizados. | Estudiantes, delegaturas y agrupaciones. | PDF, guías, exámenes, talleres, enlaces y categorías. | Repositorio organizado. | El usuario encuentra materiales por curso, tipo, agrupación o fecha. | Alta | Fase 2 |

---

### Requerimientos de gestión

| NÚMERO | Requerimiento de gestión | Responsable sugerido | Motivo | Relación con la web | Prioridad | Recomendación |
|--------|----------------------------|----------------------|--------|----------------------|-----------|---------------|
| 7 | Definir normas para carga y uso de documentos académicos. | Delegaturas / responsables académicos. | Evitar material no autorizado o mal clasificado. | El repositorio requiere criterios de validación y categorización. | Alta | Fase 2 |
