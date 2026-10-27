import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import {
  Document,
  Packer,
  Paragraph,
  TextRun,
  HeadingLevel,
  Table,
  TableRow,
  TableCell,
  WidthType,
  BorderStyle,
  AlignmentType,
  ShadingType,
} from "docx";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const outPath = path.join(
  __dirname,
  "..",
  "Evaluacion_Desempeno_Tecnico_Estudiantes.docx"
);

const fecha = "30 de junio de 2026";
const repo = "Dnnst89/SYS-Mantenimiento";
const repoUrl = "https://github.com/Dnnst89/SYS-Mantenimiento";

function heading(text, level = HeadingLevel.HEADING_1) {
  return new Paragraph({ text, heading: level, spacing: { before: 240, after: 120 } });
}

function para(text, opts = {}) {
  return new Paragraph({
    spacing: { after: 120 },
    ...opts,
    children: [new TextRun({ text, size: 22 })],
  });
}

function bullet(text) {
  return new Paragraph({
    bullet: { level: 0 },
    spacing: { after: 80 },
    children: [new TextRun({ text, size: 22 })],
  });
}

function labelValue(label, value) {
  return new Paragraph({
    spacing: { after: 80 },
    children: [
      new TextRun({ text: `${label}: `, bold: true, size: 22 }),
      new TextRun({ text: value, size: 22 }),
    ],
  });
}

function scoreRow(criterio, danny, ruperto, jose) {
  return new TableRow({
    children: [criterio, danny, ruperto, jose].map((text) =>
      new TableCell({
        children: [new Paragraph({ children: [new TextRun({ text, size: 20 })] })],
      })
    ),
  });
}

const doc = new Document({
  sections: [
    {
      properties: {},
      children: [
        new Paragraph({
          alignment: AlignmentType.CENTER,
          spacing: { after: 200 },
          children: [
            new TextRun({ text: "EVALUACIÓN DE DESEMPEÑO TÉCNICO", bold: true, size: 36 }),
          ],
        }),
        new Paragraph({
          alignment: AlignmentType.CENTER,
          spacing: { after: 120 },
          children: [
            new TextRun({ text: "Proyecto SYS-Mantenimiento", size: 28 }),
          ],
        }),
        new Paragraph({
          alignment: AlignmentType.CENTER,
          spacing: { after: 400 },
          children: [
            new TextRun({ text: `Fecha: ${fecha}`, italics: true, size: 22 }),
          ],
        }),

        heading("1. Contexto del proyecto"),
        para(
          "Sitio corporativo desarrollado con Next.js 16 (App Router), React 19 y Tailwind CSS v4. Incluye internacionalización español/inglés, formulario de contacto, wizard de cotización, páginas de servicios, sectores, proveedores y despliegue continuo con GitHub Actions y Netlify."
        ),
        labelValue("Repositorio", repoUrl),
        labelValue("Rama principal", "main"),
        labelValue("Pipeline CI", "lint + build en cada push/PR"),
        para(
          "La evaluación se basa en el historial de commits, pull requests, revisiones de código y comentarios registrados en GitHub hasta la fecha indicada."
        ),

        heading("2. Criterios de evaluación"),
        bullet("Entrega funcional: completitud de tareas asignadas y calidad del resultado."),
        bullet("Calidad de código: ESLint, estructura de componentes, reutilización y convenciones del repo."),
        bullet("Flujo Git/GitHub: ramas, PRs, alcance de cambios, rebase y cumplimiento del proceso de revisión."),
        bullet("Atención al detalle: responsive design, requisitos del PO y archivos fuera de alcance."),
        bullet("Capacidad de corrección: respuesta a feedback y resolución de errores reportados."),
        para("Escala de calificación: 1 (insuficiente) a 5 (excelente)."),

        heading("3. Resumen de hallazgos en GitHub"),
        heading("Incidencias y comentarios de revisión relevantes", HeadingLevel.HEADING_2),

        labelValue("PR #9 — JoseVc-code", "CHANGES_REQUESTED"),
        bullet("No actualizó la rama con rebase desde main."),
        bullet("No siguió nomenclatura de ramas (ej. feature/ABC-123-nombre-task)."),
        bullet("No creó rama independiente por tarea."),

        labelValue("PR #10 — JoseVc-code", "CHANGES_REQUESTED (cerrado sin merge)"),
        bullet("Modificó .vscode/settings.json fuera del alcance de la tarea."),
        bullet("Contenido descriptivo de cards en lib/projectsCategories.js no coincide con texto del Product Owner."),
        bullet("PR apuntaba a main en lugar de dev según flujo acordado."),

        labelValue("PR #11 — Ruperto-lab", "Mergeado (posterior revert parcial)"),
        bullet("Incluyó cambios no solicitados en package.json y package-lock.json (downgrade Next 16→15, React 19→18)."),
        bullet("Merge realizado por el mismo autor sin aprobación de admin (violación de flujo)."),
        bullet("Commit revert unapproved changes confirma que el cambio no estaba aprobado."),

        labelValue("PR #12 — Ruperto-lab", "Mergeado — Fix stepper styles"),
        bullet("Mejora visual del stepper de cotización; trabajo aceptado en su alcance."),

        labelValue("PR #15 — Ruperto-lab", "APPROVED — LGTM"),
        bullet("Actualización del hero aprobada por revisor."),

        labelValue("PR #16 — Ruperto-lab", "CHANGES_REQUESTED (abierto)"),
        bullet("Indicador del paso seleccionado cortado en borde izquierdo del stepper; falta padding/margen."),

        labelValue("PR #17 — JoseVc-code", "CHANGES_REQUESTED (abierto)"),
        bullet("PR modifica 97 archivos cuando la tarea era solo actualizar imágenes del grid."),
        bullet("Cambios no relacionados: rutas, metadata, layout, estilos globales, importaciones y eliminación de archivos."),
        bullet("Se solicitó cerrar el PR y crear uno nuevo con alcance mínimo."),

        labelValue("PR #18 — Ruperto-lab", "CHANGES_REQUESTED (abierto)"),
        bullet("Imagen del hero se corta en mobile; se recomienda imagen específica por breakpoint."),

        labelValue("Commits de corrección — Danny Soto (dnnst89)", ""),
        bullet("fix linter error, solved slint error, fix slint warnings (errores ESLint corregidos)."),
        bullet("fix logos issue carousel homepage."),
        bullet("revert unapproved changes (reversión de merge no aprobado)."),

        heading("4. Evaluación individual por estudiante"),

        // --- DANNY ---
        heading("4.1 Danny Soto (GitHub: Dnnst89 / dnnst89)", HeadingLevel.HEADING_2),
        labelValue("Rol en el proyecto", "Desarrollador principal y revisor de PRs del equipo"),
        labelValue("Commits (sin merges)", "19"),
        labelValue("PRs fusionados", "#1 al #8 (diseño, contacto, servicios, cotización, refactor homepage, logos)"),
        para("Fortalezas:"),
        bullet("Mayor volumen de entregas funcionales: landing, carrusel de marcas, formulario de contacto, páginas de servicios/nosotros, wizard de cotización."),
        bullet("Refactorización del homepage con estrategia de reutilización de componentes (PR #6)."),
        bullet("Corrige proactivamente errores de linter y problemas del carrusel de logos."),
        bullet("Documentación del README completa (stack, CI/CD, i18n, estructura)."),
        bullet("Actúa como revisor técnico con feedback constructivo y específico a compañeros."),
        para("Áreas de mejora:"),
        bullet("Consistencia en mensajes de commit (typos: 'slint' en lugar de ESLint, 'hompage', 'redisign')."),
        bullet("Establecer y hacer cumplir branch protection antes de que ocurran merges no aprobados."),
        bullet("Separar claramente commits de chore/update genéricos de entregas con valor de negocio."),
        labelValue("Calificación global", "4.2 / 5"),

        // --- RUPERTO ---
        heading("4.2 Ruperto (GitHub: Ruperto-lab)", HeadingLevel.HEADING_2),
        labelValue("Rol en el proyecto", "Desarrollador frontend — UI/UX de hero y cotización"),
        labelValue("Commits (sin merges)", "3 (+ merges como autor)"),
        labelValue("PRs", "#11, #12, #15 (fusionados); #16, #18 (pendientes de corrección)"),
        para("Fortalezas:"),
        bullet("Entrega mejoras visibles en hero section y stepper de cotización."),
        bullet("PR #15 aprobado con comentario positivo (LGTM)."),
        bullet("PR #12 resolvió legibilidad del primer paso del wizard."),
        bullet("Comunica en descripción del PR el objetivo del cambio."),
        para("Errores e incidencias documentadas en GitHub:"),
        bullet("PR #11: cambios fuera de alcance en dependencias (package.json / package-lock.json con ~961 líneas modificadas)."),
        bullet("Auto-merge a main sin aprobación del admin; posterior revert por parte del equipo."),
        bullet("PR #16: detalle visual del stepper — círculo del paso activo cortado."),
        bullet("PR #18: imagen del hero no responsive en mobile."),
        para("Áreas de mejora:"),
        bullet("Respetar estrictamente el alcance de cada ticket; no tocar package.json salvo tarea explícita."),
        bullet("No fusionar PRs propios sin revisión aprobada."),
        bullet("Probar en mobile antes de solicitar revisión (responsive images / breakpoints)."),
        bullet("Validar visualmente todos los estados del stepper (primer paso, último paso, bordes)."),
        labelValue("Calificación global", "3.0 / 5"),

        // --- JOSE ---
        heading("4.3 José Villalobos (GitHub: JoseVc-code)", HeadingLevel.HEADING_2),
        labelValue("Rol en el proyecto", "Desarrollador — grid de imágenes / categorías"),
        labelValue("Commits en historial", "7 (Jose Villalobos)"),
        labelValue("PRs", "#9 (abierto), #10 (cerrado sin merge), #17 (abierto, CHANGES_REQUESTED)"),
        para("Fortalezas:"),
        bullet("Participación activa en tareas del grid de imágenes y categorías."),
        bullet("Intenta contribuir al contenido visual del proyecto."),
        para("Errores e incidencias documentadas en GitHub:"),
        bullet("PR #9: no realizó rebase desde main; no usó nomenclatura de ramas acordada."),
        bullet("PR #10: modificó archivos de configuración (.vscode/settings.json) fuera de alcance."),
        bullet("PR #10: descripciones de cards no alineadas con requisitos del Product Owner."),
        bullet("PR #10: rama destino incorrecta (main en lugar de dev)."),
        bullet("PR #17: scope creep severo — 97 archivos modificados para una tarea de imágenes del grid."),
        bullet("Múltiples PRs rechazados o con cambios solicitados sin merge exitoso visible."),
        para("Áreas de mejora:"),
        bullet("Leer y cumplir el alcance exacto de cada ticket antes de abrir PR."),
        bullet("Una rama por tarea, basada en main actualizado (git fetch + rebase)."),
        bullet("PRs pequeños y enfocados; evitar mezclar rutas, layout, metadata y estilos globales."),
        bullet("Verificar rama destino (dev vs main) según flujo del equipo."),
        bullet("No modificar settings del editor ni archivos ajenos a la tarea."),
        labelValue("Calificación global", "2.2 / 5"),

        heading("5. Tabla comparativa de calificaciones"),
        new Table({
          width: { size: 100, type: WidthType.PERCENTAGE },
          rows: [
            new TableRow({
              children: ["Criterio", "Danny Soto", "Ruperto-lab", "José Villalobos"].map(
                (text) =>
                  new TableCell({
                    shading: { type: ShadingType.CLEAR, fill: "D9E2F3" },
                    children: [
                      new Paragraph({
                        children: [new TextRun({ text, bold: true, size: 20 })],
                      }),
                    ],
                  })
              ),
            }),
            scoreRow("Entrega funcional", "5", "3.5", "2"),
            scoreRow("Calidad de código", "4", "3.5", "2.5"),
            scoreRow("Flujo Git / PRs", "4", "2", "1.5"),
            scoreRow("Atención al detalle / responsive", "4", "3", "2"),
            scoreRow("Respuesta a feedback", "4.5", "3.5", "2"),
            scoreRow("PROMEDIO", "4.2", "3.0", "2.2"),
          ],
        }),

        heading("6. Estado actual del código"),
        para("npm run lint: sin errores al 30/06/2026."),
        para(
          "El proyecto mantiene CI activo (lint + build). Se recomienda activar branch protection en main con aprobación obligatoria del admin y checks de CI antes de merge."
        ),

        heading("7. Recomendaciones generales para el equipo"),
        bullet("Definir y documentar CODEOWNERS con aprobación obligatoria del admin."),
        bullet("Usar plantilla de PR con checklist: alcance, pruebas mobile/desktop, lint, rama destino."),
        bullet("Limitar PRs a menos de 15 archivos salvo refactor acordado."),
        bullet("Sesión práctica de Git: rebase, cherry-pick y resolución de conflictos."),
        bullet("Checklist de responsive antes de cada PR con componentes visuales."),

        heading("8. Observaciones del evaluador"),
        para(
          "Este documento fue generado a partir del análisis del repositorio local y de la API pública de GitHub (pull requests, reviews y comentarios inline). Las calificaciones son orientativas y deben complementarse con evaluación presencial, demos y criterios institucionales del programa formativo."
        ),
        para("Evaluador: _________________________     Firma: _________________________"),
      ],
    },
  ],
});

const buffer = await Packer.toBuffer(doc);
fs.writeFileSync(outPath, buffer);
console.log(`Documento generado: ${outPath}`);
