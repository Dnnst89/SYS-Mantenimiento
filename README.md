# SYS Mantenimiento — Guía para empezar (equipo de 3)

Este documento está pensado para **personas sin experiencia previa en React o Next.js**. Si algo no te queda claro, es normal: vuelve aquí, abre los enlaces de “Aprender paso a paso” y pregunta en el equipo.

---

## 1. Qué es este proyecto (en pocas palabras)

- **React**: biblioteca de JavaScript para construir **interfaces** (botones, formularios, pantallas) con **componentes** reutilizables.
- **Next.js**: framework sobre React que añade **rutas**, **servidor**, optimizaciones y una forma estándar de organizar una app web.
- Este repo usa la **App Router** de Next.js: la carpeta `app/` define las **páginas** y el diseño general.

En tu máquina corre una **aplicación web local**; al guardar archivos, la mayoría de los cambios se ven al instante en el navegador.

---

## 2. Lo que tienen que instalar (una vez por computadora)

| Herramienta | Para qué sirve |
|-------------|----------------|
| **[Node.js](https://nodejs.org/)** (versión **LTS**) | Ejecuta JavaScript fuera del navegador y trae **npm** para instalar dependencias del proyecto. |
| **[Git](https://git-scm.com/downloads)** | Control de versiones: guardar cambios, ramas y sincronizar con GitHub. |
| **Editor de código** | Recomendado: [Visual Studio Code](https://code.visualstudio.com/) (gratis). |

**Comprobar que todo está bien** (en una terminal: PowerShell en Windows, Terminal en Mac/Linux):

```bash
node -v
npm -v
git --version
```

Deberían aparecer números de versión sin errores.

---

## 3. Git y GitHub (trabajar en equipo sin pisarse)

### Conceptos mínimos

- **Repositorio (repo)**: carpeta del proyecto con historial de cambios (Git).
- **Commit**: “foto” de los cambios con un mensaje que explique qué hiciste.
- **Rama (branch)**: línea de trabajo paralela (por ejemplo una rama por feature o por persona).
- **Push / pull**: subir cambios al remoto (GitHub) / bajar los del remoto.

### Flujo recomendado para el grupo

1. **Clonar** el repo (copiarlo desde GitHub a tu PC):

   ```bash
   git clone <URL-del-repositorio-en-GitHub>
   cd SYS-Mantenimiento
   ```

2. Antes de trabajar, **actualizar** la rama principal:

   ```bash
   git checkout main
   git pull origin main
   ```

3. Crear una **rama** para tu tarea:

   ```bash
   git checkout -b nombre-de-tu-rama
   ```

4. Hacer cambios, **guardar**, luego:

   ```bash
   git status
   git add .
   git commit -m "Describe en una frase lo que cambiaste"
   git push -u origin nombre-de-tu-rama
   ```

5. En GitHub, abrir un **Pull Request** hacia `main` para que otra persona **revise** antes de unir código.

### Dónde aprender Git/GitHub (orden sugerido)

- [Getting started — Git Documentation](https://git-scm.com/doc)
- [GitHub Docs: Collaborate](https://docs.github.com/en/get-started/quickstart/hello-world)
- [Learn Git Branching](https://learngitbranching.js.org/) (interactivo, muy didáctico)

---

## 4. Primera vez en el proyecto: instalar dependencias

En la carpeta del proyecto (`SYS-Mantenimiento`):

```bash
npm install
```

Eso crea la carpeta `node_modules/` con las librerías listadas en `package.json`. **No subas `node_modules` a Git**: ya está ignorada en `.gitignore`.

---

## 5. Comandos que usarán todos los días

En la raíz del proyecto:

| Comando | Qué hace |
|---------|----------|
| `npm run dev` | Arranca el **servidor de desarrollo**. Ver la app en el navegador. |
| `npm run build` | **Compila** la app para producción (comprueba que no haya errores de build). |
| `npm run start` | Sirve la **versión ya compilada** (útil para probar como en producción; antes hay que hacer `build`). |
| `npm run lint` | Ejecuta **ESLint**: busca problemas de código y malas prácticas según la config del proyecto. |

**Desarrollo normal:** abre una terminal, ejecuta:

```bash
npm run dev
```

Luego entra en el navegador a: [http://localhost:3000](http://localhost:3000)

Si el puerto 3000 está ocupado, Next.js suele sugerir otro (por ejemplo 3001); mira el mensaje en la terminal.

---

## 6. Dónde está el código (mapa rápido)

| Ruta | Qué hay |
|------|---------|
| `app/page.js` | **Página de inicio** (lo que ves en `/`). Buen lugar para empezar a experimentar. |
| `app/layout.js` | **Layout** compartido (estructura que envuelve varias páginas). |
| `app/globals.css` | Estilos globales y configuración de **Tailwind CSS**. |
| `public/` | Archivos estáticos (imágenes, iconos) servidos tal cual. |
| `eslint.config.mjs` | Configuración de **ESLint** del proyecto. |
| `next.config.mjs` | Configuración de **Next.js**. |
| `package.json` | Scripts (`dev`, `build`, …) y lista de dependencias. |

Cuando agreguen más pantallas, lo habitual es crear carpetas dentro de `app/` (por ejemplo `app/dashboard/page.js` para la ruta `/dashboard`). La documentación de Next.js explica esto en detalle.

---

## 7. Aprender React y Next.js (ruta amigable para principiantes)

No hace falta leer todo de golpe. Orden sugerido:

1. **React — conceptos base**  
   - [Learn React](https://react.dev/learn) (sitio oficial, actualizado).

2. **Next.js — tutorial guiado**  
   - [Learn Next.js](https://nextjs.org/learn)

3. **Next.js — referencia cuando busquen “cómo se hace X”**  
   - [Next.js Documentation](https://nextjs.org/docs)

4. **Estilos con Tailwind** (ya viene en el proyecto)  
   - [Tailwind CSS Documentation](https://tailwindcss.com/docs)

---

## 8. ESLint (ya configurado)

**ESLint** analiza el código y avisa de errores y estilos problemáticos. Ayuda a que el código del equipo sea más **consistente** y con menos bugs evitables.

- Ejecutar: `npm run lint`
- Si sale un error que no entienden, copien el mensaje y busquen en la [documentación de ESLint](https://eslint.org/docs/latest/) o pregunten en el equipo.

La configuración del proyecto está en `eslint.config.mjs` y usa las reglas recomendadas para Next.js (`eslint-config-next`).

---

## 9. Prettier (formateo automático) — opcional pero muy útil

**Prettier** no viene instalado en este repo todavía. Sirve para que **indentación, comillas y saltos de línea** queden iguales en todos los archivos, sin discutir estilos a mano.

**Qué hacer cuando el equipo quiera unificar formato:**

1. Instalar como dependencia de desarrollo:

   ```bash
   npm install -D prettier
   ```

2. Crear en la raíz un archivo `.prettierrc` (JSON) con reglas acordadas (o empezar con la configuración por defecto de Prettier).

3. (Recomendado) En VS Code, instalar la extensión **Prettier** y activar “format on save”.

Más información: [Prettier — Documentación](https://prettier.io/docs/en/)

---

## 10. shadcn/ui (componentes de interfaz) — para cuando ya toquen UI con confianza

**shadcn/ui** no es una librería que se “instala” como las demás de un solo comando opaco: **copia componentes** a tu proyecto (sobre Tailwind y otras bases), y ustedes son dueños del código.

**Cuándo usarlo:** cuando necesiten botones, diálogos, tablas, formularios accesibles y con buen aspecto sin diseñar todo desde cero.

**Por dónde empezar (oficial):**

- [shadcn/ui — Documentación](https://ui.shadcn.com/)
- En la doc eligen **Next.js** y siguen los pasos de instalación (`npx shadcn@latest init`, etc.). Háganlo **en consenso** del equipo para que todos tengan la misma base.

---

## 11. Problemas frecuentes

| Síntoma | Qué probar |
|---------|------------|
| `command not found` al usar `node` o `npm` | Reinstalar Node LTS y **cerrar y abrir** la terminal. |
| Errores raros después de cambiar ramas | `rm -rf node_modules` (Mac/Linux) o borrar carpeta `node_modules` en Windows, luego `npm install` de nuevo. |
| La página no actualiza | Guardar el archivo; si sigue igual, parar el servidor (`Ctrl+C`) y `npm run dev` otra vez. |
| Conflictos en Git | No borrar código a ciegas; avisar al equipo y revisar [resolving conflicts](https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/addressing-merge-conflicts). |

---

## 12. Despliegue (más adelante)

Cuando tengan una versión estable, una opción habitual para Next.js es **[Vercel](https://vercel.com/)** (misma empresa que mantiene Next.js). La guía oficial: [Deploying — Next.js Docs](https://nextjs.org/docs/app/building-your-application/deploying).

---

## Resumen para el día 1

1. Instalar **Node (LTS)**, **Git** y **VS Code**.  
2. **Clonar** el repo y entrar a la carpeta.  
3. `npm install`  
4. `npm run dev` → abrir [http://localhost:3000](http://localhost:3000)  
5. Editar `app/page.js` y ver el cambio en el navegador.  
6. Antes de subir código: `npm run lint` y **commit** con mensaje claro.  
7. Usar los enlaces de las secciones **7–10** según necesiten React, Next.js, GitHub, ESLint, Prettier o shadcn.

¡Éxitos con el proyecto — aprender en equipo suele ser más rápido que solo!
